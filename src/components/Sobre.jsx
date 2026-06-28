export default function Sobre() {
  return (
    <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding" id="sobre">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img alt="Marcelo Saldanha" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0CO__6It2Fxya0TVPzmWv-_FPxuE4mYq9hEH0VXHek_svNpy86v23abW0dlcs5rkANitjZS0uHhAz2nYOmlBZaz_WwUjT2sdY8vMtSzqkojFLibdJUMiRqoW6AISiJdkyEj0cGvcH-ZBOiUGBuIgHXotHthBhKakcCMT0mWzDhJe-EaT8anIm1sQjTXW_3vHi2dC1QovgRfirQfCAwE__VenWn1pw132ocp69JNMeWCUzlE_ieayvibDDM144hsxIuZ_0cQx7TUtocg" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:right-10 bg-surface-container-lowest p-6 rounded-xl card-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-primary mb-0 leading-tight">6+</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-stack-md">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">Quem sou eu</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">Profissional de Dados com <span className="text-primary">visão de negócio</span></h2>
          <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
            <p>Sou apaixonado por transformar dados em valor para o negócio. Ao longo da minha carreira, construí uma trajetória unindo tecnologia, análise e visão estratégica para resolver problemas reais e apoiar decisões.</p>
            <p>Mais do que criar dashboards ou desenvolver automações, gosto de entender o contexto, conectar informações e entregar soluções que gerem impacto para as pessoas e para a empresa.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-stack-md">
            <div className="p-4 bg-surface rounded-xl border border-outline-variant hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary mb-2">shopping_cart</span>
              <h4 className="font-headline-sm text-headline-sm text-sm mb-1">E-commerce</h4>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-outline-variant hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary mb-2">local_mall</span>
              <h4 className="font-headline-sm text-headline-sm text-sm mb-1">Varejo</h4>
            </div>
            <div className="p-4 bg-surface rounded-xl border border-outline-variant hover:border-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-primary mb-2">account_balance</span>
              <h4 className="font-headline-sm text-headline-sm text-sm mb-1">Fintech</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
