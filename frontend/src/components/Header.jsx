import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Globe, ChevronDown, Menu, X, Calendar } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuData = {
    Rooms: [
      { title: "Nordic Standard Suite", desc: "38m² • Forest Balcony", price: "from €240" },
      { title: "Deluxe Lakeview Suite", desc: "54m² • Panoramic Tub", price: "from €390" },
      { title: "Grand Haven Suite", desc: "72m² • Private Sauna", price: "from €580" },
      { title: "Forest Eco Villa", desc: "95m² • Heated Plunge Pool", price: "from €820" },
      { title: "Royal Penthouse", desc: "140m² • Chef & Private Elevator", price: "from €1,250" },
    ],
    Wellness: [
      { title: "Thermal Hydrotherapy Spa", desc: "Mineral hot springs & cold plunge" },
      { title: "Cedar Wood Saunas", desc: "Traditional Finnish dry saunas" },
      { title: "Botanical Massages", desc: "Organic pine & lavender oils" },
      { title: "Mindfulness Yoga Pavilion", desc: "Daily sunrise guided sessions" },
    ],
    Dining: [
      { title: "Restaurant SAGA", desc: "Michelin-starred Nordic gastronomy" },
      { title: "The Pine Lounge", desc: "Craft botanical cocktails & tapas" },
      { title: "Lakefront Tea House", desc: "Artisanal afternoon herbal tea" },
      { title: "In-Suite Private Chef", desc: "Bespoke 7-course tasting menu" },
    ],
    Experiences: [
      { title: "Fjord Kayaking & Fishing", desc: "Guided eco-adventures" },
      { title: "Helicopter Glacier Tour", desc: "Aerial views of national parks" },
      { title: "Foraging & Cooking Class", desc: "Gather wild berries & herbs" },
      { title: "Stargazing Observatory", desc: "Night sky lectures & hot cider" },
    ]
  };

  const scrollToSection = (id) => {
    setIsMobileDrawerOpen(false);
    setActiveMegaMenu(null);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Thin Utility Bar - Mobile Responsive */}
      <div className={`bg-[#2C2C28] text-[#F7F5F0]/80 text-[11px] sm:text-xs px-4 sm:px-6 transition-all duration-300 ${
        isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-2 opacity-100'
      }`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="tel:+4580123456" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#7A8A6F]" />
              <span className="font-mono">+45 80 12 34 56</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden md:inline text-white/70">Fjord Valley, Denmark</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Compact Language Switcher */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-white/10 rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px]">
              <Globe className="w-3 h-3 text-[#A9825E]" />
              <button
                onClick={() => setActiveLang('EN')}
                className={`px-1 py-0.2 rounded transition-colors ${activeLang === 'EN' ? 'bg-[#7A8A6F] text-white font-medium' : 'hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setActiveLang('DE')}
                className={`px-1 py-0.2 rounded transition-colors ${activeLang === 'DE' ? 'bg-[#7A8A6F] text-white font-medium' : 'hover:text-white'}`}
              >
                DE
              </button>
            </div>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[10px] sm:text-[11px] tracking-wider uppercase underline underline-offset-4 hover:text-[#A9825E] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Row */}
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#E6E1D8] py-2.5 sm:py-3'
          : 'bg-[#F7F5F0]/70 backdrop-blur-sm border-b border-[#E6E1D8]/40 py-3.5 sm:py-5'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Logo />

          {/* Desktop Mega-Menu Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-widest uppercase font-medium">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#2C2C28] hover:text-[#7A8A6F] transition-colors py-2"
            >
              Home
            </button>

            {Object.keys(megaMenuData).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(category)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => scrollToSection(category.toLowerCase())}
                  className={`flex items-center gap-1 py-2 transition-colors ${
                    activeMegaMenu === category ? 'text-[#7A8A6F]' : 'text-[#2C2C28] hover:text-[#7A8A6F]'
                  }`}
                >
                  <span>{category}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === category ? 'rotate-180 text-[#7A8A6F]' : ''}`} />
                </button>

                {/* Dropdown Mega Menu */}
                {activeMegaMenu === category && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border border-[#E6E1D8] rounded-2xl shadow-xl p-4 animate-scale-up z-50">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#A9825E] font-semibold mb-3 border-b border-[#E6E1D8] pb-2">
                      Explore {category}
                    </div>
                    <div className="space-y-2.5">
                      {megaMenuData[category].map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${category.toLowerCase()}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="block p-2 rounded-xl hover:bg-[#F7F5F0] transition-colors group"
                        >
                          <div className="flex justify-between items-center text-xs font-semibold text-[#2C2C28] group-hover:text-[#7A8A6F]">
                            <span>{item.title}</span>
                            {item.price && <span className="text-[10px] text-[#A9825E] font-mono">{item.price}</span>}
                          </div>
                          {item.desc && (
                            <p className="text-[11px] text-[#2C2C28]/60 mt-0.5 font-light leading-snug">
                              {item.desc}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => scrollToSection('offers')}
              className="text-[#2C2C28] hover:text-[#7A8A6F] transition-colors py-2"
            >
              Offers
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[#2C2C28] hover:text-[#7A8A6F] transition-colors py-2"
            >
              Gallery
            </button>
          </nav>

          {/* Right CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                scrollToSection('booking');
              }}
              className="bg-[#7A8A6F] hover:bg-[#68775D] text-white text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] px-3.5 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 flex items-center gap-1.5 sm:gap-2 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Stay</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
              className="lg:hidden p-2 text-[#2C2C28] hover:text-[#7A8A6F] rounded-lg hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Pixel Perfect Responsive */}
      {isMobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 top-[52px] bg-[#F7F5F0] z-50 p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-t border-[#E6E1D8]">
          <div className="space-y-6">
            <div className="border-b border-[#E6E1D8] pb-3 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-[#A9825E] font-semibold">Resort Menu</span>
              <span className="text-[11px] text-[#2C2C28]/60">Aura Boutique Hotel</span>
            </div>
            
            <nav className="flex flex-col space-y-4 text-xl font-serif-luxury text-[#2C2C28]">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Home Sanctuary
              </button>
              <button
                onClick={() => scrollToSection('rooms')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Suites & Private Villas
              </button>
              <button
                onClick={() => scrollToSection('experiences')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Wellness & Hydrotherapy Spa
              </button>
              <button
                onClick={() => scrollToSection('offers')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Bespoke Escape Offers
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Photo Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-[#7A8A6F] transition-colors py-1 border-b border-[#E6E1D8]/40"
              >
                Contact & Location
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E6E1D8] space-y-4 text-xs">
            <div className="flex justify-between items-center text-[#2C2C28]/80">
              <span>Reservations Desk:</span>
              <a href="tel:+4580123456" className="font-semibold text-[#7A8A6F]">+45 80 12 34 56</a>
            </div>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full bg-[#7A8A6F] hover:bg-[#68775D] text-white py-3.5 rounded-xl text-center uppercase tracking-widest font-semibold text-xs shadow-md"
            >
              Reserve Stay Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
