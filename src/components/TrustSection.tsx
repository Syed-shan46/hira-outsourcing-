import React from 'react';
import { Users, Package, Globe, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Businesses Served"
    },
    {
      icon: Package,
      value: "500+",
      label: "Products Sourced"
    },
    {
      icon: Globe,
      value: "10+",
      label: "Product Categories"
    },
    {
      icon: ShieldCheck,
      value: "98%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section className="py-5 sm:py-8 bg-white border-b border-[#EAEAEA]" id="stats">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-column row with vertical hairline dividers */}
        <div className="grid grid-cols-4 divide-x divide-[#EAEAEA]">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="px-2 sm:px-4 py-2 flex flex-col items-center text-center first:pl-0 last:pr-0"
              >
                <div className="mb-1 text-[#111111]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                </div>
                <div className="text-base sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight leading-none mb-1">
                  {item.value}
                </div>
                <div className="text-[9px] sm:text-xs font-medium text-[#666666] leading-tight">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
