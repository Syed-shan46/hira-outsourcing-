import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EnquiryForm } from '../components/EnquiryForm';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  const serviceParam = searchParams.get('service') || '';

  useEffect(() => {
    document.title = "Contact & Sourcing Enquiries | Hira Outsourcing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Editorial Subpage Hero */}
      <section className="bg-white text-[#111111] pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Direct Commercial Desk
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium text-[#111111] tracking-tight leading-[1.08]">
              Start Your Sourcing Enquiry
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              Have a product in mind or seeking reliable Chinese manufacturers? Submit your specifications, request a quote, or initiate a conversation directly via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact & Channel Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-medium uppercase tracking-widest text-[#888888] block">
                  Trade Coordination Hub
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium text-[#111111] tracking-tight">
                  We&apos;re Here to Assist
                </h2>
                <p className="text-sm text-[#666666] leading-relaxed">
                  Our sourcing team reviews incoming inquiries during standard business hours and provides tailored feasibility feedback on specifications, MOQs, and landed freight estimates.
                </p>
              </div>

              {/* Minimalist Contact Channels */}
              <div className="space-y-4">
                {/* WhatsApp Quick Channel */}
                <div className="p-6 rounded-lg border border-[#EAEAEA] bg-white space-y-2 hover:border-[#111111] transition-colors">
                  <div className="flex items-center justify-between text-xs font-medium text-[#111111]">
                    <span>Instant WhatsApp Desk</span>
                    <span className="text-[10px] text-emerald-600 font-mono">Fast Response</span>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Fastest channel for immediate product queries, catalog exchanges, and specification discussions.
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
                      categoryParam 
                        ? `Hello Hira Outsourcing, I am inquiring about sourcing ${categoryParam}.` 
                        : siteConfig.whatsapp.defaultMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:underline pt-1"
                  >
                    <span>Connect on WhatsApp ({siteConfig.whatsapp.displayNumber})</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                  </a>
                </div>

                {/* Email Support */}
                <div className="p-6 rounded-lg border border-[#EAEAEA] bg-white space-y-2">
                  <div className="text-xs font-medium text-[#111111]">
                    Formal Inquiries &amp; RFPs
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    For detailed bill-of-materials, NDA requests, or multi-item import proposals.
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-block text-xs font-medium text-[#111111] hover:underline pt-1"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                {/* Operational Corridors */}
                <div className="p-6 rounded-lg border border-[#EAEAEA] bg-white space-y-3">
                  <div className="text-xs font-medium text-[#111111]">
                    Operational Corridors
                  </div>
                  <div className="text-xs text-[#666666] space-y-2 leading-relaxed">
                    <div>
                      <span className="text-[#111111] font-medium block">India Operations:</span>
                      <p>{siteConfig.contact.addressIndia}</p>
                    </div>
                    <div>
                      <span className="text-[#111111] font-medium block">China Sourcing Centers:</span>
                      <p>{siteConfig.contact.addressChina}</p>
                    </div>
                    <div>
                      <span className="text-[#111111] font-medium block">Business Hours:</span>
                      <p>{siteConfig.contact.businessHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Interactive RFP / Quote Form */}
            <div className="lg:col-span-7">
              <EnquiryForm 
                initialCategory={categoryParam} 
                initialService={serviceParam} 
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
