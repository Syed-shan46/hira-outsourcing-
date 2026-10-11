import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyHira } from '../components/WhyHira';
import { FinalCta } from '../components/FinalCta';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  CheckCircle, 
  FileCheck2,
  Mail,
  Phone
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Hira Outsourcing - China Sourcing Partner";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="bg-[#10243A] text-[#FAFAF7] py-16 lg:py-24 border-b border-[#202833]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>Corporate Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              About Hira Outsourcing
            </h1>
            <p className="text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed">
              We operate as a China sourcing and import coordination partner, dedicated to helping Indian businesses bridge international manufacturing hurdles with confidence, clarity, and commercial integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Mission & Positioning */}
      <section className="py-20 bg-[#FFFFFF] border-y border-[#EEF1F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                Transparent Bilateral Sourcing for Indian Enterprises
              </h2>
              <p className="text-sm text-[#202833]/80 leading-relaxed">
                For many Indian businesses, dealing with overseas suppliers can mean ambiguous contract terms, sample mismatches, opaque quotations, and unpredictable customs procedures.
              </p>
              <p className="text-sm text-[#202833]/80 leading-relaxed">
                Hira Outsourcing was built around a straightforward promise: <strong>requirement-based product sourcing, clear communication, transparent cost breakdowns, and attentive order coordination.</strong>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#EEF1F4] space-y-4">
              <h3 className="text-lg font-bold text-[#10243A]">
                Our Core Commitments
              </h3>
              <div className="space-y-3 text-xs text-[#202833]/80">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span><strong>Fact-Based Guidance:</strong> No exaggerated promises of instant delivery or unrealistic cost savings.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Ground Follow-Up:</strong> Continuous coordination with Chinese factory representatives throughout production.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                  <span><strong>Strict Client Confidentiality:</strong> Your custom product blueprints, formulations, and commercial margins are strictly protected.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hira Principles */}
      <WhyHira />

      {/* Final Call to Action */}
      <FinalCta />
    </div>
  );
};
