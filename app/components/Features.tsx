'use client';

import { Code2, Palette, Rocket, Smartphone, Database, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Código limpio y mantenible'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Diseños modernos y atractivos'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Performance',
      description: 'Optimización y velocidad'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Responsive',
      description: 'Adaptable a todos los dispositivos'
    },
    {
      icon: <Database size={24} />,
      title: 'Backend',
      description: 'APIs robustas y escalables'
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Delivery',
      description: 'Entregas rápidas y eficientes'
    }
  ];

  return (
    <section className="bg-zinc-950 py-8 px-4 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-zinc-950 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}