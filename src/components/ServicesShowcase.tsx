import React, { useState } from 'react';
import { Phone, ArrowRight, Fan, Cpu, Thermometer, Wind, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import acInstallImg from '../assets/images/ac_install_service_new_1780423833805.png';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
  details: string[];
  specs: { label: string; value: string }[];
}

export default function ServicesShowcase() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('serv-1');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [consultModalService, setConsultModalService] = useState<ServiceItem | null>(null);
  const [consultName, setConsultName] = useState('');
  const [consultMsg, setConsultMsg] = useState('');
  const [consultSuccess, setConsultSuccess] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 'serv-1',
      title: 'AC Installation & Upgrades',
      description: 'Upgrade to high-efficiency cooling handlers with modern thermostat integration and custom zone dampers.',
      image: acInstallImg,
      icon: Cpu,
      details: [
        'SEER2 energy calculations and heat load modeling',
        'Multi-stage scroll compressor configurations',
        'Smart Honeywell / Nest thermostat synchronization',
        'Eco-friendly structural mounting grids'
      ],
      specs: [
        { label: 'Avg. Install Time', value: '4-6 Hours' },
        { label: 'Energy Rating', value: 'Up to 22 SEER' },
        { label: 'Warranty Duration', value: '10 Years Part/Labor' }
      ]
    },
    {
      id: 'serv-2',
      title: 'AC Overhaul & Emergency Repair',
      description: 'Rapid diagnostic troubleshooting. Quick turnaround on compressor motor faults and coolant replacements.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80',
      icon: Thermometer,
      details: [
        'Chlorine-free R-410A refrigerant charge calibration',
        'Capacitor and contactor electric component updates',
        'Fan blade balancing and vibration isolation',
        'Emergency emergency dispatch available 24/7'
      ],
      specs: [
        { label: 'Response Window', value: 'Within 90 Mins' },
        { label: 'Diagnostic Tools', value: 'Ultrasonic / Thermal' },
        { label: 'Emergency Surcharge', value: '$0.00 (Standard)' }
      ]
    },
    {
      id: 'serv-3',
      title: 'Biannual Tune-Up & Maintenance',
      description: 'Protect your system investment with deep coil cleaning, electrical checks, and airflow optimization.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
      icon: Fan,
      details: [
        'Acid wash for outdoor condenser aluminum fins',
        'Condensate drain line flush & algae tablet application',
        'Electrical amperage draw tests on compressor',
        'Return air duct leak inspection'
      ],
      specs: [
        { label: 'Scheduled Visits', value: 'Spring & Autumn' },
        { label: 'Multi-Point Checklist', value: '28 Core Items' },
        { label: 'Efficiency Gain', value: 'Up to 15% Savings' }
      ]
    },
    {
      id: 'serv-4',
      title: 'Indoor Air Quality & Duct Seals',
      description: 'Improve breathability with UV-C light installations, HEPA filters, and certified leak sealant processes.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
      icon: Wind,
      details: [
        'Aeroseal diagnostic air duct leakage seals',
        'Whole-house dynamic HEPA filter racks',
        'UV-C germicidal light sanitizer arrays',
        'Humidity regulating dehumidifier add-ons'
      ],
      specs: [
        { label: 'Airborne Filter Rate', value: '99.97% Particles' },
        { label: 'Seal Material Lifespan', value: '40-Year Rating' },
        { label: 'Certifications', value: 'EPA & ASHRAE Standard' }
      ]
    }
  ];

  const triggerLinkCopy = (id: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/#service-${id}`);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleBookConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSuccess(true);
    setTimeout(() => {
      setConsultSuccess(false);
      setConsultModalService(null);
      setConsultName('');
      setConsultMsg('');
    }, 3000);
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-[#FFFDF4] border-t border-[#E9ECEF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-stretch">
          
          {/* LEFT COLUMN: Static Intro, Phone CTA & Structural Media */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-4">
              
              {/* Tagline tag with blue leading dot */}
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
                <span className="font-sans text-[14px] font-bold text-[#4A4D50] tracking-wide uppercase">
                  Our Services
                </span>
              </div>

              {/* Title Heading */}
              <h2 className="font-sans text-[32px] font-bold text-[#1A1D20] leading-[1.25] tracking-tight">
                Premium Air Comfort <br />
                &amp; Engineered Services
              </h2>

              {/* Description */}
              <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A]">
                We combine industry-leading thermal diagnostics with expert field engineers to deliver unbeatable residential and workspace cooling performance. Select any of our key services listed next to explore structured details, specifications, and certified guarantees.
              </p>

              {/* Phone CTA Button */}
              <div className="pt-2">
                <a
                  href="tel:884567890"
                  className="inline-flex items-center gap-3 bg-[#FFC107] hover:bg-yellow-500 rounded-[6px] px-5 py-3 font-sans text-[13px] font-semibold text-[#1A1D20] transition active:scale-97 cursor-pointer"
                >
                  <Phone className="h-4.5 w-4.5 fill-[#1A1D20] text-[#1A1D20]" />
                  <span>Call Dispatcher: (88) 456-7890</span>
                </a>
              </div>

            </div>

            {/* Showcase Media Asset ( approx 4:3 cropped photo with layered interactive overlay ) */}
            <div className="relative rounded-[12px] overflow-hidden border border-[#E9ECEF] aspect-[4/3] shadow-lg group bg-gray-900 select-none">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=1000&q=80"
                alt="Expert technician adjusting HVAC thermal fan handler control terminal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              {/* Thematic Overlap Gradient badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                <div className="space-y-1">
                  <span className="bg-[#007BFF] text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded">
                    Field Clearance Approved
                  </span>
                  <h4 className="font-sans font-bold text-white text-base mt-1.5">
                    Real-time Airflow &amp; Thermostat Overhaul
                  </h4>
                  <p className="text-[11px] text-gray-300">
                    Our certified local dispatch trucks load multi-stage fans, coolant scales, and filter racks daily to execute zero-delay service routines.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Vertical Stack of 4 asymmetric service cards */}
          <div className="lg:col-span-7 flex flex-col gap-[16px] justify-center">
            {services.map((serv) => {
              const ServiceIcon = serv.icon;
              const isSelected = activeServiceId === serv.id;

              return (
                <div
                  key={serv.id}
                  id={`service-${serv.id}`}
                  className={`rounded-[12px] p-[20px] bg-white border transition-all duration-300 relative text-left ${
                    isSelected 
                      ? 'border-[#FFC107] ring-1 ring-[#FFC107] shadow-md' 
                      : 'border-[#E9ECEF] hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  {/* Outer Asymmetric Split Row */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    
                    {/* Thumbnail split element */}
                    <div 
                      onClick={() => setActiveServiceId(isSelected ? null : serv.id)}
                      className="w-full sm:w-[120px] shrink-0 aspect-[16/10] sm:h-[75px] rounded-[8px] overflow-hidden bg-gray-100 relative group cursor-pointer border border-[#E9ECEF]"
                    >
                      <img
                        src={serv.image}
                        alt={serv.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                      
                      {/* Floating Mini Icon indicator */}
                      <span className="absolute bottom-1 right-1 bg-[#1A1D20]/85 p-1 rounded-sm text-white">
                        <ServiceIcon className="h-3 w-3 text-[#FFC107]" />
                      </span>
                    </div>

                    {/* Text Block content */}
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 
                          onClick={() => setActiveServiceId(isSelected ? null : serv.id)}
                          className="font-sans text-[18px] font-bold text-[#1A1D20] leading-snug cursor-pointer hover:text-[#007BFF] transition"
                        >
                          {serv.title}
                        </h3>
                        {/* Dynamic copy anchor badge */}
                        <button
                          onClick={() => triggerLinkCopy(serv.id)}
                          className="text-[10px] text-gray-400 hover:text-[#007BFF] transition p-1"
                          title="Copy reference link"
                        >
                          {copiedLink === serv.id ? 'Copied Link!' : '#'}
                        </button>
                      </div>
                      <p className="font-sans text-[13px] font-normal leading-[1.5] text-[#5A626A]">
                        {serv.description}
                      </p>
                    </div>

                    {/* Circular link action trigger button */}
                    <div className="self-center sm:self-auto shrink-0 pt-2 sm:pt-0">
                      <button
                        onClick={() => setActiveServiceId(isSelected ? null : serv.id)}
                        className={`flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#FFC107] hover:bg-yellow-500 text-[#1A1D20] shadow transition duration-300 cursor-pointer ${
                          isSelected ? 'rotate-90' : 'rotate-0'
                        }`}
                        title={isSelected ? 'Close details' : 'View specifications'}
                      >
                        <ChevronRight className="h-4.5 w-4.5 stroke-[2.5]" />
                      </button>
                    </div>

                  </div>

                  {/* Interactive detailed specs/bullets expansion drawer */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-[#E9ECEF] flex flex-col md:flex-row gap-6 animate-fade-in">
                      
                      {/* Certified checkmark elements list */}
                      <div className="flex-1 space-y-2">
                        <h4 className="text-[11px] font-extrabold uppercase text-[#1A1D20] tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#007BFF]" />
                          Technical Procedures &amp; Action Items
                        </h4>
                        <ul className="space-y-1.5">
                          {serv.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-[#5A626A]">
                              <span className="text-[#FFC107] font-bold shrink-0 mt-0.5">&bull;</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Performance rating box info sheet */}
                      <div className="w-full md:w-[220px] bg-[#FFFDF4] rounded-lg p-3.5 border border-[#FFC107]/20 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] font-extrabold uppercase text-[#1A1D20] tracking-wider mb-2">
                            Field Specifications
                          </p>
                          <div className="space-y-1.5">
                            {serv.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="flex justify-between text-[11px] border-b border-gray-100 pb-1">
                                <span className="text-gray-500">{spec.label}</span>
                                <span className="font-mono font-bold text-[#1A1D20]">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Instant consult booking for this card specifically */}
                        <button
                          onClick={() => setConsultModalService(serv)}
                          className="mt-3 w-full rounded bg-[#1A1D20] hover:bg-[#2A2E33] py-2 text-center text-[10px] font-bold uppercase tracking-wider text-white transition flex items-center justify-center gap-1.5"
                        >
                          <MessageSquare className="h-3 w-3 text-[#FFC107]" />
                          Request Field Quotation
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Embedded Service-Specific Quotation modal */}
      {consultModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-2xl border border-gray-200 text-left">
            
            {consultSuccess ? (
              <div className="text-center py-8 animate-scale-up">
                <div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-sans font-bold text-lg text-[#1A1D20]">
                  Quotation Allocated!
                </h3>
                <p className="text-xs text-[#5A626A] mt-2 max-w-xs mx-auto">
                  Your interest in <span className="font-semibold text-brand-dark">{consultModalService.title}</span> has been logged. Our diagnostic crew will prioritize your schedule.
                </p>
                <p className="text-[9px] font-mono text-gray-400 mt-4 uppercase">
                  Service Ticket Allocated
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookConsultSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF] animate-pulse" />
                    <h3 className="font-sans font-bold text-sm text-[#1A1D20]">
                      Request: {consultModalService.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setConsultModalService(null)}
                    className="text-gray-400 hover:text-gray-600 font-bold text-xs"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-extrabold uppercase text-[#1A1D20] tracking-wider">
                    Confirm Your Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    className="w-full text-xs bg-[#F8F9FA] border border-gray-200 rounded px-3 py-2.5 focus:outline-[#FFC107] focus:bg-white text-[#1A1D20]"
                    placeholder="e.g. David Warner"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-extrabold uppercase text-[#1A1D20] tracking-wider">
                    Custom Maintenance Request / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={consultMsg}
                    onChange={(e) => setConsultMsg(e.target.value)}
                    className="w-full text-xs bg-[#F8F9FA] border border-gray-200 rounded px-3 py-2 focus:outline-[#FFC107] focus:bg-white text-[#1A1D20] resize-none"
                    placeholder="Tell us about your system issues, outdoor compressor sounds, or SEER rating goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFC107] hover:bg-yellow-500 py-3 text-xs font-bold uppercase tracking-wider text-[#1A1D20] rounded transition active:scale-97"
                >
                  Allocate Technician Slot &rarr;
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
