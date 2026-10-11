import React, { useEffect } from 'react';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Hira Outsourcing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10243A] hover:text-[#C7A56A] mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="bg-[#FFFFFF] border border-[#EEF1F4] rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-[#EEF1F4] pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C7A56A] uppercase tracking-wider">
              <Shield className="w-4 h-4" /> Compliance &amp; Confidentiality
            </div>
            <h1 className="text-3xl font-extrabold text-[#10243A]">Privacy Policy</h1>
            <p className="text-xs text-[#202833]/60">Effective Date: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-[#202833]/80 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">1. Overview</h2>
              <p>
                Hira Outsourcing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides China-to-India product sourcing and import coordination services. We prioritize the security of commercial data and client privacy. This Privacy Policy details how we collect, store, and utilize information submitted across our web platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">2. Information We Collect</h2>
              <p>We collect business details that you voluntarily submit when requesting sourcing quotations or contacting our trade coordinators:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Personal identifiers: Name, business email, and telephone/WhatsApp contact details.</li>
                <li>Commercial identifiers: Company name, target product descriptions, specification drawings, sample photos, and estimated order quantities.</li>
                <li>Communication history: Email exchanges and project requirement notes.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">3. How We Use Your Information</h2>
              <p>Your information is used strictly to fulfill your requested sourcing services:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Performing technical feasibility reviews and factory discovery in China.</li>
                <li>Relaying anonymous product specifications to manufacturing partners for pricing quotations.</li>
                <li>Providing shipping schedules, duty rates, and customs documentation assistance.</li>
                <li>Direct customer communication regarding active RFPs and ongoing orders.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">4. Trade Confidentiality &amp; Proprietary Designs</h2>
              <p>
                We recognize that product blueprints, brand artwork, and proprietary formulas are critical commercial assets. We do not disclose, distribute, or sell client information to unrelated third parties or commercial brokers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">5. Contact Us</h2>
              <p>
                If you have questions regarding this privacy policy or wish to delete your business records from our active enquiry database, please email our data desk at: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#10243A] font-semibold underline">{siteConfig.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
