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
    <section className="pt-8 pb-10 sm:pt-14 sm:pb-16 md:pt-18 md:pb-20 lg:pt-24 lg:pb-26 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* 5 Minimal Horizontal Cards in a 5-column grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <Link 
                key={idx}
                to={srv.href}
                className="py-4 px-2 sm:py-6 sm:px-3 md:py-8 md:px-4 rounded-2xl sm:rounded-3xl bg-[#F4F4F6] hover:bg-[#EAEBED] border border-transparent hover:border-[#E2E2E6] transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-0.5 shadow-none"
              >
                <div className="mb-2 sm:mb-3 md:mb-3.5 text-[#111111] group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 stroke-[1.35]" />
                </div>

                <div className="text-[10px] sm:text-xs md:text-[13px] lg:text-sm font-medium sm:font-semibold text-[#111111] leading-[1.2] tracking-tight group-hover:text-black">
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
