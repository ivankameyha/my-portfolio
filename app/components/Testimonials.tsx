'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Carlos Martínez',
      role: 'Dueño de Barbería Style',
      rating: 5,
      category: 'Design Quality',
      text: 'Excelente trabajo! La página quedó increíble y mis clientes la aman. Súper profesional.',
      avatar: 'CM'
    },
    {
      name: 'María Fernández',
      role: 'Emprendedora',
      rating: 5,
      category: 'Customer Support',
      text: 'Atención impecable, muy rápido en responder y resolver cualquier duda. 10/10!',
      avatar: 'MF'
    },
    {
      name: 'Roberto Silva',
      role: 'Gerente de Spa',
      rating: 5,
      category: 'Feature Availability',
      text: 'El sistema de reservas funciona perfecto. Mis clientes reservan sin problemas desde sus celulares.',
      avatar: 'RS'
    },
    {
      name: 'Ana López',
      role: 'Dueña de Salón',
      rating: 5,
      category: 'Documentation Quality',
      text: 'Muy fácil de usar y el soporte es excelente. Me explicó todo paso a paso.',
      avatar: 'AL'
    },
    {
      name: 'Diego Peralta',
      role: 'Barbería Urban',
      rating: 5,
      category: 'Design Quality',
      text: 'Diseño moderno y limpio. Exactamente lo que necesitaba para mi barbería.',
      avatar: 'DP'
    },
    {
      name: 'Lucía Romero',
      role: 'Estética & Belleza',
      rating: 5,
      category: 'Customizability',
      text: '5 estrellas! Desde el diseño hasta el soporte. Súper recomendado.',
      avatar: 'LR'
    },
    {
      name: 'Javier González',
      role: 'Barber Shop King',
      rating: 5,
      category: 'Customer Support',
      text: 'Muy atento y profesional. Entrega rápida y cumplió con todo lo prometido.',
      avatar: 'JG'
    },
    {
      name: 'Patricia Díaz',
      role: 'Nail Studio',
      rating: 5,
      category: 'Design Quality',
      text: 'La página quedó hermosa! Mis clientas siempre me felicitan por lo moderna que se ve.',
      avatar: 'PD'
    },
    {
      name: 'Martín Castro',
      role: 'Barbería Premium',
      rating: 5,
      category: 'Feature Availability',
      text: 'Templates muy bien diseñados. Documentación clara y código limpio.',
      avatar: 'MC'
    },
    {
      name: 'Sofía Ruiz',
      role: 'Salón & Spa',
      rating: 5,
      category: 'Documentation Quality',
      text: 'Fácil de usar y con excelente servicio al cliente. Todo muy claro.',
      avatar: 'SR'
    },
    {
      name: 'Alejandro Vargas',
      role: 'BarberShop Elite',
      rating: 5,
      category: 'Customer Support',
      text: 'Respuestas rápidas y eficientes. Siempre dispuesto a ayudar.',
      avatar: 'AV'
    },
    {
      name: 'Valentina Medina',
      role: 'Beauty Center',
      rating: 5,
      category: 'Customizability',
      text: 'Este tema es increíble! Solo necesitaba agregar mis fotos y listo. Perfecto.',
      avatar: 'VM'
    },
    {
      name: 'Fernando Torres',
      role: 'Barbería Clásica',
      rating: 5,
      category: 'Design Quality',
      text: 'Diseño de calidad, código limpio. Recomiendo este template 100%.',
      avatar: 'FT'
    },
    {
      name: 'Camila Sánchez',
      role: 'Estudio de Belleza',
      rating: 5,
      category: 'Feature Availability',
      text: 'Tiene todas las funciones que necesitaba. Muy completo!',
      avatar: 'CS'
    },
    {
      name: 'Gabriel Moreno',
      role: 'Barber & Style',
      rating: 5,
      category: 'Customer Support',
      text: 'Soporte muy útil y rápido! Me ayudó con todo lo que necesitaba.',
      avatar: 'GM'
    },
    {
      name: 'Isabella Ortiz',
      role: 'Spa Luxury',
      rating: 5,
      category: 'Documentation Quality',
      text: 'Muy profesional. La inversión valió totalmente la pena.',
      avatar: 'IO'
    }
  ];

  // Dividir testimonios en 4 columnas
  const columns = [[], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 4].push(testimonial);
  });

  return (
    <section id="testimonios" className="bg-zinc-950 py-20 px-4 overflow-hidden relative">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-zinc-950"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-gray-400 text-sm">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-4">
            CLIENTES SATISFECHOS
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más de 50 clientes confían en mis servicios de desarrollo web
          </p>
        </div>

        {/* Grid de 4 columnas con scroll infinito */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[600px]">
          {columns.map((columnTestimonials, columnIndex) => (
            <ScrollingColumn 
              key={columnIndex} 
              testimonials={columnTestimonials}
              speed={60 + columnIndex * 15}
            />
          ))}
        </div>

        {/* Gradient overlays para efecto fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
}

function ScrollingColumn({ testimonials, speed }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 0.1;
        // Reset cuando completa un ciclo
        if (Math.abs(newOffset) > 100) return 0;
        return newOffset;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  // Duplicar testimonios para efecto infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex flex-col gap-6"
        style={{
          transform: `translateY(${offset}%)`,
          transition: 'transform 0.1s linear'
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 group hover:bg-zinc-900/70">
      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Category */}
      <h4 className="text-white font-bold text-sm mb-3">
        {testimonial.category}
      </h4>

      {/* Testimonial Text */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
          <span className="text-zinc-950 font-bold text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-500 text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}