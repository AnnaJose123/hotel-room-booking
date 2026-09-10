import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/experiencesData';
import RevealTile from './motion/RevealTile';
import TiltCard from './motion/TiltCard';
import SplitReveal from './motion/SplitReveal';

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section id="experiences" className="py-24 px-4 sm:px-6 bg-[#F6F3EC]">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DFD2] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9C7A50] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#5E6B4F]" />
              Curated Offerings
            </span>
            <SplitReveal as="h2" className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#211F1A]">
              The Aura Experience
            </SplitReveal>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed">
            Every element of your stay is thoughtfully crafted to invoke tranquility, connection with nature, and unhurried luxury.
          </p>
        </div>

        {/* 6-Card Grid Synchronized with Experiences Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((feat, idx) => (
            <TiltCard key={feat.id} className="h-full">
              <div
                id={feat.id}
                className="group bg-white rounded-3xl border border-[#E4DFD2] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full scroll-mt-32"
              >
                <div>
                  {/* Image Container with Reveal & Zoom */}
                  <RevealTile delay={idx * 0.08} className="relative h-64 overflow-hidden">
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-[#5E6B4F] font-semibold shadow-sm">
                      {feat.category}
                    </div>
                  </RevealTile>

                  <div className="p-7 space-y-3">
                    <h3 className="font-serif-luxury text-2xl text-[#211F1A] group-hover:text-[#5E6B4F] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed">
                      {feat.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => setSelectedFeature(feat)}
                    data-cursor="Details"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#9C7A50] hover:text-[#7A5D37] transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#E4DFD2] max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#211F1A] rounded-full shadow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 relative">
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#9C7A50] font-semibold bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  {selectedFeature.category}
                </span>
                <h3 className="font-serif-luxury text-3xl font-normal pt-2">
                  {selectedFeature.title}
                </h3>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-sm text-[#211F1A]/80 font-light leading-relaxed">
                {selectedFeature.fullDesc}
              </p>

              <div className="pt-4 border-t border-[#E4DFD2] flex justify-between items-center text-xs">
                <span className="text-[#6B6A62] font-light">
                  Included for resident guests or available by reservation.
                </span>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="bg-[#9C7A50] text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-[#85653E] transition-colors shadow-sm"
                >
                  Close Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
