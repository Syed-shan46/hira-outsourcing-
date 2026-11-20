import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#EAEAEA] px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2.5 max-w-sm mx-auto">
        <a
          href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#111111] text-white py-3 px-4 rounded-lg text-xs font-semibold tracking-wide hover:bg-black transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="#quote"
          className="inline-flex items-center justify-center gap-1.5 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111111] py-3 px-4 rounded-lg text-xs font-semibold tracking-wide transition-colors border border-[#EAEAEA]"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

