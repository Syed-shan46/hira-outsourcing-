import React from 'react';
import { Search, ShieldCheck, Truck, FileCheck, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "Product Sourcing",
      desc: "Identify authentic manufacturers across China matching your exact technical parameters, target retail margins, and MOQ constraints.",
      icon: Search,
      tags: ["Factory Sourcing", "Sample Acquisition", "MOQ Negotiation"]
    },
    {
      num: "02",
      title: "Supplier Verification",
      desc: "Rigorous due diligence of Chinese legal business licenses, bank account authenticity, manufacturing capacity, and export track records.",
      icon: ShieldCheck,
      tags: ["License Checks", "Physical Audits", "Anti-Scam Protocol"]
    },
    {
      num: "03",
      title: "Import & Logistics",
      desc: "Comprehensive ocean freight (FCL/LCL) and air express coordination from origin ports (Shenzhen, Ningbo) directly to Indian ICDs.",
      icon: Truck,
      tags: ["Sea & Air Freight", "Consolidation", "Container Booking"]
    },
    {
      num: "04",
      title: "Customs & Compliance",
      desc: "Flawless commercial invoice alignment, Bill of Lading, Packing Lists, BIS/EPR compliance advisory, and Indian customs clearance handoff.",
      icon: FileCheck,
      tags: ["HS Code Classification", "Duty Optimization", "Bill of Entry"]
    },
    {
      num: "05",
      title: "Business Support",
      desc: "Dedicated bilingual trade desk support in Mandarin and English for price benchmarking, contract reviews, and ongoing re-order management.",
      icon: HelpCircle,
      tags: ["Bilingual Account Manager", "Contract Reviews", "Re-order Tracking"]
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-b border-[#EAEAEA]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-semibold block mb-2">
            End-To-End Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight">
            Comprehensive Sourcing Services
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Five core capabilities designed to eliminate the risks, language barriers, and documentation headaches of cross-border manufacturing.
          </p>
        </div>

        {/* 5 Minimal Swiss Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] hover:border-[#111111] hover:bg-white transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#888888] font-semibold">{srv.num}</span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#EAEAEA] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 text-[#111111] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-[#111111] tracking-tight mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAEAEA]/80">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] bg-white border border-[#EAEAEA] text-[#555555] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation CTA Card */}
          <div className="p-8 rounded-2xl bg-[#111111] text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#888888] font-semibold uppercase tracking-wider block mb-6">
                Custom Requirements
              </span>
              <h3 className="text-2xl font-medium tracking-tight mb-3">
                Have a Complex Product Specification?
              </h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Send us your technical drawings, 1688 links, or reference photos for a free feasibility and landed cost study.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-white/80 transition-colors"
              >
                <span>Request Feasibility Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
