import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] pt-5 pb-6 px-4 sm:px-6 lg:px-8 border-b border-[#F0F0F0] overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        
        {/* Floating Ship, Crane & Plane Illustration on the Right */}
        <div className="absolute -right-2 sm:right-0 -top-3 bottom-0 w-[44%] sm:w-[42%] max-w-[270px] pointer-events-none flex items-center justify-end z-0">
          <img
            src="/images/mockup_hero_ship_clean.png"
            alt="Cargo container vessel loading and airplane in flight"
            className="w-full h-auto object-contain object-right filter contrast-[1.03]"
            loading="eager"
          />
        </div>

        {/* Content on the Left (constrained to avoid any overlap with ship) */}
        <div className="relative z-10 max-w-[62%] sm:max-w-[58%] space-y-3 sm:space-y-4">
          
          {/* Top Label */}
          <div>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#444444]">
              GLOBAL SOURCING &amp; IMPORT SOLUTIONS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[26px] sm:text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
            Source Globally,<br />
            Grow Locally.
          </h1>

          {/* Supporting Copy */}
          <p className="text-[11px] sm:text-xs md:text-sm text-[#555555] font-normal leading-relaxed">
            We help businesses and startups in India find, verify, and import high-quality products from China &mdash; end to end.
          </p>

          {/* Side-by-Side CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 pt-1">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1 bg-[#111111] hover:bg-black text-white px-3.5 sm:px-5 py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold tracking-tight transition-colors shadow-xs shrink-0"
            >
              <span>Get a Quote</span>
              <span className="text-[10px]">&rarr;</span>
            </a>

            <a
              href="#process"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F9F9FB] text-[#111111] border border-[#E5E5E7] hover:border-[#111111] px-3 sm:px-4 py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium transition-colors shrink-0"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center text-[7px]">
                ▶
              </div>
              <span>How It Works</span>
            </a>
          </div>

          {/* Reassurance Checklist */}
          <div className="pt-2 flex items-center gap-2 sm:gap-4 text-[9px] sm:text-[11px] text-[#333333] font-medium flex-nowrap whitespace-nowrap overflow-x-hidden">
            <span>✓ Verified Suppliers</span>
            <span>✓ Secure Import</span>
            <span>✓ Doorstep Delivery</span>
          </div>

        </div>

      </div>
    </section>
  );
};
