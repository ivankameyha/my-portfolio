'use client';

import { useEffect, useState } from 'react';

export default function PreloaderMinimal() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center">
      {/* Spinner simple */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
        
        {/* Logo en el centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-cyan-400 font-bold text-xl">IK</span>
        </div>
      </div>
    </div>
  );
}