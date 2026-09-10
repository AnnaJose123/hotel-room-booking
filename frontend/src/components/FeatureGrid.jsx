import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: "Thermal Hydrotherapy Spa",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Geo-thermal hot springs, cold Scandinavian plunge pools, and private cedarwood saunas overlooking the pine forest.",
    fullDesc: "Step into a sanctuary of restorative stillness. Our thermal hydrotherapy circuit alternates between natural mineral springs heated to 39°C, cold Scandinavian plunge pools, and aromatic cedar saunas infused with wild pine needle oils."
  },
  {
    id: 2,
    title: "Organic Farm-to-Table Gastronomy",
    category: "Culinary",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Seasonal tasting menus curated by Michelin chefs utilizing herbs from our greenhouse and local Scandinavian farms.",
    fullDesc: "Restaurant SAGA celebrates the rich heritage of Nordic foraging. Our culinary team collaborates daily with local organic farmers, artisan cheese makers, and coastal fisherman to present an ever-changing 7-course seasonal journey."
  },
  {
    id: 3,
    title: "Guided Wilderness Excursions",
    category: "Experiences",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    shortDesc: "Private fjord kayaking, midnight sun wildlife tracking, and scenic helicopter flights above untouched glaciers.",
    fullDesc: "Discover the rugged splendor of the fjord valley. Whether paddling glass-bottom kayaks through misty morning waters or embarking on a private helicopter glacier tour, our native guides provide unforgettable bespoke adventures."
  }
];

export default function FeatureGrid() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section id="experiences" className="py-24 px-6 bg-[#F7F5F0]">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E1D8] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A9825E] font-semibold">
              Curated Offerings
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#2C2C28]">
              The Aura Experience
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#2C2C28]/70 font-light leading-relaxed">
            Every element of your stay is thoughtfully crafted to invoke tranquility, connection with nature, and unhurried luxury.
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="group bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#7A8A6F] font-semibold">
                    {feat.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-luxury text-2xl text-[#2C2C28] group-hover:text-[#7A8A6F] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2C28]/70 font-light leading-relaxed">
                    {feat.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedFeature(feat)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#7A8A6F] hover:text-[#5A6752] transition-colors group/link"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#E6E1D8] max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#2C2C28] rounded-full shadow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-80 relative">
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#7A8A6F] font-semibold bg-white/90 px-3 py-1 rounded-full">
                  {selectedFeature.category}
                </span>
                <h3 className="font-serif-luxury text-3xl font-normal pt-2">
                  {selectedFeature.title}
                </h3>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-sm text-[#2C2C28]/80 font-light leading-relaxed">
                {selectedFeature.fullDesc}
              </p>

              <div className="pt-4 border-t border-[#E6E1D8] flex justify-between items-center">
                <span className="text-xs text-[#2C2C28]/60 font-light">
                  Included for all resident resort guests.
                </span>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="bg-[#7A8A6F] text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#68775D] transition-colors"
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
