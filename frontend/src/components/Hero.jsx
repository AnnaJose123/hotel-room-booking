import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import SplitReveal from './motion/SplitReveal';
import HandwrittenAccent from './motion/HandwrittenAccent';
import MagneticButton from './motion/MagneticButton';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85",
    title: "Sanctuary of Quiet Stillness",
    accent: "handcrafted for deep renewal",
    subtitle: "Immerse yourself in nature, thermal springs, and architectural elegance overlooking pristine Nordic fjords."
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85",
    title: "Lakeview Elegance and Peace",
    accent: "where architecture meets nature",
    subtitle: "Every suite offers floor-to-ceiling panoramic views, handcrafted oak interiors, and personal stone soaking tubs."
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    title: "Hydrothermal Botanical Wellness",
    accent: "pure mineral restoration",
    subtitle: "Natural mineral hot pools, cedarwood saunas, and organic forest botanical therapies designed for complete renewal."
  }
];

export default function Hero({ onBookClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
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
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211F1A]/90 via-[#211F1A]/40 to-[#211F1A]/30" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center text-white space-y-4 sm:space-y-6 mt-6 sm:mt-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light text-[#F6F3EC]">
          <Sparkles className="w-3.5 h-3.5 text-[#9C7A50]" />
          <span>Boutique Hideaway • Fjord Coast</span>
        </div>

        {/* SplitReveal Headline */}
        <div key={currentSlide} className="space-y-3">
          <SplitReveal
            as="h1"
            className="font-serif-luxury text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight max-w-4xl mx-auto justify-center"
          >
            {HERO_SLIDES[currentSlide].title}
          </SplitReveal>

          {/* Signature Handwritten Accent */}
          <div className="pt-1">
            <HandwrittenAccent text={HERO_SLIDES[currentSlide].accent} />
          </div>

          <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-light text-white/80 leading-relaxed tracking-wide font-sans px-2 pt-2">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </div>

        {/* Action Buttons with Magnetic CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <MagneticButton
            onClick={() => {
              if (onBookClick) onBookClick();
              scrollToSection('booking');
            }}
            data-cursor="Book"
            className="w-full sm:w-auto bg-[#9C7A50] hover:bg-[#85653E] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Book Your Stay</span>
            <Sparkles className="w-4 h-4 text-white/80" />
          </MagneticButton>
          
          <button
            onClick={() => scrollToSection('rooms')}
            data-cursor="Explore"
            className="w-full sm:w-auto border border-white/40 hover:border-white text-white hover:bg-white/10 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300"
          >
            Explore Suites
          </button>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-6 sm:right-6 z-20 max-w-[1400px] mx-auto flex justify-between items-center text-white/70">
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

        <button
          onClick={() => scrollToSection('booking')}
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          <span>Scroll to Reserve</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#9C7A50]" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 sm:p-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white transition-all active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
