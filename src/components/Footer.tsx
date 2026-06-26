import React, { useState } from 'react';
import { Fan, Phone, Mail, MapPin, Clock, ShieldAlert, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#1C2024] text-[#CBD5E1] pt-12 pb-8 border-t border-[#2E353B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TIER 1: Newsletter / Brand Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 border-b border-[#2E353B]">
          
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC107] text-[#1C2024] animate-spin-slow">
                <Fan className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="font-sans font-black text-[20px] tracking-wider text-white">
                COOLVIX
              </span>
            </div>

            {/* Mid Tagline */}
            <span className="font-sans text-[20px] font-bold text-white tracking-tight">
              Stay Cool with Coolvix
            </span>

          </div>

          {/* Subscription Inline Form Layout */}
          <div>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded px-4 py-3 text-green-400 text-xs font-semibold animate-scale-up">
                <Check className="h-4 w-4 shrink-0" />
                <span>Thank you for subscribing to our dispatch updates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-[#1A1D20] text-xs font-medium placeholder-[#94A3B8] px-4 py-3 rounded-[4px] sm:rounded-r-none sm:rounded-l-[4px] focus:outline-none focus:ring-1 focus:ring-[#FFC107] w-full sm:w-[280px]"
                />
                <button
                  type="submit"
                  className="bg-[#FFC107] hover:bg-yellow-500 text-[#1A1D20] text-[13px] font-semibold px-6 py-3 rounded-[4px] sm:rounded-l-none sm:rounded-r-[4px] transition active:scale-97 shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* TIER 2: 4-Column Directory Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] py-12 text-left">
          
          {/* Column 1: About Corporate Info */}
          <div className="space-y-4">
            <h3 className="font-sans text-[18px] font-bold text-white tracking-tight">
              About Coolvix
            </h3>
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#CBD5E1]">
              Coolvix is your trusted local expert in AC repair, installation, and maintenance. We're committed to delivering fast, affordable, and high-quality cooling solutions for homes and businesses.
            </p>
          </div>

          {/* Column 2: Useful directory links */}
          <div className="space-y-4">
            <h3 className="font-sans text-[18px] font-bold text-white tracking-tight">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#home' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] font-medium text-[#CBD5E1] hover:text-[#FFC107] transition-all flex items-center gap-2 group"
                  >
                    <span className="text-[#FFC107] font-bold transition-transform group-hover:translate-x-1">
                      »
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="space-y-4">
            <h3 className="font-sans text-[18px] font-bold text-white tracking-tight">
              Popular Services
            </h3>
            <ul className="space-y-3">
              {[
                'AC Repair',
                'Emergency AC Repair',
                'AC Installation',
                'Seasonal Maintenance',
                'Commercial HVAC Solutions'
              ].map((serv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="font-sans text-[14px] font-medium text-[#CBD5E1] hover:text-[#FFC107] transition-all flex items-center gap-2 group"
                  >
                    <span className="text-[#FFC107] font-bold transition-transform group-hover:translate-x-1">
                      »
                    </span>
                    <span>{serv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Full Contact Protocols */}
          <div className="space-y-4">
            <h3 className="font-sans text-[18px] font-bold text-white tracking-tight">
              Contact Info
            </h3>
            <ul className="space-y-3">
              
              {/* Phone Line */}
              <li className="flex items-center gap-3">
                <span className="text-[#FFC107] shrink-0">
                  <Phone className="h-[16px] w-[16px]" />
                </span>
                <span className="font-sans text-[14px] font-medium text-[#CBD5E1]">
                  (+88)-123-4567
                </span>
              </li>

              {/* Mail Protocol */}
              <li className="flex items-center gap-3">
                <span className="text-[#FFC107] shrink-0">
                  <Mail className="h-[16px] w-[16px]" />
                </span>
                <a
                  href="mailto:support@gmail.com"
                  className="font-sans text-[14px] font-medium text-[#CBD5E1] hover:text-[#FFC107] transition"
                >
                  support@gmail.com
                </a>
              </li>

              {/* Office Address */}
              <li className="flex items-start gap-3">
                <span className="text-[#FFC107] shrink-0 mt-0.5">
                  <MapPin className="h-[16px] w-[16px]" />
                </span>
                <span className="font-sans text-[14px] font-medium text-[#CBD5E1]">
                  Office: 123 Coolvix Street
                </span>
              </li>

              {/* Working Hours */}
              <li className="flex items-center gap-3">
                <span className="text-[#FFC107] shrink-0">
                  <Clock className="h-[16px] w-[16px]" />
                </span>
                <span className="font-sans text-[14px] font-medium text-[#CBD5E1]">
                  Mon-Sat: 8:00 AM - 8:00 PM
                </span>
              </li>

              {/* Urgent Day Indicator */}
              <li className="flex items-center gap-3">
                <span className="text-[#FFC107] shrink-0">
                  <ShieldAlert className="h-[16px] w-[16px]" />
                </span>
                <span className="font-sans text-[14px] font-medium text-[#CBD5E1]">
                  Sun: Emergency Calls Only
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* TIER 3: Custom Sub-Footer Metadata & Social block connect */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-[#2E353B]">
          
          {/* Copyright label on the left */}
          <p className="font-sans text-[13px] font-normal text-[#94A3B8]">
            &copy; {new Date().getFullYear()} Template Orbit. All rights reserved.
          </p>

          {/* Social connections block aligned to the right */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-[14px] font-bold text-white">
              Follow Us
            </span>
            <div className="flex items-center gap-1.5">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter (X)' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((soc, idx) => {
                const SocIcon = soc.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-[#FFC107] hover:bg-yellow-500 text-[#1C2024] shadow active:scale-90 transition"
                    aria-label={`Follow us on ${soc.label}`}
                    title={soc.label}
                  >
                    <SocIcon className="h-4 w-4" strokeWidth={2.3} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
