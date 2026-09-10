import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import RevealTile from './motion/RevealTile';
import TiltCard from './motion/TiltCard';

const OFFERS = [
  {
    id: 1,
    title: "Nordic Thermal Escape",
    subtitle: "3 Nights • Unlimited Spa Access",
    nights: 3,
    dates: "Valid Oct 1 – Dec 20, 2026",
    price: "€980",
    savings: "Save 20%",
    image: "https://images.pexels.com/photos/6620860/pexels-photo-6620860.jpeg?auto=compress&cs=tinysrgb&w=1000",
    inclusions: [
      "3 Nights in Deluxe Lakeview Suite",
      "Daily 60-min Botanical Spa Therapy",
      "Champagne & Artisan Fruit Platter",
      "Complimentary Farm-to-Table Breakfast"
    ],
    roomPrefill: "Deluxe Lakeview Suite"
  },
  {
    id: 2,
    title: "Romantic Fjord Retreat",
    subtitle: "2 Nights • Private Dining",
    nights: 2,
    dates: "Valid Year-Round",
    price: "€1,250",
    savings: "Curated Experience",
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1000",
    inclusions: [
      "2 Nights in Grand Haven Suite",
      "In-Suite Private 7-Course Chef Dinner",
      "Private Fjord Kayak Eco-Tour",
      "Late Check-out until 4:00 PM"
    ],
    roomPrefill: "Grand Haven Suite"
  },
  {
    id: 3,
    title: "Wilderness Villa Journey",
    subtitle: "4 Nights • Private Plunge Pool",
    nights: 4,
    dates: "Valid Sep 15 – Nov 30, 2026",
    price: "€2,800",
    savings: "Exclusive Lodge",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1000",
    inclusions: [
      "4 Nights in Forest Eco Villa",
      "Helicopter National Park Transfer",
      "Daily Private Sauna & Hot Springs",
      "Dedicated Personal Concierge"
    ],
    roomPrefill: "Forest Eco Villa"
  }
];

export default function OfferCards({ onSelectOfferPackage }) {
  const handleOfferClick = (offer) => {
    if (onSelectOfferPackage) {
      onSelectOfferPackage(offer);
    }
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-24 px-4 sm:px-6 bg-[#EFECE6]/40">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E4DFD2] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#9C7A50] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#5E6B4F]" />
              Bespoke Packages
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#211F1A]">
              Seasonal Escapes & Offers
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#6B6A62] font-light leading-relaxed">
            Immerse yourself in our curated getaway packages designed for wellness, culinary indulgence, and intimate relaxation.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer, idx) => (
            <TiltCard key={offer.id} className="h-full">
              <div className="bg-white rounded-3xl border border-[#E4DFD2] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full group">
                <div>
                  {/* Image */}
                  <RevealTile delay={idx * 0.1} className="relative h-64 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#5E6B4F] text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold font-mono shadow-sm">
                      {offer.savings}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 text-[#211F1A] backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-bold shadow-md">
                      {offer.price} / package
                    </div>
                  </RevealTile>

                  {/* Content */}
                  <div className="p-7 space-y-4">
                    <div>
                      <h3 className="font-serif-luxury text-2xl text-[#211F1A] group-hover:text-[#5E6B4F] transition-colors">
                        {offer.title}
                      </h3>
                      <p className="text-xs text-[#9C7A50] uppercase tracking-wider font-semibold mt-1">
                        {offer.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#6B6A62]">
                      <Calendar className="w-3.5 h-3.5 text-[#5E6B4F]" />
                      <span>{offer.dates}</span>
                    </div>

                    <div className="space-y-2 border-t border-[#E4DFD2] pt-4">
                      <span className="text-[11px] uppercase tracking-wider text-[#6B6A62] font-semibold">
                        Package Inclusions:
                      </span>
                      {offer.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#211F1A]/80 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5E6B4F] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => handleOfferClick(offer)}
                    data-cursor="Book"
                    className="w-full bg-[#9C7A50] hover:bg-[#85653E] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Reserve This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
