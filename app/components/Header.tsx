'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Section: Menu Hamburguesa + Logo */}
        <div className="flex items-center gap-4">
          {/* Menu Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl">Iván <span className="text-xs font-bold px-1 border rounded-md">1.0</span></span>
              <span className="text-white font-bold text-xl -mt-1">Kameyha.</span>
            </div>
            
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-900/95 backdrop-blur-sm rounded-full border border-zinc-800 px-2 py-1">
          {/* Inicio */}
          <Link href="#" className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm">
            Inicio
          </Link>

          {/* Planes */}
          <Link href="#planes" className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm">
            Planes y Servicios
          </Link>

          {/* Demos */}
          <Link href="#demos" className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm">
            Demos
          </Link>

          {/* Proyectos */}
          <Link href="#proyectos" className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm">
            Proyectos
          </Link>

          {/* Testimonios */}
          <Link href="#testimonios" className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm">
            Testimonios
          </Link>
        </div>

        {/* Language Selector */}
        <div className="relative" onMouseEnter={() => setOpenDropdown('language')} onMouseLeave={() => setOpenDropdown(null)}>
          <button
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 text-sm flex items-center gap-1"
          >
            ES
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === 'language' && (
            <div className="absolute top-full right-0 mt-2 bg-zinc-900 rounded-xl shadow-xl border border-zinc-800 py-2 min-w-32">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-zinc-800">
                Español
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-zinc-800">
                English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-zinc-950 z-40 overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            <Link href="#" className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-zinc-800 pb-2">
              Inicio
            </Link>
            <Link href="#planes" className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-zinc-800 pb-2">
              Planes
            </Link>
            <Link href="#demos" className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-zinc-800 pb-2">
              Demos
            </Link>
            <Link href="#proyectos" className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-zinc-800 pb-2">
              Proyectos
            </Link>
            <Link href="#testimonios" className="block text-gray-300 hover:text-white py-2 text-sm font-medium border-b border-zinc-800 pb-2">
              Testimonios
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}