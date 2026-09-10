import React, { useState } from 'react';

export default function Marquee({ children, speed = 25, className = '' }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left and Right Edge Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F6F3EC] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#F6F3EC] to-transparent z-10 pointer-events-none" />

      <div
        className="flex whitespace-nowrap gap-6 sm:gap-8 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        <div className="flex gap-6 sm:gap-8 shrink-0">{children}</div>
        <div className="flex gap-6 sm:gap-8 shrink-0">{children}</div>
        <div className="flex gap-6 sm:gap-8 shrink-0">{children}</div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
