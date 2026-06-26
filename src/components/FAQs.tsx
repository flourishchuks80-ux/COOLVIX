import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQs() {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqItems: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How quickly can I get an appointment?',
      answer: "We offer same-day service for most locations. If you call before 2 PM, we'll do our best to send a technician that day.",
    },
    {
      id: 'faq-2',
      question: 'Do you offer emergency AC repair?',
      answer: 'Yes, we provide 24/7 emergency dispatch services for critical system failures, refrigerant leaks, or cooling losses during peak summer.',
    },
    {
      id: 'faq-3',
      question: 'What areas do you serve?',
      answer: 'We proudly provide service across the entire local metropolitan zone and surrounding residential sectors. Contact us if you need immediate zip location checks.',
    },
    {
      id: 'faq-4',
      question: 'What brands of AC units do you repair?',
      answer: 'Our certified engineers are fully trained to repair, install, and calibrate all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, and Honeywell.',
    },
    {
      id: 'faq-5',
      question: 'How much does a typical AC repair cost?',
      answer: 'We operate on transparent upfront flat-rate pricing. After a complete thermal diagnostic, you receive a full breakdown sheet with zero hidden fees before any repair begins.',
    }
  ];

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-24 bg-white border-t border-[#E9ECEF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split Component Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-stretch">
          
          {/* LEFT COLUMN: Vertical stack of individual, structured accordion collapse modules */}
          <div className="lg:col-span-6 flex flex-col gap-[12px] justify-center">
            {faqItems.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className="rounded-[8px] bg-white border border-[#E9ECEF] transition-all duration-300 shadow-[0px_2px_6px_rgba(0,0,0,0.02)] hover:border-gray-300 overflow-hidden"
                >
                  
                  {/* Accordion header button */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left flex items-center justify-between px-5 py-[18px] focus:outline-none cursor-pointer"
                  >
                    <span className="font-sans text-[15px] font-bold text-[#1A1D20] pr-4">
                      {item.question}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-[#1A1D20] shrink-0 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-[#1A1D20] shrink-0 stroke-[2.5]" />
                    )}
                  </button>

                  {/* Body expansion block */}
                  {isExpanded && (
                    <div className="px-5 pb-[18px]">
                      <div className="border-t border-[#F8F9FA] mt-3 pt-3">
                        <p className="font-sans text-[13px] font-normal leading-[1.5] text-[#5A626A] animate-fade-in">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Container card displaying introduction and embedded media elements */}
          <div className="lg:col-span-6 bg-[#F8F9FA] rounded-[12px] p-8 md:p-[35px] text-left flex flex-col justify-between border border-[#E9ECEF]" style={{ minHeight: '440px' }}>
            
            {/* Header info content stack */}
            <div className="space-y-4">
              
              {/* Tagline Badge with electric blue leading dot */}
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
                <span className="font-sans text-[14px] font-bold text-[#4A4D50] tracking-wide uppercase">
                  Faqs
                </span>
              </div>

              {/* Title Heading */}
              <h2 className="font-sans text-[32px] font-bold text-[#1A1D20] leading-[1.25] tracking-tight">
                Answers to Your Most Common Air Conditioning Questions
              </h2>

              {/* Description */}
              <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#5A626A]">
                We believe in full transparency and clear communication. Here are answers to some of the most common questions we receive from our customers.
              </p>

            </div>

            {/* Embedded Media Element Frame */}
            <div className="relative mt-8 rounded-[12px] overflow-hidden border border-[#E9ECEF] shadow-lg group bg-gray-900 select-none aspect-video">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="HVAC technicians working collaboratively on external condensing unit assembly"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping Floating Stat Badge: absolute bottom-left position inside image framework */}
              <div className="absolute bottom-[20px] left-[20px] bg-white rounded-[10px] p-[16px] px-[24px] border border-gray-100 shadow-xl flex flex-col items-center justify-center text-center select-none animate-bounce-slow">
                <span className="font-sans text-[28px] font-extrabold text-[#1A1D20] leading-none">
                  98%
                </span>
                <span className="font-sans text-[12px] font-bold text-[#5A626A] mt-1 tracking-wide uppercase leading-tight">
                  Customer Satisfaction
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
