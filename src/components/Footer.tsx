import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldAlert,
  Globe,
  Clock
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10243A] text-[#EEF1F4] border-t border-[#202833]">
      {/* Top Disclaimer / Credibility Banner */}
      <div className="border-b border-[#202833]/70 py-6 bg-[#0c1b2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EEF1F4]/70">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#C7A56A] shrink-0" />
              <span>
                <strong>Transparent Coordination:</strong> We act as your China sourcing & coordination partner. Product specifications, factory compliance, and import customs remain subject to agreed scopes and bilateral trade norms.
              </span>
            </div>
            <div className="flex items-center gap-6 shrink-0 font-medium">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#C7A56A]" /> China &rarr; India Corridors
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C7A56A]" /> {siteConfig.contact.businessHours}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C7A56A] flex items-center justify-center font-bold text-[#10243A] text-lg">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#FFFFFF]">
                  HIRA <span className="text-[#C7A56A] font-medium text-lg">OUTSOURCING</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#EEF1F4]/70 uppercase font-medium">
                  China Sourcing Partner
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#EEF1F4]/80 leading-relaxed pr-6">
              Hira Outsourcing helps Indian wholesalers, retailers, startups, and established enterprises bridge international trade gaps. We facilitate China product discovery, factory due-diligence assistance, bulk purchase coordination, and reliable freight forwarding support.
            </p>
            <div className="pt-2 text-xs text-[#EEF1F4]/60 space-y-1">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" /> Requirement-based supplier identification
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" /> Transparent quotation breakdowns
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A56A]" /> Dedicated bilingual coordination assistance
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  Product Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  About Hira Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors flex items-center gap-1">
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              Sourcing Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#product-sourcing" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  China Product Sourcing
                </Link>
              </li>
              <li>
                <Link to="/services#supplier-id" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  Supplier Identification
                </Link>
              </li>
              <li>
                <Link to="/services#supplier-verification" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  Verification Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#bulk-purchasing" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  Bulk Purchasing Coordination
                </Link>
              </li>
              <li>
                <Link to="/services#quality-inspection" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  Inspection Coordination
                </Link>
              </li>
              <li>
                <Link to="/services#shipping-import" className="text-[#EEF1F4]/80 hover:text-[#FFFFFF] transition-colors">
                  Shipping & Import Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              Trade Coordination Desk
            </h4>
            <div className="space-y-3 text-sm text-[#EEF1F4]/80">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#FFFFFF] block">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <div>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C7A56A] block"
                  >
                    WhatsApp: {siteConfig.whatsapp.displayNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>{siteConfig.contact.addressIndia}</p>
                  <p className="text-[#EEF1F4]/60">{siteConfig.contact.addressChina}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs text-[#C7A56A] font-semibold hover:underline"
                >
                  <span>Submit Detailed RFP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-[#202833] py-6 bg-[#0c1b2c]/80 text-xs text-[#EEF1F4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} Hira Outsourcing. All rights reserved. Sourcing Partner for China-to-India trade.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#FFFFFF] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">
              Enquiry Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
