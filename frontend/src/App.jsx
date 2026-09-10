import React, { useState } from 'react';
import CustomCursor from './components/motion/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import PillRow from './components/PillRow';
import FeatureGrid from './components/FeatureGrid';
import RoomCards from './components/RoomCards';
import BookingWidget from './components/BookingWidget';
import OfferCards from './components/OfferCards';
import MasonryGallery from './components/MasonryGallery';
import LocationMap from './components/LocationMap';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  const [prefilledRoom, setPrefilledRoom] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookRoom = (roomName) => {
    setPrefilledRoom(roomName);
    setSelectedPackage(null);
  };

  const handleSelectPackage = (offer) => {
    setSelectedPackage(offer);
    if (offer && offer.roomPrefill) {
      setPrefilledRoom(offer.roomPrefill);
    }
  };

  const handleResetPackage = () => {
    setSelectedPackage(null);
    setPrefilledRoom(null);
  };

  return (
    <>
      {/* Film Grain Texture Overlay */}
      <div className="film-grain-overlay" />

      {/* Awwwards Lerp Custom Cursor */}
      <CustomCursor />

      <div className="min-h-screen bg-[#F6F3EC] text-[#211F1A] font-sans antialiased selection:bg-[#9C7A50] selection:text-white relative">
        {/* Sticky Header & Navigation */}
        <Header onBookClick={handleResetPackage} />

        {/* Hero Section */}
        <Hero onBookClick={handleResetPackage} />

        {/* Tag Pill Row */}
        <PillRow />

        {/* Feature Grid Section */}
        <FeatureGrid />

        {/* Room Showcase Carousel & Grid */}
        <RoomCards onBookRoom={handleBookRoom} />

        {/* Interactive Booking Widget Section (Django API Connected) */}
        <BookingWidget
          prefilledRoom={prefilledRoom}
          selectedPackage={selectedPackage}
          onResetPackage={handleResetPackage}
        />

        {/* Bespoke Escape Offers */}
        <OfferCards onSelectOfferPackage={handleSelectPackage} />

        {/* Masonry Photo Gallery */}
        <MasonryGallery />

        {/* Location & Interactive Map Section */}
        <LocationMap />

        {/* Event CTA Banner */}
        <CtaBanner onBookClick={handleResetPackage} />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
