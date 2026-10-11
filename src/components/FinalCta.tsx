import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Globe2,
  FileCheck
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-[#10243A] text-[#FAFAF7] py-20 relative overflow-hidden border-t border-[#202833]">
      {/* Subtle radial and trade routes decorative backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C7A56A_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C7A56A]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/10 border border-[#C7A56A]/40 text-xs font-semibold text-[#FAFAF7] mb-6">
          <Globe2 className="w-3.5 h-3.5 text-[#C7A56A]" />
          <span>Streamlined Bilateral Trade Solutions</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] leading-tight max-w-3xl mx-auto">
          Have a Product in Mind? <br />
          <span className="text-[#C7A56A]">Let&apos;s Source It.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-5 text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed max-w-2xl mx-auto">
          Tell us what your business needs. We&apos;ll help you explore suitable sourcing options from China, evaluate factory specifications, and coordinate the import process into India.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#EEF1F4]/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C7A56A]" /> Requirement-Led Feasibility
          </span>
          <span className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-[#C7A56A]" /> Transparent Bilateral Invoicing
          </span>
          <span>No Obligation Preliminary Review</span>
        </div>
      </div>
    </section>
  );
};
