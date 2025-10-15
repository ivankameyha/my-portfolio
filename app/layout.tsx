import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalitycs";
import MicrosoftClarity from "./components/MicrosoftClarity";
import "./globals.css";
import PreloaderMinimal from "./components/Preloader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iván Kameyha | Desarrollador Full Stack",
  description: "Desarrollo web profesional en Tucumán, Argentina. Creo sitios web modernos, landing pages y sistemas de reservas personalizados. Más de 50 clientes satisfechos. Planes desde $60.000.",
  keywords: [
    "desarrollador web tucumán",
    "diseño web argentina",
    "desarrollo full stack",
    "landing page profesional",
    "sistema de reservas online",
    "mercadopago integración",
    "sitio web responsivo",
    "programador tucumán",
    "ivan kameyha",
    "desarrollo react",
    "nextjs developer"
  ],
  authors: [{ name: "Iván Kameyha", url: "https://ivankameyha.com.ar" }],
  creator: "Iván Kameyha",
  publisher: "Iván Kameyha",
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ivankameyha.com.ar",
    siteName: "Iván Kameyha - Desarrollador Full Stack",
    title: "Iván Kameyha | Desarrollador Full Stack",
    description: "Desarrollo web profesional. Sitios modernos y sistemas de reservas. +50 clientes satisfechos. Planes desde $60.000.",
    images: [
      {
        url: "/og-image.jpg", // Deberás crear esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: "Iván Kameyha - Desarrollador Full Stack",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Iván Kameyha | Desarrollador Full Stack",
    description: "Desarrollo web profesional en Tucumán. Sitios modernos y sistemas de reservas.",
    creator: "@ivankameyha", // Cambia si tienes Twitter
    images: ["/og-image.jpg"],
  },

  // Información adicional
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificación (añadir cuando tengas las cuentas)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION, // Cambiar cuando verifiques
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },

  // Información de contacto estructurada
  other: {
    "contact:email": "kameyhaivan@gmail.com",
    "contact:phone_number": "+54 9 381 342-3617",
    "contact:country_name": "Argentina",
    "contact:region": "Tucumán",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Tema de color para navegadores móviles */}
        <meta name="theme-color" content="#0a0a0a" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ivankameyha.com.ar" />
        
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreloaderMinimal />
        <GoogleAnalytics />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}