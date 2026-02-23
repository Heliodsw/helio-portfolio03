import React from 'react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Mercado Livre, Shopee e Amazon',
      position: 'Seller',
      period: 'Atual',
      description: 'Atuo como seller profissional em múltiplas plataformas de e-commerce. Gerenciamento de produtos, estoque, atendimento ao cliente e otimização de vendas.',
      type: 'Atual',
      achievements: [
        'Gestão de múltiplas lojas online',
        'Otimização de produtos e SEO',
        'Atendimento ao cliente',
        'Análise de vendas e métricas'
      ]
    },
    {
      id: 2,
      company: 'Franquia Flash Courier',
      position: 'Operador Logístico',
      period: '01/01/2026',
      description: 'Responsável pela separação, organização e envio de encomendas. Suporte às rotinas logísticas e operacionais da unidade.',
      type: 'Anterior'
    },
    {
      id: 3,
      company: 'HL Serviços Prediais',
      position: 'Zelador / Porteiro / Líder de Equipe',
      period: '01/2020 – 04/2023',
      description: 'Atividades de manutenção predial, controle de acesso e apoio a moradores. Promovido a porteiro e posteriormente a líder de equipe, com coordenação de turnos e organização do time.',
      type: 'Anterior',
      achievements: [
        'Promovido a porteiro por desempenho',
        'Promovido a líder de equipe',
        'Coordenação de múltiplos turnos',
        'Gestão de equipe'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Experiência Profissional</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-16 bg-gradient-to-b from-blue-600 to-transparent"></div>
              )}

              {/* Timeline Dot */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-slate-900">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-800 rounded-lg p-6 border border-blue-600 border-opacity-20 card-hover group hover:border-blue-400 hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                      exp.type === 'Atual' 
                        ? 'bg-green-600 bg-opacity-20 text-green-300' 
                        : 'bg-gray-600 bg-opacity-20 text-gray-300'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements && (
                    <div className="bg-slate-700 bg-opacity-50 rounded p-4">
                      <p className="text-sm text-gray-400 mb-3">Destaques:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <span className="text-blue-400">→</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 bg-slate-800 rounded-lg p-8 border border-blue-600 border-opacity-20 hover:border-blue-400 hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Formação Acadêmica</h3>
          
          <div className="flex gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-2">ADS - Análise e Desenvolvimento de Sistemas</h4>
              <p className="text-blue-400 font-semibold mb-2">Universidade Cruzeiro do Sul</p>
              <p className="text-green-400 font-medium mb-2">Cursando</p>
              <p className="text-gray-300">
                <strong>Período:</strong> Jul/2024 - Jul/2026 (Previsão de Conclusão)
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Formação em análise, design e desenvolvimento de sistemas de software, com foco em backend, arquitetura de aplicações e tecnologias modernas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
