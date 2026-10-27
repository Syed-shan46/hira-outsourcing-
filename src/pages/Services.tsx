import React, { useEffect } from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { EnquiryForm } from '../components/EnquiryForm';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | Hira Outsourcing - China Sourcing Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Editorial Subpage Hero */}
      <section className="bg-white text-[#111111] pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              China-to-India Trade Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium text-[#111111] tracking-tight leading-[1.08]">
              Our Sourcing &amp; Import Services
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              We provide Indian businesses with structured, requirement-led support across the entire China trade corridor—from initial factory identification to sea freight coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />

      {/* Service Scope & Clarity Principles */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Operational Boundaries
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal sm:font-medium text-[#111111] tracking-tight">
              Transparent Scope Boundaries
            </h2>
            <p className="mt-4 text-base text-[#666666] leading-relaxed">
              Clear commitments ensure seamless collaboration between your business and Chinese manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="border-t border-[#EAEAEA] pt-6 space-y-3">
              <div className="text-xs font-mono text-[#888888]">01</div>
              <h3 className="text-lg font-medium text-[#111111] tracking-tight">Direct Factory Coordination</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                We work directly with authentic manufacturers and qualified suppliers, ensuring communication fidelity for product specs, tooling, and lead times.
              </p>
            </div>

            <div className="border-t border-[#EAEAEA] pt-6 space-y-3">
              <div className="text-xs font-mono text-[#888888]">02</div>
              <h3 className="text-lg font-medium text-[#111111] tracking-tight">Documented Due Diligence</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                We verify legal registration, banking legitimacy, and export standing. Specialized QA inspections are arranged via accredited independent inspection bodies.
              </p>
            </div>

            <div className="border-t border-[#EAEAEA] pt-6 space-y-3">
              <div className="text-xs font-mono text-[#888888]">03</div>
              <h3 className="text-lg font-medium text-[#111111] tracking-tight">Freight &amp; Port Handoffs</h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                We coordinate container bookings and export papers from China, and align commercial invoices and packing lists for your Customs Broker in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium text-[#111111] tracking-tight">
              Discuss Your Specific Service Need
            </h2>
            <p className="text-sm text-[#666666] mt-2 leading-relaxed">
              Submit your project details to review pricing and engagement options.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
