export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-section-padding text-center overflow-hidden">
      <div className="absolute inset-0 hero-pattern pointer-events-none" />
      <div className="relative z-10 max-w-4xl">
        <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-on-surface mb-stack-md">
          Transformo dados brutos em <span className="text-primary-container">decisões</span> que movem negócios.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">
          Profissional de Dados com mais de 6 anos de experiência transformando dados em decisões estratégicas por meio de análise, automação e inteligência de negócios.
        </p>
        <div className="flex flex-col md:flex-row gap-stack-md justify-center mb-stack-lg">
          <a className="bg-primary-container text-on-primary-container font-headline-sm text-headline-sm md:text-body-md px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all" href="#projetos">
            Ver Projetos
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a className="border-2 border-on-background text-on-background font-headline-sm text-headline-sm md:text-body-md px-8 py-4 rounded-xl font-bold hover:bg-on-background hover:text-surface transition-all" href="#">
            Baixar CV
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">Python</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">SQL</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">Power BI</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">DBT</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">Databricks</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">Power Automate</span>
          <span className="px-4 py-2 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface-variant">Power Apps</span>
        </div>
      </div>
    </section>
  )
}
