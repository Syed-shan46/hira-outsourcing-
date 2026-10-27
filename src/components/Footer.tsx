import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#111111] border-t border-[#EAEAEA]">
      {/* Top Disclaimer / Credibility Strip */}
      <div className="border-b border-[#EAEAEA] py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#666666]">
            <p className="max-w-3xl leading-relaxed">
              <strong className="text-[#111111] font-medium">Transparent Coordination:</strong> We act as your China sourcing and coordination partner. Factory compliance, product specifications, and customs classifications remain subject to agreed scopes and bilateral trade norms.
            </p>
            <div className="flex items-center gap-6 shrink-0 text-[#888888] font-mono text-[11px]">
              <span>China &rarr; India Corridors</span>
              <span>{siteConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md">
              <img 
                src="/images/hira_logo_white_to_black_precise.png" 
                alt="Hira Outsourcing Services Pvt Ltd" 
                className="h-9 sm:h-10 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>

            <p className="text-xs text-[#666666] leading-relaxed max-w-sm">
              Hira Outsourcing helps Indian wholesalers, retailers, brand owners, and enterprises navigate cross-border trade. We facilitate product discovery, factory due-diligence assistance, bulk purchase coordination, and reliable freight forwarding support.
            </p>

            <div className="pt-2 text-xs text-[#888888] space-y-1">
              <p>&bull; Requirement-based supplier identification</p>
              <p>&bull; Transparent quotation breakdowns</p>
              <p>&bull; Dedicated bilingual coordination assistance</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-[#111111]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-[#666666] hover:text-[#111111] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Product Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#666666] hover:text-[#111111] transition-colors">
                  About Hira Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Track Live Shipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-[#111111]">
              Sourcing Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services#china-product-sourcing" className="text-[#666666] hover:text-[#111111] transition-colors">
                  China Product Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services#supplier-identification" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Supplier Identification
                </Link>
              </li>
              <li>
                <Link to="/services#supplier-verification" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Verification Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#bulk-purchasing" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Bulk Purchasing Coordination
                </Link>
              </li>
              <li>
                <Link to="/services#quality-inspection" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Quality Inspection Coordination
                </Link>
              </li>
              <li>
                <Link to="/services#shipping-import" className="text-[#666666] hover:text-[#111111] transition-colors">
                  Shipping &amp; Import Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-[#111111]">
              Trade Coordination Desk
            </h4>
            <div className="space-y-3 text-xs text-[#666666]">
              <div>
                <span className="text-[#888888] block text-[11px] mb-0.5">Email</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#111111] hover:underline font-normal">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="text-[#888888] block text-[11px] mb-0.5">WhatsApp Desk</span>
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] hover:underline"
                >
                  {siteConfig.whatsapp.displayNumber}
                </a>
              </div>

              <div>
                <span className="text-[#888888] block text-[11px] mb-0.5">India Operations</span>
                <p className="text-[#666666]">{siteConfig.contact.addressIndia}</p>
              </div>

              <div>
                <span className="text-[#888888] block text-[11px] mb-0.5">China Sourcing Hub</span>
                <p className="text-[#666666]">{siteConfig.contact.addressChina}</p>
              </div>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs text-[#111111] font-medium hover:underline"
                >
                  <span>Submit Detailed RFP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="border-t border-[#EAEAEA] py-6 text-xs text-[#888888]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} Hira Outsourcing. All rights reserved. Sourcing Partner for China-to-India Trade.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#111111] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/contact" className="hover:text-[#111111] transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
