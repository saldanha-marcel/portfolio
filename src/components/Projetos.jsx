import { useEffect, useRef, useState } from 'react'
import dashcompras from '../assets/dashboard_compras.jpg'
import email from '../assets/automation_email.jpg'
import pipelinePrecos from '../assets/pipeline_precos.png'
import dashboardEcommerce from '../assets/dashboard_ecommerce.png'
import plataformaSolicitacao from '../assets/plataforma_solicitacao.png'
import clusterizacaoClientes from '../assets/clusterizacao_clientes.png'

export default function Projetos() {
  const projects = [
    {
      title: 'Pipeline de Preços',
      tech: ['Python', 'Pandas'],
      desc: 'Monitoramento e ETL automatizado de preços em tempo real para e-commerce.',
      img: pipelinePrecos,
      goal: 'Acompanhar variações de preço e transformar dados brutos em uma base pronta para análise.',
      structure: 'O projeto foi organizado em etapas: coleta dos dados, limpeza com Pandas, padronização dos campos e geração de relatórios para acompanhamento.',
      presentation: 'No portfólio, ele é apresentado como um fluxo de automação de dados, destacando o ganho de tempo e a visão rápida sobre mudanças de preço.'
    },
    {
      title: 'Dashboard de Compras',
      tech: ['Power BI', 'Python', 'Excel'],
      desc: 'Dashboard para compras de produtos para novas unidades baseado em dados históricos.',
      img: dashcompras,
      goal: 'Acertividade na compra de produtos para novas unidades, baseado na região e perfil de cliente',
      structure: 'O fluxo foi montado com extração e tratamento dos dados com python, feito o upload para um dashboard no Power BI para apresentação e melhor visão de produtos, e alimentado um excel com base na nova unidade que seria instalada.',
      presentation: 'O projeto foi apresentado com foco em análise histórica, mostrando quais produtos são mais vendidos em cada estado e região, trazendo uma maior acertividade no estoque das novas unidades.'
    },
    {
      title: 'Automação E-mail',
      tech: ['Power Automate', 'Power Apps'],
      desc: 'Automatização de processos tabulação e controle de tarefas de e-mail',
      img: 'email',
      goal: 'Reduzir tarefas manuais no controle de tarefas e conectar sistemas que antes dependiam de conferência humana.',
      structure: 'O fluxo foi montado com gatilhos, tratamentos e gravado na base de dados de um App gerado com Power Apps',
      presentation: 'O projeto se destaca a automação de entradas de e-mail, controle e gestão, onde antes gastava 24 horas hoje é feito em 20 minutos. Tendo um dashboard em tempo real de todas entradas.'
    },
    {
      title: 'Dashboard E-commerce',
      tech: ['Power BI', 'DAX'],
      desc: 'Painel estratégico de vendas e metas para a marca Converse Brasil.',
      img: dashboardEcommerce,
      goal: 'Dar uma visão executiva sobre vendas, metas e desempenho comercial.',
      structure: 'O painel foi estruturado com tratamento da base, medidas DAX, filtros por período e páginas focadas em acompanhamento de resultado.',
      presentation: 'No popup, o projeto é explicado como uma ferramenta visual para tomada de decisão, com indicadores fáceis de acompanhar.'
    },
    {
      title: 'Plataforma Entrada de Solicitação',
      tech: ['Power Apps', 'Power Automate'],
      desc: 'Estrutura de entrada de demandas substituindo o E-mail.',
      img: plataformaSolicitacao,
      goal: 'Desenvolver um sistema onde estaria seguro e dentro de todas regras da companhia, sem custo de desenvolvimentos.',
      structure: 'Um App onde estraria as demandas do time de campo, de uma forma onde diminuiria meu retrabalho e meu SLA, podendo dar mais atenção ao cliente final.',
      presentation: 'Entregando um sla de 30 minutos que no passado eram 26 horas, aumentando produtividade podento produzir 5x mais com mesmo time.'
    },
    {
      title: 'Clusterização Clientes',
      tech: ['Machine Learning', 'Scikit-learn'],
      desc: 'Segmentação avançada de base de clientes para marketing direcionado.',
      img: clusterizacaoClientes,
      goal: 'Identificar grupos de clientes com comportamentos parecidos para orientar campanhas.',
      structure: 'O processo passou por preparação da base, seleção de variáveis, aplicação de clusterização e leitura dos perfis encontrados.',
      presentation: 'O projeto é apresentado como uma ponte entre machine learning e estratégia de marketing, com foco no resultado prático.'
    }
  ]

  const [selectedProject, setSelectedProject] = useState(null)
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)
  const lastFocusedElement = useRef(null)

  const closeModal = () => {
    setSelectedProject(null)
    lastFocusedElement.current?.focus()
  }

  const openModal = (project) => {
    lastFocusedElement.current = document.activeElement
    setSelectedProject(project)
  }

  const handleModalKeyDown = (event) => {
    if (event.key !== 'Tab') return

    const focusableElements = modalRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements?.[0]
    const lastElement = focusableElements?.[focusableElements.length - 1]

    if (!firstElement || !lastElement) return

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  useEffect(() => {
    if (!selectedProject) return

    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  return (
    <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding" id="projetos">
      <div className="max-w-container-max mx-auto mb-16">
        <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">Portfólio</span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">Projetos & Trabalhos</h2>
      </div>
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <button
            key={p.title}
            type="button"
            className="bg-surface rounded-xl overflow-hidden card-shadow group hover:shadow-2xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary focus-visible:outline-offset-4 transition-all duration-300 text-left"
            onClick={() => openModal(p)}
            aria-label={`Ver detalhes do projeto ${p.title}`}
          >
            <div className="h-48 overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={p.img} alt={p.title} />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => <span key={t} className="px-2 py-1 bg-surface-variant rounded text-xs font-bold text-on-surface-variant">{t}</span>)}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{p.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4">{p.desc}</p>
              <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver mais <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/60 px-margin-mobile py-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal()
          }}
        >
          <div
            ref={modalRef}
            className="max-h-full w-full max-w-3xl overflow-y-auto rounded-xl bg-surface shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onKeyDown={handleModalKeyDown}
          >
            <div className="relative h-56 overflow-hidden bg-surface-container md:h-72">
              <img className="h-full w-full object-cover" src={selectedProject.img} alt={selectedProject.title} />
              <button
                ref={closeButtonRef}
                type="button"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface text-on-surface shadow-lg hover:bg-surface-container focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary focus-visible:outline-offset-2"
                onClick={closeModal}
                aria-label="Fechar detalhes do projeto"
              >
                <span className="material-symbols-outlined" aria-hidden="true">close</span>
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-5 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="rounded bg-surface-variant px-2 py-1 text-xs font-bold text-on-surface-variant">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 id="project-modal-title" className="font-headline-md text-headline-md text-on-surface">
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-on-surface-variant">{selectedProject.desc}</p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div>
                  <h4 className="font-headline-sm text-lg text-on-surface">Objetivo</h4>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{selectedProject.goal}</p>
                </div>
                <div>
                  <h4 className="font-headline-sm text-lg text-on-surface">Estrutura</h4>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{selectedProject.structure}</p>
                </div>
                <div>
                  <h4 className="font-headline-sm text-lg text-on-surface">Apresentação</h4>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">{selectedProject.presentation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
