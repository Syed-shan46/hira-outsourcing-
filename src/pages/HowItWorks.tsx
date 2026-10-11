import React, { useEffect } from 'react';
import { ProcessSection } from '../components/ProcessSection';
import { FAQ } from '../components/FAQ';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  CheckCircle, 
  Clock, 
  HelpCircle, 
  FileCheck2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  useEffect(() => {
    document.title = "How It Works | Hira Outsourcing - 4-Step China Sourcing Process";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="bg-[#10243A] text-[#FAFAF7] py-16 lg:py-24 border-b border-[#202833]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>Workflow &amp; Milestones</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              A Clear, Step-by-Step Sourcing Workflow
            </h1>
            <p className="text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed">
              From requirement definition and sample evaluation to factory production and import clearance, our four-step process keeps your investment secure and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Detailed Timeline & Expectations */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#EEF1F4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243A]">
              What to Expect at Each Stage
            </h2>
            <p className="mt-2 text-sm text-[#202833]/70">
              Realistic turnaround times, required inputs, and milestone deliverables.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C7A56A]">
                  <Clock className="w-4 h-4" /> 24 to 48 Hours
                </div>
                <h4 className="text-base font-bold text-[#10243A]">Stage 1: Feasibility &amp; Preliminary Screening</h4>
                <p className="text-xs text-[#202833]/75">
                  Initial evaluation of your product parameters against known factory clusters in Guangdong, Zhejiang, and Yiwu.
                </p>
              </div>
              <div className="text-xs bg-[#FFFFFF] px-4 py-2 rounded-lg border border-[#EEF1F4] text-[#10243A] font-semibold">
                Deliverable: Sourcing Feasibility Note
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C7A56A]">
                  <Clock className="w-4 h-4" /> 5 to 10 Working Days
                </div>
                <h4 className="text-base font-bold text-[#10243A]">Stage 2: Factory Identification &amp; Sample Dispatch</h4>
                <p className="text-xs text-[#202833]/75">
                  Direct communication with audited manufacturers, commercial pricing confirmation, and international express dispatch of samples.
                </p>
              </div>
              <div className="text-xs bg-[#FFFFFF] px-4 py-2 rounded-lg border border-[#EEF1F4] text-[#10243A] font-semibold">
                Deliverable: Physical Golden Sample
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#FAFAF7] border border-[#EEF1F4] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C7A56A]">
                  <Clock className="w-4 h-4" /> 15 to 30 Days (Production)
                </div>
                <h4 className="text-base font-bold text-[#10243A]">Stage 3 &amp; 4: Bulk Production &amp; Inspection</h4>
                <p className="text-xs text-[#202833]/75">
                  Production tracking, third-party PSI quality inspections, container stuffing, and shipping release.
                </p>
              </div>
              <div className="text-xs bg-[#FFFFFF] px-4 py-2 rounded-lg border border-[#EEF1F4] text-[#10243A] font-semibold">
                Deliverable: Inspection Report &amp; Bill of Lading
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Lead Form */}
      <section className="py-20 bg-[#EEF1F4]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
