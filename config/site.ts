export const siteConfig = {
  name: "Iván Kameyha",
  description: "Desarrollador Full Stack en Tucumán, Argentina. Sitios web modernos y sistemas de reservas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ivankameyha.com.ar",
  
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || "kameyhaivan@gmail.com",
    phone: "+54 9 381 342-3617",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493813423617",
    location: "Tucumán, AR",
  },

  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/ivan.kameyha.7",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/ivankameyha/",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/ivankameyha/",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ivankameyha",
    twitter: "",
  },

  whatsappMessages: {
    general: "Hola! Me interesa tu trabajo",
    planTurnos: "Hola! Me interesa el plan Web Turnos",
    planSimple: "Hola! Me interesa el plan Web Simple",
    planCompleta: "Hola! Me interesa el plan Web Completa",
    planPro: "Hola! Me interesa el plan Web Pro",
    custom: "Hola! Tengo un proyecto personalizado en mente",
    consultation: "Hola! Necesito asesoramiento sobre qué plan elegir",
  } as const,

  getWhatsAppUrl: (message: 'general' | 'planTurnos' | 'planSimple' | 'planCompleta' | 'planPro' | 'custom' | 'consultation' = 'general') => {
    const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5493813423617";
    const messages = {
      general: "Hola! Me interesa tu trabajo",
      planTurnos: "Hola! Me interesa el plan Web Turnos",
      planSimple: "Hola! Me interesa el plan Web Simple",
      planCompleta: "Hola! Me interesa el plan Web Completa",
      planPro: "Hola! Me interesa el plan Web Pro",
      custom: "Hola! Tengo un proyecto personalizado en mente",
      consultation: "Hola! Necesito asesoramiento sobre qué plan elegir",
    };
    const msg = messages[message];
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;
  },
} as const;