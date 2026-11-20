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
    <section className="py-2.5 sm:py-4 bg-white border-b border-[#EAEAEA]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Black Container Card */}
        <div className="relative rounded-2xl bg-[#141416] text-white px-4 py-3.5 sm:px-6 sm:py-5 overflow-hidden shadow-xs">
          
          {/* Top Half: Headline on Left + Pure Container Image on Right */}
          <div className="relative flex items-center justify-between gap-3 mb-2.5 sm:mb-3.5">
            
            {/* Headline & Subtitle */}
            <div className="max-w-[60%] sm:max-w-[62%] z-10">
              <h2 className="text-[15px] sm:text-xl font-bold tracking-tight text-white leading-tight">
                From China to<br />
                your Business
              </h2>
              <p className="text-[9.5px] sm:text-xs text-[#A0A0A0] mt-0.5 leading-snug">
                A simple, reliable import process built for Indian businesses.
              </p>
            </div>

            {/* Clean Container Wall Graphic on Right (Without Duplicate Text) */}
            <div className="w-[36%] max-w-[140px] sm:max-w-[180px] pointer-events-none flex items-center justify-end shrink-0">
              <img
                src="/images/mockup_container_only.png"
                alt="Hira Outsourcing branded shipping container"
                className="w-full h-auto object-contain rounded-tr-lg"
              />
            </div>

          </div>

          {/* Bottom Half: 4 Connected Steps with Progress Line (Compact Height) */}
          <div className="relative pt-1 sm:pt-2">
            
            {/* Connecting Horizontal Line passing through node centers */}
            <div className="absolute top-[9px] sm:top-[12px] left-[10%] right-[10%] h-[1px] bg-white/35 z-0"></div>

            {/* 4 Step Nodes */}
            <div className="grid grid-cols-4 gap-1 relative z-10">
              {steps.map((st, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  
                  {/* Step Circle with Number */}
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white text-[#111111] font-bold text-[8.5px] sm:text-[10px] flex items-center justify-center shadow-xs mb-1">
                    {st.num}
                  </div>

                  {/* Step Label in 2 lines */}
                  <span className="text-[7.5px] sm:text-[9.5px] font-medium text-white/90 leading-tight">
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
