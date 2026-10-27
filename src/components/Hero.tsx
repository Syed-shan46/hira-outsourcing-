import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Package, 
  ArrowUpRight,
  ShieldCheck,
  Check
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-[#111111] overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Editorial Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            China Sourcing Partner &bull; Bilateral Trade Coordination
          </span>
        </div>

        {/* Two-Column Grid: Left Copy & Actions, Right Editorial Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.06]">
              Source Smarter. <br />
              <span className="text-[#111111] font-medium">Import with Confidence.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#666666] font-normal leading-relaxed max-w-2xl">
              Your trusted China sourcing partner for finding products, connecting with verified manufacturers, coordinating bulk orders, and managing door-to-door import logistics into India.
            </p>

            {/* Restrained Action Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white px-6 py-3.5 rounded-md text-sm font-medium transition-colors duration-150"
              >
                <span>Start Sourcing Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/tracking"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8F8F8] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-5 py-3.5 rounded-md text-sm font-medium transition-colors duration-150"
              >
                <Package className="w-4 h-4 text-[#666666]" />
                <span>Track Live Shipment</span>
              </Link>
            </div>

            {/* Understated Verification Points */}
            <div className="pt-6 border-t border-[#EAEAEA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#666666]">
              <div className="flex items-start gap-2">
                <span className="text-[#111111] font-semibold mt-0.5">&bull;</span>
                <span>Verified Chinese factory identification &amp; license screening</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#111111] font-semibold mt-0.5">&bull;</span>
                <span>Pre-production golden sample acquisition &amp; MOQ validation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#111111] font-semibold mt-0.5">&bull;</span>
                <span>Sea and air freight coordination to major Indian ports &amp; ICDs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Restrained Editorial Visual & Logistics Corridor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#EAEAEA] rounded-lg overflow-hidden bg-[#FAFAFA]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0]">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern international manufacturing warehouse and container freight operations"
                  className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.02]"
                  loading="eager"
                />
              </div>

              {/* Minimal Corridor Specification Strip */}
              <div className="p-5 bg-white border-t border-[#EAEAEA] space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAEAEA]">
                  <span className="font-medium text-[#111111]">Trade Corridor</span>
                  <span className="text-[#666666] font-mono text-[11px]">China &rarr; India</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium">Origin Hubs</div>
                    <div className="text-[#111111] font-normal mt-0.5">Guangdong &bull; Zhejiang &bull; Yiwu</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#888888] font-medium">Destination Ports</div>
                    <div className="text-[#111111] font-normal mt-0.5">Nhava Sheva &bull; Chennai &bull; Delhi</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#666666]">
                  <span>Dedicated assistance for Indian wholesalers &amp; brands</span>
                  <Link to="/how-it-works" className="text-[#111111] hover:underline flex items-center gap-1 font-medium">
                    <span>Workflow</span>
                    <ArrowUpRight className="w-3 h-3" />
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
