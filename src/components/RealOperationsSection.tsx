import React from 'react';
import { ShieldCheck, Truck, Warehouse, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RealOperationsSection: React.FC = () => {
  const operations = [
    {
      title: "Warehouse & Consolidation",
      location: "Yiwu & Shenzhen Logistics Hubs",
      desc: "Direct receipt of factory pallets, dimensional weight verification, consolidated loading, and export palletization.",
      image: "/images/promo_logistics.jpg",
      tag: "Ground Facility"
    },
    {
      title: "Pre-Shipment Product Inspection",
      location: "Factory Floor & Assembly Audits",
      desc: "Physical AQL 2.5 sample checks, golden sample comparison, functional testing, and outer packaging drop checks before dispatch.",
      image: "/images/promo_items_pure.jpg",
      tag: "Quality Audit"
    },
    {
      title: "Container Port Staging & Vessel Loading",
      location: "Ningbo-Zhoushan & Yantian Terminals",
      desc: "Full container load (FCL) and consolidated (LCL) freight handoff to Tier-1 container shipping lines bound for Indian ports.",
      image: "/images/cargo_ship_hero.jpg",
      tag: "Ocean & Air Freight"
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#FBFBFB] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#888888] font-medium block mb-2">
              Authentic Ground Operations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium text-[#111111] tracking-tight">
              Real Operations. On the Ground.
            </h2>
            <p className="text-base text-[#666666] mt-4 leading-relaxed">
              We are not an anonymous online brokerage. Our dedicated bilingual teams inspect facilities, verify commercial cargo, and manage physical logistics across major Chinese export hubs.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline"
            >
              <span>Explore Our Infrastructure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Operations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {operations.map((op, i) => (
            <div 
              key={i} 
              className="group bg-white border border-[#EAEAEA] rounded-xl overflow-hidden hover:border-[#111111] transition-all duration-200 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F0F0F0]">
                <img 
                  src={op.image} 
                  alt={op.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  {op.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#888888] font-mono uppercase tracking-wider mb-1">
                    {op.location}
                  </div>
                  <h3 className="text-lg font-medium text-[#111111] mb-2">
                    {op.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {op.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0F0F0] flex items-center gap-2 text-xs text-[#111111] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                  <span>Verified On-Site Procedure</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

