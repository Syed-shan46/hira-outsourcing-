import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const valueProps = [
    {
      num: "01",
      title: "Product Sourcing",
      tagline: "Requirement-Led Search",
      description: "Identify suitable products and manufacturers in China matching your exact technical parameters, target retail margins, and Indian market standards.",
      benefit: "Targeted research across specialized industrial clusters."
    },
    {
      num: "02",
      title: "Supplier Coordination",
      tagline: "Bilingual Communication",
      description: "Direct liaison with Chinese factory managers in Mandarin and English to negotiate sample parameters, lead times, and commercial terms without ambiguity.",
      benefit: "Eliminates language barriers and misaligned specifications."
    },
    {
      num: "03",
      title: "Bulk Order Support",
      tagline: "Commercial Rigor",
      description: "Carefully structure purchase orders, sample sign-offs, packaging specifications, and milestone payments before mass manufacturing begins.",
      benefit: "Prevents costly errors in mass production runs."
    },
    {
      num: "04",
      title: "Import Assistance",
      tagline: "Logistics Coordination",
      description: "Coordinate sea container (FCL/LCL) and air cargo dispatch from China, ensuring aligned commercial documentation for seamless customs clearance into India.",
      benefit: "Precise documentation alignment for Indian ports."
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Core Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
            Why Indian Businesses Partner with Hira Outsourcing
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed">
            Sourcing directly from overseas factories often involves communication barriers, opaque quotation markups, specification mismatches, and complex customs documentation. We provide a structured, disciplined bridge.
          </p>
        </div>

        {/* 4 Value Pillars — Minimalist Bordered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {valueProps.map((item) => (
            <div
              key={item.num}
              className="border-t border-[#EAEAEA] pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#888888] mb-4">
                  {item.num}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#888888] font-medium mb-1">
                  {item.tagline}
                </div>
                <h3 className="text-xl font-medium tracking-tight text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] text-xs text-[#111111] font-normal">
                {item.benefit}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Operating Note */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666]">
          <p className="max-w-2xl">
            <strong className="text-[#111111] font-medium">Fact-Based Facilitation:</strong> We provide authentic manufacturer quotes and agreed scope-of-work documentation. No inflated claims or undisclosed markups.
          </p>
          <Link
            to="/about"
            className="text-[#111111] font-medium hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Our Operating Principles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
