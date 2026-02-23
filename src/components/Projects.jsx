import React from 'react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'App de Cadastro de Clientes e Produtos',
      description: 'Aplicativo React Native desenvolvido como desafio de um processo seletivo. Sistema completo de cadastro de clientes e produtos com persistência local usando SQLite e Drizzle ORM. Inclui validação de dados, navegação com React Navigation e gerenciamento de estado com Redux.',
      technologies: ['React Native', 'Expo', 'SQLite', 'Drizzle ORM', 'Redux', 'TypeScript'],
      features: [
        'Cadastro de clientes',
        'Gerenciamento de produtos',
        'Vinculação de produtos a clientes',
        'Persistência local com SQLite',
        'Validação de formulários com React Hook Form',
        'Navegação com Bottom Tabs',
        'Gerenciamento de estado com Redux'
      ],
      github: 'https://github.com/Heliodsw/desafio-tw-transportes',
      demo: 'https://github.com/Heliodsw/desafio-tw-transportes',
      image: 'bg-gradient-to-br from-purple-600 to-pink-400',
      badge: 'Desafio Seletivo'
    },
    {
      id: 2,
      title: 'API de Estoque de Medicamentos',
      description: 'API RESTful completa para controle de entrada e saída de medicamentos de uma clínica médica. Implementa funcionalidades de cadastro, controle de estoque e consulta por categoria.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'REST API'],
      features: [
        'Cadastro de medicamentos',
        'Controle de estoque em tempo real',
        'Consulta por categoria',
        'Validação de dados',
        'Tratamento de erros'
      ],
      github: 'https://github.com/Heliodsw',
      demo: 'https://github.com/Heliodsw',
      image: 'bg-gradient-to-br from-blue-600 to-blue-400'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projetos em Destaque</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-700 rounded-lg overflow-hidden border border-blue-600 border-opacity-20 card-hover group hover:border-blue-400 hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300">
              {/* Project Image/Header */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                <svg className="w-24 h-24 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                </svg>
                
                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-3 right-3 bg-yellow-500 bg-opacity-90 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                    {project.badge}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tecnologias:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Funcionalidades:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="text-blue-400">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300 text-center text-sm">
                    Ver no GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 border border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300 text-center text-sm">
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Quer ver mais projetos? Confira meu GitHub para mais exemplos de código e contribuições.
          </p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Visitar GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
