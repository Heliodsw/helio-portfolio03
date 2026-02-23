import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Sobre Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Sou <strong>Hélio do Vale Silva</strong>, atualmente cursando <strong className="text-blue-300">Análise e Desenvolvimento de Sistemas (ADS)</strong> pela Universidade Cruzeiro do Sul. Estou em transição para a área de tecnologia, trazendo comigo uma sólida experiência em liderança e gestão operacional que complementam minha formação técnica.
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Meu foco é o desenvolvimento backend, onde tenho desempenho forte em <strong>Node.js</strong>, <strong>Express.js</strong> e bancos de dados relacionais como <strong>MySQL</strong>. Estou buscando minha primeira oportunidade como estagiário ou desenvolvedor backend júnior para crescer profissionalmente e contribuir com soluções eficazes.
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Além de desenvolvimento, possuo conhecimentos em lógica de programação, HTML/CSS básico e ferramentas como VS Code, Postman e Thunder Client. Estou em constante aprendizado, cursando Lógica de Programação com JavaScript e planejando aprofundar meus conhecimentos em Node.js.
            </p>

            <div className="flex gap-4 mt-8">
              <a href="mailto:helio2312.lrs@gmail.com" className="btn-primary hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300">
                Enviar Email
              </a>
              <a href="tel:+5511988750789" className="btn-secondary hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300">
                Ligar
              </a>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-8 border border-blue-600 border-opacity-30">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Informações Pessoais</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Localização</p>
                <p className="text-gray-200 font-semibold">São Paulo – SP, Brasil</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Telefone</p>
                <p className="text-gray-200 font-semibold">(11) 98875-0789</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-gray-200 font-semibold">helio2312.lrs@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Formação</p>
                <p className="text-gray-200 font-semibold">ADS - Análise e Desenvolvimento de Sistemas</p>
                <p className="text-blue-300 text-sm font-medium">Cursando - Universidade Cruzeiro do Sul</p>
                <p className="text-gray-300 text-sm">Jul/2024 - Jul/2026 (Previsão de Conclusão)</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Idiomas</p>
                <p className="text-gray-200 font-semibold">Português (Nativo)</p>
                <p className="text-gray-300 text-sm">Inglês (Básico - Estudando)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
