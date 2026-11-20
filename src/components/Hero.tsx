import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] overflow-hidden border-b border-[#F0F0F0] pt-4 sm:pt-6">

      {/* 1. Full-Width Background: Plain White on Left, Highlight Vessel/Flight on Right with natural top sky */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/hero_final1.png"
          alt="China to India maritime logistics and air freight"
          className="w-full h-full object-cover object-right"
          loading="eager"
        />
        {/* Base dark tint layer */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Right side extra black tint & shading */}
        <div className="absolute inset-y-0 right-0 w-[60%] sm:w-[50%] bg-gradient-to-l from-black/40 via-black/20 to-transparent pointer-events-none" />

        {/* Pure white overlay on text section, extending more to the right side */}
        <div className="absolute inset-y-0 left-0 w-[82%] sm:w-[72%] md:w-[64%] bg-gradient-to-r from-white via-white to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2. Top Label: Strictly ONE line */}
        <div className="mb-2 sm:mb-2.5">
          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-[#444444] whitespace-nowrap">
            GLOBAL SOURCING &amp; IMPORT SOLUTIONS
          </p>
        </div>

        {/* 3. Headline: Exactly 2 lines ('Source Globally,' / 'Grow Locally.') */}
        <div className="max-w-[58%] sm:max-w-[55%] space-y-2 sm:space-y-2.5">
          <h1 className="text-[21px] sm:text-3xl md:text-5xl font-black tracking-tight text-[#111111] leading-[1.12]">
            <span className="whitespace-nowrap block">Source Globally,</span>
            <span className="whitespace-nowrap block">Grow Locally.</span>
          </h1>

          {/* 4. Subtitle: Exactly 2 lines */}
          <p className="text-[10px] sm:text-xs md:text-sm text-[#555555] font-normal leading-snug max-w-[240px] sm:max-w-md">
            We help businesses and startups in India find, verify,<br />
            and import high-quality products from China &mdash; end to end.
          </p>

          {/* 5. Small, Sleek Buttons */}
          <div className="flex items-center gap-2 pt-1 pb-1">
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

        {/* 6. Reassurance Checklist: Positioned IN the bottom of the image area with good padding */}
        <div className="w-full pt-6 sm:pt-8 pb-3 sm:pb-4 flex items-center justify-between sm:justify-start gap-2 sm:gap-6 text-[9.5px] sm:text-[11px] text-[#111111] font-semibold">
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
