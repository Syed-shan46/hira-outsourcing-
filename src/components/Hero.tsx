import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Ship, 
  Factory, 
  FileCheck,
  CheckCircle2,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#10243A] text-[#FFFFFF] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Editorial Decorative Grid & Glows */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#FAFAF7_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C7A56A]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#202833]/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Position Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAFAF7]/10 border border-[#C7A56A]/30 text-xs font-medium text-[#FAFAF7] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#C7A56A]"></span>
              <span className="tracking-wide">Bilateral Trade Specialist &bull; China to India</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.12]">
              Source Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FAFAF7] to-[#C7A56A]">
                Import with Confidence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#EEF1F4]/85 leading-relaxed max-w-2xl font-normal">
              Your trusted China sourcing partner for finding products, connecting with suppliers, coordinating bulk orders, and managing the import process into India.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#EEF1F4]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <span>Verified Factory Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <span>Sample &amp; MOQ Clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C7A56A] shrink-0" />
                <span>Door-to-Door Coordination</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Start Your Sourcing Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF]/5 hover:bg-[#FFFFFF]/10 border border-[#EEF1F4]/20 hover:border-[#C7A56A]/50 text-[#FAFAF7] px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Notice Note */}
            <p className="text-[11px] text-[#EEF1F4]/50 italic pt-1">
              * Dedicated assistance for Indian wholesalers, brand owners, retail distributors, and e-commerce enterprises.
            </p>
          </div>

          {/* Right Column: Visual Trade Route Card & Factory Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#202833] bg-[#0c1b2c] p-3 shadow-2xl">
              {/* Premium Warehouse / Freight Showcase Visual */}
              <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden bg-[#202833]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern international manufacturing warehouse and container freight operations"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-[#10243A]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#C7A56A]/30 flex items-center gap-2 text-xs font-medium text-[#FAFAF7]">
                  <Factory className="w-3.5 h-3.5 text-[#C7A56A]" />
                  <span>Chinese Industrial Hubs &rarr; Indian Ports</span>
                </div>
              </div>

              {/* Trade Route Corridor Tracker Box */}
              <div className="mt-3 p-4 bg-[#10243A] rounded-xl border border-[#202833]/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#EEF1F4]/70 border-b border-[#202833] pb-2.5">
                  <span className="font-semibold text-[#FAFAF7]">China &rarr; India Trade Corridor</span>
                  <span className="text-[#C7A56A] flex items-center gap-1 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active Coordination
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#202833]/40 border border-[#202833]">
                    <div className="text-[10px] uppercase tracking-wider text-[#EEF1F4]/60 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C7A56A]" /> Sourcing Hubs
                    </div>
                    <div className="font-medium text-[#FAFAF7] mt-1">Guangdong &bull; Zhejiang &bull; Yiwu</div>
                    <div className="text-[10px] text-[#EEF1F4]/60">Factory identification &amp; samples</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#202833]/40 border border-[#202833]">
                    <div className="text-[10px] uppercase tracking-wider text-[#EEF1F4]/60 flex items-center gap-1">
                      <Ship className="w-3 h-3 text-[#C7A56A]" /> Indian Ports &amp; ICD
                    </div>
                    <div className="font-medium text-[#FAFAF7] mt-1">Nhava Sheva &bull; Chennai &bull; Delhi</div>
                    <div className="text-[10px] text-[#EEF1F4]/60">Customs &amp; freight coordination</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#EEF1F4]/60 pt-1">
                  <span>Standardized due diligence support</span>
                  <Link to="/how-it-works" className="text-[#C7A56A] hover:underline flex items-center gap-1">
                    See 4-step workflow <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
