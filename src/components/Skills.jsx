import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 80 },
      ]
    },
    {
      title: 'Banco de Dados',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Banco de Dados Relacional', level: 75 },
      ]
    },
    {
      title: 'Frontend Básico',
      skills: [
        { name: 'HTML', level: 70 },
        { name: 'CSS', level: 70 },
      ]
    },
    {
      title: 'Ferramentas & Ambiente',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Thunder Client', level: 85 },
        { name: 'Git', level: 75 },
        { name: 'Windows & Linux', level: 80 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Lógica de Programação', level: 85 },
        { name: 'Liderança', level: 80 },
        { name: 'Comunicação', level: 75 },
        { name: 'Resolução de Problemas', level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Habilidades Técnicas</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-6 border border-blue-600 border-opacity-20 card-hover group hover:border-blue-400 hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-400 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 rounded-lg p-8 border border-blue-600 border-opacity-20">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Certificações & Cursos</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Lógica de Programação com JavaScript</p>
                <p className="text-green-400 text-sm font-medium">Curso em Vídeo – 2025 ✓ Finalizado</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Introdução ao Node.js</p>
                <p className="text-green-400 text-sm font-medium">Alura – 2025 ✓ Finalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
