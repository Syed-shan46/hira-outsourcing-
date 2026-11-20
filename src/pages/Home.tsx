import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { TrustSection } from '../components/TrustSection';
import { RealOperationsSection } from '../components/RealOperationsSection';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { FAQ } from '../components/FAQ';
import { FinalCta } from '../components/FinalCta';
import { MobileQuickBar } from '../components/MobileQuickBar';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Hira Outsourcing | China Sourcing Partner for Indian Businesses";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen pb-16 md:pb-0">
      {/* A. Navigation is mounted globally in Layout / Navbar */}

      {/* B. Hero Section */}
      <Hero />

      {/* C. Services Section (5 Minimal Cards) */}
      <ServicesSection />

      {/* D. Import Process (Black-Background with Real Container Imagery) */}
      <ProcessSection />

      {/* E. Trust and Credibility (Authentic Ground Metrics) */}
      <TrustSection />

      {/* F. Real Operations (Warehouse, Unloading, Inspection, Shipments) */}
      <RealOperationsSection />

      {/* G. Customer Testimonials (Genuine Indian Importer Feedback) */}
      <CustomerTestimonials />

      {/* H. FAQ (6 Essential Questions) */}
      <FAQ />

      {/* I. Final Conversion Section */}
      <FinalCta />

      {/* Mobile Fixed Bottom WhatsApp & Quote Bar (< 768px) */}
      <MobileQuickBar />
    </div>
  );
};
