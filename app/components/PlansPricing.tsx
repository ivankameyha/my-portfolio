'use client';

import { Check, Sparkles, Zap, Crown, ExternalLink, MessageCircle, Rocket, Star, Circle, Package, TrendingUp, Target, Gem, Hexagon, Diamond, Bolt, Infinity, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      icon: <Rocket size={24} />,
      name: 'Web Simple',
      tagline: 'Ideal para negocios nuevos',
      description: 'Landing profesional 100% personalizada',
      price: '$60.000',
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-500',
      popular: false,
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
      color: 'cyan',
      gradient: 'from-cyan-400 to-blue-500',
      popular: true,
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
      color: 'purple',
      gradient: 'from-purple-400 to-pink-500',
      popular: false,
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

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      button: 'bg-emerald-500 hover:bg-emerald-600',
      badge: 'bg-emerald-100 text-emerald-700',
      iconBg: 'bg-emerald-100',
      checkmark: 'text-emerald-500'
    },
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-300',
      text: 'text-cyan-600',
      button: 'bg-cyan-500 hover:bg-cyan-600',
      badge: 'bg-cyan-100 text-cyan-700',
      iconBg: 'bg-cyan-100',
      checkmark: 'text-cyan-500'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-600',
      button: 'bg-purple-500 hover:bg-purple-600',
      badge: 'bg-purple-100 text-purple-700',
      iconBg: 'bg-purple-100',
      checkmark: 'text-purple-500'
    }
  };

  return (
    <section id="planes" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600 text-sm font-medium">Planes y Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elegí el plan <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">perfecto</span> para tu negocio
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Desde una landing profesional hasta un sistema completo de reservas.
            Todos los planes incluyen diseño responsive y soporte técnico.
          </p>
        </div>

        {/* Grid de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const colors = colorClasses[plan.color];
            const isHovered = hoveredPlan === index;
            
            return (
              <div
                key={index}
                className={`relative rounded-3xl transition-all duration-300 ${
                  plan.popular 
                    ? 'md:-translate-y-4 shadow-2xl scale-105' 
                    : 'shadow-lg hover:shadow-xl'
                } ${isHovered ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Badge "Más Elegido" */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                      <Sparkles size={16} />
                      <span>MÁS ELEGIDO</span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`${colors.bg} border-2 ${colors.border} rounded-3xl p-8 h-full flex flex-col relative overflow-hidden`}>
                  {/* Efecto de fondo degradado */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${plan.gradient} opacity-10 rounded-full blur-3xl -z-0`}></div>
                  
                  {/* Icono */}
                  <div className={`${colors.iconBg} ${colors.text} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                    {plan.icon}
                  </div>

                  {/* Nombre del Plan */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    {plan.name}
                  </h3>

                  {/* Tagline Emocional */}
                  <p className={`text-sm font-medium ${colors.text} mb-4 relative z-10`}>
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
                    <p className="text-gray-500 text-sm mt-1">Pago único</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow relative z-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className={`${colors.checkmark} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botones */}
                  <div className="space-y-3 relative z-10">
                    <button className={`w-full ${colors.button} text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
                      <span>Solicitar este plan</span>
                      <ExternalLink size={18} />
                    </button>
                    <a
                      href={`https://wa.me/5493814000000?text=Hola! Me interesa el plan ${plan.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:border-gray-300 hover:bg-gray-50"
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
        <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿No estás seguro cuál elegir?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactame y te ayudo a encontrar la solución perfecta para tu negocio.
            Puedo crear un plan personalizado según tus necesidades específicas.
          </p>
          <a
            href="https://wa.me/5493814000000?text=Hola! Necesito asesoramiento sobre qué plan elegir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-cyan-500 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 group"
          >
            <MessageCircle size={20} />
            <span>Hablemos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}