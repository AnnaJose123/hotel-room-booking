import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    titleLine1: "Sanctuary of Silence.",
    titleLine2: "Refined Scandinavian Luxury.",
    subtitle: "Immerse yourself in nature, thermal springs, and architectural elegance overlooking pristine Nordic fjords."
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    titleLine1: "Lakeview Elegance.",
    titleLine2: "Timeless Comfort & Peace.",
    subtitle: "Every suite offers floor-to-ceiling panoramic views, handcrafted oak interiors, and personal stone soaking tubs."
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    titleLine1: "Hydrothermal Wellness.",
    titleLine2: "Rest & Revitalize.",
    subtitle: "Natural mineral hot pools, cedarwood saunas, and organic forest botanical therapies designed for complete renewal."
  },
  {
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85",
    titleLine1: "Gastronomic Mastery.",
    titleLine2: "Nordic Organic Cuisine.",
    subtitle: "Savor Michelin-inspired farm-to-table tasting menus paired with rare natural wines."
  }
];

export default function Hero({ onBookClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-20 sm:pb-16 overflow-hidden">
      {/* Background Slideshow */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transform transition-transform duration-[7000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.titleLine1}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C28]/90 via-[#2C2C28]/45 to-[#2C2C28]/35" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center text-white space-y-4 sm:space-y-6 mt-8 sm:mt-12">
        
        {/* Floating Pill Badge */}
        <div className="animate-float inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-[#F7F5F0]">
          <Sparkles className="w-3 h-3 text-[#7A8A6F]" />
          <span>Boutique Hideaway • Fjord Coast</span>
        </div>

        {/* Text Reveal */}
        <div key={currentSlide} className="animate-fade-up space-y-3 sm:space-y-4">
          <h1 className="font-serif-luxury text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.15] tracking-tight max-w-4xl mx-auto">
            {HERO_SLIDES[currentSlide].titleLine1}
            <br />
            <span className="italic font-light text-[#F7F5F0]/90">
              {HERO_SLIDES[currentSlide].titleLine2}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-light text-white/80 leading-relaxed tracking-wide font-sans px-2">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <button
            onClick={() => {
              if (onBookClick) onBookClick();
              scrollToSection('booking');
            }}
            className="w-full sm:w-auto bg-[#7A8A6F] hover:bg-[#68775D] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Book Your Stay</span>
            <Sparkles className="w-3.5 h-3.5 text-white/80" />
          </button>
          
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto border border-white/40 hover:border-white text-white hover:bg-white/10 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 active:scale-95"
          >
            Explore Suites
          </button>
        </div>
      </div>

      {/* Slide Controls - Mobile Responsive Position */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6 z-20 max-w-[1400px] mx-auto flex justify-between items-center text-white/70">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2 sm:gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'w-8 sm:w-10 bg-white' : 'w-3 sm:w-4 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('booking')}
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          <span>Scroll to Reserve</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#7A8A6F]" />
        </button>

        {/* Arrows */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
