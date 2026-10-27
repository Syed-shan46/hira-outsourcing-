import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProductCategoryItem } from '../types';
import { siteConfig } from '../config/site';

export const categoriesData: ProductCategoryItem[] = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics & Accessories",
    description: "Mobile peripherals, wireless audio, smart wearables, charging hardware, LED display modules, and electronic lifestyle gadgets.",
    typicalItems: ["TWS Earbuds & Speakers", "Fast Chargers & Cables", "Power Banks & Docks", "Smart Watch Accessories"],
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    tag: "High Volume"
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen Products",
    description: "Stainless steel utensils, silicone bakeware, smart organizers, thermal flasks, diningware, and small home appliances.",
    typicalItems: ["Insulated Drinkware", "Kitchen Organizers", "Silicone & Steel Tools", "Compact Blenders & Juicers"],
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    tag: "Retail Favorite"
  },
  {
    id: "fashion-lifestyle",
    title: "Fashion Accessories & Lifestyle",
    description: "Bags, travel luggage, eyewear frames, jewelry findings, timepieces, belts, and modern lifestyle accessories.",
    typicalItems: ["Polycarbonate Luggage", "Eyewear & Sunglasses", "Fashion Backpacks", "Apparel Trims & Accents"],
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    tag: "Brand Labeling"
  },
  {
    id: "packaging-supplies",
    title: "Packaging & Business Supplies",
    description: "Custom rigid gift boxes, sustainable paper packaging, cosmetic containers, glass bottles, and warehouse packaging supplies.",
    typicalItems: ["Custom Rigid Boxes", "Cosmetic Pump Bottles", "Biodegradable Mailers", "Commercial Packaging Tape"],
    imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    tag: "B2B Essential"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce Products",
    description: "Trending catalog merchandise, fitness equipment, pet accessories, car interior accessories, and seasonal goods.",
    typicalItems: ["Fitness Gear & Mats", "Pet Grooming Tools", "Auto Phone Mounts", "Ergonomic Desk Tools"],
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    tag: "Marketplace Catalog"
  },
  {
    id: "custom-sourcing",
    title: "Custom Product Sourcing & OEM",
    description: "Custom toolings, OEM/ODM contract manufacturing, private-label branding, customized molds, and client-spec builds.",
    typicalItems: ["Private Label Packaging", "Injection Molded Parts", "OEM Hardware Assemblies", "Customized Enclosures"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    tag: "Contract OEM"
  }
];

export const ProductCategories: React.FC = () => {
  return (
    <section id="categories-section" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Sourcing Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
            Key Manufacturing Categories
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed">
            Explore diverse manufacturing capabilities across leading Chinese industrial belts. We assist in locating audited factories, validating technical drawings, and coordinating bulk imports into India.
          </p>
        </div>

        {/* Regulatory Scope Notice */}
        <div className="mb-12 p-4 rounded-md bg-[#FAFAFA] border border-[#EAEAEA] text-xs text-[#666666] leading-relaxed max-w-4xl">
          <strong className="text-[#111111] font-medium">Important Sourcing Notice: </strong>
          These represent active sourcing categories and factory coordination capabilities, not warehouse inventory held in stock. Minimum Order Quantities (MOQs), unit costs, lead times, and customs clearance feasibility depend on exact specifications, required regulatory approvals (such as BIS, WPC, or EPR), and factory schedules.
        </div>

        {/* Categories Grid — Restrained Visual Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categoriesData.map((category) => {
            const whatsappMsg = `Hello Hira Outsourcing, I would like to inquire about sourcing ${category.title} from China. Please share MOQ & feasibility requirements.`;
            const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={category.id}
                className="border border-[#EAEAEA] rounded-lg overflow-hidden bg-white flex flex-col justify-between hover:border-[#111111] transition-colors duration-200"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0F0F0] border-b border-[#EAEAEA]">
                    <img
                      src={category.imageUrl}
                      alt={`${category.title} sourcing from China factories`}
                      className="w-full h-full object-cover filter contrast-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 text-[10px] font-medium tracking-wider uppercase bg-white/95 text-[#111111] px-2.5 py-1 rounded border border-[#EAEAEA]">
                      {category.tag}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#111111] tracking-tight mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="space-y-1 mb-2">
                      <div className="text-[10px] uppercase font-medium text-[#888888] tracking-wider">
                        Common Lines:
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {category.typicalItems.map((item, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#F8F8F8] text-[#555555] px-2 py-0.5 rounded border border-[#EAEAEA]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-[#EAEAEA] mt-4 pt-4">
                  <Link
                    to={`/contact?category=${encodeURIComponent(category.title)}`}
                    className="font-medium text-[#111111] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Source Category</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666666] hover:text-[#111111] font-normal"
                    title="Quick WhatsApp query for this category"
                  >
                    WhatsApp Query &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
