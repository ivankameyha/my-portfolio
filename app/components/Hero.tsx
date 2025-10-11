'use client';

import { Github, Linkedin, Instagram, Facebook, MessageCircle, Lightbulb } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center bg-zinc-950 px-4 relative pt-20 pb-4">
      {/* Social Media - Sidebar derecha (solo desktop) */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          <span className="text-gray-500 text-xs mb-2 tracking-wide">
            Follow me
          </span>
          <a 
            href="https://www.facebook.com/ivan.kameyha.7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/ivankameyha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Avatares y texto superior */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-cyan-400 border-2 border-zinc-950 flex items-center justify-center">
              <span className="text-zinc-950 text-sm font-bold">⚡</span>
            </div>
          </div>
          <div className="ml-3 text-left">
            <p className="text-white font-semibold text-xs">+50 clientes satisfechos</p>
            <p className="text-gray-500 text-xs">Colegas que confían en mi trabajo</p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
          Desarrollador Full Stack<br />
          <span className="text-gray-400">creando experiencias</span><br />
          <span className="text-gray-400">innovadoras.</span>
        </h1>

        {/* Botón CTA */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="#planes"
            className="inline-flex items-center gap-3 bg-white text-cyan-500 font-bold px-6 py-3 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 group"
          >
            {/* <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> */}
            <Lightbulb size={20} />
            <span>Ver planes</span>
          </a>
          <p className="text-gray-500 text-sm">
            Sitios web pensados para destacar tu marca o negocio.
          </p>
        </div>

        {/* Redes sociales mobile */}
        <div className="flex lg:hidden justify-center space-x-6 mt-6">
          <a 
            href="https://www.facebook.com/ivan.kameyha.7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://www.instagram.com/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/ivankameyha/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/ivankameyha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}