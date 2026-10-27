import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Hira Outsourcing";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#666666] hover:text-[#111111] mb-10 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className="space-y-10">
          <div className="border-b border-[#EAEAEA] pb-8 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#888888] font-medium">
              Compliance &amp; Confidentiality
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-[#111111]">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#888888]">Effective Date: October 2026</p>
          </div>

          <div className="space-y-8 text-sm text-[#666666] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">1. Overview</h2>
              <p>
                Hira Outsourcing (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides China-to-India product sourcing and import coordination services. We prioritize the security of commercial data and client privacy. This Privacy Policy details how we collect, store, and utilize information submitted across our web platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">2. Information We Collect</h2>
              <p>We collect business details that you voluntarily submit when requesting sourcing quotations or contacting our trade coordinators:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Personal identifiers: Name, business email, and telephone/WhatsApp contact details.</li>
                <li>Commercial identifiers: Company name, target product descriptions, specification drawings, sample photos, and estimated order quantities.</li>
                <li>Communication history: Email exchanges and project requirement notes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">3. How We Use Your Information</h2>
              <p>Your information is used strictly to fulfill your requested sourcing services:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Performing technical feasibility reviews and factory discovery in China.</li>
                <li>Relaying anonymous product specifications to manufacturing partners for pricing quotations.</li>
                <li>Providing shipping schedules, duty rates, and customs documentation assistance.</li>
                <li>Direct customer communication regarding active RFPs and ongoing orders.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">4. Trade Confidentiality &amp; Proprietary Designs</h2>
              <p>
                We recognize that product blueprints, brand artwork, and proprietary formulas are critical commercial assets. We do not disclose, distribute, or sell client information to unrelated third parties or commercial brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">5. Contact Us</h2>
              <p>
                If you have questions regarding this privacy policy or wish to delete your business records from our active inquiry database, please email our data desk at:{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#111111] font-medium underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
