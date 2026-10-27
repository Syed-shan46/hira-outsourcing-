import React, { useEffect } from 'react';
import { ProcessSection } from '../components/ProcessSection';
import { FAQ } from '../components/FAQ';
import { EnquiryForm } from '../components/EnquiryForm';

export const HowItWorks: React.FC = () => {
  useEffect(() => {
    document.title = "How It Works | Hira Outsourcing - 4-Step China Sourcing Process";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Editorial Subpage Hero */}
      <section className="bg-white text-[#111111] pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Workflow &amp; Milestones
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium text-[#111111] tracking-tight leading-[1.08]">
              A Clear, Step-by-Step Sourcing Workflow
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              From requirement definition and sample evaluation to factory production and import clearance, our four-step process keeps your investment secure and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Detailed Timeline & Expectations */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-left mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Timeline Expectations
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal sm:font-medium text-[#111111] tracking-tight">
              What to Expect at Each Stage
            </h2>
            <p className="mt-3 text-base text-[#666666] leading-relaxed">
              Realistic turnaround times, required inputs, and milestone deliverables.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-lg border border-[#EAEAEA] bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="text-xs font-mono text-[#888888]">
                  24 to 48 Hours
                </div>
                <h4 className="text-lg font-medium text-[#111111] tracking-tight">Stage 1: Feasibility &amp; Preliminary Screening</h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Initial evaluation of your product parameters against known factory clusters in Guangdong, Zhejiang, and Yiwu.
                </p>
              </div>
              <div className="text-xs bg-[#FAFAFA] px-4 py-2 rounded border border-[#EAEAEA] text-[#111111] font-medium shrink-0">
                Deliverable: Sourcing Feasibility Note
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-lg border border-[#EAEAEA] bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="text-xs font-mono text-[#888888]">
                  5 to 10 Working Days
                </div>
                <h4 className="text-lg font-medium text-[#111111] tracking-tight">Stage 2: Factory Identification &amp; Sample Dispatch</h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Direct communication with verified manufacturers, commercial pricing confirmation, and international express dispatch of golden samples.
                </p>
              </div>
              <div className="text-xs bg-[#FAFAFA] px-4 py-2 rounded border border-[#EAEAEA] text-[#111111] font-medium shrink-0">
                Deliverable: Physical Golden Sample
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-lg border border-[#EAEAEA] bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="text-xs font-mono text-[#888888]">
                  15 to 30 Days (Production)
                </div>
                <h4 className="text-lg font-medium text-[#111111] tracking-tight">Stage 3 &amp; 4: Bulk Production &amp; Inspection</h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Production tracking, third-party PSI quality inspections, container stuffing, and shipping release into Indian ports.
                </p>
              </div>
              <div className="text-xs bg-[#FAFAFA] px-4 py-2 rounded border border-[#EAEAEA] text-[#111111] font-medium shrink-0">
                Deliverable: Inspection Report &amp; Bill of Lading
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Lead Form */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
