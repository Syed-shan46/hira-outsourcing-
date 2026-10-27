import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
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
      {/* Minimalist Tooltip Callout */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-[#111111] border border-[#EAEAEA] rounded-md p-3.5 shadow-lg text-xs space-y-1 relative animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#888888] hover:text-[#111111]"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 font-medium text-[#111111]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>China Sourcing Coordinator</span>
          </div>
          <p className="text-[#666666] leading-relaxed text-[11px]">
            Direct WhatsApp desk for MOQ questions, factory queries, and order milestones.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2 bg-white hover:bg-[#F8F8F8] text-[#111111] border border-[#EAEAEA] hover:border-[#111111] px-4 py-2.5 rounded-full shadow-sm transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-black"
          aria-label="Chat with Hira Outsourcing on WhatsApp"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <MessageSquare className="w-4 h-4 text-[#111111]" />
          <span className="font-medium text-xs tracking-tight hidden sm:inline-block">
            WhatsApp Desk
          </span>
        </a>
      </div>
    </div>
  );
};
