import React from 'react';
import { Play } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 bg-white border-b border-[#EAEAEA]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact 2-column side-by-side grid on both mobile and desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 items-stretch">
          
          {/* Left Card: Customer Testimonial */}
          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-[#111111] leading-none mb-1">
                &ldquo;
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm text-[#111111] font-medium leading-relaxed">
                Reliable, transparent, and hassle-free. Hira made our China sourcing simple.
              </p>
            </div>

            {/* Author info with avatar */}
            <div className="pt-2 sm:pt-3 mt-2 border-t border-[#EAEAEA]/80 flex items-center gap-1.5 sm:gap-2">
              <img
                src="/images/mockup_avatar.png"
                alt="Business Owner, Kerala"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-[#EAEAEA]"
              />
              <span className="text-[9px] sm:text-xs font-semibold text-[#111111] truncate">
                Business Owner, Kerala
              </span>
            </div>
          </div>

          {/* Right Card: Real Warehouse Video Thumbnail with Play Button */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#111111] min-h-[95px] sm:min-h-[130px] group cursor-pointer">
            <img
              src="/images/mockup_warehouse_video.png"
              alt="Hira Outsourcing China Warehouse Operations"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#111111] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current translate-x-[0.5px]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
