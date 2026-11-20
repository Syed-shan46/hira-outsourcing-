import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      label: "Share Your Requirement"
    },
    {
      num: "2",
      label: "We Source & Verify"
    },
    {
      num: "3",
      label: "Import & Handle Logistics"
    },
    {
      num: "4",
      label: "You Receive Your Products"
    }
  ];

  return (
    <section className="py-5 sm:py-8 bg-white border-b border-[#EAEAEA]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Black Container Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#141416] text-white p-5 sm:p-8 overflow-hidden shadow-sm">
          
          {/* Top Half: Headline + Shipping Container on Right */}
          <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
            <div className="max-w-xs sm:max-w-sm z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                From China to<br />
                your Business
              </h2>
              <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1.5 leading-relaxed">
                A simple, reliable import process built for Indian businesses.
              </p>
            </div>

            {/* Container Branding Illustration on Right */}
            <div className="sm:absolute sm:right-0 sm:top-0 sm:bottom-0 w-full sm:w-1/2 flex items-center justify-end opacity-90 sm:opacity-100 pointer-events-none">
              <img
                src="/images/mockup_container_bg.png"
                alt="Hira Outsourcing branded shipping container"
                className="h-28 sm:h-36 w-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Bottom Half: 4 Connected Steps with Progress Line */}
          <div className="relative pt-3 sm:pt-4">
            
            {/* Connecting Horizontal Line passing through node centers */}
            <div className="absolute top-[22px] sm:top-[26px] left-[10%] right-[10%] h-[1px] bg-white/40 z-0"></div>

            {/* 4 Step Nodes */}
            <div className="grid grid-cols-4 gap-1 sm:gap-2 relative z-10">
              {steps.map((st, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  
                  {/* Step Circle with Number */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#111111] font-bold text-[10px] sm:text-xs flex items-center justify-center shadow-xs mb-2">
                    {st.num}
                  </div>

                  {/* Step Label */}
                  <span className="text-[9px] sm:text-xs font-medium text-white/90 leading-tight max-w-[85px] sm:max-w-none">
                    {st.label}
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
