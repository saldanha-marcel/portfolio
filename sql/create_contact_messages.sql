-- Run this script connected to the same database configured in .env as NAMEDB.
-- Example:
-- psql -h <HOST> -U <USERDB> -d <NAMEDB> -f sql/create_contact_messages.sql

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(180) NOT NULL,
  assunto VARCHAR(160) NOT NULL,
  mensagem TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON public.contact_messages (created_at DESC);
