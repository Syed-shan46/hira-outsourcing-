import React from 'react';
import { Building2, MapPin, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  // Real, genuine company metrics only - strictly no fabricated figures
  const realMetrics = [
    {
      stat: "2 Hubs",
      label: "Operational in India",
      desc: "Mumbai Port Logistics Desk & New Delhi ICD Coordination Office"
    },
    {
      stat: "2 Bases",
      label: "Ground Presence in China",
      desc: "Bilingual factory liaison teams located in Yiwu & Shenzhen"
    },
    {
      stat: "100%",
      label: "Verified Factory Audit Protocol",
      desc: "Legal license screening and corporate bank verification before payments"
    },
    {
      stat: "0%",
      label: "Hidden Markups or Surcharges",
      desc: "Transparent landed cost sheets with clear freight and customs breakdown"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-semibold block mb-2">
            Verifiable Credibility
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight">
            Built on Facts, Not Exaggerations.
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            International sourcing succeeds on rigorous ground due diligence, clear documentation, and transparent accounting &mdash; not inflated marketing claims.
          </p>
        </div>

        {/* 4 Authentic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {realMetrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-semibold text-[#111111] tracking-tight mb-2">
                  {m.stat}
                </div>
                <div className="text-sm font-medium text-[#111111] mb-2">
                  {m.label}
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAEAEA] flex items-center gap-1.5 text-[11px] text-[#111111] font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-[#111111]" />
                <span>Verified Operation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
