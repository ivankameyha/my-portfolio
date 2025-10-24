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
              Para una mejor experiencia, abre este sitio en tu navegador
            </p>
          </div>
          <button
            onClick={() => {
              // Intentar abrir en navegador externo
              window.open(window.location.href, '_blank');
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
