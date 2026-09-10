import React, { useState } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

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
    caption: "Forest Eco Lodge Plunge Pool",
    span: "col-span-1 md:col-span-2 row-span-1"
  }
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
    <section id="gallery" className="py-24 px-6 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A9825E] font-semibold">
            Visual Storytelling
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#2C2C28]">
            Atmosphere & Architecture
          </h2>
          <p className="text-sm text-[#2C2C28]/70 font-light leading-relaxed">
            Click any photograph to explore our quiet luxury aesthetic in full-screen detail.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-[#E6E1D8] shadow-sm hover:shadow-xl transition-all duration-500 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors opacity-0 group-hover:opacity-100 flex items-center justify-center p-6 text-white text-center">
                <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-serif-luxury font-medium tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => openLightbox(0)}
            className="border border-[#7A8A6F] text-[#7A8A6F] hover:bg-[#7A8A6F] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-300"
          >
            View Full Gallery Lightbox
          </button>
        </div>
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
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
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
