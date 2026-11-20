import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      line1: "Share Your",
      line2: "Requirement"
    },
    {
      num: "2",
      line1: "We Source &",
      line2: "Verify"
    },
    {
      num: "3",
      line1: "Import &",
      line2: "Handle Logistics"
    },
    {
      num: "4",
      line1: "You Receive",
      line2: "Your Products"
    }
  ];

  return (
    <section className="py-2 sm:py-3.5 bg-white border-b border-[#EAEAEA]" id="process">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">

        {/* Compact Black Container Card */}
        <div className="relative rounded-2xl bg-[#141416] text-white px-3.5 py-3 sm:px-6 sm:py-4 overflow-hidden shadow-xs">

          {/* Full-Height Background Container Graphic on Right Half (Matching Mockup) */}
          <div className="absolute top-0 right-0 bottom-0 w-[58%] sm:w-[50%] pointer-events-none z-0 overflow-hidden">
            <img
              src="/images/mockup_container_only.png"
              alt="Hira Outsourcing branded shipping container"
              className="w-full h-full object-cover object-right"
              loading="lazy"
            />
            {/* Soft left gradient fade into black card background */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#141416] to-transparent pointer-events-none" />
          </div>

          {/* Top Half: Headline & Subtitle on Left */}
          <div className="relative z-10 max-w-[58%] sm:max-w-[60%] mb-2.5 sm:mb-3.5">
            <h2 className="text-[13.5px] sm:text-lg font-bold tracking-tight text-white leading-tight">
              From China to<br />
              your Business
            </h2>
            <p className="text-[8.5px] sm:text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">
              A simple, reliable import process built for Indian businesses.
            </p>
          </div>

          {/* Bottom Half: 4 Connected Steps with Progress Line (Compact Height) */}
          <div className="relative z-10 pt-0.5 sm:pt-1.5">

            {/* Connecting Horizontal Line passing through node centers */}
            <div className="absolute top-[7px] sm:top-[9px] left-[10%] right-[10%] h-[1px] bg-white/35 z-0"></div>

            {/* 4 Step Nodes */}
            <div className="grid grid-cols-4 gap-1 relative z-10">
              {steps.map((st, i) => (
                <div key={i} className="flex flex-col items-center text-center">

                  {/* Step Circle with Number */}
                  <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-white text-[#111111] font-bold text-[7.5px] sm:text-[9px] flex items-center justify-center shadow-xs mb-1">
                    {st.num}
                  </div>

                  {/* Step Label in 2 lines */}
                  <span className="text-[7px] sm:text-[8.5px] font-medium text-white/90 leading-tight">
                    <span>{st.line1}</span>
                    <br />
                    <span>{st.line2}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
