import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Send, Check, Award, Share2, Globe } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterError('');
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer id="contact" className="bg-[#2C2C28] text-[#F7F5F0] pt-20 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Main Multi-Column Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand & Address */}
          <div className="space-y-6">
            <Logo textClass="text-white" />
            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Sanctuary of quiet luxury embedded in Scandinavian nature. Fjord view suites, thermal hydrotherapy, and Michelin gastronomy.
            </p>
            <div className="space-y-3 text-xs text-white/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7A8A6F] shrink-0 mt-0.5" />
                <span>Aura Resort & Spa, Fjord Valley 42, 8000 Aarhus, Denmark</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7A8A6F] shrink-0" />
                <a href="tel:+4580123456" className="hover:text-[#A9825E] transition-colors">+45 80 12 34 56</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7A8A6F] shrink-0" />
                <a href="mailto:reservations@aura-resort.com" className="hover:text-[#A9825E] transition-colors">reservations@aura-resort.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A9825E]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li><a href="#hero" className="hover:text-white transition-colors">Home Sanctuary</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Suites & Private Villas</a></li>
              <li><a href="#experiences" className="hover:text-white transition-colors">Thermal Spa & Dining</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Bespoke Escape Offers</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery Lightbox</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Instant Reservation</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A9825E]">
              Newsletter & Journal
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Subscribe to receive private seasonal invitations, chef recipes, and spa releases.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-[#7A8A6F]/20 border border-[#7A8A6F]/40 text-[#7A8A6F] rounded-xl text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing to our journal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#7A8A6F] transition-colors pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#7A8A6F] hover:bg-[#68775D] text-white rounded-lg transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[11px] text-rose-400">{newsletterError}</p>
                )}
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] text-white/40 uppercase tracking-widest block mb-2">Follow Our Journal</span>
              <div className="flex gap-3 text-white/70">
                {/* SVG for Instagram */}
                <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* SVG for LinkedIn */}
                <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Awards & Recognition */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A9825E]">
              Accreditations & Awards
            </h4>
            <div className="grid grid-cols-2 gap-3 text-white/50">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center space-y-1">
                <Award className="w-5 h-5 mx-auto text-[#A9825E]" />
                <span className="text-[10px] uppercase font-mono block text-white/80">Michelin Guide</span>
                <span className="text-[9px] block text-white/50">Key Award 2026</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center space-y-1">
                <Award className="w-5 h-5 mx-auto text-[#7A8A6F]" />
                <span className="text-[10px] uppercase font-mono block text-white/80">Condé Nast</span>
                <span className="text-[9px] block text-white/50">Top 10 Resort</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center space-y-1">
                <Award className="w-5 h-5 mx-auto text-[#7A8A6F]" />
                <span className="text-[10px] uppercase font-mono block text-white/80">Small Luxury</span>
                <span className="text-[9px] block text-white/50">Member Hotels</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-center space-y-1">
                <Award className="w-5 h-5 mx-auto text-[#A9825E]" />
                <span className="text-[10px] uppercase font-mono block text-white/80">Green Key</span>
                <span className="text-[9px] block text-white/50">100% Eco Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© 2026 Aura Resort & Spa. All rights reserved. Designed for quiet luxury.</p>

          <div className="flex flex-wrap gap-6 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
