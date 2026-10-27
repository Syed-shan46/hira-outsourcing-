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
    <div className="flex flex-col bg-white">
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
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]" id="quote">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#888888] font-medium block mb-2">
              Direct Sourcing Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium text-[#111111] tracking-tight">
              Start Your Sourcing Request
            </h2>
            <p className="text-base text-[#666666] mt-4 leading-relaxed">
              Fill in your specifications and order volumes to receive an authentic feasibility assessment and landed cost guidance.
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
