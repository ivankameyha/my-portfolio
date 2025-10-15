'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  category: string;
  text: string;
  avatar: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Carlos Martínez',
      role: 'Dueño de Barbería',
      rating: 5,
      category: 'Calidad de Diseño',
      text: 'Excelente trabajo! La página quedó increíble y mis clientes la aman. Súper profesional.',
      avatar: 'CM'
    },
    {
      name: 'María Fernández',
      role: 'Emprendedora',
      rating: 5,
      category: 'Atención al Cliente',
      text: 'Atención impecable, muy rápido en responder y resolver cualquier duda. 10/10!',
      avatar: 'MF'
    },
    {
      name: 'Roberto Silva',
      role: 'Gerente de Spa',
      rating: 3,
      category: 'Funcionalidades',
      text: 'El sistema de reservas funciona perfecto. Mis clientes reservan sin problemas desde sus celulares.',
      avatar: 'RS'
    },
    {
      name: 'Ana López',
      role: 'Dueña de Salón',
      rating: 4,
      category: 'Facilidad de Uso',
      text: 'Muy fácil de usar y el soporte es excelente. Me explicó todo paso a paso.',
      avatar: 'AL'
    },
    {
      name: 'Diego Peralta',
      role: 'Barbería Urban',
      rating: 4,
      category: 'Diseño Moderno',
      text: 'Diseño moderno y limpio. Exactamente lo que necesitaba para mi barbería.',
      avatar: 'DP'
    },
    {
      name: 'Lucía Romero',
      role: 'Estética & Belleza',
      rating: 5,
      category: 'Recomendación',
      text: '5 estrellas! Desde el diseño hasta el soporte. Súper recomendado.',
      avatar: 'LR'
    },
    {
      name: 'Javier González',
      role: 'Peluquería',
      rating: 4,
      category: 'Profesionalismo',
      text: 'Muy atento y profesional. Entrega rápida y cumplió con todo lo prometido.',
      avatar: 'JG'
    },
    {
      name: 'Patricia Díaz',
      role: 'Nail Studio',
      rating: 3,
      category: 'Diseño Web',
      text: 'La página quedó hermosa! Mis clientas siempre me felicitan por lo moderna que se ve.',
      avatar: 'PD'
    },
    {
      name: 'Martín Castro',
      role: 'Panadería',
      rating: 3,
      category: 'Código Limpio',
      text: 'Esta bien',
      avatar: 'MC'
    },
    {
      name: 'Sofía Ruiz',
      role: 'Salón de eventos',
      rating: 3,
      category: 'Servicio',
      text: 'Fácil de usar y con excelente servicio al cliente. Todo muy claro.',
      avatar: 'SR'
    },
    {
      name: 'Alejandro Vargas',
      role: 'Mecanico',
      rating: 5,
      category: 'Soporte Técnico',
      text: 'Me ayudo con la instalación y configuración. Muy buen soporte técnico.',
      avatar: 'AV'
    },
    {
      name: 'Valentina Medina',
      role: 'Drugstore',
      rating: 4,
      category: 'Personalización',
      text: 'Pude personalizar todo a mi gusto.',
      avatar: 'VM'
    },
    {
      name: 'Fernando Torres',
      role: 'Barbería Clásica',
      rating: 5,
      category: 'Calidad Premium',
      text: 'Diseño de calidad, código limpio. Recomiendo esta plantilla 100%.',
      avatar: 'FT'
    },
    {
      name: 'Camila Sánchez',
      role: 'Estudio de Belleza',
      rating: 5,
      category: 'Completo',
      text: 'Tiene todas las funciones que necesitaba. Muy completo!',
      avatar: 'CS'
    },
    {
      name: 'Gabriel Moreno',
      role: 'Gerente de Tienda',
      rating: 5,
      category: 'Soporte',
      text: 'Soporte muy útil y rápido!',
      avatar: 'GM'
    },
    {
      name: 'Isabella Ortiz',
      role: 'Dueña de cine',
      rating: 5,
      category: 'Inversión',
      text: 'Muy profesional. La inversión valió totalmente la pena.',
      avatar: 'IO'
    }
  ];

  // Dividir testimonios en 4 columnas para desktop, 2 para mobile
  const columns: Testimonial[][] = [[], [], [], []];
  testimonials.forEach((testimonial, index) => {
    columns[index % 4].push(testimonial);
  });

  // Para mobile: combinar columnas en pares
  const mobileColumns: Testimonial[][] = [
    [...columns[0], ...columns[1]],
    [...columns[2], ...columns[3]]
  ];

  return (
    <section id="testimonios" className="bg-zinc-950 py-24 px-4 overflow-hidden relative">
      {/* Efecto de gradiente sutil en el fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header con mejor contraste */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 text-sm font-medium">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Clientes <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">satisfechos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Más de 50 clientes confían en mis servicios de desarrollo web
          </p>
        </div>

        {/* Grid Mobile - 2 columnas */}
        <div className="lg:hidden grid grid-cols-2 gap-4 h-[600px] relative">
          {mobileColumns.map((columnTestimonials, columnIndex) => (
            <ScrollingColumn 
              key={columnIndex} 
              testimonials={columnTestimonials}
              speed={50 + columnIndex * 10}
            />
          ))}
          
          {/* Gradient overlays para mobile */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Grid Desktop - 4 columnas */}
        <div className="hidden lg:grid grid-cols-4 gap-6 h-[700px] relative">
          {columns.map((columnTestimonials, columnIndex) => (
            <ScrollingColumn 
              key={columnIndex} 
              testimonials={columnTestimonials}
              speed={60 + columnIndex * 15}
            />
          ))}
          
          {/* Gradient overlays para desktop */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-20"></div>
        </div>
      </div>
      
      {/* Espaciado adicional antes del footer */}
      <div className="h-12"></div>
    </section>
  );
}

function ScrollingColumn({ testimonials, speed }: { testimonials: Testimonial[], speed: number }) {
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
    <div className="relative overflow-hidden h-full">
      <div
        className="flex flex-col gap-4 lg:gap-6"
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-4 lg:p-6 hover:border-cyan-500/50 transition-all duration-300 group hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* Rating */}
      <div className="flex gap-1 mb-2 lg:mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-cyan-400 text-cyan-400 lg:w-4 lg:h-4" />
        ))}
      </div>

      {/* Category */}
      <h4 className="text-white font-semibold text-xs lg:text-sm mb-2 lg:mb-3">
        {testimonial.category}
      </h4>

      {/* Testimonial Text */}
      <p className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-6 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-zinc-800">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs lg:text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-xs lg:text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-400 text-[10px] lg:text-xs">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}