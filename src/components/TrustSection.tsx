import React from 'react';
import { 
  Search, 
  Users, 
  Boxes, 
  Truck, 
  ShieldCheck, 
  FileText,
  BadgePercent,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrustSection: React.FC = () => {
  const valueProps = [
    {
      icon: Search,
      title: "1. Product Sourcing",
      tagline: "Tailored Discovery",
      description: "Find suitable products and potential suppliers in China matching your exact technical parameters, target retail price, and target market.",
      benefit: "Extensive product research across industrial clusters."
    },
    {
      icon: Users,
      title: "2. Supplier Coordination",
      tagline: "Bilingual Communication",
      description: "Assist with supplier communication, sample negotiations, specifications, production timelines, and precise commercial requirements.",
      benefit: "Eliminate language barriers and misaligned terms."
    },
    {
      icon: Boxes,
      title: "3. Bulk Order Support",
      tagline: "Commercial Rigor",
      description: "Coordinate product specifications, quantities, sample sign-offs, packaging standards, and bulk purchasing requirements before manufacturing starts.",
      benefit: "Prevent costly specification errors in bulk runs."
    },
    {
      icon: Truck,
      title: "4. Import Assistance",
      tagline: "Logistics Coordination",
      description: "Help coordinate sea/air freight forwarding, export documentation from China, and logistics handoffs for smooth customs clearance into India.",
      benefit: "Clear documentation alignment for Indian ports."
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAF7] border-b border-[#EEF1F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A] mb-2.5">
            <span>Value Proposition</span>
            <span className="w-8 h-[1px] bg-[#C7A56A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Why Indian Businesses Choose Hira Outsourcing
          </h2>
          <p className="mt-4 text-base text-[#202833]/80 leading-relaxed">
            Sourcing directly from overseas factories can involve language hurdles, opaque quotations, specification discrepancies, and complex customs documentation. We offer a structured, requirement-driven bridge.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#EEF1F4] rounded-xl p-7 hover:border-[#C7A56A]/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#10243A] text-[#C7A56A] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#C7A56A] group-hover:text-[#10243A]">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C7A56A] mb-1">
                    {item.tagline}
                  </div>
                  <h3 className="text-lg font-bold text-[#10243A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#202833]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EEF1F4] flex items-center gap-2 text-xs font-medium text-[#10243A]/80">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C7A56A] shrink-0" />
                  <span>{item.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Trust Callout */}
        <div className="mt-12 bg-[#EEF1F4]/70 border border-[#EEF1F4] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#10243A] text-[#C7A56A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#10243A]">
                Honest, Real-World Trade Facilitation
              </h4>
              <p className="text-xs text-[#202833]/70">
                We provide factual feasibility assessments, true manufacturer quotes, and scope-based agreements. No exaggerated claims or artificial markups.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="text-xs font-semibold text-[#10243A] hover:text-[#C7A56A] underline shrink-0 whitespace-nowrap"
          >
            Learn Our Operating Principles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
