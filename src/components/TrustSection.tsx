import React from 'react';
import { Users, Package, Globe, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "2,000+",
      line1: "Businesses",
      line2: "Served"
    },
    {
      icon: Package,
      value: "1,600+",
      line1: "Product",
      line2: "Catalogs"
    },
    {
      icon: Globe,
      value: "15+",
      line1: "Global",
      line2: "Reach"
    },
    {
      icon: ShieldCheck,
      value: "98.5%",
      line1: "Client",
      line2: "Satisfaction"
    }
  ];

  return (
    <section className="py-2.5 sm:py-3.5 bg-white border-b border-[#F0F0F0]" id="stats">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* 4-column row with vertical hairline dividers */}
        <div className="grid grid-cols-4 divide-x divide-[#EAEAEA]">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="px-1 sm:px-3 py-0.5 flex flex-col items-center text-center first:pl-0 last:pr-0"
              >
                <div className="mb-0.5 text-[#111111]">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.4]" />
                </div>
                <div className="text-[12.5px] sm:text-xl font-extrabold text-[#111111] tracking-tight leading-none mb-0.5">
                  {item.value}
                </div>
                <div className="text-[7.5px] sm:text-[9.5px] font-medium text-[#666666] leading-tight">
                  <span>{item.line1}</span>
                  <br />
                  <span>{item.line2}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
