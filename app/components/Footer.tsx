"use client";

import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/ivan.kameyha.7",
      name: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ivankameyha/",
      name: "Instagram",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/ivankameyha/",
      name: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/ivankameyha",
      name: "GitHub",
    },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Logo y versión */}
          <div className="text-center pb-6 border-b border-zinc-800">
            <span className="text-white font-semibold text-lg">
              Iván Kameyha
            </span>
            <span className="ml-2 text-xs px-2 py-1 border border-cyan-400 rounded text-cyan-400">
              1.0
            </span>
          </div>

          {/* Redes Sociales */}
          <div>
            <p className="text-gray-400 text-sm mb-3 text-center">Sígueme en</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <a 
              href="mailto:kameyhaivan@gmail.com" 
              className="flex items-center justify-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors py-2"
            >
              <Mail size={18} />
              <span className="text-sm">kameyhaivan@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 text-gray-400 py-2">
              <MapPin size={18} />
              <span className="text-sm">Tucumán, Argentina</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-zinc-800">
            <p className="text-gray-500 text-xs">
              © {currentYear}. Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-wrap justify-between items-center gap-4 text-sm">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <span className="text-white font-semibold">
              Iván Kameyha 
              <span className="text-xs ml-2 px-2 py-0.5 border border-cyan-400 rounded text-cyan-400">1.0</span>
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 text-gray-400">
            <a 
              href="mailto:kameyhaivan@gmail.com" 
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail size={14} />
              <span className="text-xs">kameyhaivan@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span className="text-xs">Tucumán, AR</span>
            </div>
            <span className="text-xs">© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}