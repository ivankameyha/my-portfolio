'use client';

import { Check, Sparkles, Rocket, Crown, Gem, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import React from 'react';

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const plans = [
    {
      icon: <Rocket size={24} />,
      name: 'Web Simple',
      tagline: 'Ideal para negocios nuevos',
      description: 'Landing profesional 100% personalizada',
      oldPrice: '$80.000',
      price: '$60.000',
      pay: 'Pago único',
      discount: '25% OFF',
      popular: false,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760540336/simple_website_mockup_ohxutj.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760822778/simple_web_veterinaria_zomp77.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760822778/simple_web_forrajeria_dphlh5.png'
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
        'Diseño responsive (celular, tablet y PC)',
        'Botón directo a WhatsApp',
        'Sección de servicios',
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
      oldPrice: '$160.000',
      price: '$120.000',
      discount: '25% OFF',
      pay: 'Pago único',
      popular: true,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760822778/full_web_negocios_zviuqd.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760540336/full_website_mockup_bpy5z6.png',
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1760822778/full_web_barber_xjixxz.png'
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
        'Todo lo del plan anterior',
        'Portada impactante',
        'Tabla de precios y servicios',
        'Galería de trabajos o productos',
        'Sistema de turnos/consultas',
        'Formulario de contacto profesional',
        'Integración con WhatsApp',
        'Optimización SEO básica',
        'Asesoramiento para dominio y hosting',
        'Entrega en 10-14 días'
      ]
    },
    {
      icon: <Gem size={24} />,
      name: 'Web Pro',
      tagline: 'Perfecta para marcas que buscan automatizar reservas y cobros',
      description: 'Sistema completo de reservas y pagos online',
      oldPrice: '$600.000',
      price: '$480.000',
      discount: '20% OFF',
      pay: 'Pago único por desarrollo + mantenimiento mensual obligatorio',
      popular: false,
      mockupUrls: [
        'https://res.cloudinary.com/dzvjpzzxb/image/upload/v1761058305/pro_web1_avjgi2.png',
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
        'Todo lo del plan anterior',
        'Sistema de reservas online en tiempo real',
        'Pagos automáticos con MercadoPago',
        'Gestión inteligente de turnos',
        'Panel de administración',
        'Multi-sucursal',
        'Notificaciones automáticas',
        'Reportes y estadísticas',
        'Mantenimiento técnico y soporte premium',
        'Hosting y dominio .com / .com.ar',
        'Entrega en 20-25 días'
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
                    {/* Precio anterior tachado */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl text-gray-400 line-through">
                        {plan.oldPrice}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${plan.colorScheme.badge}`}>
                        🔥 {plan.discount}
                      </span>
                    </div>
                    {/* Precio actual */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{plan.pay}</p>
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