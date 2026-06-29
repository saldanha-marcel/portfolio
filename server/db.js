import pg from 'pg'

const { Pool } = pg

const requiredEnv = ['HOST', 'NAMEDB', 'USERDB', 'PASSWORDDB']

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
}

export const pool = new Pool({
  host: process.env.HOST,
  database: process.env.NAMEDB,
  user: process.env.USERDB,
  password: process.env.PASSWORDDB,
  port: Number(process.env.PORTDB || 5432),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: 10,
  connectionTimeoutMillis: 5000,
})
