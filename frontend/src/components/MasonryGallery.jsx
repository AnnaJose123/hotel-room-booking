import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, X, Play, Pause, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import RevealTile from './motion/RevealTile';
import TiltCard from './motion/TiltCard';
import Marquee from './motion/Marquee';
import SplitReveal from './motion/SplitReveal';
import HandwrittenAccent from './motion/HandwrittenAccent';
import MagneticButton from './motion/MagneticButton';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Nordic Sunset over the Resort Main Pavilion",
    category: "Architecture & Grounds",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Outdoor Geothermal Thermal Hot Spring Pool",
    category: "Hydrotherapy Wellness",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/6620860/pexels-photo-6620860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Deluxe Lakeview Suite Soaking Bath",
    category: "Lakeview Accommodations",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Oak Timber Balcony Overlooking Pine Woodland",
    category: "Standard Suite Views",
    span: "col-span-1 row-span-2"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Artisanal Organic Farm-to-Table Gastronomy",
    category: "Restaurant SAGA",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Forest Eco Lodge Heated Plunge Pool",
    category: "Private Eco Villas",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Nordic Cedar Sauna & Fireplace Lounge",
    category: "Grand Haven Suite",
    span: "col-span-1 row-span-1"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Starlit Observatory Terrace & Firepit",
    category: "Night Sky Experiences",
    span: "col-span-1 row-span-1"
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1200",
    caption: "Private Fjord Kayak Morning Excursion",
    category: "Guided Eco Excursions",
    span: "col-span-1 md:col-span-2 row-span-1"
  }
];

const SECONDARY_STRIP = [
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
];

export default function MasonryGallery() {
  const [viewMode, setViewMode] = useState('slideshow');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (!isPlaying || viewMode !== 'slideshow') return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, viewMode]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 bg-[#F6F3EC] space-y-16 border-t border-[#E4DFD2]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DFD2] pb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="font-serif-luxury italic text-sm text-[#9C7A50]">
                Visual Storytelling
              </span>
              <span className="text-[#6B6A62] text-xs">•</span>
              <HandwrittenAccent text="interactive photo slideshow" className="text-xl" />
            </div>

            <SplitReveal as="h2" className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#211F1A]">
              Atmosphere & Architecture
            </SplitReveal>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 bg-white/80 p-1.5 rounded-full border border-[#E4DFD2] shadow-sm self-start md:self-auto">
            <button
              onClick={() => setViewMode('slideshow')}
              data-cursor="Slideshow"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                viewMode === 'slideshow'
                  ? 'bg-[#9C7A50] text-white shadow-sm'
                  : 'text-[#211F1A]/70 hover:text-[#211F1A]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Slideshow</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              data-cursor="Grid"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#9C7A50] text-white shadow-sm'
                  : 'text-[#211F1A]/70 hover:text-[#211F1A]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
          </div>
        </div>

        {/* MODE 1: Slideshow Showcase */}
        {viewMode === 'slideshow' && (
          <div className="space-y-6 animate-fade-in">
            <RevealTile className="w-full rounded-3xl border border-[#E4DFD2] bg-[#211F1A] overflow-hidden shadow-2xl relative h-[450px] sm:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => openLightbox(currentSlide)}
                  data-cursor="Expand"
                >
                  <img
                    src={GALLERY_IMAGES[currentSlide].url}
                    alt={GALLERY_IMAGES[currentSlide].caption}
                    className="w-full h-full object-cover brightness-[0.98] contrast-[1.03] saturate-[0.92] sepia-[0.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="space-y-1.5 max-w-xl">
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-mono text-[#9C7A50] font-semibold bg-white/90 px-3 py-1 rounded-full shadow-sm">
                    {GALLERY_IMAGES[currentSlide].category}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-4xl font-normal text-white pt-1">
                    {GALLERY_IMAGES[currentSlide].caption}
                  </h3>
                </div>

                <MagneticButton
                  onClick={() => openLightbox(currentSlide)}
                  data-cursor="Open"
                  className="bg-white/20 hover:bg-white text-white hover:text-[#211F1A] backdrop-blur-md border border-white/30 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 self-start sm:self-auto"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Fullscreen Lightbox</span>
                </MagneticButton>
              </div>

              {/* Controls */}
              <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                  aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <div className="w-[1px] h-4 bg-white/30" />
                <button onClick={prevSlide} className="p-2 rounded-full hover:bg-white/20 text-white transition-colors" aria-label="Previous slide">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-full hover:bg-white/20 text-white transition-colors" aria-label="Next slide">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-xs font-mono font-medium">
                {currentSlide + 1} / {GALLERY_IMAGES.length}
              </div>
            </RevealTile>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative w-28 sm:w-36 h-20 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                    idx === currentSlide
                      ? 'border-[#9C7A50] scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover brightness-[0.98] contrast-[1.03]" />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MODE 2: Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-[240px] animate-fade-in">
            {GALLERY_IMAGES.map((img, idx) => (
              <TiltCard key={img.id} className={img.span}>
                <RevealTile delay={idx * 0.08} className="w-full h-full rounded-2xl border border-[#E4DFD2] shadow-sm">
                  <div
                    onClick={() => openLightbox(idx)}
                    data-cursor="Open"
                    className="relative w-full h-full cursor-pointer group overflow-hidden bg-[#211F1A]"
                  >
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
        )}
      </div>

      {/* Marquee Strip */}
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
          <button onClick={closeLightbox} className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50" aria-label="Close Lightbox">
            <X className="w-6 h-6" />
          </button>

          <button onClick={() => setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))} className="absolute left-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50" aria-label="Previous Image">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center space-y-4">
            <img
              src={GALLERY_IMAGES[lightboxIndex].url}
              alt={GALLERY_IMAGES[lightboxIndex].caption}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl animate-scale-up brightness-[0.98] contrast-[1.03] saturate-[0.92] sepia-[0.06]"
            />
            <div className="text-center text-white space-y-1">
              <p className="font-serif-luxury text-lg sm:text-xl font-normal">
                {GALLERY_IMAGES[lightboxIndex].caption}
              </p>
              <span className="text-xs font-mono text-white/60">
                {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>

          <button onClick={() => setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))} className="absolute right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors z-50" aria-label="Next Image">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
