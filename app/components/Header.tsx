'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950 border-b border-zinc-800">
      <div className="flex items-center justify-between h-16 px-6 max-w-7xl mx-auto">
        {/* Left Section: Menu Hamburguesa + Logo */}
        <div className="flex items-center gap-4">
          {/* Menu Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl">
                Iván <span className="text-xs font-bold px-1 border border-cyan-400 rounded-md text-cyan-400">1.0</span>
              </span>
              <span className="text-white font-bold text-xl -mt-1">Kameyha.</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/95 backdrop-blur-sm rounded-full border border-zinc-800 px-2 py-1">
          <Link href="#inicio" className="text-gray-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            Inicio
          </Link>
          <Link href="#planes" className="text-gray-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            Planes
          </Link>
          <Link href="#demos" className="text-gray-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            Demos
          </Link>
          <Link href="#proyectos" className="text-gray-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            ¿Necesitas algo diferente?
          </Link>
          <Link href="#testimonios" className="text-gray-400 hover:text-white transition-colors px-4 py-2 text-sm font-medium">
            Testimonios
          </Link>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5493813423617?text=Hola!%20Me%20interesa%20tu%20trabajo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-zinc-950 z-40 overflow-y-auto">
          <nav className="px-6 py-4 space-y-2">
            <Link 
              href="#inicio" 
              className="block text-gray-400 hover:text-white py-3 text-sm font-medium border-b border-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="#planes" 
              className="block text-gray-400 hover:text-white py-3 text-sm font-medium border-b border-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planes
            </Link>
            <Link 
              href="#demos" 
              className="block text-gray-400 hover:text-white py-3 text-sm font-medium border-b border-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demos
            </Link>
            <Link 
              href="#proyectos" 
              className="block text-gray-400 hover:text-white py-3 text-sm font-medium border-b border-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Necesitas algo diferente?
            </Link>
            <Link 
              href="#testimonios" 
              className="block text-gray-400 hover:text-white py-3 text-sm font-medium border-b border-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            
            {/* WhatsApp en Mobile Menu */}
            <a
              href="https://wa.me/5493813423617?text=Hola!%20Me%20interesa%20tu%20trabajo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 rounded-xl transition-all mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={18} />
              <span>Contactar por WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}