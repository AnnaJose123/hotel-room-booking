import React, { useState } from 'react';
import { Maximize2, Users, Check, ArrowRight, X, Sparkles } from 'lucide-react';

const ROOM_DATA = [
  {
    name: 'Nordic Standard Suite',
    category: 'Standard',
    size: 38,
    capacity: 2,
    price: 240,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Cozy minimal sanctuary featuring warm oak paneling, king bed, and private forest-view balcony.',
    amenities: ['Balcony View', 'King Bed', 'Rain Shower', 'Espresso Machine', 'High-Speed Wi-Fi']
  },
  {
    name: 'Deluxe Lakeview Suite',
    category: 'Deluxe',
    size: 54,
    capacity: 3,
    price: 390,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'Panoramic floor-to-ceiling lake vistas, deep soaking stone bath, and gas fireplace.',
    amenities: ['Fjord View', 'Stone Soaking Tub', 'Fireplace', 'Daily Breakfast', 'Private Bar']
  },
  {
    name: 'Grand Haven Suite',
    category: 'Suite',
    size: 72,
    capacity: 4,
    price: 580,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    description: 'Expansive two-room layout with Scandinavian lounge design, cedar sauna, and private terrace.',
    amenities: ['Private Cedar Sauna', 'Dual Balconies', 'Living Room', 'Butler Service', 'Custom Sound System']
  },
  {
    name: 'Forest Eco Villa',
    category: 'Villa',
    size: 95,
    capacity: 5,
    price: 820,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    description: 'Freestanding timber lodge embedded in pine woodland with private heated plunge pool.',
    amenities: ['Heated Plunge Pool', 'Private Garden', 'Kitchenette', 'Firepit', 'EV Charging Station']
  },
  {
    name: 'Royal Penthouse Suite',
    category: 'Penthouse',
    size: 140,
    capacity: 6,
    price: 1250,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    description: 'The ultimate luxury statement with 360-degree resort views, private elevator, and dedicated chef service.',
    amenities: ['Private Elevator', '360° Panorama', 'Personal Chef', 'Helipad Transfer', 'Private Spa Room']
  }
];

export default function RoomCards({ onBookRoom }) {
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  const handleBookClick = (roomName) => {
    if (onBookRoom) {
      onBookRoom(roomName);
    }
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-24 px-6 bg-[#EFECE6]/50">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6E1D8] pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A9825E] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7A8A6F]" />
              Accommodations
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#2C2C28]">
              Suites & Private Villas
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#2C2C28]/70 font-light leading-relaxed">
            Crafted with natural timber, stone, and floor-to-ceiling glass. Swipe or scroll to discover our sanctuary spaces.
          </p>
        </div>

        {/* Horizontally Scrollable Room Container with Lift Animations */}
        <div className="flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-thin scroll-smooth snap-x snap-mandatory">
          {ROOM_DATA.map((room, index) => (
            <div
              key={index}
              className="min-w-[320px] sm:min-w-[400px] lg:min-w-[440px] max-w-[450px] bg-white rounded-3xl border border-[#E6E1D8] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between snap-start group"
            >
              <div>
                {/* Room Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest text-[#7A8A6F] font-semibold shadow-sm">
                    {room.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#2C2C28]/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-wider shadow-md group-hover:bg-[#7A8A6F] transition-colors">
                    from <span className="font-mono text-[#A9825E] group-hover:text-white font-bold text-sm">€{room.price}</span> / night
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <h3 className="font-serif-luxury text-2xl text-[#2C2C28] group-hover:text-[#7A8A6F] transition-colors">
                    {room.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#2C2C28]/70 font-light leading-relaxed min-h-[40px]">
                    {room.description}
                  </p>

                  {/* Specs Pill Row */}
                  <div className="flex items-center gap-6 text-xs text-[#2C2C28]/70 border-y border-[#E6E1D8] py-3">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#7A8A6F]" />
                      <span>{room.size} m²</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#7A8A6F]" />
                      <span>Up to {room.capacity} Guests</span>
                    </div>
                  </div>

                  {/* Amenity Highlights */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {room.amenities.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 bg-[#F7F5F0] text-[11px] text-[#2C2C28]/80 px-2.5 py-1 rounded-full border border-[#E6E1D8] group-hover:border-[#7A8A6F]/40 transition-colors">
                        <Check className="w-3 h-3 text-[#7A8A6F]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="p-7 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalRoom(room)}
                  className="flex-1 border border-[#E6E1D8] hover:border-[#7A8A6F] text-[#2C2C28] hover:text-[#7A8A6F] text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300 transform active:scale-95"
                >
                  Enquire
                </button>
                <button
                  onClick={() => handleBookClick(room.name)}
                  className="flex-1 bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 group/btn transform active:scale-95"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Enquire Detail Modal with Scale-up Animation */}
      {activeModalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#E6E1D8] max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button
              onClick={() => setActiveModalRoom(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#2C2C28] rounded-full shadow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 sm:h-72 relative">
              <img
                src={activeModalRoom.image}
                alt={activeModalRoom.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#7A8A6F] font-semibold bg-white/90 px-3 py-1 rounded-full">
                  {activeModalRoom.category} Accommodation
                </span>
                <h3 className="font-serif-luxury text-3xl font-normal pt-2">
                  {activeModalRoom.name}
                </h3>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-sm text-[#2C2C28]/80 font-light leading-relaxed">
                {activeModalRoom.description}
              </p>

              {/* Full Amenities Grid */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#A9825E]">
                  Suite Amenities & Inclusions
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeModalRoom.amenities.map((am, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#2C2C28]/80 bg-[#F7F5F0] p-2 rounded-lg border border-[#E6E1D8]">
                      <Check className="w-3.5 h-3.5 text-[#7A8A6F]" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E1D8] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#2C2C28]/60">Starting rate</span>
                  <p className="font-serif-luxury text-2xl text-[#2C2C28]">
                    €{activeModalRoom.price} <span className="text-xs font-sans text-[#2C2C28]/60">/ night</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    const rName = activeModalRoom.name;
                    setActiveModalRoom(null);
                    handleBookClick(rName);
                  }}
                  className="bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform active:scale-95"
                >
                  <span>Select & Book Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
