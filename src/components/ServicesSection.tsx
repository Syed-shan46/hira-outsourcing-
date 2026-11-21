import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShieldCheck, Ship, Star, Users } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      titleLine1: "Product",
      titleLine2: "Sourcing",
      icon: Package,
      href: "/how-it-works"
    },
    {
      titleLine1: "Supplier",
      titleLine2: "Verification",
      icon: ShieldCheck,
      href: "/how-it-works"
    },
    {
      titleLine1: "Import &",
      titleLine2: "Logistics",
      icon: Ship,
      href: "/how-it-works"
    },
    {
      titleLine1: "Customs &",
      titleLine2: "Compliance",
      icon: Star,
      href: "/services"
    },
    {
      titleLine1: "Business",
      titleLine2: "Support",
      icon: Users,
      href: "/services"
    }
  ];

  return (
    <section className="py-6 sm:py-9 md:py-11 lg:py-13 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* 5 Minimal Horizontal Cards in a 5-column grid */}
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <Link 
                key={idx}
                to={srv.href}
                className="py-3.5 px-1 sm:py-5 sm:px-2.5 md:py-6 md:px-3 rounded-2xl sm:rounded-3xl bg-[#F4F4F6] hover:bg-[#EAEBED] border border-transparent hover:border-[#E2E2E6] transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-0.5 shadow-none"
              >
                <div className="mb-1.5 sm:mb-2.5 md:mb-3 text-[#111111] group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6.5 md:h-6.5 stroke-[1.35]" />
                </div>

                <div className="text-[9px] sm:text-xs md:text-[13px] lg:text-sm font-medium sm:font-semibold text-[#111111] leading-[1.2] tracking-tight group-hover:text-black">
                  <span>{srv.titleLine1}</span>
                  <br />
                  <span>{srv.titleLine2}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
