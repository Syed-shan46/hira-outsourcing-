import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Share Your Requirement",
      desc: "Provide your target product specs, reference photos, technical criteria, target budget, and estimated order quantities."
    },
    {
      step: "02",
      title: "We Source & Verify",
      desc: "Our bilingual team in Yiwu & Shenzhen screens manufacturers, reviews business licenses, validates production capacity, and acquires golden samples."
    },
    {
      step: "03",
      title: "Import & Handle Logistics",
      desc: "Upon commercial approval, we manage ocean/air freight booking, Bill of Lading, export compliance, and Indian customs port handoff."
    },
    {
      step: "04",
      title: "You Receive Your Products",
      desc: "Customs-cleared cargo arrives safely at your warehouse, factory, or commercial address with complete transparent documentation."
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#111111] text-white relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-semibold block mb-2">
            Structured Import Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            From China to Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#999999] mt-4 leading-relaxed">
            A clear, four-stage protocol engineered to safeguard your capital and ensure seamless delivery into India.
          </p>
        </div>

        {/* Real Shipping Container Image Showcase */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 relative">
          <div className="aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-[#1E1E1E]">
            <img 
              src="/images/cargo_ship_hero.jpg" 
              alt="Real shipping containers on ocean freight vessel" 
              className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-[11px] sm:text-xs text-[#EAEAEA] font-mono">
            Direct Trade Lane &bull; China (Ningbo/Shenzhen) &rarr; India (Nhava Sheva/Chennai)
          </div>
        </div>

        {/* Four Connected Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((st, i) => (
            <div 
              key={i} 
              className="relative p-6 sm:p-7 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#888888]">STEP {st.step}</span>
                  <CheckCircle2 className="w-4 h-4 text-white/40" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#999999] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < 3 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-white/30">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Reassurance */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <span>Full transparency at every milestone &bull; Real-time tracking notifications</span>
          <a href="#quote" className="inline-flex items-center gap-1.5 text-white hover:underline font-medium">
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
