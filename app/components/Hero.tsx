'use client';

import { Github, Linkedin, Instagram, Facebook, Lightbulb } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-[75vh] flex flex-col justify-center bg-zinc-950 px-4 relative pt-20 pb-4">
      {/* Social Media - Sidebar derecha (solo desktop) */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          <span className="text-gray-400 text-xs mb-2 tracking-wide">
            Follow me
          </span>
          <a 
            href="https://www.facebook.com/ivan.kameyha.7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/ivankameyha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Avatares y texto superior */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
          </div>
          <div className="ml-3 text-left">
            <p className="text-white font-semibold text-sm">+50 clientes satisfechos</p>
            <p className="text-gray-400 text-xs">Proyectos entregados con éxito</p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Desarrollador Full Stack<br />
          <span className="text-gray-400">creando experiencias</span><br />
          <span className="text-gray-400">innovadoras.</span>
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Sitios web pensados para destacar tu marca o negocio.
        </p>

        {/* Botón CTA */}
        <a
          href="#planes"
          className="inline-flex items-center gap-3 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-cyan-400"
        >
          <Lightbulb size={20} />
          <span>Ver planes</span>
        </a>

        {/* Redes sociales mobile */}
        <div className="flex lg:hidden justify-center space-x-6 mt-8">
          <a 
            href="https://www.facebook.com/ivan.kameyha.7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.instagram.com/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/ivankameyha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}