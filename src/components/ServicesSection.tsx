import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "china-product-sourcing",
    title: "China Product Sourcing",
    tagline: "Requirement-Led Search",
    description: "Help customers identify products matching technical specifications, target Indian retail price points, and material parameters.",
    keyPoints: [
      "Targeted research across specialized Chinese manufacturing zones",
      "Analysis of technical datasheets and bill-of-materials",
      "Sample request coordination and evaluation support"
    ],
    iconName: "Search"
  },
  {
    id: "supplier-identification",
    title: "Supplier Identification",
    tagline: "Factory Matchmaking",
    description: "Assist with finding genuine manufacturers and suppliers based on production capacity, quality standards, and export track records.",
    keyPoints: [
      "Screening genuine OEMs vs. secondary trading agents",
      "Assessment of factory capacity and production lead times",
      "Preliminary pricing and MOQ feasibility reviews"
    ],
    iconName: "Building2"
  },
  {
    id: "supplier-verification",
    title: "Supplier Verification Assistance",
    tagline: "Due Diligence Support",
    description: "Support supplier due diligence and legal document checks. We clearly distinguish verification assistance from physical third-party factory audits.",
    keyPoints: [
      "Review of Chinese business license & tax registration records",
      "Verification of corporate bank account validity",
      "Document authenticity checks prior to fund transfers"
    ],
    scopeNote: "Verification assistance comprises public database and corporate document checks. In-person physical factory audits are scheduled upon explicit client request.",
    iconName: "ShieldAlert"
  },
  {
    id: "bulk-purchasing",
    title: "Bulk Purchasing Coordination",
    tagline: "Commercial Rigor",
    description: "Coordinate commercial terms, quantities, tiered pricing discussions, pre-production golden samples, and custom packaging specifications.",
    keyPoints: [
      "Bilingual negotiation on unit costs and payment milestones",
      "Structured Proforma Invoice & Purchase Order alignment",
      "Packaging, labeling, and barcode compliance coordination"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection Coordination",
    tagline: "Third-Party Arrangement",
    description: "Help arrange product inspection through accredited third parties when requested. We do not imply every product is automatically inspected.",
    keyPoints: [
      "Coordination with accredited agencies (SGS, TUV, Bureau Veritas, or local QA)",
      "Pre-shipment (PSI) or During Production (DUPRO) scheduling",
      "Standard AQL sampling report delivery before final payment"
    ],
    scopeNote: "Inspection is conducted by appointed third-party quality agencies according to your defined AQL standards and product test criteria.",
    iconName: "ClipboardCheck"
  },
  {
    id: "shipping-import",
    title: "Shipping & Import Assistance",
    tagline: "Port & Logistics Coordination",
    description: "Coordinate freight forwarding and export documentation from China to India, subject to the agreed scope of service and cargo terms.",
    keyPoints: [
      "Coordination with sea container (FCL/LCL) and air cargo forwarders",
      "Assistance with Commercial Invoices, Packing Lists & Certificates of Origin",
      "Liaison with Indian Customs Brokers (CHA) for port arrival readiness"
    ],
    scopeNote: "Import customs clearance and duties in India are executed in compliance with Indian Customs and DGFT regulations under the client's IEC or nominated logistics partner.",
    iconName: "Ship"
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services-section" className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Full-Scope Sourcing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
              Six Core Sourcing &amp; Import Services
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#666666] leading-relaxed">
              Every business has unique international trade requirements. Whether you require an initial factory search or end-to-end bulk order coordination, we provide transparent, tailored support.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-3 rounded-md text-sm font-medium transition-colors"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Services Grid — Clean Minimalist Cards with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                id={service.id}
                className="border-t border-[#EAEAEA] pt-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#888888] font-mono mb-4">
                    <span>{num}</span>
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#888888]">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium tracking-tight text-[#111111] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#666666] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 text-xs text-[#666666] mb-6">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#111111] font-semibold mt-0.5">&bull;</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {service.scopeNote && (
                    <div className="mb-6 p-3 rounded-md bg-[#FAFAFA] border border-[#EAEAEA] text-[11px] text-[#666666] leading-relaxed">
                      <strong className="text-[#111111] font-medium">Scope Note: </strong>
                      {service.scopeNote}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#EAEAEA]">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:underline"
                  >
                    <span>Inquire about this service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
