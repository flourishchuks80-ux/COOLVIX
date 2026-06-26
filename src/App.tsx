import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesShowcase from './components/ServicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialsAwards from './components/TestimonialsAwards';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { Appointment } from './types';
import { Fan, Phone, Mail, MapPin, ExternalLink, ShieldAlert, BadgeInfo, Check } from 'lucide-react';

export default function App() {
  // Booking state initializing with one on-hold card for high presentation value
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 'default-1',
      fullName: 'David Warner',
      phoneNumber: '+88-123-4567',
      email: 'david@gmail.com',
      serviceType: 'AC Emergency Troubleshooting',
      message: 'System cycling issue. Compressor clicking outdoor.',
      status: 'Pending',
      createdAt: '2026-06-02 16:38',
    }
  ]);

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const handleBookAppointment = (newAppt: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const fresh: Appointment = {
      ...newAppt,
      id: `appt-${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };
    setAppointments([fresh, ...appointments]);
    triggerFeedbackToast('Appointment requested successfully!');
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id));
    triggerFeedbackToast('Appointment cancelled successfully.');
  };

  const triggerFeedbackToast = (msg: string) => {
    setShowNotification(msg);
    setTimeout(() => {
      setShowNotification(null);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-brand-dark bg-white relative selection:bg-brand-primary selection:text-brand-dark min-h-screen flex flex-col justify-between">
      
      {/* Absolute Header Menu */}
      <Header 
        onQuoteClick={() => scrollToSection('home')} 
        onAboutClick={() => scrollToSection('about')}
        onServicesClick={() => scrollToSection('services')}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Area + Overlapping Image & Interactive appointment form */}
        <Hero 
          onQuoteSubmit={handleBookAppointment}
          activeAppointments={appointments}
          onCancelAppointment={handleCancelAppointment}
        />

        {/* Core 3-Column Features Section */}
        <Features 
          onPlayVideo={() => setIsVideoOpen(true)}
          onSeeMoreClick={() => {
            triggerFeedbackToast('Directing you to the service documentation guides...');
          }}
        />

        {/* Interactive Services Showcase section */}
        <ServicesShowcase />

        {/* Why Choose Us trust section */}
        <WhyChooseUs 
          onContactClick={() => scrollToSection('home')}
          onPlayVideo={() => setIsVideoOpen(true)}
        />

        {/* Dynamic Process Timeline Section */}
        <ProcessTimeline />

        {/* Testimonials & Awards component */}
        <TestimonialsAwards onPlayVideo={() => setIsVideoOpen(true)} />

        {/* FAQ section */}
        <FAQs />

      </main>

      {/* Structured Footer Section */}
      <Footer />

      {/* Intro Player video overlay */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Floating dynamic notification banner */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-[#1A1D20] text-white p-4 shadow-2xl border border-white/10 max-w-sm flex items-start gap-2.5 animate-slide-up">
          <div className="h-5 w-5 bg-brand-primary text-brand-dark rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Check className="h-3 w-3 stroke-[3]" />
          </div>
          <div>
            <p className="font-sans font-bold text-xs text-white">System Notification</p>
            <p className="font-sans text-[11px] text-gray-400 mt-1">{showNotification}</p>
          </div>
        </div>
      )}

    </div>
  );
}
