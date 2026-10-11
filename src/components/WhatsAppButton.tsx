import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/site';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const message = customMessage || siteConfig.whatsapp.defaultMessage;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden">
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-[#10243A] text-[#FAFAF7] border border-[#C7A56A]/40 rounded-xl p-3.5 shadow-xl text-xs space-y-1 relative animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#EEF1F4]/60 hover:text-[#FAFAF7]"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 font-semibold text-[#C7A56A]">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>China Sourcing Coordinator</span>
          </div>
          <p className="text-[#EEF1F4]/80 leading-relaxed text-[11px]">
            Direct WhatsApp coordination for MOQ queries, supplier discovery, and factory enquiries.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Chat with Hira Outsourcing on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="font-semibold text-sm tracking-wide hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
