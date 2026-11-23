import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle2 } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-2.5 sm:py-4 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Exact 2-column side-by-side grid on both mobile and desktop */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3.5 items-stretch">
          
          {/* Left Card: Customer Testimonial */}
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col justify-between h-full min-h-[110px] sm:min-h-[135px]">
            <div>
              {/* Star Rating & Quote Symbol */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center text-[#111111] text-[9.5px] sm:text-xs tracking-widest">
                  ★★★★★
                </div>
                <div className="text-base sm:text-lg font-serif text-[#888888] leading-none">
                  &ldquo;
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="text-[9.5px] sm:text-xs text-[#111111] font-medium leading-[1.35]">
                Reliable, transparent, and hassle-free. Hira made our China sourcing simple.
              </p>
            </div>

            {/* Author info with clean monogram avatar & verified client badge */}
            <div className="pt-2 sm:pt-2.5 mt-2 border-t border-[#EAEAEA]/80 flex items-center justify-between gap-1.5">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#111111] text-white flex items-center justify-center text-[8.5px] sm:text-[10px] font-bold shrink-0">
                  K
                </div>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="text-[8.5px] sm:text-[10.5px] font-semibold text-[#111111] truncate">
                    Business Owner
                  </span>
                  <span className="text-[7.5px] sm:text-[9px] text-[#666666] truncate">
                    Palakkad, Kerala
                  </span>
                </div>
              </div>

              <div className="hidden xs:flex items-center gap-0.5 text-[8px] sm:text-[9px] font-medium text-[#0066FF] bg-[#0066FF]/10 px-1.5 py-0.5 rounded shrink-0">
                <CheckCircle2 className="w-2.5 h-2.5" />
                <span className="hidden sm:inline">Verified</span>
              </div>
            </div>
          </div>

          {/* Right Card: Real Warehouse Video Thumbnail with Single Centered Play Button -> Links to /how-it-works */}
          <Link
            to="/how-it-works"
            className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#EAEAEA] bg-[#111111] h-full min-h-[110px] sm:min-h-[135px] group cursor-pointer block"
            aria-label="Watch How It Works Video (0:45 Full HD)"
          >
            {/* Clean Warehouse Photo (Without baked-in play button) */}
            <img
              src="/images/mockup_warehouse_video.png"
              alt="Hira Outsourcing China Warehouse Operations"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Top Badge: Process Video Duration */}
            <div className="absolute top-2 left-2 z-10 pointer-events-none">
              <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-white text-[7.5px] sm:text-[9px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                <span>How It Works • 0:45</span>
              </div>
            </div>

            {/* Exactly ONE Centered Crisp Play Button */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current ml-0.5" />
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white text-[8px] sm:text-[9.5px] font-medium z-10">
              <span className="truncate">Our China Operations</span>
              <span className="text-[9px] sm:text-xs text-white/80 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1">&rarr;</span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};
