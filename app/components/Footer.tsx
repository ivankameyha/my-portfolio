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
      icon: <Facebook size={14} />,
      href: "https://www.facebook.com/ivan.kameyha.7",
      name: "Facebook",
    },
    {
      icon: <Instagram size={14} />,
      href: "https://www.instagram.com/ivankameyha/",
      name: "Instagram",
    },
    {
      icon: <Linkedin size={14} />,
      href: "https://www.linkedin.com/in/ivankameyha/",
      name: "LinkedIn",
    },
    {
      icon: <Github size={14} />,
      href: "https://github.com/ivankameyha",
      name: "GitHub",
    },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">Iván Kameyha <span className="text-[10px] px-1 border rounded">1.0</span></span>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:ivan@ejemplo.com" className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={11} />
              <span>ivan@ejemplo.com</span>
            </a>
            <div className="flex items-center gap-1 text-gray-400">
              <MapPin size={11} />
              <span>Tucumán, AR</span>
            </div>
            <span className="text-gray-500">© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}