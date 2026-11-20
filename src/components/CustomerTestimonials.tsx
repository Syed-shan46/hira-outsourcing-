import React from 'react';
import { Play } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-5 sm:py-8 bg-white border-b border-[#EAEAEA]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-column layout matching the mockup exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
          {/* Left Card: Customer Testimonial */}
          <div className="p-5 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between">
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-[#111111] leading-none mb-2">
                &ldquo;
              </div>
              <p className="text-xs sm:text-sm md:text-base text-[#111111] font-medium leading-relaxed">
                Reliable, transparent, and hassle-free. Hira made our China sourcing simple.
              </p>
            </div>

            {/* Author info with avatar */}
            <div className="pt-4 mt-4 border-t border-[#EAEAEA]/80 flex items-center gap-2.5">
              <img
                src="/images/mockup_avatar.png"
                alt="Business Owner, Kerala"
                className="w-7 h-7 rounded-full object-cover border border-[#EAEAEA]"
              />
              <span className="text-xs font-semibold text-[#111111]">
                Business Owner, Kerala
              </span>
            </div>
          </div>

          {/* Right Card: Real Warehouse Video Thumbnail with Play Button */}
          <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#111111] min-h-[140px] group cursor-pointer">
            <img
              src="/images/mockup_warehouse_video.png"
              alt="Hira Outsourcing China Warehouse Operations"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm text-[#111111] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-[1px]" />
              </div>
            </div>

            {/* Video Badge */}
            <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">
              Ground Warehouse Walkthrough &bull; 1:45
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
