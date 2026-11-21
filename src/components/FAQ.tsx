import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How does China sourcing work?",
      answer: "We start by analyzing your product specifications, target cost, and required quantities. Our bilingual teams in Yiwu and Shenzhen search specialized industrial clusters to match you with verified manufacturers, negotiate commercial terms, arrange golden samples, and coordinate bulk production."
    },
    {
      question: "Can you verify suppliers?",
      answer: "Yes. We perform multi-tier verification before any funds are released. This includes checking official Chinese government enterprise credit records, verifying legal business licenses, validating corporate bank accounts, and conducting on-site physical factory inspections when requested."
    },
    {
      question: "How much does importing cost?",
      answer: "We provide 100% transparent landed cost breakdowns. Costs comprise: 1) Factory unit purchase cost (EXW/FOB), 2) Sea or air freight forwarding based on CBM or gross weight, 3) Indian customs duty & GST based on the product's official HS Code, and 4) Clear, agreed coordination fees. There are zero hidden surcharges."
    },
    {
      question: "Do you handle shipping and customs?",
      answer: "Yes, we manage door-to-door logistics. This includes container booking (FCL/LCL), export documentation in China, Bill of Lading, packing lists, Indian port arrival clearance, customs broker handoff, and inland transport to your facility."
    },
    {
      question: "Can startups use your services?",
      answer: "Absolutely. We work extensively with early-stage brands and startups. We assist with negotiating lower trial-batch MOQs, private-label packaging, and sample verification so you can validate products in India without committing massive upfront capital."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FBFBFB] border-t border-[#EAEAEA]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-semibold block mb-2">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Essential facts about bilateral sourcing, factory verification, and customs clearance into India.
          </p>
        </div>

        {/* Minimal Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden transition-colors hover:border-[#CCCCCC]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-[#111111] tracking-tight">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#666666] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#111111]' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#F5F5F5]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
