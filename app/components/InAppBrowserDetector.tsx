'use client';

import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function InAppBrowserDetector() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    // Detectar si estamos en un navegador in-app (Instagram, Facebook, etc.)
    const ua = navigator.userAgent || navigator.vendor;
    
    const isInstagram = /Instagram/i.test(ua);
    const isFacebook = /FBAN|FBAV/i.test(ua);
    const isTwitter = /Twitter/i.test(ua);
    const isLinkedIn = /LinkedInApp/i.test(ua);
    const isTikTok = /TikTok/i.test(ua);
    
    if (isInstagram || isFacebook || isTwitter || isLinkedIn || isTikTok) {
      setIsInAppBrowser(true);
      
      // Detectar desde qué red social viene
      let platform = 'redes sociales';
      if (isInstagram) platform = 'Instagram';
      else if (isFacebook) platform = 'Facebook';
      else if (isLinkedIn) platform = 'LinkedIn';
      else if (isTikTok) platform = 'TikTok';
      
      // Verificar si ya se mostró el alert
      const alertKey = 'inapp-alert-shown-v2';
      const hasShownAlert = sessionStorage.getItem(alertKey);
      
      if (!hasShownAlert) {
        setTimeout(() => {
          const userWantsToOpen = window.confirm(
            `📱 Navegador de ${platform} Detectado\n\n` +
            `Estás viendo este sitio desde ${platform}. ` +
            `Algunos elementos pueden no verse correctamente.\n\n` +
            `Se recomienda:\n` +
            `• Abrir en Safari (iOS)\n` +
            `• Abrir en Chrome (Android)\n\n` +
            `¿Deseas abrir en tu navegador ahora?`
          );
          
          if (userWantsToOpen) {
            // Abrir en navegador externo
            const opened = window.open(window.location.href, '_blank');
            
            // Si no se pudo abrir, mostrar instrucciones
            if (!opened) {
              setTimeout(() => {
                window.alert(
                  'ℹ️ No se pudo abrir automáticamente\n\n' +
                  'Para abrir en tu navegador:\n\n' +
                  '1. Toca los 3 puntos (•••) arriba\n' +
                  '2. Selecciona "Abrir en navegador"\n' +
                  '3. O toca el botón naranja arriba 👆'
                );
              }, 300);
            }
          }
          
          sessionStorage.setItem(alertKey, 'true');
        }, 1000);
      }
    }
  }, []);

  if (!isInAppBrowser) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-[60] animate-in slide-in-from-top duration-300">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <ExternalLink size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">
              Para una mejor experiencia, <br className="sm:hidden" />
              abre este sitio en tu navegador
            </p>
          </div>
          <button
            onClick={() => {
              // Intentar abrir en navegador externo
              const opened = window.open(window.location.href, '_blank');
              
              // Si falló, mostrar instrucciones
              if (!opened) {
                setTimeout(() => {
                  window.alert(
                    'ℹ️ Para abrir en navegador:\n\n' +
                    '1. Toca los 3 puntos (•••)\n' +
                    '2. Selecciona "Abrir en Safari/Chrome"'
                  );
                }, 300);
              }
            }}
            className="flex-shrink-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors"
          >
            Abrir
          </button>
        </div>
      </div>
    </div>
  );
}