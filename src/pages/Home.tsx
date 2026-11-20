import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { TrustSection } from '../components/TrustSection';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { RealOperationsSection } from '../components/RealOperationsSection';
import { FAQ } from '../components/FAQ';
import { FinalCta } from '../components/FinalCta';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Hira Outsourcing | China Sourcing Partner for Indian Businesses";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* 1. Hero Section (Source Globally, Grow Locally) */}
      <Hero />

      {/* 2. Services Section (5 Minimal Horizontal Cards) */}
      <ServicesSection />

      {/* 3. Import Process (From China to your Business - Black Container Card) */}
      <ProcessSection />

      {/* 4. Trust and Statistics (100+ | 500+ | 10+ | 98%) */}
      <TrustSection />

      {/* 5. Customer Testimonials & Warehouse Video Aisle */}
      <CustomerTestimonials />

      {/* 6. Real Operations Ground Gallery */}
      <RealOperationsSection />

      {/* 7. Frequently Asked Questions */}
      <FAQ />

      {/* 8. Final Conversion Section */}
      <FinalCta />
    </div>
  );
};
