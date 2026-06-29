import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pool } from './db.js'

const app = express()
const port = Number(process.env.PORT || 3001)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '..', 'dist')
const indexPath = path.join(distPath, 'index.html')

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : ['http://localhost:5173']

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({ limit: '16kb' }))

const maxLengths = {
  nome: 120,
  email: 180,
  assunto: 160,
  mensagem: 2000,
}

function normalizeContactPayload(body) {
  return {
    nome: String(body?.nome || '').trim(),
    email: String(body?.email || '').trim().toLowerCase(),
    assunto: String(body?.assunto || '').trim(),
    mensagem: String(body?.mensagem || '').trim(),
  }
}

function validateContactPayload(payload) {
  const details = []

  for (const [field, maxLength] of Object.entries(maxLengths)) {
    if (!payload[field]) {
      details.push({
        field,
        code: 'required',
        message: 'Campo obrigatorio.',
      })
      continue
    }

    if (payload[field].length > maxLength) {
      details.push({
        field,
        code: 'too_long',
        message: `Use no maximo ${maxLength} caracteres.`,
      })
    }
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    details.push({
      field: 'email',
      code: 'invalid_email',
      message: 'Informe um email valido.',
    })
  }

  return details
}

app.get('/api/health', (_request, response) => {
  response.json({ data: { status: 'ok' } })
})

app.post('/api/contact', async (request, response, next) => {
  const payload = normalizeContactPayload(request.body)
  const validationErrors = validateContactPayload(payload)

  if (validationErrors.length > 0) {
    return response.status(422).json({
      error: {
        code: 'validation_error',
        message: 'Revise os campos enviados.',
        details: validationErrors,
      },
    })
  }

  try {
    const result = await pool.query(
      `INSERT INTO public.contact_messages (nome, email, assunto, mensagem)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at`,
      [payload.nome, payload.email, payload.assunto, payload.mensagem]
    )

    return response.status(201).json({
      data: result.rows[0],
    })
  } catch (error) {
    return next(error)
  }
})

app.use(express.static(distPath))

app.use((request, response, next) => {
  if (request.method === 'GET' && !request.path.startsWith('/api')) {
    return response.sendFile(indexPath)
  }

  return next()
})

app.use((error, _request, response, next) => {
  void next
  console.error(error)

  return response.status(500).json({
    error: {
      code: 'internal_error',
      message: 'Nao foi possivel processar sua solicitacao.',
    },
  })
})

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

server.on('error', (error) => {
  console.error(error)
  process.exit(1)
})
