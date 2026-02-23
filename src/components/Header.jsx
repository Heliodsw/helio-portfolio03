import React, { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-blue-600 border-opacity-20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('home')}>
          Hélio Silva
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Início
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Sobre
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Habilidades
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Projetos
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Experiência
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Contato
          </button>
        </div>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-blue-600 border-opacity-20">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Habilidades
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Projetos
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Experiência
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-blue-400 py-2">
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
