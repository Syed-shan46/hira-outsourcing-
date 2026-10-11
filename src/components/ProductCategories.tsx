import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Home, 
  Watch, 
  Package, 
  ShoppingCart, 
  Layers,
  AlertCircle
} from 'lucide-react';
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
    description: "Stainless steel utensils, silicone bakeware, smart home organizers, thermal flasks, diningware, and small home appliances.",
    typicalItems: ["Insulated Drinkware", "Kitchen Organizers", "Silicone & Steel Tools", "Compact Blender & Juicers"],
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
    typicalItems: ["Custom Rigid Boxes", "Cosmetic Pump Bottles", "Biodegradable Mailers", "Commercial Bubble & Tape"],
    imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    tag: "B2B Essential"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce Products",
    description: "Trending e-commerce catalog items, fitness equipment, pet accessories, car interior accessories, and seasonal merchandise.",
    typicalItems: ["Fitness Gear & Mats", "Pet Grooming Tech", "Auto Phone Holders", "Desk & Ergonomic Tools"],
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    tag: "Marketplace Sellers"
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
    <section id="categories-section" className="py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A] mb-2.5">
            <span>Portfolio Potential</span>
            <span className="w-8 h-[1px] bg-[#C7A56A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Key Sourcing Product Categories
          </h2>
          <p className="mt-4 text-base text-[#202833]/80 leading-relaxed">
            Explore diverse manufacturing categories we actively coordinate. From mature commodity lines to customized OEM projects across leading Chinese industrial belts.
          </p>
        </div>

        {/* Regulatory/Feasibility Clarification Note */}
        <div className="mb-10 p-4 rounded-xl bg-[#EEF1F4] border border-[#EEF1F4] flex items-start gap-3 text-xs text-[#202833]/80">
          <AlertCircle className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
          <div>
            <strong>Important Sourcing Scope Notice:</strong> These represent potential sourcing categories and manufacturing capabilities, not goods maintained in warehouse stock. Product availability, Minimum Order Quantities (MOQs), unit costs, lead times, and customs clearance feasibility depend on the exact client request, BIS/regulatory certifications, and factory schedules.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => {
            const whatsappMsg = `Hello Hira Outsourcing, I would like to inquire about sourcing ${category.title} from China. Please share MOQ & feasibility requirements.`;
            const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={category.id}
                className="bg-[#FFFFFF] border border-[#EEF1F4] rounded-xl overflow-hidden hover:border-[#C7A56A]/70 transition-all duration-300 hover:shadow-xl flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-[#202833]">
                  <img
                    src={category.imageUrl}
                    alt={`${category.title} sourcing from China factories`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-wider uppercase bg-[#10243A]/85 text-[#FAFAF7] px-2.5 py-1 rounded backdrop-blur-sm border border-[#EEF1F4]/20">
                    {category.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#10243A] mb-2.5 group-hover:text-[#C7A56A] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#202833]/75 leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="space-y-1 mb-6">
                      <div className="text-[10px] uppercase font-bold text-[#10243A]/60 tracking-wider">
                        Common Lines:
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {category.typicalItems.map((item, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#EEF1F4] text-[#202833] px-2 py-0.5 rounded border border-[#EEF1F4]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#EEF1F4] flex items-center justify-between gap-3">
                    <Link
                      to={`/contact?category=${encodeURIComponent(category.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10243A] hover:text-[#C7A56A] transition-colors"
                    >
                      <span>Source This Category</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A]" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#25D366] hover:underline font-semibold"
                      title="Quick WhatsApp query for this category"
                    >
                      WhatsApp Query &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
