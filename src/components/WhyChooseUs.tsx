import React, { useState } from 'react';
import { ShieldCheck, Users, Headphones, DollarSign, Play, ArrowRight, Fan, Sparkles, Check, Phone } from 'lucide-react';

interface BenefitCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface WhyChooseUsProps {
  onContactClick: () => void;
  onPlayVideo: () => void;
}

export default function WhyChooseUs({ onContactClick, onPlayVideo }: WhyChooseUsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const benefits: BenefitCard[] = [
    {
      id: 'fast-reliable',
      title: 'Fast & Reliable Service',
      description: 'Immediate response routing ensures certified assistance arrives right on time.',
      icon: ShieldCheck,
    },
    {
      id: 'certified-techs',
      title: 'Certified Technicians',
      description: 'Staff undergo annual HVAC technical evaluations and strict background checks.',
      icon: Users,
    },
    {
      id: 'transparent-pricing',
      title: 'Transparent Pricing',
      description: 'Clear upfront quotes and pricing sheets are provided with zero hidden fees.',
      icon: DollarSign,
    },
    {
      id: 'support-247',
      title: '24/7 Customer Support',
      description: 'Our customer support line stays online day or night for urgent emergency needs.',
      icon: Headphones,
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setShowInquiryModal(false);
      setInquiryName('');
      setInquiryMsg('');
    }, 3000);
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-24 bg-[#FFFDF4] border-t border-[#E9ECEF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Multi-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] items-center">
          
          {/* LEFT COLUMN: Texts, tagline, 2x2 grid, CTA */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
              <span className="font-sans text-[14px] font-bold text-[#4A4D50] tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>

            {/* Title heading */}
            <h2 className="font-sans text-[32px] font-bold text-[#1A1D20] leading-[1.25] tracking-tight">
              Trusted by Hundreds for Cooling <br />
              And Comfort Solutions
            </h2>

            {/* Description Body text */}
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A] max-w-xl">
              At Coolvix, we've been keeping homes and businesses cool for over a decade. Our certified technicians specialize in AC repair, maintenance, and installation with a focus on fast service, honest pricing, and long-term comfort. At Coolvix, we've been keeping homes and businesses cool for over a decade.
            </p>

            {/* 2x2 Grid of benefits cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pt-2">
              {benefits.map((item) => {
                const IconComponent = item.icon;
                const isHovered = hoveredCard === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="bg-white rounded-[12px] p-[24px] border border-[#E9ECEF] transition-all duration-300 relative overflow-hidden group flex flex-col items-center text-center shadow-xs md:hover:shadow-md"
                  >
                    {/* Centered vector line style custom icon frame */}
                    <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFFDF4] text-[#1A1D20] border border-[#FFC107]/20">
                      <IconComponent className="h-[22px] w-[22px] text-[#1A1D20]" />
                      
                      {/* Subtle yellow curved accent highlight baseline beneath icon frame */}
                      <span className="absolute bottom-[-1px] inset-x-3 h-[2px] bg-[#FFC107] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>

                    <h3 className="font-sans text-[15px] font-bold text-[#1A1D20]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[12px] font-normal text-[#5A626A] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons: Contact Us CTA & Blue Play circular video button */}
            <div className="flex items-center gap-4 pt-3">
              <button
                onClick={() => setShowInquiryModal(true)}
                className="flex items-center gap-2 rounded-[6px] bg-[#FFC107] hover:bg-yellow-500 px-[24px] py-[12px] font-sans text-[13px] font-bold tracking-wide uppercase text-[#1A1D20] transition active:scale-97 cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 text-[#1A1D20]" />
              </button>

              {/* Pulsating video play button */}
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-11 w-11 rounded-full bg-[#007BFF]/30 animate-ping" />
                <button
                  onClick={onPlayVideo}
                  className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#007BFF] text-white shadow-md hover:bg-blue-600 active:scale-95 transition cursor-pointer"
                  title="Watch Introduction Video"
                >
                  <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Staggered, dual overlapping image block with satisfaction badge */}
          <div className="lg:col-span-6 relative pb-12 lg:pb-0">
            <div className="flex items-center justify-center gap-5 sm:gap-6 relative z-10 max-w-lg mx-auto">
              
              {/* Left Image: lower vertical baseline (helmet technician standing looking up) */}
              <div className="w-[48%] mt-8 rounded-[16px] overflow-hidden border border-[#E9ECEF] shadow-lg group bg-gray-900 select-none aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80"
                  alt="Certified engineer checkup system unit maintenance"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Image: higher vertical baseline (crouching technician laptop rooftop) */}
              <div className="w-[48%] mb-8 rounded-[16px] overflow-hidden border border-[#E9ECEF] shadow-lg relative group bg-gray-900 select-none aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80"
                  alt="HVAC specialist configuring condensing unit with terminal"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                {/* Floating overlay badge: Absolute bottom-left position overlapping */}
                <div className="absolute bottom-4 left-[-20px] md:left-[-40px] z-20 bg-white rounded-[10px] p-[20px] px-[30px] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center max-w-[190px] select-none animate-bounce-slow">
                  <span className="font-sans text-[28px] font-extrabold text-[#1A1D20] leading-none">
                    100%
                  </span>
                  <span className="font-sans text-[12px] font-bold text-[#5A626A] mt-1 uppercase tracking-wide leading-tight">
                    Satisfaction Guarantee
                  </span>
                </div>
              </div>

            </div>

            {/* Decorative background grids */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] w-[90%] bg-radial-gradient from-yellow-100/30 to-transparent pointer-events-none -z-10" />

          </div>

        </div>

      </div>

      {/* Embedded Inquiry Dialog popup */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-2xl border border-gray-200 text-left">
            
            {inquirySent ? (
              <div className="text-center py-8 animate-scale-up">
                <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-sans font-bold text-lg text-[#1A1D20]">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-[#5A626A] mt-2 max-w-xs mx-auto">
                  Thank you, <span className="font-semibold">{inquiryName || 'Customer'}</span>. Our service response team has logged your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#007BFF] animate-pulse" />
                    <h3 className="font-sans font-bold text-sm text-[#1A1D20]">
                      Get In Touch With Coolvix
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowInquiryModal(false)}
                    className="text-gray-400 hover:text-gray-600 font-bold text-xs"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-extrabold uppercase text-[#1A1D20] tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full text-xs bg-[#F8F9FA] border border-gray-200 rounded px-3 py-2.5 focus:outline-[#FFC107] focus:bg-white text-[#1A1D20]"
                    placeholder="e.g. David Warner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-extrabold uppercase text-[#1A1D20] tracking-wider">
                    Inquiry Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    className="w-full text-xs bg-[#F8F9FA] border border-gray-200 rounded px-3 py-2 focus:outline-[#FFC107] focus:bg-white text-[#1A1D20] resize-none"
                    placeholder="Tell us about AC issues, thermostat upgrades, code evaluations..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-yellow-500 py-3 text-xs font-bold uppercase tracking-wider text-[#1A1D20] rounded transition active:scale-97"
                >
                  Send Inquiry Now
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
