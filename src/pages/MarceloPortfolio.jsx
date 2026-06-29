import Header from '../components/Header'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

export default function MarceloPortfolio() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
