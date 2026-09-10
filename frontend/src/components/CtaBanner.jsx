import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

export default function CtaBanner({ onBookClick }) {
  const scrollToBooking = () => {
    if (onBookClick) onBookClick();
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Exclusive Event Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2C2C28]/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-[0.25em] uppercase font-light text-[#F7F5F0]">
          <Sparkles className="w-3.5 h-3.5 text-[#7A8A6F]" />
          <span>Bespoke Celebrations</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal leading-tight">
          Plan Your Exclusive Event or Private Resort Buyout
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base font-light text-white/80 leading-relaxed font-sans">
          From intimate weddings to executive retreats, host your milestone gatherings amidst breathtaking Scandinavian nature.
        </p>

        <div className="pt-4">
          <button
            onClick={scrollToBooking}
            className="bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-[0.2em] px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Plan Your Exclusive Stay
          </button>
        </div>
      </div>
    </section>
  );
}
