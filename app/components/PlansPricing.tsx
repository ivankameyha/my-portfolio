'use client';

import { Check, Sparkles, Rocket, Crown, Gem, MessageCircle, X, ChevronLeft, ChevronRight, Clock, ChevronDown, Calendar } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import React from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState<number | null>(null);

  const plans = [
    {
      icon: <Calendar size={24} />,
      name: 'Web Turnos',
      tagline: 'La forma más simple de manejar tus turnos online',
      description: 'Solo para rubros seleccionados (barberías, salones, estudios, gimnasios, etc.)',
      oldPrice: '',
      price: '$20.000/m',
      discount: '',
      pay: 'Mensual',
      deliveryTime: '3-5 días',
      popular: false,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761299713/turno_web1_f14c22.png',
      ],
      whatsappMessage: 'planTurnos' as keyof typeof siteConfig.whatsappMessages,
      colorScheme: {
        gradient: 'from-orange-400 to-red-500',
        border: 'border-orange-400',
        badge: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
        button: 'bg-orange-500 hover:bg-orange-400',
        icon: 'from-orange-400 to-red-500',
        check: 'text-orange-500',
        tagline: 'text-orange-500'
      },
      features: [
        { text: 'Sistema de reservas online', included: true },
        { text: 'Pagos automáticos con MercadoPago', included: true },
        { text: 'Panel de control para el dueño', included: true },
        { text: 'Hosting incluido', included: true },
        { text: 'Mantenimiento incluido', included: true },
      ]
    },
    {
      icon: <Rocket size={24} />,
      name: 'Web Simple',
      tagline: 'Ideal para negocios nuevos',
      description: 'Landing profesional 100% personalizada',
      oldPrice: '$80.000',
      price: '$60.000',
      pay: 'Pago único',
      discount: '25% OFF',
      deliveryTime: '5-7 días',
      popular: false,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761176562/simple_web1_neyvol.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082579/full_web3_dhfnce.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082578/simple_web3_wwkvb0.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082578/simple_web2_zqnu2p.png',
      ],
      whatsappMessage: 'planSimple' as keyof typeof siteConfig.whatsappMessages,
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
        { text: 'Portada simple', included: true },
        { text: 'Integración con WhatsApp', included: true },
        { text: 'Sección de servicios', included: true },
        { text: 'Google Maps + redes sociales', included: true },
        { text: '1 página profesional', included: true },

        { text: 'Galería de imágenes', included: false },
        { text: 'Sistema de turnos', included: false }
      ]
    },
    {
      icon: <Crown size={24} />,
      name: 'Web Completa',
      tagline: 'Pensada para negocios que quieren destacar',
      description: 'Sitio con estilo visual y estructura clara',
      oldPrice: '$200.000',
      price: '$120.000',
      discount: '40% OFF',
      pay: 'Pago único',
      deliveryTime: '10-14 días',
      popular: true,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761177486/full_web5_ivp9th.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082579/full_web2_os972s.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082578/full_web1_qi9tzy.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082579/full_web4_mwauu0.png'
      ],
      whatsappMessage: 'planCompleta' as keyof typeof siteConfig.whatsappMessages,
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
        { text: 'Todo lo del plan anterior', included: true },
        { text: 'Portada impactante', included: true },
        { text: 'Galería de trabajos o productos', included: true },
        { text: 'Sistema de turnos/consultas', included: true },
        { text: '3 secciones profesionales', included: true },
        { text: 'Optimización SEO básica', included: true },

        { text: 'Reservas online', included: false },
        { text: 'Pagos con MercadoPago', included: false },
        { text: 'Panel administrativo', included: false },
      ]
    },
    {
      icon: <Gem size={24} />,
      name: 'Web Pro',
      tagline: 'Perfecta para marcas que buscan automatizar su trabajo',
      description: 'Sistema completo de reservas y pagos online',
      oldPrice: '$600.000',
      price: '$480.000',
      discount: '20% OFF',
      pay: 'Pago único + $20.000/m',
      deliveryTime: '20-25 días',
      popular: false,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082579/pro_web1_tnytyi.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082577/pro_web2_zxmokp.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761082578/pro_web3_bogglh.png',
      ],
      whatsappMessage: 'planPro' as keyof typeof siteConfig.whatsappMessages,
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
        { text: 'Todo lo del plan anterior', included: true },
        { text: 'Sistema de reservas online', included: true },
        { text: 'Pagos automáticos con MercadoPago', included: true },
        { text: 'Carrito de compras (opcional)', included: true },
        { text: 'Panel de administración', included: true },
        { text: 'Multi-sucursal', included: true },
        { text: 'Notificaciones automáticas', included: true },
        { text: 'Reportes y estadísticas', included: true },
        { text: 'Primer mes de mantenimiento gratuito', included: true },
        { text: 'Hosting + dominio incluido', included: true },

      ]
    }
  ];

  const handleOpenModal = (planIndex: number) => {
    setSelectedPlan(planIndex);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPlan !== null) {
      const totalImages = plans[selectedPlan].mockupUrls.length;
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPlan !== null) {
      const totalImages = plans[selectedPlan].mockupUrls.length;
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Desde una landing profesional hasta un sistema completo de reservas.
            Todos los planes incluyen diseño responsive y soporte técnico.
          </p>
          {/* Badge de promoción */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg animate-pulse">
            🔥 Precios promocionales de lanzamiento — Cupos limitados
          </div>
        </div>

        {/* Grid de Planes - AHORA CON 4 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                    <div className={`bg-gradient-to-r ${plan.colorScheme.gradient} text-white px-6 py-2 rounded-full font-semibold text-sm md:text-[10px] shadow-lg flex items-center gap-2`}>
                      <Sparkles size={16} />
                      <span>MÁS ELEGIDO</span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`border-2 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  plan.popular 
                    ? `${plan.colorScheme.border} shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50` 
                    : 'border-gray-200 bg-white'
                }`}>
                  
                  {/* Efecto de brillo sutil en la card popular */}
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 pointer-events-none"></div>
                  )}
                  
                  {/* Badge de tiempo de entrega - esquina superior derecha */}
                  <div className="absolute top-6 right-4 flex items-center gap-1.5 bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 z-10">
                    <Clock size={14} className="text-gray-600" />
                    <span className="text-xs font-medium text-gray-600">Entrega en {plan.deliveryTime}</span>
                  </div>

                  {/* Icono */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.colorScheme.icon} flex items-center justify-center text-white mb-4 relative z-10`}>
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
                  <p className="text-gray-600 text-sm mb-4 relative z-10">
                    {plan.description}
                  </p>

                  {/* Precio */}
                  <div className="mb-5 relative z-10">
                    {/* Precio anterior tachado - solo si existe */}
                    {plan.oldPrice && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl text-gray-400 line-through">
                          {plan.oldPrice}
                        </span>
                        {plan.discount && (
                          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${plan.colorScheme.badge}`}>
                            🔥 {plan.discount}
                          </span>
                        )}
                      </div>
                    )}
                    {/* Precio actual */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{plan.pay}</p>
                  </div>

                  {/* Features - Desktop: siempre visible, Mobile: acordeón */}
                  <div className="mb-5 flex-grow relative z-10">
                    {/* Botón acordeón - solo visible en mobile */}
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                      className="md:hidden w-full flex items-center justify-between py-3 px-4 bg-gray-50 rounded-xl border border-gray-200 mb-3 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm font-semibold text-gray-700">
                        Ver características incluidas ({plan.features.filter(f => f.included).length})
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-600 transition-transform duration-300 ${expandedPlan === index ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Lista de features con animación suave */}
                    <div className={`md:block overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedPlan === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
                    }`}>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check size={20} className={`${plan.colorScheme.check} flex-shrink-0 mt-0.5`} />
                            ) : (
                              <X size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-gray-600' : 'text-gray-400 line-through'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="space-y-2 relative z-10">
                    <button
                      onClick={() => handleOpenModal(index)}
                      className={`w-full ${plan.colorScheme.button} text-white font-semibold py-4 rounded-xl transition-all block text-center`}
                    >
                      <span>Ver muestra</span>
                    </button>
                    <a
                      href={siteConfig.getWhatsAppUrl(plan.whatsappMessage)}
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
            href={siteConfig.getWhatsAppUrl('consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-cyan-400"
          >
            <MessageCircle size={20} />
            <span>Hablemos por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Modal para ver mockup */}
      {selectedPlan !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div className="h-full w-full flex flex-col p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <h3 className="text-lg md:text-2xl font-bold text-white flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plans[selectedPlan].colorScheme.icon} flex items-center justify-center text-white`}>
                  {React.cloneElement(plans[selectedPlan].icon, { size: 20 })}
                </div>
                {plans[selectedPlan].name}
              </h3>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Imagen - ocupa el espacio restante */}
            <div 
              className="flex-1 relative flex items-center justify-center min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botones Desktop */}
              <button
                onClick={handlePrevImage}
                className="hidden md:flex absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <img
                src={plans[selectedPlan].mockupUrls[currentImageIndex]}
                alt={`${plans[selectedPlan].name} - Ejemplo ${currentImageIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={handleNextImage}
                className="hidden md:flex absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Footer con botones mobile */}
            <div className="mt-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              {/* Botones Mobile */}
              <div className="md:hidden flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={handlePrevImage}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white active:bg-white/20 transition-all"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white active:bg-white/20 transition-all"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Indicadores */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-white font-medium text-sm">
                  {currentImageIndex + 1} / {plans[selectedPlan].mockupUrls.length}
                </span>
                <div className="flex gap-2">
                  {plans[selectedPlan].mockupUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? `bg-gradient-to-r ${plans[selectedPlan].colorScheme.gradient} w-8` 
                          : 'bg-white/30 w-2'
                      }`}
                      aria-label={`Ir a imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}