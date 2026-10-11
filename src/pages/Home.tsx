import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ProductCategories } from '../components/ProductCategories';
import { WhyHira } from '../components/WhyHira';
import { AboutSection } from '../components/AboutSection';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQ } from '../components/FAQ';
import { FinalCta } from '../components/FinalCta';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Hira Outsourcing | China Sourcing Partner for Indian Businesses";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust and Value Proposition */}
      <TrustSection />

      {/* 3. Core Sourcing Services */}
      <ServicesSection />

      {/* 4. 4-Step Process Section */}
      <ProcessSection />

      {/* 5. Product Categories */}
      <ProductCategories />

      {/* 6. Why Hira Outsourcing */}
      <WhyHira />

      {/* 7. About Us Section */}
      <AboutSection />

      {/* 8. Lead Generation Enquiry Form */}
      <section className="py-20 bg-[#EEF1F4]/50 border-t border-[#EEF1F4]" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              Direct Inquiry
            </span>
            <h2 className="text-3xl font-extrabold text-[#10243A] mt-1">
              Start Your Sourcing Request
            </h2>
            <p className="text-sm text-[#202833]/70 mt-2">
              Fill in your specifications and order volumes to receive an authentic feasibility assessment.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <FAQ />

      {/* 10. Final Conversion Section */}
      <FinalCta />
    </div>
  );
};
