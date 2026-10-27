import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Share Your Requirements",
      subtitle: "Technical & Commercial Brief",
      description: "Specify your desired product, estimated order quantity, target price point, technical parameters, and delivery timeline.",
      deliverables: [
        "Product specification sheet or reference sample",
        "Estimated order quantity & target landing budget",
        "Target timelines and packaging requirements"
      ]
    },
    {
      num: "02",
      title: "Sourcing & Supplier Search",
      subtitle: "Discovery & Screening",
      description: "We identify and screen suitable manufacturers across Chinese industrial clusters, comparing capabilities, factory MOQs, and preliminary costs.",
      deliverables: [
        "Supplier longlist & background review",
        "Preliminary unit price indications & factory MOQs",
        "Sample acquisition coordination for your sign-off"
      ]
    },
    {
      num: "03",
      title: "Review & Confirm",
      subtitle: "Commercial Validation",
      description: "Review detailed quotations, factory specifications, sample quality, and applicable freight and customs duty estimates before committing capital.",
      deliverables: [
        "Transparent price breakdown without hidden fees",
        "Proforma invoice & production schedule review",
        "Milestone-based payment schedule agreement"
      ]
    },
    {
      num: "04",
      title: "Order & Import Coordination",
      subtitle: "Production to Delivery",
      description: "Upon approval, we coordinate purchasing milestones, accredited quality inspections, export dispatch from China, and import handoffs into India.",
      deliverables: [
        "Production tracking & QA inspection coordination",
        "Bill of Lading, Packing List & Invoice generation",
        "Handoff to customs clearing agents at Indian ports"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Workflow &amp; Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
            How It Works: Clear 4-Step Process
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed">
            A methodical, transparent sourcing journey designed to eliminate uncertainties and safeguard your capital at every stage.
          </p>
        </div>

        {/* 4-Step Grid with Minimal Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((item) => (
            <div 
              key={item.num}
              className="border-t border-[#EAEAEA] pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#888888] mb-4">
                  {item.num}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#888888] font-medium mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-medium tracking-tight text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Milestone Deliverables */}
              <div className="pt-4 border-t border-[#EAEAEA]">
                <div className="text-[10px] uppercase tracking-wider font-medium text-[#888888] mb-2.5">
                  Milestone Outputs
                </div>
                <ul className="space-y-1.5 text-xs text-[#666666]">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Action Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-medium text-[#111111]">Ready to initiate Step 01?</h4>
            <p className="text-xs text-[#666666] mt-0.5">
              Submit your product specifications. Preliminary feasibility reviews are completed within 24 to 48 business hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-2.5 rounded-md text-xs font-medium transition-colors shrink-0"
          >
            <span>Submit Sourcing Requirement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
