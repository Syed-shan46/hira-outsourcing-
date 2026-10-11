import React from 'react';
import { 
  FileEdit, 
  SearchCode, 
  CheckCheck, 
  Container, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "Step 01",
      icon: FileEdit,
      title: "Share Your Requirements",
      subtitle: "Technical & Commercial Brief",
      description: "Tell us which product you need, your preferred quantity, target price point, technical specifications, and key business objectives.",
      deliverables: [
        "Product specification sheet or reference sample",
        "Estimated order quantity & target landing budget",
        "Target timelines and packaging requirements"
      ]
    },
    {
      step: "Step 02",
      icon: SearchCode,
      title: "Sourcing & Supplier Search",
      subtitle: "Discovery & Screening",
      description: "We work on identifying suitable sourcing options in China based on your requirements, comparing capabilities and preliminary terms.",
      deliverables: [
        "Supplier longlist & background review",
        "Preliminary unit price indications & factory MOQs",
        "Sample acquisition coordination for your sign-off"
      ]
    },
    {
      step: "Step 03",
      icon: CheckCheck,
      title: "Review & Confirm",
      subtitle: "Commercial Validation",
      description: "Review available quotations, factory specifications, sample quality, supplier details, and applicable freight & duty estimates before proceeding.",
      deliverables: [
        "Transparent price breakdown without hidden fees",
        "Proforma invoice & production schedule review",
        "Milestone-based payment schedule agreement"
      ]
    },
    {
      step: "Step 04",
      icon: Container,
      title: "Order & Import Coordination",
      subtitle: "Production to Delivery",
      description: "Once approved, we coordinate the agreed purchasing milestones, inspection arrangements, China export dispatch, and import support into India.",
      deliverables: [
        "Production tracking & QA inspection coordination",
        "Bill of Lading, Packing List & Invoice generation",
        "Handoff to customs clearing agents at Indian port"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#10243A] text-[#FFFFFF] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A] mb-2.5">
            <span>Structured Sourcing Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight">
            How It Works: Clear 4-Step Process
          </h2>
          <p className="mt-4 text-base text-[#EEF1F4]/80 leading-relaxed">
            A methodical, transparent sourcing journey designed to eliminate uncertainties and safeguard your capital at every stage.
          </p>
        </div>

        {/* Process Steps: Desktop Horizontal Timeline / Mobile Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#0c1b2c] border border-[#202833] rounded-xl p-6 relative flex flex-col justify-between hover:border-[#C7A56A]/60 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono text-[#10243A] bg-[#C7A56A] px-2.5 py-1 rounded">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#202833] text-[#FAFAF7] flex items-center justify-center group-hover:bg-[#C7A56A] group-hover:text-[#10243A] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C7A56A]/90 mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-[#FFFFFF] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EEF1F4]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Milestone Deliverables */}
                <div className="pt-4 border-t border-[#202833] mt-auto">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#EEF1F4]/50 mb-2">
                    Key Outputs:
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#EEF1F4]/80">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C7A56A] font-bold">&rsaquo;</span>
                        <span className="leading-tight">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-14 p-6 rounded-xl bg-[#0c1b2c] border border-[#C7A56A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#C7A56A] text-[#10243A] flex items-center justify-center font-bold text-sm shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#FFFFFF]">Ready to initiate Step 01?</h4>
              <p className="text-xs text-[#EEF1F4]/70">
                Submit your product specifications. We typically complete preliminary feasibility reviews within 24 to 48 business hours.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-6 py-3 rounded-lg text-xs font-bold tracking-wide transition-colors shrink-0"
          >
            <span>Submit Sourcing Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
