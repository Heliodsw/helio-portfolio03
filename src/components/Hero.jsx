import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-5xl font-bold gradient-text">HS</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Hélio do Vale Silva</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-2">
          Desenvolvedor Backend | Node.js & Express.js | Cursando ADS
        </p>

        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Cursando <strong className="text-blue-300">Análise e Desenvolvimento de Sistemas (ADS)</strong> na Universidade Cruzeiro do Sul. Desenvolvedor Backend com sólida experiência em Node.js, Express.js e MySQL. Buscando minha primeira oportunidade no setor de TI para crescer profissionalmente e aplicar meus conhecimentos em projetos reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects" className="btn-primary hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300">
            Ver Meus Projetos
          </a>
          <a href="#contact" className="btn-secondary hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300">
            Entrar em Contato
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://github.com/Heliodsw" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.196-1.554 2.913-1.554 2.122 0 3.714 1.383 3.714 4.357v5.495zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.915.755 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a href="mailto:helio2312.lrs@gmail.com" className="hover:text-blue-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
