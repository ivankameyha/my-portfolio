'use client';

import { siteConfig } from '@/config/site';
import { Rocket, Code2, Palette, Database, Globe, Shield, Zap, MessageCircle, Mail, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function CustomSolutionsSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const customServices = [
    {
      icon: <Code2 size={28} />,
      title: 'Desarrollo a Medida',
      description: 'Aplicaciones web únicas diseñadas específicamente para tu negocio',
      features: ['Código personalizado', 'Arquitectura escalable', 'Integración con APIs']
    },
    {
      icon: <Globe size={28} />,
      title: 'Plataformas Complejas',
      description: 'Marketplaces, redes sociales, portales empresariales',
      features: ['Multi-usuario', 'Paneles admin', 'Dashboards avanzados']
    },
    {
      icon: <Database size={28} />,
      title: 'Sistemas de Gestión',
      description: 'ERP, CRM, inventarios y soluciones empresariales completas',
      features: ['Base de datos robusta', 'Reportes en tiempo real', 'Automatización']
    },
    {
      icon: <Palette size={28} />,
      title: 'Diseño UI/UX Premium',
      description: 'Experiencias de usuario excepcionales con diseño de vanguardia',
      features: ['Branding personalizado', 'Prototipos interactivos', 'Design system']
    },
    {
      icon: <Shield size={28} />,
      title: 'Integración de Servicios',
      description: 'Conecta tu web con pagos, envíos, CRMs y más',
      features: ['APIs externas', 'Webhooks', 'Sincronización automática']
    },
    {
      icon: <Zap size={28} />,
      title: 'Optimización & SEO',
      description: 'Mejora el rendimiento y visibilidad de tu sitio existente',
      features: ['Performance audit', 'SEO técnico', 'Core Web Vitals']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Conversamos sobre tu proyecto, objetivos y necesidades',
      icon: <MessageCircle size={24} />
    },
    {
      step: '02',
      title: 'Análisis y Propuesta',
      description: 'Elaboro un presupuesto detallado con alcance, tecnologías y tiempos',
      icon: <Mail size={24} />
    },
    {
      step: '03',
      title: 'Desarrollo Iterativo',
      description: 'Trabajo en sprints con entregas parciales para tu feedback',
      icon: <Code2 size={24} />
    },
    {
      step: '04',
      title: 'Entrega y Soporte',
      description: 'Deployment, capacitación y mantenimiento continuo',
      icon: <Rocket size={24} />
    }
  ];

  return (
    <section id="proyectos" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600 text-sm font-medium">Proyectos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Necesitás algo <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">diferente</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Si tu proyecto no encaja en los planes estándar, puedo crear una solución 100% personalizada.
            Desde sistemas empresariales complejos hasta ideas innovadoras que necesitan tecnología a medida.
          </p>
        </div>

        {/* Grid de Servicios Personalizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {customServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl ${
                selectedService === index
                  ? 'border-cyan-400 scale-105'
                  : 'border-gray-200 hover:border-cyan-400'
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Icono */}
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-500 transition-colors">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proceso de Trabajo */}
        <div className="bg-zinc-950 rounded-2xl p-12 mb-16 relative overflow-hidden shadow-xl">
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                ¿Cómo trabajamos juntos?
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Un proceso transparente y colaborativo desde la idea hasta el lanzamiento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  {/* Línea conectora (solo desktop) */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-cyan-400 opacity-30"></div>
                  )}
                  
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                    {/* Número de paso */}
                    <div className="text-5xl font-bold text-cyan-400 opacity-30 mb-3">
                      {step.step}
                    </div>

                    {/* Icono */}
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>

                    {/* Título */}
                    <h4 className="text-white font-bold text-lg mb-2">
                      {step.title}
                    </h4>

                    {/* Descripción */}
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="bg-zinc-950 rounded-2xl p-12 text-center shadow-xl">
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-4">
              Empecemos a dar vida a tu idea
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              El primer paso es una conversación sin compromiso. Contame tu proyecto
              y te preparo un presupuesto detallado y personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={siteConfig.getWhatsAppUrl('custom')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-cyan-400"
              >
                <MessageCircle size={24}/>
                <span>Solicitar Presupuesto</span>
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              💬 Respuesta en menos de 24 horas • Consultas sin costo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}