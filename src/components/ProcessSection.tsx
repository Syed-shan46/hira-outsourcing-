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
    <section className="py-4 sm:py-6 bg-white border-b border-[#EAEAEA]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Black Container Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#141416] text-white p-4 sm:p-7 overflow-hidden shadow-sm">
          
          {/* Top Half: Headline on Left + Shipping Container on Right (side-by-side) */}
          <div className="relative mb-5 sm:mb-7 min-h-[95px] sm:min-h-[110px]">
            
            {/* Headline & Subtitle */}
            <div className="max-w-[58%] sm:max-w-[60%] z-10 relative">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                From China to<br />
                your Business
              </h2>
              <p className="text-[10px] sm:text-xs text-[#A0A0A0] mt-1 leading-snug">
                A simple, reliable import process built for Indian businesses.
              </p>
            </div>

            {/* Container Branding on Right */}
            <div className="absolute -right-3 -top-3 w-[45%] max-w-[190px] sm:max-w-[240px] pointer-events-none opacity-95 flex items-center justify-end">
              <img
                src="/images/mockup_container_bg.png"
                alt="Hira Outsourcing branded shipping container"
                className="w-full h-auto object-contain rounded-md"
              />
            </div>

          </div>

          {/* Bottom Half: 4 Connected Steps with Progress Line */}
          <div className="relative pt-2">
            
            {/* Connecting Horizontal Line passing through node centers */}
            <div className="absolute top-[18px] sm:top-[22px] left-[10%] right-[10%] h-[1px] bg-white/40 z-0"></div>

            {/* 4 Step Nodes */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 relative z-10">
              {steps.map((st, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  
                  {/* Step Circle with Number */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#111111] font-bold text-[9px] sm:text-xs flex items-center justify-center shadow-xs mb-1.5">
                    {st.num}
                  </div>

                  {/* Step Label in 2 lines */}
                  <span className="text-[8.5px] sm:text-[11px] font-medium text-white/90 leading-tight">
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
