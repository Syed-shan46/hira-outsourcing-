import React, { useEffect } from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { EnquiryForm } from '../components/EnquiryForm';
import { ShieldCheck, ArrowRight, CheckCircle2, Factory, Ship, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Our Services | Hira Outsourcing - China Sourcing Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="bg-[#10243A] text-[#FAFAF7] py-16 lg:py-24 border-b border-[#202833]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>China-to-India Trade Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              Our Sourcing &amp; Import Services
            </h1>
            <p className="text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed">
              We provide Indian businesses with structured, requirement-led support across the entire China trade corridor—from initial factory identification to sea freight coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />

      {/* Service Scope & Clarity Principles */}
      <section className="py-16 bg-[#FFFFFF] border-t border-[#EEF1F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243A]">
              Transparent Scope Boundaries
            </h2>
            <p className="text-sm text-[#202833]/70">
              Clear commitments ensure seamless collaboration between your business and Chinese manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#C7A56A] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#10243A]">Direct Factory Coordination</h3>
              <p className="text-xs text-[#202833]/75 leading-relaxed">
                We work directly with authentic manufacturers and qualified suppliers, ensuring communication fidelity for product specs, tooling, and lead times.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#C7A56A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#10243A]">Documented Due Diligence</h3>
              <p className="text-xs text-[#202833]/75 leading-relaxed">
                We verify legal registration, banking legitimacy, and export standing. Specialized QA inspections are arranged via accredited independent inspection bodies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#10243A] text-[#C7A56A] flex items-center justify-center">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#10243A]">Freight &amp; Port Handoffs</h3>
              <p className="text-xs text-[#202833]/75 leading-relaxed">
                We coordinate container bookings and export papers from China, and align commercial invoices and packing lists for your Customs Broker in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[#EEF1F4]/40 border-t border-[#EEF1F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-[#10243A]">
              Discuss Your Specific Service Need
            </h2>
            <p className="text-xs text-[#202833]/70 mt-1">
              Submit your project details to review pricing and engagement options.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
