import { useEffect, useState } from 'react'

export default function MarceloPortfolio() {
  const [html, setHtml] = useState('')

  useEffect(() => {
    fetch('/stitch/marcelo-portfolio.html')
      .then((r) => r.text())
      .then((t) => setHtml(t))
      .catch(() => setHtml('<p>Erro ao carregar conteúdo do Stitch.</p>'))
  }, [])

  if (!html) return <div>Carregando...</div>

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
