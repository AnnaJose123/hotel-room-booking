import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Users, Home, User, Phone, CheckCircle, AlertCircle, Loader2, Sparkles, X, Printer } from 'lucide-react';

const OFFERED_ROOMS = [
  'Nordic Standard Suite',
  'Deluxe Lakeview Suite',
  'Grand Haven Suite',
  'Forest Eco Villa',
  'Royal Penthouse Suite'
];

export default function BookingWidget({ prefilledRoom, onResetPrefill }) {
  const getTomorrowStr = (addDays = 1) => {
    const d = new Date();
    d.setDate(d.getDate() + addDays);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    room: OFFERED_ROOMS[1],
    check_in: getTomorrowStr(1),
    check_out: getTomorrowStr(3),
    guests: 2
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    if (prefilledRoom && OFFERED_ROOMS.includes(prefilledRoom)) {
      setFormData((prev) => ({ ...prev, room: prefilledRoom }));
    }
  }, [prefilledRoom]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
    setServerError('');
  };

  const validateClient = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number format.';
      }
    }

    if (!formData.room) {
      newErrors.room = 'Please select a room type.';
    }

    if (!formData.check_in) {
      newErrors.check_in = 'Check-in date is required.';
    }

    if (!formData.check_out) {
      newErrors.check_out = 'Check-out date is required.';
    } else if (formData.check_in && formData.check_out <= formData.check_in) {
      newErrors.check_out = 'Check-out date must be after check-in date.';
    }

    if (!formData.guests || formData.guests < 1) {
      newErrors.guests = 'At least 1 guest is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validateClient()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bookings/', formData);
      setSuccessData(response.data);
      if (onResetPrefill) onResetPrefill();
    } catch (err) {
      console.error('Booking submission error:', err);
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
        setServerError('Please correct the highlighted errors in your reservation details.');
      } else {
        setServerError('Unable to reach the reservation server. Ensure Django backend is running on http://127.0.0.1:8000.');
      }
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setSuccessData(null);
    setFormData({
      name: '',
      phone: '',
      room: OFFERED_ROOMS[1],
      check_in: getTomorrowStr(1),
      check_out: getTomorrowStr(3),
      guests: 2
    });
  };

  return (
    <section id="booking" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F7F5F0] relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7A8A6F]/10 text-[#7A8A6F] text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Reservation</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#2C2C28]">
            Reserve Your Sanctuary
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C28]/70 font-light leading-relaxed px-2">
            Select your preferred dates and luxury suite. Connected directly to our real-time Django reservation engine.
          </p>
        </div>

        {/* Server Error Toast Banner */}
        {serverError && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start gap-3 text-xs sm:text-sm shadow-sm animate-fade-in">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">Reservation Notice</p>
              <p className="text-xs text-rose-700/80 mt-0.5">{serverError}</p>
            </div>
          </div>
        )}

        {/* Responsive Booking Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E6E1D8] shadow-xl p-5 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7A8A6F] via-[#A9825E] to-[#7A8A6F]" />

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Customer Name */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Full Name <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="e.g. Anna Jose"
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border ${
                      errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all`}
                  />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.name) ? errors.name[0] : errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Phone Number <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+45 80 12 34 56"
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border ${
                      errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.phone) ? errors.phone[0] : errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Room Selection Dropdown */}
              <div className="space-y-1.5 md:col-span-2 lg:col-span-1">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Suite / Villa Type <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <Home className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.room}
                    onChange={(e) => handleChange('room', e.target.value)}
                    className={`w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl border ${
                      errors.room ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all appearance-none cursor-pointer`}
                  >
                    {OFFERED_ROOMS.map((rm) => (
                      <option key={rm} value={rm}>
                        {rm}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#2C2C28]/60 text-xs">
                    ▼
                  </div>
                </div>
                {errors.room && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.room) ? errors.room[0] : errors.room}</span>
                  </p>
                )}
              </div>

              {/* Check-in Date */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Check-In Date <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.check_in}
                    onChange={(e) => handleChange('check_in', e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border ${
                      errors.check_in ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all`}
                  />
                </div>
                {errors.check_in && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.check_in) ? errors.check_in[0] : errors.check_in}</span>
                  </p>
                )}
              </div>

              {/* Check-out Date */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Check-Out Date <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    min={formData.check_in || new Date().toISOString().split('T')[0]}
                    value={formData.check_out}
                    onChange={(e) => handleChange('check_out', e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl border ${
                      errors.check_out ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all`}
                  />
                </div>
                {errors.check_out && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.check_out) ? errors.check_out[0] : errors.check_out}</span>
                  </p>
                )}
              </div>

              {/* Guests Selector */}
              <div className="space-y-1.5">
                <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2C2C28]">
                  Guest Count <span className="text-[#A9825E]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A8A6F]">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', parseInt(e.target.value, 10))}
                    className={`w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl border ${
                      errors.guests ? 'border-rose-500 bg-rose-50/20' : 'border-[#E6E1D8] bg-[#F7F5F0]/50'
                    } text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7A8A6F] transition-all appearance-none cursor-pointer`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#2C2C28]/60 text-xs">
                    ▼
                  </div>
                </div>
                {errors.guests && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{Array.isArray(errors.guests) ? errors.guests[0] : errors.guests}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E1D8]">
              <div className="text-[11px] sm:text-xs text-[#2C2C28]/60 font-light text-center sm:text-left">
                🔒 Best available rate guaranteed • Free cancellation up to 48h prior.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Processing Reservation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Reservation</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Responsive Confirmation Modal */}
      {successData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-[#E6E1D8] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-5 animate-scale-up max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 p-2 text-[#2C2C28]/60 hover:text-[#2C2C28] rounded-full hover:bg-[#F7F5F0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 sm:space-y-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#7A8A6F]/10 text-[#7A8A6F] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A9825E] font-semibold">
                Reservation Confirmed
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#2C2C28] font-normal">
                {successData.message || "Room booking request submitted successfully."}
              </h3>
              <p className="text-xs text-[#2C2C28]/70 font-light">
                Reference Code: <span className="font-mono font-semibold text-[#7A8A6F]">#AUR-{successData.booking?.id || Math.floor(1000 + Math.random() * 9000)}</span>.
              </p>
            </div>

            {/* Details Summary */}
            <div className="bg-[#F7F5F0] rounded-2xl p-4 sm:p-5 border border-[#E6E1D8] space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-[#E6E1D8] pb-2">
                <span className="text-[#2C2C28]/60">Guest Name:</span>
                <span className="font-semibold text-[#2C2C28]">{successData.booking?.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-2">
                <span className="text-[#2C2C28]/60">Phone:</span>
                <span className="font-semibold text-[#2C2C28]">{successData.booking?.phone}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-2">
                <span className="text-[#2C2C28]/60">Selected Suite:</span>
                <span className="font-semibold text-[#7A8A6F]">{successData.booking?.room}</span>
              </div>
              <div className="flex justify-between border-b border-[#E6E1D8] pb-2">
                <span className="text-[#2C2C28]/60">Dates:</span>
                <span className="font-semibold text-[#2C2C28]">
                  {successData.booking?.check_in} to {successData.booking?.check_out}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2C2C28]/60">Party Size:</span>
                <span className="font-semibold text-[#2C2C28]">
                  {successData.booking?.guests} {successData.booking?.guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => window.print()}
                className="w-full sm:flex-1 border border-[#E6E1D8] hover:bg-[#F7F5F0] text-[#2C2C28] text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-[#A9825E]" />
                <span>Print Slip</span>
              </button>
              <button
                onClick={closeSuccessModal}
                className="w-full sm:flex-1 bg-[#7A8A6F] hover:bg-[#68775D] text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
