import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import RevealTile from './motion/RevealTile';
import TiltCard from './motion/TiltCard';
import Marquee from './motion/Marquee';
import SplitReveal from './motion/SplitReveal';
import HandwrittenAccent from './motion/HandwrittenAccent';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    caption: "Nordic Sunset over the Resort Main Pavilion",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    caption: "Outdoor Geothermal Thermal Hot Spring Pool",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    caption: "Deluxe Lakeview Suite Soaking Bath",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    caption: "Oak Timber Balcony Overlooking Pine Woodland",
    span: "col-span-1 row-span-2"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    caption: "Artisanal Organic Farm-to-Table Dish",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    caption: "Forest Eco Lodge Heated Plunge Pool",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
    caption: "Nordic Cedar Sauna & Fireplace Lounge",
    span: "col-span-1 row-span-1"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    caption: "Starlit Observatory Terrace & Firepit",
    span: "col-span-1 row-span-1"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    caption: "Private Fjord Kayak Morning Excursion",
    span: "col-span-1 md:col-span-2 row-span-1"
  }
];

const SECONDARY_STRIP = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
];

export default function MasonryGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-[#F6F3EC] space-y-16 border-t border-[#E4DFD2]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Softened Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="font-serif-luxury italic text-sm text-[#9C7A50]">
              Visual Storytelling
            </span>
            <span className="text-[#6B6A62] text-xs">•</span>
            <HandwrittenAccent text="moments of quiet stillness" className="text-xl" />
          </div>

          <SplitReveal as="h2" className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#211F1A] justify-center pt-2">
            Atmosphere and Architecture
          </SplitReveal>

          <p className="text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed pt-1">
            Hover over any photograph to experience 3D depth. Click to launch our full-screen lightbox preview.
          </p>
        </div>

        {/* 9-Tile True Masonry Grid with Unified Color Grade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <TiltCard key={img.id} className={img.span}>
              <RevealTile delay={idx * 0.08} className="w-full h-full rounded-2xl border border-[#E4DFD2] shadow-sm">
                <div
                  onClick={() => openLightbox(idx)}
                  data-cursor="Open"
                  className="relative w-full h-full cursor-pointer group overflow-hidden bg-[#211F1A]"
                >
                  {/* Unified Warm Color Grade Filter */}
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover brightness-[0.98] contrast-[1.03] saturate-[0.92] sepia-[0.06] group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors opacity-0 group-hover:opacity-100 flex items-center justify-center p-6 text-white text-center">
                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center border border-white/30 shadow-md">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-serif-luxury font-medium tracking-wide">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealTile>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Infinite Auto-Scrolling Secondary Photo Strip */}
      <div className="pt-6 space-y-4">
        <div className="text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#9C7A50] font-semibold">
            More Moments • Continuation
          </span>
        </div>
        <Marquee speed={32}>
          {SECONDARY_STRIP.map((url, i) => (
            <div key={i} className="w-64 sm:w-80 h-44 rounded-2xl overflow-hidden border border-[#E4DFD2] shrink-0 shadow-sm">
              <img
                src={url}
                alt="More Moments"
                className="w-full h-full object-cover brightness-[0.98] contrast-[1.03] saturate-[0.92] sepia-[0.06] hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center space-y-4">
            <img
              src={GALLERY_IMAGES[lightboxIndex].url}
              alt={GALLERY_IMAGES[lightboxIndex].caption}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl animate-scale-up brightness-[0.98] contrast-[1.03] saturate-[0.92] sepia-[0.06]"
            />
            <div className="text-center text-white space-y-1">
              <p className="font-serif-luxury text-lg font-normal">
                {GALLERY_IMAGES[lightboxIndex].caption}
              </p>
              <span className="text-xs font-mono text-white/60">
                {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
