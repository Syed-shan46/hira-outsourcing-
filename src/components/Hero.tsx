import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Lock, Truck } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Editorial Label */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-widest text-[#666666] font-semibold bg-[#F5F5F5] px-3 py-1 rounded-full border border-[#EAEAEA]">
            GLOBAL SOURCING &amp; IMPORT SOLUTIONS
          </span>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#111111] leading-[1.05]">
              Source Globally. <br />
              <span className="font-normal text-[#444444]">Grow Locally.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl">
              We help businesses and startups in India find, verify, and import high-quality products from China &mdash; end to end.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3.5 rounded-lg text-sm font-semibold tracking-tight transition-colors shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-6 py-3.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#111111]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Below CTA: 3 Core Pillars */}
            <div className="pt-6 border-t border-[#EAEAEA] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-[#333333]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0" />
                <span className="font-medium">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#111111] shrink-0" />
                <span className="font-medium">Secure Import</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#111111] shrink-0" />
                <span className="font-medium">Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Shipping-Container Port Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#F5F5F5] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/cargo_ship_hero.jpg"
                  alt="International container port and cargo vessel operations"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="eager"
                />
              </div>

              {/* Minimal Corridor Strip */}
              <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#EAEAEA] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#888888] block">Origin Hubs</span>
                  <span className="font-medium text-[#111111]">Shenzhen &bull; Yiwu &bull; Ningbo</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#888888] block">Destination</span>
                  <span className="font-medium text-[#111111]">Mumbai &bull; Delhi &bull; Chennai</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
