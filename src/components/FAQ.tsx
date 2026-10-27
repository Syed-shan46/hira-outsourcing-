import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    question: "How does China product sourcing work with Hira Outsourcing?",
    answer: "Our sourcing process starts with your specific product parameters, target pricing, and order volume. We search relevant industrial clusters across China (such as Guangdong, Zhejiang, and Yiwu), communicate directly with verified manufacturers, evaluate specifications and preliminary costs, arrange samples for your evaluation, and help coordinate purchasing and freight upon approval."
  },
  {
    question: "Can you help find a specific product or custom OEM design?",
    answer: "Yes. Whether you have an existing product link, a technical specification sheet, or a prototype concept, we assist in finding manufacturers capable of producing exact matches or custom private-label goods with your branding."
  },
  {
    question: "Is there a minimum order quantity (MOQ)?",
    answer: "MOQs are set directly by Chinese manufacturers and vary significantly by product category, raw materials, and customization level. Off-the-shelf items may have lower MOQs (e.g., 200–500 units), while fully customized OEM tooling or color injection molding may require 1,000 to 5,000 units. We clarify factory MOQs transparently during Step 02."
  },
  {
    question: "Can I request product samples before placing a bulk order?",
    answer: "Yes, requesting golden samples is strongly advised. We coordinate sample production and dispatch from Chinese factories directly to your address in India so you can physically inspect build quality, materials, and functionality before releasing any bulk production deposit."
  },
  {
    question: "How are sourcing and shipping costs calculated?",
    answer: "Pricing is completely transparent. Factory unit costs are quoted directly based on manufacturer terms (FOB/EXW). Freight forwarding is calculated based on cargo volume (CBM for sea freight or gross weight for air cargo) and prevailing carrier rates. Import duties and GST depend on the official Indian Customs HS Code for your specific product."
  },
  {
    question: "Can you assist with quality inspections?",
    answer: "Yes. We coordinate third-party pre-shipment inspections (PSI) or during-production inspections (DUPRO) through accredited inspection agencies (such as SGS, Bureau Veritas, or certified regional QA teams) according to agreed AQL sampling standards. Inspection reports are provided prior to final balance dispatch."
  },
  {
    question: "How long does importing typically take from China to India?",
    answer: "Timelines depend on production lead times and chosen freight modes. Typically, factory manufacturing takes 15–30 days depending on quantity. Air shipping takes approximately 5–9 days, while Sea container shipping (FCL/LCL) from major Chinese ports to Indian ports (such as Nhava Sheva or Chennai) usually takes 18–28 days, plus 3–5 days for Indian customs clearance."
  },
  {
    question: "What information should I provide to receive a quotation?",
    answer: "To receive an actionable sourcing quotation, please provide: 1) Product name/images or reference links, 2) Technical specifications or material requirements, 3) Estimated order quantity, 4) Desired target landing timeline, and 5) Packaging or private-label branding preferences."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-left mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#666666] leading-relaxed">
            Direct, qualified answers on bilateral trade, factory minimums, logistics timelines, and customs documentation into India.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="border-t border-[#EAEAEA]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#EAEAEA]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 text-left flex items-center justify-between gap-6 focus:outline-none focus-visible:ring-1 focus-visible:ring-black cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-normal sm:font-medium text-base text-[#111111] leading-snug">
                    {item.question}
                  </span>
                  <div className={`shrink-0 text-[#888888] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#111111]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 text-sm text-[#666666] leading-relaxed animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-xs text-[#666666]">
          Have an unlisted inquiry regarding specific HS codes or mandatory regulatory standards (BIS, WPC, EPR)?{' '}
          <a href="#enquiry-form" className="text-[#111111] font-medium underline">
            Submit a direct request to our trade desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
