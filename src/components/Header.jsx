export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 mx-auto bg-surface-container-lowest dark:bg-surface-container-lowest shadow-sm">
      <div className="flex items-center">
        <a className="font-headline-sm text-headline-sm font-bold text-on-surface" href="#">Marcelo Saldanha<span className="text-primary-container">.</span></a>
      </div>
      <nav className="hidden md:flex items-center gap-stack-lg">
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#sobre">Sobre</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#projetos">Projetos</a>
        <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-label-md text-label-md" href="#contato">Contato</a>  
      </nav>
      <a className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95" href="#contato">Fale Comigo</a>
    </header>
  )
}
