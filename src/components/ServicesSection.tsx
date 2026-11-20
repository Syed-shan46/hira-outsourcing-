import React from 'react';
import { Package, ShieldCheck, Ship, Star, Users } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      titleLine1: "Product",
      titleLine2: "Sourcing",
      icon: Package,
    },
    {
      titleLine1: "Supplier",
      titleLine2: "Verification",
      icon: ShieldCheck,
    },
    {
      titleLine1: "Import &",
      titleLine2: "Logistics",
      icon: Ship,
    },
    {
      titleLine1: "Customs &",
      titleLine2: "Compliance",
      icon: Star,
    },
    {
      titleLine1: "Business",
      titleLine2: "Support",
      icon: Users,
    }
  ];

  return (
    <section className="py-5 sm:py-7 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
        
        {/* 5 Minimal Cards in a 5-column grid */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2.5">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="py-2 px-1 sm:py-2.5 sm:px-2 rounded-xl bg-[#F6F6F8] hover:bg-[#EFEFF1] border border-transparent hover:border-[#EAEAEA] transition-all duration-150 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <div className="mb-1 sm:mb-1.5 text-[#111111]">
                  <Icon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[1.4]" />
                </div>

                <div className="text-[8px] sm:text-[9.5px] md:text-[10px] font-medium text-[#111111] leading-[1.15] tracking-tight group-hover:text-black">
                  <span>{srv.titleLine1}</span>
                  <br />
                  <span>{srv.titleLine2}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
