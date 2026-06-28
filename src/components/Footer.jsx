export default function Footer() {
  return (
    <footer className="w-full py-stack-lg px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-stack-md bg-inverse-surface dark:bg-inverse-surface">
      <div className="max-w-container-max w-full flex flex-col md:flex-row justify-between items-center gap-8 border-b border-surface/10 pb-stack-lg">
        <a className="font-headline-sm text-headline-sm font-bold text-surface-bright" href="#">Marcelo Saldanha<span className="text-primary-container">.</span></a>
        <div className="flex gap-stack-lg">
          <a className="text-surface-variant opacity-80 font-label-sm text-label-sm hover:text-primary-fixed-dim transition-colors" href="#sobre">Sobre</a>
          <a className="text-surface-variant opacity-80 font-label-sm text-label-sm hover:text-primary-fixed-dim transition-colors" href="#impacto">Impacto</a>
          <a className="text-surface-variant opacity-80 font-label-sm text-label-sm hover:text-primary-fixed-dim transition-colors" href="#projetos">Projetos</a>
          <a className="text-surface-variant opacity-80 font-label-sm text-label-sm hover:text-primary-fixed-dim transition-colors" href="#contato">Contato</a>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-surface/5 flex items-center justify-center hover:bg-primary-container transition-colors group" href="#">
            <span className="material-symbols-outlined text-surface-variant group-hover:text-on-primary-container">database</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-surface/5 flex items-center justify-center hover:bg-primary-container transition-colors group" href="#">
            <span className="material-symbols-outlined text-surface-variant group-hover:text-on-primary-container">terminal</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-surface/5 flex items-center justify-center hover:bg-primary-container transition-colors group" href="#">
            <span className="material-symbols-outlined text-surface-variant group-hover:text-on-primary-container">query_stats</span>
          </a>
        </div>
      </div>
      <p className="font-body-md text-body-md text-surface-variant opacity-60 mt-4 text-center">© 2025 Marcelo Saldanha. Feito com ☕ e dados.</p>
    </footer>
  )
}
