import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para enviar o email
    console.log('Formulário enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Entre em Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Vamos Conversar!</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:helio2312.lrs@gmail.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    helio2312.lrs@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.541 2.157 3.483.942.942 2.218 1.74 3.483 2.157l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <a href="tel:+5511988750789" className="text-white font-semibold hover:text-blue-400 transition-colors">
                    (11) 98875-0789
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white font-semibold">São Paulo – SP, Brasil</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-700">
                <p className="text-gray-400 text-sm mb-4">Conecte-se comigo:</p>
                <div className="flex gap-4">
                  <a href="https://github.com/Heliodsw" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.645 1.196-1.554 2.913-1.554 2.122 0 3.714 1.383 3.714 4.357v5.495zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.915.755 1.938 1.71 0 .951-.751 1.71-1.981 1.71zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-700 rounded-lg p-8 border border-blue-600 border-opacity-20 hover:border-blue-400 hover:border-opacity-100 hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none focus:shadow-lg focus:shadow-blue-600/30 transition-all duration-300 hover:border-blue-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none focus:shadow-lg focus:shadow-blue-600/30 transition-all duration-300 hover:border-blue-500"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none focus:shadow-lg focus:shadow-blue-600/30 transition-all duration-300 hover:border-blue-500"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:border-blue-400 focus:outline-none focus:shadow-lg focus:shadow-blue-600/30 transition-all duration-300 hover:border-blue-500 resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary hover:shadow-lg hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-300"
              >
                {submitted ? '✓ Enviado com Sucesso!' : 'Enviar Mensagem'}
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-green-600 bg-opacity-20 border border-green-600 rounded-lg text-green-300 text-sm">
                Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
