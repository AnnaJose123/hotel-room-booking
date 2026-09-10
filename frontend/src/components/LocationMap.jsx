import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Phone, Clock, ExternalLink, Sparkles } from 'lucide-react';
import RevealTile from './motion/RevealTile';
import SplitReveal from './motion/SplitReveal';

const LANDMARKS = [
  {
    id: 1,
    name: "Aura Main Pavilion & Suites",
    category: "Resort Center",
    coords: { x: 48, y: 42 },
    address: "Fjord Valley 42, 8000 Aarhus",
    desc: "Main reception, Lakeview Suites, Grand Haven Lounge, and concierge desk.",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Thermal Hydrotherapy Spa",
    category: "Wellness",
    coords: { x: 32, y: 60 },
    address: "Pine Grove Trail 8",
    desc: "Natural geo-thermal mineral hot pools, Finnish saunas, and plunge baths.",
    image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Restaurant SAGA",
    category: "Michelin Gastronomy",
    coords: { x: 64, y: 35 },
    address: "Coastal Terrace 12",
    desc: "7-course seasonal organic tasting menu paired with rare natural wines.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Forest Eco Villas & Plunge Pools",
    category: "Private Lodges",
    coords: { x: 75, y: 68 },
    address: "Pine Forest Ridge",
    desc: "Freestanding timber lodges embedded in pine woodland with private heated plunge pools.",
    image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Private Fjord Marina & Kayak Dock",
    category: "Adventures",
    coords: { x: 22, y: 28 },
    address: "Fjord Shoreline",
    desc: "Glass-bottom kayaks, guided fjord fishing, and private yacht transfers.",
    image: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export default function LocationMap() {
  const [activePin, setActivePin] = useState(LANDMARKS[0]);
  const [mapMode, setMapMode] = useState('terrain');
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <section id="location" className="py-24 px-4 sm:px-6 bg-[#F6F3EC] border-t border-[#E4DFD2]">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DFD2] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9C7A50] font-semibold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#5E6B4F]" />
              Bespoke Destination
            </span>
            <SplitReveal as="h2" className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#211F1A]">
              Location & Resort Grounds
            </SplitReveal>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed">
            Nestled on the serene Scandinavian fjord coast, 40 minutes from Aarhus Airport with private helicopter access.
          </p>
        </div>

        {/* Map & Landmark Card Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left / Top: Interactive Styled Map Container */}
          <div className="lg:col-span-2 space-y-4">
            
            <RevealTile className="w-full rounded-3xl border border-[#E4DFD2] bg-[#EFECE6] overflow-hidden shadow-xl relative h-[420px] sm:h-[500px]">
              
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  mapMode === 'satellite'
                    ? 'brightness-90 contrast-110 saturate-90'
                    : mapMode === 'terrain'
                    ? 'sepia-[0.15] contrast-105'
                    : 'grayscale-[0.4] brightness-95'
                }`}
                style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.4s ease-out' }}
              >
                <svg className="w-full h-full object-cover" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L40,0 C35,25 20,40 10,70 L0,100 Z" fill="#D2E3E8" />
                  <path d="M40,0 C50,30 65,40 100,50 L100,100 L10,100 C20,70 35,25 40,0 Z" fill="#E2DDD2" />
                  <path d="M30,10 Q60,30 90,20" stroke="#C8C2B4" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
                  <path d="M25,30 Q55,50 85,40" stroke="#C8C2B4" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
                  <path d="M20,60 Q50,75 80,65" stroke="#C8C2B4" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
                </svg>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-[#E4DFD2] shadow-md text-[10px] uppercase font-mono">
                <button
                  onClick={() => setMapMode('terrain')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    mapMode === 'terrain' ? 'bg-[#9C7A50] text-white font-bold' : 'text-[#211F1A]/70 hover:text-[#211F1A]'
                  }`}
                >
                  Terrain
                </button>
                <button
                  onClick={() => setMapMode('satellite')}
                  className={`px-3 py-1 rounded-full transition-all ${
                    mapMode === 'satellite' ? 'bg-[#9C7A50] text-white font-bold' : 'text-[#211F1A]/70 hover:text-[#211F1A]'
                  }`}
                >
                  Satellite
                </button>
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-[#E4DFD2] shadow-md">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.15, 1.4))}
                  className="w-8 h-8 rounded-lg hover:bg-[#F6F3EC] flex items-center justify-center font-bold text-sm text-[#211F1A]"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <div className="h-[1px] bg-[#E4DFD2]" />
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.15, 0.9))}
                  className="w-8 h-8 rounded-lg hover:bg-[#F6F3EC] flex items-center justify-center font-bold text-sm text-[#211F1A]"
                  aria-label="Zoom out"
                >
                  -
                </button>
              </div>

              {/* Map Pins */}
              {LANDMARKS.map((lm) => {
                const isActive = activePin.id === lm.id;
                return (
                  <button
                    key={lm.id}
                    onClick={() => setActivePin(lm)}
                    data-cursor="View"
                    style={{ left: `${lm.coords.x}%`, top: `${lm.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group focus:outline-none"
                  >
                    <div className={`relative flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'scale-125 z-40' : 'hover:scale-110'
                    }`}>
                      {isActive && (
                        <div className="absolute w-10 h-10 rounded-full bg-[#9C7A50]/30 animate-ping" />
                      )}
                      
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all border ${
                        isActive
                          ? 'bg-[#9C7A50] text-white border-white'
                          : 'bg-white text-[#211F1A] border-[#E4DFD2] hover:bg-[#9C7A50] hover:text-white'
                      }`}>
                        <MapPin className="w-5 h-5" />
                      </div>

                      <span className={`absolute top-full mt-1.5 whitespace-nowrap text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#211F1A] border border-[#E4DFD2] shadow-md transition-all ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                      }`}>
                        {lm.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </RevealTile>

            {/* Transport Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#211F1A]">
              <div className="bg-white p-4 rounded-2xl border border-[#E4DFD2] flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#5E6B4F] shrink-0" />
                <div>
                  <span className="font-semibold block">Aarhus Airport (AAR)</span>
                  <span className="text-[#6B6A62] text-[11px]">40 mins • Private Chauffeur</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E4DFD2] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#9C7A50] shrink-0" />
                <div>
                  <span className="font-semibold block">Copenhagen (CPH)</span>
                  <span className="text-[#6B6A62] text-[11px]">3h 15m scenic drive / train</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E4DFD2] flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#5E6B4F] shrink-0" />
                <div>
                  <span className="font-semibold block">Private Helipad</span>
                  <span className="text-[#6B6A62] text-[11px]">Direct resort pad access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Landmark Details */}
          <div className="bg-white rounded-3xl border border-[#E4DFD2] p-6 sm:p-8 shadow-xl space-y-6 animate-fade-in sticky top-28">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-[#E4DFD2]">
              <img
                src={activePin.image}
                alt={activePin.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-[#9C7A50] font-bold">
                {activePin.category}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] font-mono text-[#5E6B4F] uppercase tracking-wider block">
                📍 {activePin.address}
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#211F1A]">
                {activePin.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed">
                {activePin.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E4DFD2] space-y-3 text-xs">
              <div className="flex justify-between items-center text-[#6B6A62]">
                <span>Concierge Hotline:</span>
                <a href="tel:+4580123456" className="font-semibold text-[#211F1A] hover:text-[#9C7A50] transition-colors">
                  +45 80 12 34 56
                </a>
              </div>
              <div className="flex justify-between items-center text-[#6B6A62]">
                <span>Operating Hours:</span>
                <span className="font-semibold text-[#211F1A]">24/7 Guest Services</span>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#9C7A50] hover:bg-[#85653E] text-white text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
