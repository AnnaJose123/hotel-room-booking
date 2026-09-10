import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import PillRow from './components/PillRow';
import FeatureGrid from './components/FeatureGrid';
import RoomCards from './components/RoomCards';
import BookingWidget from './components/BookingWidget';
import OfferCards from './components/OfferCards';
import MasonryGallery from './components/MasonryGallery';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [prefilledRoom, setPrefilledRoom] = useState(null);

  const handleBookRoom = (roomName) => {
    setPrefilledRoom(roomName);
  };

  const handleResetPrefill = () => {
    setPrefilledRoom(null);
  };

  return (
    <>
      {/* Luxury Opening Preloader Screen */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="min-h-screen bg-[#F7F5F0] text-[#2C2C28] font-sans antialiased selection:bg-[#7A8A6F] selection:text-white">
        {/* Header & Sticky Navigation */}
        <Header onBookClick={handleResetPrefill} />

        {/* Hero Section */}
        <Hero onBookClick={handleResetPrefill} />

        {/* Pill Tag Row */}
        <PillRow />

        {/* Feature Grid Section */}
        <FeatureGrid />

        {/* Available Rooms Carousel & Grid */}
        <RoomCards onBookRoom={handleBookRoom} />

        {/* Interactive Booking Widget Section (Django API Connected) */}
        <BookingWidget prefilledRoom={prefilledRoom} onResetPrefill={handleResetPrefill} />

        {/* Package Offers Section */}
        <OfferCards onSelectOfferRoom={handleBookRoom} />

        {/* Masonry Photo Gallery */}
        <MasonryGallery />

        {/* Event CTA Banner */}
        <CtaBanner onBookClick={handleResetPrefill} />

        {/* Multi-column Footer */}
        <Footer />
      </div>
    </>
  );
}
