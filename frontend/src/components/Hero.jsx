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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Slideshow with Crossfade */}
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
          {/* Subtle quiet luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C28]/85 via-[#2C2C28]/40 to-[#2C2C28]/30" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center text-white space-y-6 mt-12">
        
        {/* Animated Floating Pill Badge */}
        <div className="animate-float inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-[0.25em] uppercase font-light text-[#F7F5F0] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#7A8A6F] animate-spin-slow" />
          <span>Boutique Hideaway • Fjord Coast</span>
        </div>

        {/* Text Reveal Animation */}
        <div key={currentSlide} className="animate-fade-up space-y-4">
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-sm">
            {HERO_SLIDES[currentSlide].titleLine1}
            <br />
            <span className="italic font-light text-[#F7F5F0]/90">
              {HERO_SLIDES[currentSlide].titleLine2}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-white/80 leading-relaxed tracking-wide font-sans">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </div>

        {/* Action Buttons with Hover Glow */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <button
            onClick={() => {
              if (onBookClick) onBookClick();
              scrollToSection('booking');
            }}
            className="w-full sm:w-auto bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-glow flex items-center justify-center gap-2 group"
          >
            <span>Book Your Stay</span>
            <Sparkles className="w-4 h-4 text-white/80 group-hover:rotate-12 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Suites
          </button>
        </div>
      </div>

      {/* Manual Slide Navigation Controls */}
      <div className="absolute bottom-8 left-6 right-6 z-20 max-w-[1400px] mx-auto flex justify-between items-center text-white/70">
        {/* Slide Indicators */}
        <div className="flex items-center gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
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
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all transform hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all transform hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
