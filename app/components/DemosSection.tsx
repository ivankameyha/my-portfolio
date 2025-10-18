'use client';

import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function DemosSection() {
  // const demos = [
  //   {
  //     title: 'E-Commerce Platform',
  //     category: 'Full Stack',
  //     image: ''
  //   },
  //   {
  //     title: 'Dashboard Analytics',
  //     category: 'React + TypeScript',
  //     image: ''
  //   },
  //   {
  //     title: 'Social Network',
  //     category: 'Next.js',
  //     image: ''
  //   },
  //   {
  //     title: 'Portfolio Creative',
  //     category: 'Design + Dev',
  //     image: ''
  //   },
  //   {
  //     title: 'Task Manager',
  //     category: 'Mobile First',
  //     image: ''
  //   },
  //   {
  //     title: 'Crypto Tracker',
  //     category: 'Web3',
  //     image: ''
  //   }
  // ];

  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Grid de Demos - COMENTADO */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 cursor-pointer transition-all duration-300 hover:border-cyan-400"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20"></div>
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-110 transform"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-semibold mb-2 tracking-wide">
                  {demo.category}
                </span>
                
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">
                  {demo.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div> */}

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