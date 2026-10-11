import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  ShieldAlert, 
  ShoppingBag, 
  ClipboardCheck, 
  Ship, 
  ArrowRight,
  Info
} from 'lucide-react';
import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "china-product-sourcing",
    title: "1. China Product Sourcing",
    tagline: "Requirement-Led Search",
    description: "Help customers identify products that match their technical requirements, target Indian market demographics, and budget parameters.",
    keyPoints: [
      "Targeted research across specialized Chinese manufacturing zones",
      "Analysis of technical datasheets and bill-of-materials",
      "Sample request coordination and evaluation support"
    ],
    iconName: "Search"
  },
  {
    id: "supplier-identification",
    title: "2. Supplier Identification",
    tagline: "Factory Matchmaking",
    description: "Assist with finding relevant manufacturers or suppliers based on product specifications, scale requirements, and export track records.",
    keyPoints: [
      "Screening genuine OEMs vs. secondary trading agents",
      "Assessment of factory capacity and production lead times",
      "Initial pricing and MOQ feasibility reviews"
    ],
    iconName: "Building2"
  },
  {
    id: "supplier-verification",
    title: "3. Supplier Verification Assistance",
    tagline: "Due Diligence Support",
    description: "Support supplier due diligence and document checks. We clearly distinguish verification assistance from any third-party factory audits completed.",
    keyPoints: [
      "Review of Chinese business license & tax registration records",
      "Verification of bank account validity and export authorizations",
      "Document authenticity checks prior to fund transfers"
    ],
    scopeNote: "Verification assistance comprises public database and document checks. In-person physical factory audits are scheduled upon explicit client request.",
    iconName: "ShieldAlert"
  },
  {
    id: "bulk-purchasing",
    title: "4. Bulk Purchasing Coordination",
    tagline: "Contractual Clarity",
    description: "Help coordinate commercial terms, quantities, tiered pricing discussions, golden pre-production samples, and packaging specifications.",
    keyPoints: [
      "Bilingual negotiation on unit costs and payment milestones",
      "Creation of structured Proforma Invoice & Purchase Orders",
      "Packaging, labeling, and barcode compliance coordination"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "quality-inspection",
    title: "5. Quality Inspection Coordination",
    tagline: "Third-Party Arrangement",
    description: "Help arrange product inspection through suitable accredited third parties when requested. We do not imply every product is automatically inspected.",
    keyPoints: [
      "Coordination with accredited agencies (SGS, TUV, Bureau Veritas, or local QA teams)",
      "Pre-shipment (PSI) or During Production (DUPRO) inspection scheduling",
      "Standard AQL sampling report delivery before final balance payment"
    ],
    scopeNote: "Inspection is conducted by appointed third-party quality agencies according to your defined AQL standards and product test criteria.",
    iconName: "ClipboardCheck"
  },
  {
    id: "shipping-import",
    title: "6. Shipping & Import Assistance",
    tagline: "Door / Port Logistics",
    description: "Coordinate relevant logistics and documentation support for China-to-India shipments, subject to the agreed scope of service and cargo terms.",
    keyPoints: [
      "Coordination with sea container (FCL/LCL) and air freight forwarders",
      "Assistance with Commercial Invoices, Packing Lists, and Certificates of Origin",
      "Liaison with Indian Customs Brokers (CHA) for port arrival readiness"
    ],
    scopeNote: "Import customs clearance and duties in India are executed in compliance with Indian Customs and DGFT regulations under the client's IEC or nominated logistics partner.",
    iconName: "Ship"
  }
];

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Search": return Search;
      case "Building2": return Building2;
      case "ShieldAlert": return ShieldAlert;
      case "ShoppingBag": return ShoppingBag;
      case "ClipboardCheck": return ClipboardCheck;
      case "Ship": return Ship;
      default: return Search;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A] mb-2.5">
              <span>Full-Scope Solutions</span>
              <span className="w-8 h-[1px] bg-[#C7A56A]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
              Six Comprehensive Sourcing &amp; Import Services
            </h2>
            <p className="mt-4 text-base text-[#202833]/80 leading-relaxed">
              Every business has different international trade requirements. Whether you need an initial supplier search or end-to-end bulk order coordination, we provide transparent, tailored support.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#10243A] hover:bg-[#202833] text-[#FAFAF7] px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4 text-[#C7A56A]" />
            </Link>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#FFFFFF] border border-[#EEF1F4] rounded-xl p-8 hover:border-[#C7A56A] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#EEF1F4] text-[#10243A] flex items-center justify-center group-hover:bg-[#10243A] group-hover:text-[#C7A56A] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#C7A56A] uppercase tracking-wider bg-[#FAFAF7] px-2.5 py-1 rounded border border-[#EEF1F4]">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#10243A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#202833]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 text-xs text-[#202833]/80 mb-6">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7A56A] mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {service.scopeNote && (
                    <div className="mb-6 p-3 rounded-lg bg-[#EEF1F4]/70 border border-[#EEF1F4] text-[11px] text-[#202833]/70 flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                      <span>{service.scopeNote}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#EEF1F4]">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10243A] hover:text-[#C7A56A] transition-colors group-hover:underline"
                  >
                    <span>Discuss Your Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#C7A56A]" />
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
