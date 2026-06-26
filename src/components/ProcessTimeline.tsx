import React, { useState } from 'react';
import { CalendarRange, SearchCheck, Hammer, Sparkles, Check, ChevronRight, HelpCircle } from 'lucide-react';

interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
}

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [interactiveProgress, setInteractiveProgress] = useState<number>(1);

  const steps: ProcessStep[] = [
    {
      stepNumber: '1',
      title: 'Schedule Service',
      description: 'Suscipit ut tellus. Fusce in dolor in magna congue accumsan ut gravida neque. Quisque nec felis quis ante consectetur tempus.',
      icon: CalendarRange,
      details: [
        'Instant digital queue ticketing',
        'Direct smartphone SMS reminders',
        '2-Hour certified arrival window confirmation'
      ]
    },
    {
      stepNumber: '2',
      title: 'Diagnosis & Estimate',
      description: 'Suscipit ut tellus. Fusce in dolor in magna congue accumsan ut gravida neque. Quisque nec felis quis ante consectetur tempus.',
      icon: SearchCheck,
      details: [
        'Multi-stage airflow sensor diagnostics',
        'No-obligation written flat-rate sheets',
        'Thermal scope air-leakage visualization'
      ]
    },
    {
      stepNumber: '3',
      title: 'Repair or Install',
      description: 'Suscipit ut tellus. Fusce in dolor in magna congue accumsan ut gravida neque. Quisque nec felis quis ante consectetur tempus.',
      icon: Hammer,
      details: [
        'EPA-certified low-wear repair execution',
        'Pristine service truck parts deployment',
        'Double-check fan balance calibration'
      ]
    },
    {
      stepNumber: '4',
      title: 'Stay Comfortable',
      description: 'Suscipit ut tellus. Fusce in dolor in magna congue accumsan ut gravida neque. Quisque nec felis quis ante consectetur tempus.',
      icon: Sparkles,
      details: [
        'Post-intervention air clean validation',
        'Digital satisfaction feedback card',
        '10-Year parts and workmanship warranty log'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#132238] via-[#0b1422] to-[#132238] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Soft, blurred bokeh background circles based on description */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#007BFF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#FFC107]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Intro Header block centrally aligned */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          
          {/* Tagline showing leading yellow dot */}
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FFC107]" />
            <span className="font-sans text-[13px] font-semibold uppercase text-[#D1D5DB] tracking-widest">
              Our Process
            </span>
          </div>

          <h2 className="font-sans text-[32px] font-bold text-white leading-[1.3] tracking-tight">
            How We Work - A Simple 4-Step Process
          </h2>

          <p className="font-sans text-[14px] font-normal leading-[1.6] text-[#D1D5DB]">
            At Coolvix, we make your AC service experience smooth and stress-free. From the moment you contact us to the final follow-up, our process is designed to be clear, quick, and customer-focused.
          </p>

        </div>

        {/* Outer step container with interconnected wavy connector line */}
        <div className="relative mt-12">
          
          {/* Horizontal Connector Line (wavy SVG pattern line behind floating icon wrappers, hidden on mobile) */}
          <div className="absolute top-[25px] left-[10%] right-[10%] h-[2px] hidden md:block z-0 overflow-hidden select-none pointer-events-none">
            <svg className="w-full h-full opacity-25" viewBox="0 0 1000 10" preserveAspectRatio="none">
              <path 
                d="M 0,5 Q 25,0 50,5 T 100,5 T 150,5 T 200,5 T 250,5 T 300,5 T 350,5 T 400,5 T 450,5 T 500,5 T 550,5 T 600,5 T 650,5 T 700,5 T 750,5 T 800,5 T 850,5 T 900,5 T 950,5 T 1000,5" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeDasharray="6,6"
              />
            </svg>
          </div>

          {/* Connected 4-Column Horizontal Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] relative z-10">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isSelected = activeStep === step.stepNumber;
              const isCompleted = Number(step.stepNumber) < interactiveProgress;
              const isCurrent = Number(step.stepNumber) === interactiveProgress;

              return (
                <div
                  key={step.stepNumber}
                  className="flex flex-col items-center"
                >
                  
                  {/* Floating Icon Header Container overlapping top of card */}
                  <div className="relative z-20 mb-8">
                    <button
                      onClick={() => {
                        setActiveStep(isSelected ? null : step.stepNumber);
                        setInteractiveProgress(Number(step.stepNumber));
                      }}
                      className={`flex h-[50px] w-[50px] items-center justify-center rounded-[8px] border transition-all duration-300 cursor-pointer ${
                        isCurrent 
                          ? 'bg-[#FFC107] text-[#1A1D20] border-[#FFC107] shadow-lg shadow-[#FFC107]/20 scale-110' 
                          : isCompleted 
                            ? 'bg-[#007BFF] text-white border-[#007BFF]' 
                            : 'bg-white text-[#1A1D20] border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                      title={`Step ${step.stepNumber}: ${step.title}`}
                    >
                      {isCompleted ? (
                        <Check className="h-5.5 w-5.5 stroke-[3]" />
                      ) : (
                        <StepIcon className="h-5 w-5 stroke-[2]" />
                      )}
                    </button>

                    {/* Miniature bubble label */}
                    <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#132238] text-[10px] font-bold border border-white/20">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Card */}
                  <div
                    onClick={() => {
                      setActiveStep(isSelected ? null : step.stepNumber);
                      setInteractiveProgress(Number(step.stepNumber));
                    }}
                    className={`w-full bg-white text-left rounded-[10px] p-[24px] pb-[20px] transition-all duration-300 border-b-[3px] cursor-pointer ${
                      isSelected 
                        ? 'border-[#FFC107] shadow-xl md:translate-y-[-4px]' 
                        : isCurrent
                          ? 'border-[#FFC107] shadow-md'
                          : 'border-transparent hover:border-[#FFC107]/50 shadow-sm'
                    }`}
                  >
                    
                    {/* Centered stack content */}
                    <div className="text-center space-y-2">
                      <span className="font-sans text-[16px] font-bold text-[#FFC107]">
                        Step 0{step.stepNumber}
                      </span>
                      <h3 className="font-sans text-[16px] font-bold text-[#1A1D20] tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[12px] font-normal leading-[1.5] text-[#5A626A] select-none">
                        {step.description}
                      </p>
                    </div>

                    {/* Step expand arrow indicator */}
                    <div className="flex justify-center mt-3 pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-semibold text-[#007BFF] uppercase tracking-wider flex items-center gap-1 hover:text-blue-600 transition">
                        {isSelected ? 'Hide breakdown' : 'Explore step'}
                        <ChevronRight className={`h-3 w-3 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                      </span>
                    </div>

                    {/* Interactive mini procedure breakdown */}
                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-gray-100 text-left space-y-2 animate-fade-in">
                        <p className="text-[9px] font-extrabold uppercase text-[#1A1D20] tracking-wider mb-1">
                          Action Procedures
                        </p>
                        <div className="space-y-2">
                          {step.details.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-[#5A626A]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107] shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Interactive Simulation Dashboard for additional user delight */}
        <div className="mt-16 bg-white/5 rounded-xl border border-white/10 p-5 md:p-6 text-left max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-sans font-bold text-sm text-[#FFC107] uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4" />
                Try Interactive Flow Simulation
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                Currently showing step <span className="font-bold text-[#FFC107]">{interactiveProgress}</span> procedures. Click any step badge above to trigger diagnostics flow checklist.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setInteractiveProgress(prev => prev > 1 ? prev - 1 : 4)}
                className="rounded bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase text-white transition active:scale-95"
              >
                Previous Step
              </button>
              <button
                onClick={() => setInteractiveProgress(prev => prev < 4 ? prev + 1 : 1)}
                className="rounded bg-[#FFC107] hover:bg-yellow-500 px-3 py-1.5 text-[11px] font-semibold uppercase text-[#1A1D20] transition active:scale-95"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-4 gap-2 text-center text-[10px] font-mono text-gray-400">
            {steps.map((step) => {
              const active = Number(step.stepNumber) === interactiveProgress;
              const completed = Number(step.stepNumber) < interactiveProgress;
              return (
                <div key={step.stepNumber} className={`p-1.5 rounded border transition ${
                  active 
                    ? 'bg-[#FFC107]/10 border-[#FFC107] text-[#FFC107]' 
                    : completed 
                      ? 'bg-[#007BFF]/10 border-[#007BFF]/25 text-[#007BFF]' 
                      : 'border-white/5 text-gray-500'
                }`}>
                  <span className="hidden sm:inline">Step </span>0{step.stepNumber} {active ? '● Active' : completed ? '✓ Done' : ''}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
