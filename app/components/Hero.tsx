'use client';

import { Github, Linkedin, Instagram, Facebook, ShoppingCart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const socialLinks = [
    { 
      icon: <Facebook size={20} />, 
      href: siteConfig.social.facebook,
      label: 'Facebook',
      desktopSize: 20,
      mobileSize: 24
    },
    { 
      icon: <Instagram size={20} />, 
      href: siteConfig.social.instagram,
      label: 'Instagram',
      desktopSize: 20,
      mobileSize: 24
    },
    { 
      icon: <Linkedin size={20} />, 
      href: siteConfig.social.linkedin,
      label: 'LinkedIn',
      desktopSize: 20,
      mobileSize: 24
    },
    { 
      icon: <Github size={20} />, 
      href: siteConfig.social.github,
      label: 'GitHub',
      desktopSize: 20,
      mobileSize: 24
    },
  ];

  return (
    <section id="inicio" className="min-h-[75vh] flex flex-col justify-center bg-zinc-950 px-4 relative pt-20 pb-4">
      {/* Social Media - Sidebar derecha (solo desktop) */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          <span className="text-gray-400 text-xs mb-2 tracking-wide">
            Follow me
          </span>
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Avatares y texto superior */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-zinc-950 flex items-center justify-center">
              <span className="text-white text-xs font-bold">IK</span>
            </div>
          </div>
          <div className="ml-3 text-left">
            <p className="text-white font-semibold text-sm">+50 clientes satisfechos</p>
            <p className="text-gray-400 text-xs">Proyectos entregados con éxito</p>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Hacé que tu negocio brille <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Online</span><br />
          <span className="text-gray-400">+ rápido</span><br />
          <span className="text-gray-400">+ visible</span>
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Webs que venden, atraen clientes y <br /><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">funcionan por vos.</span>
        </p>

        {/* Botón CTA */}
        <a
          href="#planes"
          className="inline-flex items-center gap-3 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-cyan-400"
        >
          <ShoppingCart size={20} />
          <span>Ver precios y planes</span>
        </a>

        {/* Redes sociales mobile */}
        <div className="flex lg:hidden justify-center space-x-6 mt-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label={social.label}
            >
              <Facebook size={social.mobileSize} className={index === 0 ? '' : 'hidden'} />
              <Instagram size={social.mobileSize} className={index === 1 ? '' : 'hidden'} />
              <Linkedin size={social.mobileSize} className={index === 2 ? '' : 'hidden'} />
              <Github size={social.mobileSize} className={index === 3 ? '' : 'hidden'} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}