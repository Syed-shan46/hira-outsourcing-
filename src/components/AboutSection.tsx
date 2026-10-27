import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#EAEAEA] rounded-lg overflow-hidden bg-[#FAFAFA]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F0F0]">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
                  alt="Business executives reviewing manufacturing sourcing specifications"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-white border-t border-[#EAEAEA] text-xs text-[#666666] leading-relaxed">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-medium block mb-1">
                  On-The-Ground Discipline
                </span>
                Bridging geographical and commercial barriers between Indian merchants and Chinese industrial clusters.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
                About Hira Outsourcing
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium tracking-tight text-[#111111] leading-tight">
                Built to Simplify Cross-Border Manufacturing
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#111111] font-normal leading-relaxed">
              &ldquo;Hira Outsourcing helps businesses simplify China-to-India sourcing through product research, supplier coordination, bulk-order support, and import assistance. Our approach focuses on understanding each customer's requirements, communicating clearly, and coordinating the process with care.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="border-t border-[#EAEAEA] pt-4 space-y-1.5">
                <h3 className="text-sm font-medium text-[#111111]">
                  Client-Centric Sourcing
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Every product search begins with your precise parameters—target margins, quantity forecasts, and regulatory requirements.
                </p>
              </div>

              <div className="border-t border-[#EAEAEA] pt-4 space-y-1.5">
                <h3 className="text-sm font-medium text-[#111111]">
                  Transparent Bilateral Terms
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  We demystify international freight terms (FOB, EXW, CIF) and assist you with proper invoicing and commercial safety.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#EAEAEA]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-5 py-3 rounded-md text-sm font-medium transition-colors"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:underline px-2 py-3"
              >
                <span>View Process &amp; Deliverables</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#666666]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
