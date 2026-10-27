import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-36 border-t border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Subtle Label */}
        <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-4">
          Bilateral Sourcing Coordination
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium tracking-tight text-[#111111] leading-[1.08]">
          Have a Product in Mind? <br />
          <span className="text-[#111111]">Let&apos;s Source It.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
          Tell us what your business needs. We&apos;ll help you explore verified factory options across China, evaluate technical specifications, and coordinate the import process into India.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3.5 rounded-md text-sm font-medium transition-colors duration-150"
          >
            <span>Request a Sourcing Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8F8F8] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-6 py-3.5 rounded-md text-sm font-medium transition-colors duration-150"
          >
            <span>WhatsApp Trade Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-10 pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center justify-center gap-6 text-xs text-[#888888]">
          <span>Verified Factory Sourcing</span>
          <span>&bull;</span>
          <span>Bilingual Mandarin &amp; English Coordination</span>
          <span>&bull;</span>
          <span>Transparent Bilateral Invoicing</span>
        </div>

      </div>
    </section>
  );
};
