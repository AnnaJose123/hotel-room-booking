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

  useEffect(() => {
    // Support URL query parameters like ?package=nordic-thermal-escape or ?room=Deluxe+Lakeview+Suite
    const params = new URLSearchParams(window.location.search);
    const pkgParam = params.get('package');
    const roomParam = params.get('room');

    const OFFERS_CATALOG = [
      {
        id: 1,
        slug: "nordic-thermal-escape",
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
        slug: "romantic-fjord-retreat",
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
        slug: "wilderness-villa-journey",
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

    if (pkgParam) {
      const match = OFFERS_CATALOG.find(
        (o) => o.slug === pkgParam.toLowerCase() || o.id.toString() === pkgParam || o.title.toLowerCase().includes(pkgParam.toLowerCase())
      );
      if (match) {
        setSelectedPackage(match);
        setPrefilledRoom(match.roomPrefill);
      }
    } else if (roomParam) {
      setPrefilledRoom(roomParam);
    }
  }, []);

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

      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F6F3EC] text-[#211F1A] font-sans antialiased selection:bg-[#9C7A50] selection:text-white relative">
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
