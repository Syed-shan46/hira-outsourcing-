import React, { useEffect } from 'react';
import { AboutSection } from '../components/AboutSection';
import { WhyHira } from '../components/WhyHira';
import { FinalCta } from '../components/FinalCta';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Hira Outsourcing - China Sourcing Partner";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Editorial Subpage Hero */}
      <section className="bg-white text-[#111111] pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Corporate Overview
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium text-[#111111] tracking-tight leading-[1.08]">
              About Hira Outsourcing
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              We operate as a China sourcing and import coordination partner, dedicated to helping Indian businesses bridge international manufacturing hurdles with confidence, clarity, and commercial integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Mission & Positioning */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#888888] font-medium block">
                Our Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal sm:font-medium text-[#111111] tracking-tight leading-tight">
                Transparent Bilateral Sourcing for Indian Enterprises
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                For many Indian businesses, dealing with overseas suppliers can mean ambiguous contract terms, sample mismatches, opaque quotations, and unpredictable customs procedures.
              </p>
              <p className="text-sm text-[#666666] leading-relaxed">
                Hira Outsourcing was built around a straightforward promise: <strong className="text-[#111111] font-medium">requirement-based product sourcing, clear communication, transparent cost breakdowns, and attentive order coordination.</strong>
              </p>
            </div>

            <div className="p-8 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA] space-y-5">
              <h3 className="text-lg font-medium text-[#111111] tracking-tight">
                Our Core Commitments
              </h3>
              <div className="space-y-4 text-xs text-[#666666] leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                  <span><strong className="text-[#111111] font-medium">Fact-Based Guidance:</strong> No exaggerated promises of instant delivery or unrealistic cost savings.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                  <span><strong className="text-[#111111] font-medium">Dedicated Ground Follow-Up:</strong> Continuous coordination with Chinese factory representatives throughout production.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                  <span><strong className="text-[#111111] font-medium">Strict Client Confidentiality:</strong> Your custom product blueprints, formulations, and commercial margins are strictly protected.</span>
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
