'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function DemosSection() {
  const demos = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
    },
    {
      title: 'Dashboard Analytics',
      category: 'React + TypeScript',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      title: 'Social Network',
      category: 'Next.js',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
    },
    {
      title: 'Portfolio Creative',
      category: 'Design + Dev',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
    },
    {
      title: 'Task Manager',
      category: 'Mobile First',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'
    },
    {
      title: 'Crypto Tracker',
      category: 'Web3',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="demos" className="bg-zinc-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-gray-400 text-sm font-medium">Demos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explora mis <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">demos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web,
            desde aplicaciones full stack hasta experiencias interactivas.
          </p>
        </div>

        {/* Grid de Demos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 cursor-pointer transition-all duration-300 hover:border-cyan-400"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen de fondo */}
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20"></div>
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform"
                />
              </div>

              {/* Overlay de contenido */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent flex flex-col justify-end p-6">
                {/* Categoría */}
                <span className="text-cyan-400 text-xs font-semibold mb-2 tracking-wide">
                  {demo.category}
                </span>
                
                {/* Título */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">
                  {demo.title}
                </h3>

                {/* Botón de acción */}
                {/* <div className={`flex items-center gap-2 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <button className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-cyan-400 transition-colors">
                    <span>Ver demo</span>
                    <ExternalLink size={14} />
                  </button>
                </div> */}
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ivankameyha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span>Ver más proyectos en GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}