import { Phone, CalendarClock, CheckCircle2, Star, User, Mail, FileText, ChevronRight, AlertCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { Appointment } from '../types';

interface HeroProps {
  onQuoteSubmit: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
  activeAppointments: Appointment[];
  onCancelAppointment: (id: string) => void;
}

export default function Hero({ onQuoteSubmit, activeAppointments, onCancelAppointment }: HeroProps) {
  // Form states matching layout screenshot exactly
  const [fullName, setFullName] = useState('David-Warner');
  const [phoneNumber, setPhoneNumber] = useState('+88-123-4567');
  const [email, setEmail] = useState('david@gmail.com');
  const [serviceType, setServiceType] = useState('Repair / Install / Maintenance');
  const [message, setMessage] = useState('Additional Notes');

  // Interactive UI helpers
  const [dialed, setDialed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim() || !email.trim()) {
      alert('Please fill out all primary contact fields!');
      return;
    }
    
    onQuoteSubmit({
      fullName,
      phoneNumber,
      email,
      serviceType,
      message,
    });

    setIsSuccess(true);
    // Auto reset representation helper
    setTimeout(() => {
      setIsSuccess(false);
    }, 4500);
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+88-456-7890');
    setDialed(true);
    setTimeout(() => setDialed(false), 3000);
  };

  // Filter out background database records to keep the page's original layout matching the image identically
  const userCreatedAppointments = activeAppointments.filter(appt => !appt.id.startsWith('default-'));

  return (
    <section id="home" className="relative min-h-screen bg-brand-dark pt-32 pb-4 overflow-visible">
      
      {/* Background House Roof line with Blue/Dark overlay exactly matching */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center select-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(26, 29, 32, 0.96) 20%, rgba(26, 29, 32, 0.7) 50%, rgba(0, 123, 255, 0.25) 100%), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'multiply'
        }}
      />

      {/* Hero Content Grid Area */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Content Text block & CTAs (7-cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline showing yellow dot badge */}
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#FFC107] inline-block shrink-0" />
              <span className="font-sans text-[13px] font-bold text-white uppercase tracking-widest leading-none">
                Stay Cool All Year Round
              </span>
            </div>

            {/* Title display typography */}
            <h1 className="font-sans font-bold text-[36px] sm:text-[44px] lg:text-[48px] text-white leading-[1.25] tracking-tight">
              Stay Cool &amp; Comfortable <br />
              With Expert AC Repair
            </h1>

            {/* Body paragraph matching word-for-word truncation limit of mockup reference */}
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-gray-300 max-w-xl">
              At Coolvix, we deliver fast, reliable, and affordable air conditioning services to keep your home or business comfortable—no matter the season. From quick repairs to full installations, our certified technicians have you
            </p>

            {/* CTA Buttons in horizontal flow */}
            <div className="flex flex-wrap items-center gap-[15px] pt-2">
              
              {/* Phone dispatch button */}
              <button
                onClick={copyPhoneNumber}
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#FFC107] hover:bg-yellow-500 px-5 py-3 font-sans text-[13px] font-bold tracking-wide uppercase text-[#1A1D20] transition active:scale-97 cursor-pointer shadow-md"
                title="Click to copy helpline code"
              >
                <Phone className="h-4 w-4 fill-[#1A1D20] text-[#1A1D20] shrink-0" />
                <span>(88)-456-7890</span>
              </button>

              {/* Discover More navigations */}
              <a
                href="#about"
                className="inline-flex items-center gap-1 leading-none rounded-[4px] bg-[#FFC107] hover:bg-yellow-500 px-5 py-[14px] font-sans text-[13px] font-bold tracking-wide uppercase text-[#1A1D20] transition active:scale-97 shadow-md"
              >
                <span>Discover More</span>
                <span className="font-sans text-[14px] font-medium leading-none ml-1">↗</span>
              </a>

            </div>

            {/* Copy Notification Toast */}
            {dialed && (
              <div className="inline-block bg-[#007BFF] text-white rounded text-xs font-semibold px-4 py-2 mt-2 animate-fade-in shadow-lg">
                Helpline (+88-456-7890) copied to clipboard!
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: The Priority Booking Form Card (5-cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[12px] p-6 sm:p-[35px] text-left shadow-2xl border border-gray-100 relative">
              
              {/* Direct Booking HTML Form with fully prefilled input items */}
              <form onSubmit={handleSubmit} className="space-y-[15px]">
                
                {/* Full name input */}
                <div>
                  <label htmlFor="full-name" className="block text-[12px] font-bold text-[#1A1D20] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs font-medium text-[#4A4D50] bg-[#F8F9FA] border border-[#E9ECEF] rounded-[4px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFC107] focus:bg-white transition"
                    placeholder="Full Name"
                  />
                </div>

                {/* Phone number input */}
                <div>
                  <label htmlFor="phone-number" className="block text-[12px] font-bold text-[#1A1D20] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone-number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full text-xs font-medium text-[#4A4D50] bg-[#F8F9FA] border border-[#E9ECEF] rounded-[4px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFC107] focus:bg-white transition"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-[12px] font-bold text-[#1A1D20] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs font-medium text-[#4A4D50] bg-[#F8F9FA] border border-[#E9ECEF] rounded-[4px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFC107] focus:bg-white transition"
                    placeholder="Email"
                  />
                </div>

                {/* Service type input */}
                <div>
                  <label htmlFor="service-type" className="block text-[12px] font-bold text-[#1A1D20] mb-1.5">
                    Service Type
                  </label>
                  <input
                    type="text"
                    id="service-type"
                    required
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full text-xs font-medium text-[#4A4D50] bg-[#F8F9FA] border border-[#E9ECEF] rounded-[4px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFC107] focus:bg-white transition"
                    placeholder="Service Type"
                  />
                </div>

                {/* Message notes input */}
                <div>
                  <label htmlFor="message" className="block text-[12px] font-bold text-[#1A1D20] mb-1.5">
                    Message
                  </label>
                  <input
                    type="text"
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs font-medium text-[#4A4D50] bg-[#F8F9FA] border border-[#E9ECEF] rounded-[4px] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFC107] focus:bg-white transition"
                    placeholder="Message"
                  />
                </div>

                {/* Action submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 rounded-[4px] bg-[#FFC107] hover:bg-yellow-500 py-3.5 px-4 font-sans text-[13px] font-bold tracking-wide uppercase text-[#1A1D20] transition active:scale-97 cursor-pointer shadow"
                >
                  <span>Book Appointment</span>
                  <span className="font-sans text-[14px]">↗</span>
                </button>

              </form>

              {/* Embedded success interaction modal */}
              {isSuccess && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 px-6 py-10 text-center rounded-[12px] animate-fade-in border border-green-500/20">
                  <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4 animate-scale-up">
                    <Check className="h-7 w-7 stroke-[3]" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-[#1A1D20]">
                    Booking Saved!
                  </h3>
                  <p className="font-sans text-[11px] text-[#5A626A] mt-2 max-w-sm">
                    Thank you <span className="font-semibold text-[#1A1D20]">{fullName}</span>. Your service request is received.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Current Active user-created bookings only — stays hidden from initial state layout, rendering only on click */}
        {userCreatedAppointments.length > 0 && (
          <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-5 text-left animate-slide-up relative z-30">
            <h4 className="font-sans font-bold text-xs text-[#FFC107] uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <CalendarClock className="h-4 w-4" />
              Your Active Pending Reservations ({userCreatedAppointments.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userCreatedAppointments.map((appt) => (
                <div key={appt.id} className="bg-black/20 rounded-lg p-3.5 border border-white/5 flex items-start justify-between gap-2.5">
                  <div className="space-y-1">
                    <p className="font-sans text-xs font-bold text-white leading-tight">
                      {appt.serviceType}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Reserved for: {appt.fullName}
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono">
                      Phone: {appt.phoneNumber}
                    </p>
                  </div>
                  <button
                    onClick={() => onCancelAppointment(appt.id)}
                    className="text-[10px] font-bold text-red-400 hover:text-red-300 bg-red-400/10 px-2 py-1 rounded transition shrink-0"
                    title="Cancel Booking"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CENTRED OVERLAPPING showcase photo exactly matching */}
        <div 
          id="tech-photo-overlap" 
          className="relative z-25 mt-16 md:mt-24 lg:mt-32 -mb-14 md:-mb-24 lg:-mb-28 rounded-[16px] overflow-hidden shadow-2xl border-4 border-white/15 aspect-[16/9] select-none max-w-5xl mx-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1500&q=80" 
            alt="Experienced Technician repairing rooftop AC fan condenser element" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>

    </section>
  );
}
