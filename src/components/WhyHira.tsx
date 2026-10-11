import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  MessageSquare, 
  Search, 
  Receipt, 
  Layers, 
  Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyHira: React.FC = () => {
  const principles = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "Bilingual English and Mandarin communication ensures your exact technical parameters, packaging nuances, and commercial timelines are relayed to manufacturers without distortion."
    },
    {
      icon: Search,
      title: "Requirement-Based Sourcing",
      desc: "We do not push existing stock or affiliate factory inventories. Sourcing is started afresh based on your target specs, pricing tier, and Indian market demands."
    },
    {
      icon: Receipt,
      title: "Transparent Quotations & Cost Breakdowns",
      desc: "Gain comprehensive clarity across ex-factory pricing, inland China trucking, export port tariffs, sea/air freight estimates, and landing duty structures."
    },
    {
      icon: ShieldCheck,
      title: "Supplier Due Diligence",
      desc: "Structured verification checks covering Chinese business registries, verified factory licenses, operational stability, and reference certifications."
    },
    {
      icon: Layers,
      title: "Order Coordination",
      desc: "Diligent management of production milestones, golden reference sample approval, progress checkpoints, and packaging compliance prior to shipping dispatch."
    },
    {
      icon: Truck,
      title: "Import Support Tailored to Each Business",
      desc: "Customised handoffs for your customs clearing agent (CHA), helping streamline HS Code classification, Bill of Lading documentation, and port procedures."
    }
  ];

  return (
    <section className="py-20 bg-[#FFFFFF] border-y border-[#EEF1F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Principles Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>Operating Discipline</span>
              <span className="w-8 h-[1px] bg-[#C7A56A]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
              A More Reliable Way to Source from China
            </h2>

            <p className="text-base text-[#202833]/80 leading-relaxed">
              Navigating Chinese manufacturing from India can feel fraught with opacity—unverified intermediaries, inflated quotes, and misaligned cargo shipments. Hira Outsourcing brings institutional clarity to every purchase.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#10243A]">
                      <Icon className="w-4 h-4 text-[#C7A56A] shrink-0" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-xs text-[#202833]/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#10243A] hover:bg-[#202833] text-[#FAFAF7] px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow"
              >
                <span>Initiate Sourcing Evaluation</span>
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Authentic Industry Photography Split */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#EEF1F4] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
                alt="International trade cargo container vessels and port crane logistics"
                className="w-full h-80 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A56A]">
                  Cross-Border Trade Discipline
                </span>
                <h4 className="text-lg font-bold">
                  Bilateral Coordination &bull; China to India
                </h4>
                <p className="text-xs text-[#EEF1F4]/80">
                  Every order is tracked from factory shop-floor sign-off to container loading and customs documentation dispatch.
                </p>
              </div>
            </div>

            {/* Fact Box */}
            <div className="p-5 rounded-xl bg-[#EEF1F4]/70 border border-[#EEF1F4] flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-[#10243A] shrink-0" />
                <span className="text-[#202833]/80">
                  <strong>Strict Standards:</strong> We do not make unsupported claims or charge opaque percentage markups. All fees and quotations are transparently documented prior to order placement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
