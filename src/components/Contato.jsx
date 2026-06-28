export default function Contato() {
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
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md font-bold">Nome</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="Seu nome" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md font-bold">Email</label>
                <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="seu@email.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md font-bold">Assunto</label>
              <input className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="No que posso ajudar?" type="text" />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md font-bold">Mensagem</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container p-4" placeholder="Descreva seu projeto ou dúvida..." rows="4"></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95" type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}
