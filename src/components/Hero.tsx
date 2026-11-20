import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] overflow-hidden border-b border-[#F0F0F0] pt-4 sm:pt-6">
      
      {/* 1. Flush Bleed Hero Ship Image: Fits Screen Top, Right, Bottom-Aligned */}
      <div className="absolute top-0 right-0 bottom-8 sm:bottom-10 w-[48%] sm:w-[44%] max-w-[320px] pointer-events-none flex items-end justify-end z-0">
        <img
          src="/images/mockup_hero_ship_clean.png"
          alt="Cargo container vessel loading and airplane in flight"
          className="w-full h-auto max-h-full object-contain object-bottom filter contrast-[1.03]"
          loading="eager"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Top Label: Strictly ONE LINE, Never Wraps into 2 Lines */}
        <div className="mb-2 sm:mb-3">
          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-[#444444] whitespace-nowrap">
            GLOBAL SOURCING &amp; IMPORT SOLUTIONS
          </p>
        </div>

        {/* 3. Headline & Copy: Constrained Left so it never overlaps the ship */}
        <div className="max-w-[58%] sm:max-w-[55%] space-y-2 sm:space-y-3">
          {/* Headline */}
          <h1 className="text-[26px] sm:text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
            Source Globally,<br />
            Grow Locally.
          </h1>

          {/* Supporting Copy */}
          <p className="text-[10.5px] sm:text-xs md:text-sm text-[#555555] font-normal leading-relaxed">
            We help businesses and startups in India find, verify, and import high-quality products from China &mdash; end to end.
          </p>

          {/* 4. Small, Compact Buttons Exactly Like Reference Image */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1 bg-[#111111] hover:bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10.5px] sm:text-[11.5px] font-semibold tracking-tight transition-colors shadow-xs shrink-0"
            >
              <span>Get a Quote</span>
              <span className="text-[9px]">&rarr;</span>
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F9F9FB] text-[#111111] border border-[#E5E5E7] hover:border-[#111111] px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-[10.5px] sm:text-[11.5px] font-medium transition-colors shrink-0"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center text-[7px] shrink-0">
                ▶
              </div>
              <span>How It Works</span>
            </a>
          </div>
        </div>

        {/* 5. Reassurance Checklist: Placed at the BOTTOM with Good Padding */}
        <div className="w-full pt-6 sm:pt-8 pb-3 sm:pb-4 flex items-center justify-between sm:justify-start gap-2 sm:gap-6 text-[9.5px] sm:text-[11px] text-[#222222] font-medium">
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[#111111] font-bold">✓</span>
            <span>Verified Suppliers</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[#111111] font-bold">✓</span>
            <span>Secure Import</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[#111111] font-bold">✓</span>
            <span>Doorstep Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
