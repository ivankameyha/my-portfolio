'use client';

import { Check, Sparkles, Rocket, Crown, Gem, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      icon: <Rocket size={24} />,
      name: 'Web Simple',
      tagline: 'Ideal para negocios nuevos',
      description: 'Landing profesional 100% personalizada',
      price: '$60.000',
      popular: false,
      demoUrl: '/demos/simple',
      colorScheme: {
        gradient: 'from-emerald-400 to-green-500',
        border: 'border-emerald-400',
        badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
        button: 'bg-emerald-500 hover:bg-emerald-400',
        icon: 'from-emerald-400 to-green-500',
        check: 'text-emerald-500',
        tagline: 'text-emerald-500'
      },
      features: [
        'Diseño responsive',
        'Botón WhatsApp',
        'Sección con tus servicios',
        'Ubicación en Google Maps',
        'Links a redes sociales',
        '1 página profesional',
        'Entrega en 5-7 días'
      ]
    },
    {
      icon: <Crown size={24} />,
      name: 'Web Completa',
      tagline: 'Pensada para negocios que quieren destacar',
      description: 'Sitio completo con estilo visual y estructura clara',
      price: '$120.000',
      popular: true,
      demoUrl: '/demos/completa',
      colorScheme: {
        gradient: 'from-cyan-400 to-blue-500',
        border: 'border-cyan-400',
        badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
        button: 'bg-cyan-500 hover:bg-cyan-400',
        icon: 'from-cyan-400 to-blue-500',
        check: 'text-cyan-500',
        tagline: 'text-cyan-500'
      },
      features: [
        'Todo lo del plan anterior',
        'Portada impactante',
        'Tabla de precios',
        'Galería de trabajos',
        'Sistema de turnos',
        'Formulario de contacto',
        'Integración WhatsApp',
        'Entrega en 10-14 días'
      ]
    },
    {
      icon: <Gem size={24} />,
      name: 'Web Pro',
      tagline: 'Perfecta para marcas que buscan automatizar reservas y cobros',
      description: 'Sistema completo de reservas y pagos online',
      price: '$360.000',
      popular: false,
      demoUrl: '/demos/pro',
      colorScheme: {
        gradient: 'from-purple-400 to-pink-500',
        border: 'border-purple-400',
        badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
        button: 'bg-purple-500 hover:bg-purple-400',
        icon: 'from-purple-400 to-pink-500',
        check: 'text-purple-500',
        tagline: 'text-purple-500'
      },
      features: [
        'Todo lo del plan anterior',
        'Sistema de reservas online',
        'Pagos con MercadoPago',
        'Gestión automática de turnos',
        'Panel de administración',
        'Multi-sucursal',
        'Notificaciones automáticas',
        'Reportes y estadísticas',
        'Soporte prioritario',
        'Entrega en 20-25 días'
      ]
    }
  ];

  return (
    <section id="planes" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600 text-sm font-medium">Planes y Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elegí el plan <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">perfecto</span> para tu negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde una landing profesional hasta un sistema completo de reservas.
            Todos los planes incluyen diseño responsive y soporte técnico.
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const isHovered = hoveredPlan === index;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-300 ${
                  plan.popular 
                    ? 'md:-translate-y-4' 
                    : ''
                } ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Badge "Más Elegido" */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`bg-gradient-to-r ${plan.colorScheme.gradient} text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2`}>
                      <Sparkles size={16} />
                      <span>MÁS ELEGIDO</span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`bg-white border-2 rounded-2xl p-8 h-full flex flex-col relative overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  plan.popular ? plan.colorScheme.border + ' shadow-xl' : 'border-gray-200'
                }`}>
                  
                  {/* Icono */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.colorScheme.icon} flex items-center justify-center text-white mb-6 relative z-10`}>
                    {plan.icon}
                  </div>

                  {/* Nombre del Plan */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    {plan.name}
                  </h3>

                  {/* Tagline */}
                  <p className={`text-sm font-medium ${plan.colorScheme.tagline} mb-4 relative z-10`}>
                    {plan.tagline}
                  </p>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm mb-6 relative z-10">
                    {plan.description}
                  </p>

                  {/* Precio */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Pago único</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow relative z-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className={`${plan.colorScheme.check} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botones */}
                  <div className="space-y-3 relative z-10">
                    {/* <a
                      href={plan.demoUrl}
                      className={`w-full ${plan.colorScheme.button} text-white font-semibold py-4 rounded-xl transition-all block text-center`}
                    >
                      <span>Ver muestra</span>
                    </a> */}
                    <a
                      href={`https://wa.me/5493813423617?text=Hola! Me interesa el plan ${plan.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/10 backdrop-blur-sm border-2 border-gray-200 text-gray-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-gray-50"
                    >
                      <MessageCircle size={18} />
                      <span>Consultar por WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="text-center bg-zinc-950 rounded-2xl p-12 shadow-xl">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            ¿No estás seguro cuál elegir?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Contactame y te ayudo a encontrar la solución perfecta para tu negocio.
            Puedo crear un plan personalizado según tus necesidades específicas.
          </p>
          <a
            href="https://wa.me/5493813423617?text=Hola! Necesito asesoramiento sobre qué plan elegir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-cyan-400"
          >
            <MessageCircle size={20} />
            <span>Hablemos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}