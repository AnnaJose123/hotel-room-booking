import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 200);
          setTimeout(() => onComplete && onComplete(), 700);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F5F0] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center animate-preloader">
        <Logo textClass="text-[#2C2C28]" />
        
        <p className="text-xs uppercase tracking-[0.3em] text-[#7A8A6F] mt-6 font-light">
          Sanctuary of Quiet Luxury
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-48 h-[2px] bg-[#E6E1D8] mt-8 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#7A8A6F] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[10px] tracking-widest text-[#2C2C28]/60 mt-3 font-mono">
          {Math.min(progress, 100)}%
        </span>
      </div>
    </div>
  );
}
