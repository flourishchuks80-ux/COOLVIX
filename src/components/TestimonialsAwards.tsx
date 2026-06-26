import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Quote, Award, Trophy, Medal, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  rating: number;
  content: string;
  avatar: string;
}

interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  icon: React.ComponentType<any>;
}

interface TestimonialsAwardsProps {
  onPlayVideo: () => void;
}

export default function TestimonialsAwards({ onPlayVideo }: TestimonialsAwardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Mark R.',
      title: 'Salon Owner / Cool Valley',
      rating: 5,
      content: 'Cras ornare ligula vel neque posuere, at elementum libero pharetra. Sed rhoncus nunc turpis, vitae lobortis dolor gravida id. Nunc non massa nec nunc facilisis sodales. Praesent pellentesque gravida.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 'test-2',
      name: 'Sarah K.',
      title: 'Homeowner / West Oaks',
      rating: 5,
      content: 'Absolutely incredible service. Our outdoor compressor failed mid-July and within 90 minutes they had a dispatch van loaded and running tests. Fair pricing, no sneaky surcharges.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    },
    {
      id: 'test-3',
      name: 'Julian B.',
      title: 'Facility Manager / Plaza Group',
      rating: 5,
      content: 'COOLVIX managed our multi-stage air handler upgrades with flawless precision. SEER calculations were precise and we have already registered a 15% drop in utility expenses.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    }
  ];

  const awards: AwardItem[] = [
    {
      id: 'award-1',
      title: 'Best AC Repair Company',
      organization: 'Chitown Business Awards',
      year: '2024',
      icon: Trophy,
    },
    {
      id: 'award-2',
      title: 'Top-Rated HVAC Service Provider',
      organization: 'Homeowners Consumer Choice',
      year: '2024',
      icon: Award,
    },
    {
      id: 'award-3',
      title: 'Fastest Growing HVAC Brand',
      organization: 'HVAC Pro Development Council',
      year: '2025',
      icon: Medal,
    },
    {
      id: 'award-4',
      title: 'Green HVAC Innovator',
      organization: 'EcoSmart Technology Awards',
      year: '2023',
      icon: Sparkles,
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white border-t border-[#E9ECEF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP TIER: Asymmetric Split Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center pb-16 md:pb-24 border-b border-[#E9ECEF]">
          
          {/* Left Media Container with image and overlapping badges */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-900 shadow-lg group select-none">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=1000&q=80"
              alt="Experienced HVAC Technician communicating over microphone during diagnostic work"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
            
            {/* Top-Right Overlapping circular video badge with play trigger click */}
            <div className="absolute top-[20px] right-[20px] flex items-center justify-center">
              <div className="relative flex items-center justify-center animate-spin-slow">
                <svg className="w-24 h-24 text-white/90 drop-shadow" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="transparent"
                  />
                  <text className="font-mono text-[7.5px] font-bold fill-white tracking-widest uppercase">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      • FAST • AFFORDABLE • AC REPAIR • BY COOLVIX
                    </textPath>
                  </text>
                </svg>
              </div>
              <button
                onClick={onPlayVideo}
                className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-[#007BFF] hover:bg-blue-600 hover:scale-105 active:scale-95 text-white shadow-xl transition-all duration-200 cursor-pointer"
                title="Watch Customer Testimonial Video"
              >
                <Play className="h-4 w-4 fill-white text-white ml-0.5" />
              </button>
            </div>

            {/* Bottom-Right Overlapping floating review counter */}
            <div className="absolute bottom-[20px] right-[20px] bg-white rounded-[10px] p-[12px] px-[24px] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center select-none">
              <span className="font-sans text-[24px] font-extrabold text-[#1A1D20] leading-none">
                25K
              </span>
              <span className="font-sans text-[11px] font-medium text-[#5A626A] mt-1 tracking-wide uppercase">
                Customer Reviews
              </span>
            </div>

          </div>

          {/* Right Text Content Panel with Slider */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tagline showing blue dot */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
              <span className="font-sans text-[14px] font-bold text-[#4A4D50] tracking-wide uppercase">
                Testimonials
              </span>
            </div>

            {/* Main title heading */}
            <h2 className="font-sans text-[32px] font-bold text-[#1A1D20] leading-[1.25] tracking-tight">
              See What Our Happy Customers <br />
              Say About Coolvix
            </h2>

            {/* Sub body description text */}
            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A]">
              At Coolvix, we pride ourselves on delivering fast, honest, and high-quality service—and our customers agree. Here's what they have to say about their experience with our team.
            </p>

            {/* Testimonial Active Slide Card (#F8F9FA) */}
            <div className="bg-[#F8F9FA] rounded-[12px] p-[30px] border border-[#E9ECEF] relative relative-flex flex-col gap-4">
              
              {/* Decorative Quote Mark icon positioned Top-Right */}
              <div className="absolute top-6 right-6 text-[#FFC107] opacity-25">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              {/* Star Rating list */}
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>

              {/* Reviewer bio details lock */}
              <div className="flex items-center gap-3.5 mt-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="h-11 w-11 rounded-full object-cover border border-[#E9ECEF] shrink-0"
                />
                <div className="leading-tight">
                  <h4 className="font-sans text-[16px] font-bold text-[#1A1D20]">
                    {current.name}
                  </h4>
                  <span className="font-sans text-[12px] font-medium text-[#5A626A]">
                    {current.title}
                  </span>
                </div>
              </div>

              {/* Review quote content */}
              <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A]/90 mt-4 italic">
                "{current.content}"
              </p>

            </div>

            {/* Slider Navigation row at bottom-right of text stack */}
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded bg-[#FFC107] hover:bg-yellow-500 text-[#1A1D20] shadow active:scale-95 transition cursor-pointer"
                title="Previous feedback"
              >
                <ChevronLeft className="h-[18px] w-[18px] stroke-[2.5]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded bg-[#FFC107] hover:bg-yellow-500 text-[#1A1D20] shadow active:scale-95 transition cursor-pointer"
                title="Next feedback"
              >
                <ChevronRight className="h-[18px] w-[18px] stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM TIER: Awards & Recognitions */}
        <div className="pt-16 md:pt-24 text-center space-y-12">
          
          {/* Centered Intro Title block */}
          <div className="max-w-2xl mx-auto space-y-3.5">
            
            {/* Tagline showing yellow dot */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FFC107]" />
              <span className="font-sans text-[14px] font-bold text-[#4A4D50] tracking-wide uppercase">
                Award Winning
              </span>
            </div>

            <h3 className="font-sans text-[32px] font-bold text-[#1A1D20] leading-[1.3] tracking-tight">
              Recognized for Excellence in AC Repair &amp; Customer Care
            </h3>

            <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A]">
              At Coolvix, we're proud to be recognized by industry leaders and local communities for our exceptional service, expert craftsmanship, and outstanding customer satisfaction. These awards reflect our unwavering commitment to quality and professionalism in every job.
            </p>

          </div>

          {/* Centered 4-Column Row perfect circle Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] justify-items-center">
            {awards.map((award) => {
              const StampIcon = award.icon;

              return (
                <div
                  key={award.id}
                  className="flex h-[220px] w-[220px] rounded-full flex-col items-center justify-center bg-white border border-[#E9ECEF] p-5 text-center shadow-xs hover:shadow-md transition-all duration-300 group hover:border-[#FFC107]"
                >
                  {/* Centered black stamp/ribbon vector badge graphic overlay inside circle */}
                  <div className="h-11 w-11 rounded-full bg-slate-50 flex items-center justify-center text-[#1A1D20] border border-gray-100 group-hover:bg-[#FFFDF4] group-hover:text-amber-500 transition-colors shrink-0 mb-3.5">
                    <StampIcon className="h-5 w-5" strokeWidth={2.3} />
                  </div>

                  <h4 className="font-sans text-[14px] font-bold text-[#1A1D20] tracking-tight line-clamp-2 px-1">
                    {award.title}
                  </h4>
                  <p className="font-sans text-[11px] font-normal text-[#5A626A] mt-1 leading-tight">
                    {award.organization}
                  </p>
                  <span className="font-mono text-[10px] font-bold text-[#007BFF] uppercase mt-2">
                    {award.year}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
