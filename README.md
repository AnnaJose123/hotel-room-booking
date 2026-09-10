# 🌲 AURA RESORT & SPA — Hotel Room Booking Application

An award-winning, portfolio-quality **Hotel Room Booking Web Application** featuring a **React (Vite + Tailwind CSS)** frontend and a **Django REST Framework (DRF)** backend.

Designed around a modern minimalist **"Quiet Luxury" Scandinavian Boutique Hotel** aesthetic (*Aura Resort & Spa*), the application incorporates an off-white/cream canvas (`#F7F5F0`), sage-green (`#7A8A6F`), warm wood brown (`#A9825E`), refined serif+sans typography (*Playfair Display* & *Plus Jakarta Sans*), preloader animations, mega-menu navigation, interactive booking widgets connected to a Django API engine, room card auto-fill triggers, full-screen lightbox galleries, and responsive drawer navigation.

---

## 🚀 Technology Stack

### Backend (`backend/`)
- **Python 3.14 / Django 5.x** — Robust web application framework
- **Django REST Framework (DRF)** — RESTful API views & serializer validations
- **django-cors-headers** — Cross-Origin Resource Sharing for React dev server (`localhost:5173`)
- **SQLite 3** — Relational database persistence

### Frontend (`frontend/`)
- **React 19 (Vite)** — Blazing fast component architecture
- **Tailwind CSS v4** — Utility-first quiet luxury design system
- **Lucide React** — Minimalist vector icon set
- **Axios** — Asynchronous HTTP client for API requests

---

## 🏛️ Key Features

1. **Preloader & Monogram Branding**: Animated splash screen on initial mount displaying brand monogram and progress indicator.
2. **Sticky Header & Mega-Menu**: Top utility bar with telephone & EN/DE language switcher, sticky blur background on scroll, and expand-on-hover mega menu.
3. **Hero Crossfade Slideshow**: 5-second auto-crossfading slideshow with 4 luxury resort images, poetic headlines, and smooth-scroll CTAs.
4. **Interactive Booking Engine**:
   - Accepts Customer Name, Phone Number, Room Type, Check-in Date, Check-out Date, and Guest Count.
   - Client-side validation: Required fields, regex phone validation, date sequencing (`check_out > check_in`, `check_in >= today`), and positive guest limits.
   - Real-time POST to Django DRF API endpoint (`http://127.0.0.1:8000/api/bookings/`).
   - Loading spinner state during submission.
   - Award-winning Success Confirmation Modal UI with reservation reference ID `#AUR-XXXX`, summary card, and print option.
   - Error highlight toast banners handling server validation failures.
5. **Room Display & Pre-fill**: Horizontally scrollable & grid room cards (Nordic Standard Suite, Deluxe Lakeview Suite, Grand Haven Suite, Forest Eco Villa, Royal Penthouse). Clicking **"Book Now"** smooth-scrolls to the booking form and automatically pre-fills that room type!
6. **Feature Grid**: 3-column quiet luxury amenities (Thermal Hydrotherapy, Farm-to-Table Gastronomy, Wilderness Excursions) with image zoom effect and detail modals.
7. **Masonry Photo Gallery**: Pinterest-style masonry grid layout with full-screen Lightbox Modal preview and next/previous controls.
8. **Bespoke Package Offers**: Seasonal escape packages with inclusions, prices, and direct booking triggers.
9. **Tag Chip Row**: Interactive tags for resort activities.
10. **Multi-Column Footer**: Brand details, live newsletter subscription form with validation, social links, and grayscale award/partner badges (Michelin Guide 2026, Condé Nast Traveler, Small Luxury Hotels).

---

## 📡 API Endpoint Reference

### 1. `POST /api/bookings/`
Creates a new room reservation.

**Request Payload:**
```json
{
  "name": "Anna Jose",
  "phone": "+45 80 12 34 56",
  "room": "Deluxe Lakeview Suite",
  "check_in": "2026-10-15",
  "check_out": "2026-10-18",
  "guests": 2
}
```

**Success Response (HTTP 201 Created):**
```json
{
  "message": "Room booking request submitted successfully.",
  "booking": {
    "id": 1,
    "name": "Anna Jose",
    "phone": "+45 80 12 34 56",
    "room": "Deluxe Lakeview Suite",
    "check_in": "2026-10-15",
    "check_out": "2026-10-18",
    "guests": 2,
    "created_at": "2026-09-10T14:10:00Z"
  }
}
```

**Validation Error Response (HTTP 400 Bad Request):**
```json
{
  "errors": {
    "phone": ["Please enter a valid phone number (e.g. +45 80 12 34 56 or 555-0199)."],
    "check_out": ["Check-out date must be after check-in date."]
  }
}
```

### 2. `GET /api/rooms/`
Returns the available rooms catalog with prices, square meters, amenities, and image links.

### 3. `GET /api/bookings/`
Returns list of all existing room reservations.

---

## 🛠️ Setup & Running Instructions

### Prerequisites
- Python 3.10+
- Node.js 18+ and npm

### 1. Running the Django Backend

```bash
# Navigate to backend directory
cd backend

# Apply database migrations
python manage.py migrate

# (Optional) Run backend automated unit test suite
python manage.py test

# Start Django Development Server at http://127.0.0.1:8000
python manage.py runserver 8000
```

### 2. Running the React Frontend

Open a second terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install node dependencies
npm install

# Start Vite React Dev Server at http://localhost:5173
npm run dev
```

Visit **`http://localhost:5173`** in your web browser.

---

## 🧪 Testing

Run backend tests:
```bash
cd backend
python manage.py test
```

Expected result:
```text
Found 5 test(s).
Creating test database for alias 'default'...
.....
----------------------------------------------------------------------
Ran 5 tests in 0.029s

OK
```

---

## 🐙 Pushing to GitHub

To push this repository to GitHub under username **`AnnaJose123`**:

```bash
# Navigate to project root
cd hotel-room-booking

# Add GitHub Remote
git remote add origin https://github.com/AnnaJose123/hotel-room-booking.git

# Set main branch and push
git branch -M main
git push -u origin main
```

---

## 📄 License
Created as a portfolio-quality practical application for Aura Resort & Spa. All rights reserved.
