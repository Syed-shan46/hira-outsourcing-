import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
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
    <section id="faq-section" className="py-20 bg-[#FAFAF7] border-t border-[#EEF1F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A] mb-2.5">
            <HelpCircle className="w-4 h-4" />
            <span>Answers &amp; Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#202833]/75 leading-relaxed">
            Clear, qualified answers on bilateral trade, factory minimums, logistics timelines, and import documentation into India.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#FFFFFF] border-[#C7A56A]/60 shadow-md' 
                    : 'bg-[#FFFFFF] border-[#EEF1F4] hover:border-[#C7A56A]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C7A56A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#10243A] leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#10243A] text-[#C7A56A]' : 'bg-[#EEF1F4] text-[#10243A]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#202833]/80 leading-relaxed border-t border-[#EEF1F4]/70">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Qualified Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#EEF1F4] border border-[#EEF1F4] text-center text-xs text-[#202833]/70">
          Have an unlisted question regarding specific HS codes or regulatory certifications (BIS, WPC, etc.)?{' '}
          <a href="#enquiry-form" className="text-[#10243A] font-semibold underline hover:text-[#C7A56A]">
            Contact our trade desk
          </a>
        </div>
      </div>
    </section>
  );
};
