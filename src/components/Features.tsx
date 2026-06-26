import { Wrench, Zap, Leaf, ShieldCheck, Cpu, Play, ChevronRight, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Define the core features list
const FEATURES_DATA = [
  {
    id: 'experienced',
    title: 'Experienced Technicians',
    description: 'Vivamus in velit ligula. Proin eleifend sagittis libero eu vestibulum.',
    icon: Wrench,
    imgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fast-response',
    title: 'Fast Response Service',
    description: 'Aenean elementum finibus erat interdum convallis. Diagnostic vans loaded with parts near your zipcode.',
    icon: Zap,
    imgUrl: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'energy-efficient',
    title: 'Energy-Efficient Options',
    description: 'Optimize electrical consumption. We draft custom digital thermo assessments to lower utility bills.',
    icon: Cpu,
    imgUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Options',
    description: 'Support environment health with R-410A chlorine-free refrigerants and certified recycling plans.',
    icon: Leaf,
    imgUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'guaranteed',
    title: '100% Satisfaction Guaranteed',
    description: 'We guarantee pristine work. Done right the first time, or we fix it absolutely free of charge.',
    icon: ShieldCheck,
    imgUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
];

interface FeaturesProps {
  onPlayVideo: () => void;
  onSeeMoreClick: () => void;
}

export default function Features({ onPlayVideo, onSeeMoreClick }: FeaturesProps) {
  const [activeTab, setActiveTab] = useState('experienced');

  const currentFeature = FEATURES_DATA.find((f) => f.id === activeTab) || FEATURES_DATA[0];

  return (
    <section id="about" className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-28 bg-[#FFFFFF] border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1 (Left): Feature Accordions Stacking (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {FEATURES_DATA.map((feature) => {
              const IconComponent = feature.icon;
              const isActive = feature.id === activeTab;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left transition-all duration-300 ease-out flex flex-col rounded-[6px] border ${
                    isActive
                      ? 'bg-[#FFC107] border-[#FFC107] p-5 shadow-inner translate-x-1.5'
                      : 'bg-[#FFFFFF] border-[#E9ECEF] p-4 hover:border-gray-300 hover:shadow-xs cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Icon container */}
                    <div className={`p-2 rounded-full transition-colors shrink-0 ${
                      isActive ? 'bg-[#1A1D20]/10 text-[#1A1D20]' : 'bg-[#F8F9FA] text-brand-secondary'
                    }`}>
                      <IconComponent className="h-[18px] w-[18px]" strokeWidth={2.5} />
                    </div>
                    {/* Title */}
                    <span className={`font-sans text-sm tracking-tight leading-tight ${
                      isActive ? 'font-extrabold text-[#1A1D20]' : 'font-semibold text-[#1A1D20]'
                    }`}>
                      {feature.title}
                    </span>
                  </div>

                  {/* Expandable active description */}
                  {isActive && (
                    <p className="mt-3 font-sans text-xs font-medium text-[#1A1D20]/80 leading-relaxed pl-[38px] animate-fade-in">
                      {feature.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Column 2 (Center): Contextual Feature Image (lg:col-span-4) */}
          <div className="lg:col-span-4 group relative rounded-[10px] overflow-hidden min-h-[350px] lg:min-h-full border border-[#E9ECEF] flex items-center justify-center bg-gray-50">
            {/* Contextual image with animation on tab swap */}
            <img
              key={currentFeature.id}
              src={currentFeature.imgUrl}
              alt={currentFeature.title}
              className="absolute inset-0 w-full h-full object-cover aspect-[4/5] object-center transition-all duration-500 ease-out animate-scale-up border-radius-[8px]"
              referrerPolicy="no-referrer"
            />
            {/* Dynamic label showing current state detail */}
            <div className="absolute bottom-4 inset-x-4 bg-black/75 backdrop-blur-xs p-3.5 rounded-lg border border-white/10 text-left">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-primary font-bold">
                Dynamic Reference Showcase
              </span>
              <p className="text-white text-xs font-bold leading-tight mt-1">
                {currentFeature.title} Profile
              </p>
            </div>
          </div>

          {/* Column 3 (Right): Content Text Card with CTA (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-[#F8F9FA] rounded-[12px] p-8 md:p-[35px] text-left flex flex-col justify-between border border-[#E9ECEF]" style={{ minHeight: '440px' }}>
            
            {/* Top Info section */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
                <span className="font-sans text-[14px] font-semibold text-[#5A626A] tracking-medium uppercase">
                  About Us
                </span>
              </div>

              {/* Title heading */}
              <h2 className="font-sans text-[28px] font-bold text-[#1A1D20] leading-[1.3] tracking-tight">
                Your Trusted Partner <br />
                in Air Conditioning <br />
                Services
              </h2>

              {/* Descriptions */}
              <p className="font-sans text-xs text-[#5A626A] leading-[1.6]">
                At Coolvix, we've been keeping homes and businesses cool for over a decade. Our certified technicians specialize in AC repair, maintenance, and installation with a focus on fast service, honest pricing, and long-term comfort. We're not just a service provider—we're your reliable cooling partner.
              </p>

              <p className="font-sans text-[11px] text-[#5A626A] leading-[1.6] opacity-85 italic">
                Donec luctus ipsum eu sapien tristique porttitor. Praesent mollis tellus ut placerat finibus. Duis at tincidunt nulla, sodales volutpat tellus.
              </p>
            </div>

            {/* CTA action buttons footer */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200/50 mt-6 shrink-0">
              {/* Primary action call */}
              <button
                onClick={onSeeMoreClick}
                className="flex items-center gap-1 bg-[#FFC107] text-[#1A1D20] px-5 py-3 rounded-xs font-sans text-[13px] font-bold tracking-tight uppercase hover:bg-yellow-500 transition active:scale-97 cursor-pointer"
              >
                <span>See More About</span>
                <ChevronRight className="h-4 w-4 shrink-0 stroke-[2.5]" />
              </button>

              {/* Pulsating video play button */}
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-11 w-11 rounded-full bg-[#007BFF]/30 animate-ping" />
                <button
                  onClick={onPlayVideo}
                  id="features-video-trigger"
                  className="relative z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#007BFF] text-white shadow-md hover:bg-blue-600 active:scale-95 transition cursor-pointer"
                  title="Watch Introduction Video"
                >
                  <Play className="h-4.5 w-4.5 fill-white text-white ml-0.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
