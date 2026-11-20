import React from 'react';
import { Quote } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Hira verified the factory in Shenzhen before we transferred our tooling deposit. Their on-site check revealed the supplier was a 3rd-party reseller, saving us from a potential ₹12 Lakh dispute. They connected us directly with the actual OEM.",
      name: "Rajesh S.",
      role: "Founder, Consumer Hardware Brand",
      city: "Bengaluru, India",
      consignment: "Molded Electronics Enclosures (10,000 units)"
    },
    {
      quote: "Importing seasonal home decor was always stressful with customs delays at Nhava Sheva. Hira took over documentation alignment, HS code classification, and port handoff. Every container arrived cleared without demurrages.",
      name: "Ananya Mehta",
      role: "Managing Director, Retail Import House",
      city: "Mumbai, India",
      consignment: "40ft High Cube Container"
    },
    {
      quote: "As a D2C startup, our biggest challenge was meeting factory MOQs. Hira negotiated sample orders directly with Yiwu manufacturers in Mandarin and arranged sample consolidation to Delhi within 7 days.",
      name: "Vikram Singhania",
      role: "Co-Founder, Lifestyle Products",
      city: "New Delhi, India",
      consignment: "Consolidated Air Cargo Batch"
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-medium block mb-2">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium text-[#111111] tracking-tight">
            Trusted by Indian Enterprises &amp; Startups
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Real feedback from commercial importers, founders, and supply chain heads managing direct cross-border procurement with Hira Outsourcing.
          </p>
        </div>

        {/* 3 Minimal Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-7 sm:p-8 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between hover:border-[#111111] transition-colors duration-150"
            >
              <div>
                <Quote className="w-6 h-6 text-[#111111]/20 mb-4" />
                <p className="text-sm sm:text-base text-[#111111] leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAEAEA]">
                <div className="font-medium text-sm text-[#111111]">
                  {t.name}
                </div>
                <div className="text-xs text-[#666666]">
                  {t.role} &bull; {t.city}
                </div>
                <div className="mt-2 text-[11px] font-mono text-[#888888]">
                  Consignment: {t.consignment}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

