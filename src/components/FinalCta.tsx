import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 border-t border-[#EAEAEA]" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Label */}
        <div className="text-xs uppercase tracking-widest text-[#888888] font-semibold mb-3">
          Start Your Sourcing Journey
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111111] leading-[1.08]">
          Ready to Source from China?
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
          Tell us what you need. Let our team help you find the right sourcing solution.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto sm:max-w-none">
          <Link
            to="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3.5 rounded-lg text-sm font-semibold tracking-tight transition-colors"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
          >
            <span>Contact Our Team</span>
          </Link>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111111] border border-[#EAEAEA] px-5 py-3.5 rounded-lg text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#111111]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Reassurance Strip */}
        <div className="mt-10 pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#888888]">
          <span>Verified Factory Sourcing</span>
          <span>&bull;</span>
          <span>Bilingual Ground Teams in Yiwu &amp; Shenzhen</span>
          <span>&bull;</span>
          <span>Transparent Landed Costs</span>
        </div>

      </div>
    </section>
  );
};
