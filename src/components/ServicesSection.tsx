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
    <section className="py-4 sm:py-6 bg-white border-b border-[#EAEAEA]" id="services">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* 5 Minimal Cards in a 5-column grid */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F7F7F8] hover:bg-[#EFEFF1] border border-transparent hover:border-[#EAEAEA] transition-all duration-150 flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <div className="mb-1.5 sm:mb-2 text-[#111111]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
                </div>

                <div className="text-[10px] sm:text-xs font-semibold text-[#111111] leading-tight group-hover:text-black">
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
