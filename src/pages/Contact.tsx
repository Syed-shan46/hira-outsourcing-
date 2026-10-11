import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EnquiryForm } from '../components/EnquiryForm';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck,
  Building2,
  FileCheck2
} from 'lucide-react';
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
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="bg-[#10243A] text-[#FAFAF7] py-16 lg:py-24 border-b border-[#202833]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>Direct Commercial Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              Start Your Sourcing Enquiry
            </h1>
            <p className="text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed">
              Have a product in mind or seeking reliable Chinese manufacturers? Submit your specifications, request a quote, or initiate a conversation directly via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact & Channel Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
                  Trade Coordination Hub
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243A]">
                  We&apos;re Here to Assist
                </h2>
                <p className="text-sm text-[#202833]/80 leading-relaxed">
                  Our sourcing team reviews incoming inquiries during standard business hours and provides tailored feasibility feedback on specifications, MOQs, and landed freight estimates.
                </p>
              </div>

              {/* Contact Channels Cards */}
              <div className="space-y-4">
                {/* WhatsApp Quick Channel */}
                <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#EEF1F4] hover:border-[#25D366] transition-colors shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#10243A]">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span>Instant WhatsApp Coordination</span>
                  </div>
                  <p className="text-xs text-[#202833]/70">
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
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline pt-1"
                  >
                    <span>Chat with Us ({siteConfig.whatsapp.displayNumber}) &rarr;</span>
                  </a>
                </div>

                {/* Email Support */}
                <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#EEF1F4] space-y-2 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#10243A]">
                    <div className="w-8 h-8 rounded-lg bg-[#10243A]/5 text-[#10243A] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>Formal Inquiries &amp; RFPs</span>
                  </div>
                  <p className="text-xs text-[#202833]/70">
                    For detailed bill-of-materials, NDA requests, or multi-item import proposals.
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-block text-xs font-bold text-[#10243A] hover:text-[#C7A56A] pt-1"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>

                {/* Regional Presence */}
                <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#EEF1F4] space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#10243A]">
                    <div className="w-8 h-8 rounded-lg bg-[#10243A]/5 text-[#10243A] flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Operational Corridors</span>
                  </div>
                  <div className="text-xs text-[#202833]/75 space-y-2">
                    <div>
                      <span className="font-semibold text-[#10243A]">India Operations:</span>
                      <p>{siteConfig.contact.addressIndia}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#10243A]">China Sourcing Centers:</span>
                      <p>{siteConfig.contact.addressChina}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#10243A]">Business Hours:</span>
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
