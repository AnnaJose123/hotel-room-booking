import React from 'react';

export default function Logo({ className = "h-9", textClass = "text-[#2C2C28]" }) {
  return (
    <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#7A8A6F] rounded px-1 py-0.5">
      <div className="relative w-8 h-8 rounded-full border border-[#A9825E]/40 flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:border-[#7A8A6F] transition-colors duration-300">
        <svg className="w-4 h-4 text-[#7A8A6F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-serif-luxury text-lg tracking-[0.25em] uppercase font-medium leading-none ${textClass}`}>
          AURA
        </span>
        <span className="text-[9px] tracking-[0.35em] uppercase text-[#A9825E] font-sans mt-0.5 font-light">
          RESORT & SPA
        </span>
      </div>
    </a>
  );
}
