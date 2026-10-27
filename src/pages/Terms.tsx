import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Hira Outsourcing";
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
              Commercial Scope Terms
            </div>
            <h1 className="text-3xl sm:text-4xl font-normal sm:font-medium tracking-tight text-[#111111]">
              Terms and Conditions
            </h1>
            <p className="text-xs text-[#888888]">Last Updated: October 2026</p>
          </div>

          <div className="space-y-8 text-sm text-[#666666] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">1. Scope of Services</h2>
              <p>
                Hira Outsourcing provides professional trade coordination, supplier identification, communication assistance, bulk purchase facilitation, and import logistics coordination between Indian purchasers and Chinese manufacturers. Hira Outsourcing acts as a facilitator and coordination service provider unless explicitly contracted under a separate commercial agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">2. Product Availability, MOQs &amp; Pricing</h2>
              <p>
                Product availability, minimum order quantities (MOQs), unit manufacturing costs, and delivery estimates are established by independent Chinese factories and freight carriers. All initial quotations provided via this website or preliminary communication are subject to formal confirmation upon sample evaluation and final factory Proforma Invoices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">3. Regulatory &amp; Import Compliance</h2>
              <p>
                The buyer remains responsible for ensuring that imported products comply with all applicable Indian regulatory standards, statutory licenses, and import classifications (including but not limited to BIS, WPC, EPR, CDSCO, or Legal Metrology rules), unless our trade advisory service is contracted to support specific compliance verifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">4. Inspection &amp; Quality Checks</h2>
              <p>
                Where quality inspections are requested by the client, they are arranged via certified third-party inspection firms (e.g., SGS, Bureau Veritas, or nominated regional agencies) according to defined Acceptable Quality Limit (AQL) standards. Hira Outsourcing facilitates this inspection process and delivers third-party reports for client sign-off.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-medium text-[#111111]">5. Governing Law</h2>
              <p>
                These terms and any bilateral service agreements are governed in accordance with the laws of India. For commercial queries, contact us at:{' '}
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
