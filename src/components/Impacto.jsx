export default function Impacto() {
  const stats = [
    ['6+', 'Anos de atuação'],
    ['3', 'Segmentos de mercado'],
    ['5+', 'Automações robustas'],
    ['2', 'Times globais integrados'],
    ['3', 'Arquiteturas de dados'],
    ['100%', 'Foco em processos']
  ]

  return (
    <section className="bg-surface px-margin-mobile md:px-margin-desktop py-section-padding" id="impacto">
      <div className="max-w-container-max mx-auto text-center mb-stack-lg">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">Resultados</span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">Números que falam por si</h2>
      </div>
      <div className="max-w-container-max mx-auto grid grid-cols-2 lg:grid-cols-3 gap-stack-md">
        {stats.map(([value, label]) => (
          <div key={label} className="p-8 bg-surface-container-lowest rounded-xl card-shadow border border-surface-variant flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <span className="text-primary font-display-mobile text-display-mobile mb-2">{value}</span>
            <p className="font-label-md text-label-md text-on-surface-variant font-bold uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
