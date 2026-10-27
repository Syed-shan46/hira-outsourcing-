import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyHira: React.FC = () => {
  const principles = [
    {
      title: "Clear Communication",
      desc: "Bilingual English and Mandarin communication ensures your technical parameters, packaging nuances, and commercial timelines are relayed to manufacturers without distortion."
    },
    {
      title: "Requirement-Based Sourcing",
      desc: "We do not push existing stock or affiliate factory inventories. Sourcing begins afresh based on your exact target specifications, budget tiers, and Indian market demands."
    },
    {
      title: "Transparent Quotations & Cost Breakdowns",
      desc: "Gain comprehensive clarity across ex-factory pricing, inland China trucking, export port tariffs, sea/air freight rates, and landed Indian customs duties."
    },
    {
      title: "Supplier Due Diligence",
      desc: "Structured verification checks covering Chinese business registries, verified factory licenses, operational stability, and reference certifications."
    },
    {
      title: "Order Coordination",
      desc: "Attentive tracking of production milestones, golden reference sample approval, progress checkpoints, and packaging compliance prior to container dispatch."
    },
    {
      title: "Tailored Import Assistance",
      desc: "Customized handoffs for your customs clearing agent (CHA), helping streamline HS Code classification, Bill of Lading documentation, and port procedures."
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Principles Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
                Operating Discipline
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
                A More Reliable Way to Source from China
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed">
                Navigating Chinese manufacturing from India can feel fraught with opacity—unverified intermediaries, inflated quotes, and misaligned cargo shipments. Hira Outsourcing brings institutional clarity to every purchase.
              </p>
            </div>

            {/* Principles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
              {principles.map((p, idx) => (
                <div key={idx} className="space-y-1.5 border-t border-[#EAEAEA] pt-4">
                  <h3 className="text-sm font-medium text-[#111111]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-3 rounded-md text-sm font-medium transition-colors"
              >
                <span>Initiate Sourcing Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Restrained Industry Photography */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#EAEAEA] rounded-lg overflow-hidden bg-[#FAFAFA]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
                  alt="International trade cargo container vessels and port crane logistics"
                  className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-5 bg-white border-t border-[#EAEAEA] space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#888888] font-medium block">
                  Bilateral Coordination &bull; China to India
                </span>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Every order is tracked from factory shop-floor sign-off to container loading and customs documentation dispatch.
                </p>
              </div>
            </div>

            {/* Standards Statement */}
            <div className="p-4 rounded-md bg-[#FAFAFA] border border-[#EAEAEA] text-xs text-[#666666] leading-relaxed">
              <strong className="text-[#111111] font-medium">Clear Standards: </strong>
              We do not charge opaque markups or make unsupported claims. All fees and quotations are transparently documented prior to order placement.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
