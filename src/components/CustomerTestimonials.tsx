import React from 'react';
import { Play } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-2.5 sm:py-4 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Exact 2-column side-by-side grid on both mobile and desktop */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3.5 items-stretch">
          
          {/* Left Card: Customer Testimonial */}
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between">
            <div>
              <div className="text-lg sm:text-xl font-serif text-[#111111] leading-none mb-0.5">
                &ldquo;
              </div>
              <p className="text-[9px] sm:text-xs text-[#111111] font-medium leading-relaxed">
                Reliable, transparent, and hassle-free. Hira made our China sourcing simple.
              </p>
            </div>

            {/* Author info with avatar */}
            <div className="pt-1.5 sm:pt-2.5 mt-1.5 border-t border-[#EAEAEA]/80 flex items-center gap-1.5 sm:gap-2">
              <img
                src="/images/mockup_avatar.png"
                alt="Business Owner, Kerala"
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-[#EAEAEA]"
              />
              <span className="text-[8px] sm:text-[10.5px] font-semibold text-[#111111] truncate">
                Business Owner, Kerala
              </span>
            </div>
          </div>

          {/* Right Card: Real Warehouse Video Thumbnail with Play Button */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#111111] min-h-[85px] sm:min-h-[115px] group cursor-pointer">
            <img
              src="/images/mockup_warehouse_video.png"
              alt="Hira Outsourcing China Warehouse Operations"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#111111] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current translate-x-[0.5px]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
