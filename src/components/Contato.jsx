import { useState } from 'react'

export default function Contato() {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const payload = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem'),
    }

    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('contact_request_failed')
      }

      event.currentTarget.reset()
      setStatus('success')
      setFeedback('Mensagem enviada com sucesso.')
    } catch {
      setStatus('error')
      setFeedback('Nao foi possivel enviar sua mensagem. Tente novamente.')
    }
  }

  return (
    <section className="bg-inverse-surface text-surface px-margin-mobile md:px-margin-desktop py-section-padding" id="contato">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-primary-fixed-dim font-label-sm text-label-sm uppercase tracking-widest font-bold">Contato</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mt-4 mb-stack-lg leading-tight">Vamos construir algo <span className="text-primary-container">extraordinário</span> juntos?</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed-dim">mail</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-surface-variant opacity-70">E-mail</p>
                <p className="font-body-lg text-body-lg">marcelo_saldanha@outlook.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed-dim">call</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-surface-variant opacity-70">Telefone</p>
                <p className="font-body-lg text-body-lg">+55 (51) 99236-4803</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed-dim">share</span>
              </div>
              <div className="flex gap-4">
                <a className="hover:text-primary-fixed-dim transition-colors" href="https://www.linkedin.com/in/saldanha-marcelo/">LinkedIn</a>
                <a className="hover:text-primary-fixed-dim transition-colors" href="https://github.com/saldanha-marcel/avaliacao_precos">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface rounded-2xl p-8 card-shadow text-on-surface">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md font-bold" htmlFor="nome">Nome</label>
                <input id="nome" name="nome" className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="Seu nome" type="text" required maxLength="120" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md font-bold" htmlFor="email">Email</label>
                <input id="email" name="email" className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="seu@email.com" type="email" required maxLength="180" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md font-bold" htmlFor="assunto">Assunto</label>
              <input id="assunto" name="assunto" className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="No que posso ajudar?" type="text" required maxLength="160" />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md font-bold" htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="Descreva seu projeto ou dúvida..." rows="4" required maxLength="2000"></textarea>
            </div>
            {feedback && (
              <p className={status === 'success' ? 'text-sm font-bold text-green-700' : 'text-sm font-bold text-red-700'} role="status">
                {feedback}
              </p>
            )}
            <button className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
