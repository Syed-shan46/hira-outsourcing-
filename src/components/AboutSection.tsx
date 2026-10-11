import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Target, 
  Compass, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagery Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#EEF1F4] shadow-xl bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                alt="Business executives reviewing manufacturing sourcing specifications"
                className="w-full h-80 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-4 bg-[#10243A] rounded-lg mt-2 text-[#FAFAF7]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C7A56A] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ground Coordination Mindset</span>
                </div>
                <p className="text-xs text-[#EEF1F4]/80 leading-relaxed">
                  Bridge geographical and commercial barriers between Indian merchants and Chinese industrial clusters.
                </p>
              </div>
            </div>
          </div>

          {/* About Us Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C7A56A]">
              <span>About Us</span>
              <span className="w-8 h-[1px] bg-[#C7A56A]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
              About Hira Outsourcing
            </h2>

            <p className="text-base sm:text-lg text-[#202833]/90 leading-relaxed font-normal">
              &ldquo;Hira Outsourcing helps businesses simplify China-to-India sourcing through product research, supplier coordination, bulk-order support, and import assistance. Our approach focuses on understanding each customer's requirements, communicating clearly, and coordinating the process with care.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#202833]/85 pt-2">
              <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#EEF1F4] space-y-1.5">
                <div className="font-bold text-[#10243A] flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#C7A56A]" /> Client-Centric Sourcing
                </div>
                <p className="text-[#202833]/70">
                  Every product search begins with your precise parameters—target margins, quantity forecasts, and regulatory requirements.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#EEF1F4] space-y-1.5">
                <div className="font-bold text-[#10243A] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#C7A56A]" /> Transparent Bilateral Terms
                </div>
                <p className="text-[#202833]/70">
                  We demystify international freight terms (FOB, EXW, CIF) and assist you with proper invoicing and commercial safety.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-colors shadow"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#10243A] hover:text-[#C7A56A] px-4 py-3"
              >
                <span>View Process &amp; Deliverables &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
