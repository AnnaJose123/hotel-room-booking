import React, { useState } from 'react';
import { Tag } from 'lucide-react';

const TAGS = [
  { name: '#SpaHydrotherapy', id: 'experiences' },
  { name: '#MichelinDining', id: 'experiences' },
  { name: '#LakeviewSuites', id: 'rooms' },
  { name: '#PrivateCedarSauna', id: 'rooms' },
  { name: '#FjordKayaking', id: 'experiences' },
  { name: '#HelicopterGlacierTour', id: 'experiences' },
  { name: '#ForagingClass', id: 'experiences' },
  { name: '#PlungePoolVilla', id: 'rooms' },
  { name: '#StargazingSession', id: 'gallery' },
  { name: '#SeasonalEscape', id: 'offers' }
];

export default function PillRow() {
  const [activeTag, setActiveTag] = useState('#SpaHydrotherapy');

  const handleTagClick = (tag) => {
    setActiveTag(tag.name);
    const element = document.getElementById(tag.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-6 bg-[#F7F5F0] border-y border-[#E6E1D8]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A9825E] font-semibold shrink-0">
          <Tag className="w-4 h-4" />
          <span>Resort Highlights</span>
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
          {TAGS.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => handleTagClick(tag)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-300 ${
                activeTag === tag.name
                  ? 'bg-[#7A8A6F] text-white border-[#7A8A6F] shadow-sm'
                  : 'bg-white text-[#2C2C28]/80 border-[#E6E1D8] hover:border-[#7A8A6F] hover:text-[#7A8A6F]'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
