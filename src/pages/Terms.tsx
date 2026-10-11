import React, { useEffect } from 'react';
import { Scale, FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export const Terms: React.FC = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Hira Outsourcing";
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
              <Scale className="w-4 h-4" /> Commercial Scope Terms
            </div>
            <h1 className="text-3xl font-extrabold text-[#10243A]">Terms and Conditions</h1>
            <p className="text-xs text-[#202833]/60">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-[#202833]/80 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">1. Scope of Services</h2>
              <p>
                Hira Outsourcing provides professional trade coordination, supplier identification, communication assistance, bulk purchase facilitation, and import logistics coordination between Indian purchasers and Chinese manufacturers. Hira Outsourcing acts as a facilitator and coordination service provider unless explicitly contracted under a separate commercial agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">2. Product Availability, MOQs &amp; Pricing</h2>
              <p>
                Product availability, minimum order quantities (MOQs), unit manufacturing costs, and delivery estimates are established by independent Chinese factories and freight carriers. All initial quotations provided via this website or preliminary communication are subject to formal confirmation upon sample evaluation and final factory Proforma Invoices.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">3. Regulatory &amp; Import Compliance</h2>
              <p>
                The buyer remains responsible for ensuring that imported products comply with all applicable Indian regulatory standards, statutory licenses, and import classifications (including but not limited to BIS, WPC, EPR, CDSCO, or Legal Metrology rules), unless our trade advisory service is contracted to support specific compliance verifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">4. Inspection &amp; Quality Checks</h2>
              <p>
                Where quality inspections are requested by the client, they are arranged via certified third-party inspection firms (e.g., SGS, Bureau Veritas, or nominated regional agencies) according to defined Acceptable Quality Limit (AQL) standards. Hira Outsourcing facilitates this inspection process and delivers third-party reports for client sign-off.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#10243A]">5. Governing Law</h2>
              <p>
                These terms and any bilateral service agreements are governed in accordance with the laws of India. For commercial queries, contact us at: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#10243A] font-semibold underline">{siteConfig.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
