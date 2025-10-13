import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Iván Kameyha - Desarrollador Full Stack',
    short_name: 'Iván Kameyha',
    description: 'Portfolio y servicios de desarrollo web profesional',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#06b6d4',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}