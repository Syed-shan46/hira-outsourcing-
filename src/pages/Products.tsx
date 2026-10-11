import React, { useEffect } from 'react';
import { ProductCategories } from '../components/ProductCategories';
import { EnquiryForm } from '../components/EnquiryForm';
import { AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Sourcing Categories | Hira Outsourcing - China Manufacturing Discovery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Subpage Hero */}
      <section className="bg-[#10243A] text-[#FAFAF7] py-16 lg:py-24 border-b border-[#202833]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>Industrial Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
              Product Sourcing Categories
            </h1>
            <p className="text-base sm:text-lg text-[#EEF1F4]/80 leading-relaxed">
              Explore key industrial categories across Chinese manufacturing belts. We assist Indian businesses in identifying suitable factories, validating specifications, and coordinating bulk imports.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Categories Grid */}
      <ProductCategories />

      {/* Sourcing Guidance & MOQ Notice */}
      <section className="py-16 bg-[#FFFFFF] border-t border-[#EEF1F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#EEF1F4] rounded-2xl p-8 bg-[#FAFAF7] space-y-4">
            <h3 className="text-xl font-bold text-[#10243A] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#C7A56A]" />
              How Product Feasibility is Determined
            </h3>
            <p className="text-sm text-[#202833]/80 leading-relaxed">
              Please note that Hira Outsourcing is an active sourcing partner, not a retail inventory distributor. We do not hold physical stock of these categories in India. When you submit a requirement:
            </p>
            <ul className="space-y-2 text-xs text-[#202833]/80 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#C7A56A] font-bold">&bull;</span>
                <span><strong>MOQ Requirements:</strong> Set by factories based on production runs, tooling setup, and packaging print runs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C7A56A] font-bold">&bull;</span>
                <span><strong>Regulatory Compliance:</strong> We verify if your product category requires mandatory certifications in India (such as BIS for electronics, EPR for plastics/batteries, or FSSAI for food-contact articles).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C7A56A] font-bold">&bull;</span>
                <span><strong>Landed Cost Estimates:</strong> We calculate total landed cost including factory ex-works, export logistics, ocean freight, customs tariff, IGST, and port handling.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Category Inquiry Form */}
      <section className="py-20 bg-[#EEF1F4]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-[#10243A]">
              Request Sourcing for Your Product Line
            </h2>
            <p className="text-xs text-[#202833]/70 mt-1">
              Have a catalog or sample in mind? Fill out the form below.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
