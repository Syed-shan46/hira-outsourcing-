import React from 'react';
import { ArrowRight, Play, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] pt-6 pb-10 sm:pt-10 sm:pb-14 overflow-hidden border-b border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="md:col-span-7 z-10 space-y-4 sm:space-y-5">
            
            {/* Top Label */}
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#444444]">
                GLOBAL SOURCING &amp; IMPORT SOLUTIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#111111] leading-[1.08]">
              Source Globally,<br />
              Grow Locally.
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-sm md:text-base text-[#555555] font-normal leading-relaxed max-w-lg">
              We help businesses and startups in India find, verify, and import high-quality products from China &mdash; end to end.
            </p>

            {/* Side-by-Side CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-colors shadow-xs"
              >
                <span>Get a Quote</span>
                <span className="text-xs">&rarr;</span>
              </a>

              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F9F9FB] text-[#111111] border border-[#E5E5E7] hover:border-[#111111] px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center">
                  <Play className="w-2 h-2 fill-current translate-x-[0.5px]" />
                </div>
                <span>How It Works</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="pt-3 sm:pt-4 flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs text-[#333333] font-medium flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-bold">✓</span>
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-bold">✓</span>
                <span>Secure Import</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#111111] font-bold">✓</span>
                <span>Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Exact Cargo Ship & Plane Graphic */}
          <div className="md:col-span-5 relative mt-4 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[340px] md:max-w-none rounded-2xl overflow-hidden">
              <img
                src="/images/mockup_hero_ship.png"
                alt="Container ship loading at port with cargo airplane in flight"
                className="w-full h-auto object-contain filter contrast-[1.03]"
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
