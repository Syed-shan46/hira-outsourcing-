import React, { useEffect } from 'react';
import { ProductCategories } from '../components/ProductCategories';
import { EnquiryForm } from '../components/EnquiryForm';

export const Products: React.FC = () => {
  useEffect(() => {
    document.title = "Sourcing Categories | Hira Outsourcing - China Manufacturing Discovery";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Editorial Subpage Hero */}
      <section className="bg-white text-[#111111] pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Industrial Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal sm:font-medium text-[#111111] tracking-tight leading-[1.08]">
              Product Sourcing Categories
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl">
              Explore key industrial categories across Chinese manufacturing belts. We assist Indian businesses in identifying suitable factories, validating specifications, and coordinating bulk imports.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Categories Grid */}
      <ProductCategories />

      {/* Sourcing Guidance & MOQ Notice */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border border-[#EAEAEA] rounded-lg p-8 sm:p-10 bg-white space-y-5">
            <h3 className="text-xl font-medium text-[#111111] tracking-tight">
              How Product Feasibility is Determined
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Please note that Hira Outsourcing is an active sourcing partner, not a retail inventory distributor. We do not hold physical stock of these categories in India. When you submit a requirement:
            </p>
            <ul className="space-y-3 text-xs text-[#666666] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                <span><strong className="text-[#111111] font-medium">MOQ Requirements:</strong> Set by factories based on production line setup, raw material procurement, and packaging printing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                <span><strong className="text-[#111111] font-medium">Regulatory Compliance:</strong> We verify whether your product requires mandatory certifications in India (such as BIS for electronics, EPR for plastics/batteries, or Legal Metrology standards).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#111111] font-bold mt-0.5">&bull;</span>
                <span><strong className="text-[#111111] font-medium">Landed Cost Estimates:</strong> We calculate total landed costs including factory ex-works, export logistics, ocean freight, customs tariff, IGST, and port handling.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Category Inquiry Form */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-normal sm:font-medium text-[#111111] tracking-tight">
              Request Sourcing for Your Product Line
            </h2>
            <p className="text-sm text-[#666666] mt-2 leading-relaxed">
              Have a reference catalog or physical sample in mind? Fill out the brief below.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
};
