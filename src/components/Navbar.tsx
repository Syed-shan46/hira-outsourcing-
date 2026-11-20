import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#process' },
    { name: 'Stats', href: '#stats' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const languages = [
    { code: 'EN', label: 'EN (English)' },
    { code: '中文', label: '中文 (Mandarin)' },
    { code: 'हिन्दी', label: 'हिन्दी (Hindi)' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled ? 'border-[#EAEAEA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]' : 'border-[#EAEAEA]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
            
            {/* Hira Outsourcing Logo: Official hira_logo + Stacked Hira Outsourcing */}
            <Link 
              to="/" 
              className="flex items-center gap-2 sm:gap-2.5 focus:outline-none rounded-md py-1"
            >
              <img 
                src="/images/hira_logo.png" 
                alt="Hira Outsourcing Logo" 
                className="h-7 sm:h-8 w-auto object-contain shrink-0" 
              />
              <div className="flex flex-col text-left leading-none">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[#111111]">
                  Hira
                </span>
                <span className="text-[10px] sm:text-[11px] font-normal tracking-tight text-[#444444] mt-0.5">
                  Outsourcing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Controls: Language Selector + Minimal Hamburger Menu */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-[#111111] hover:bg-[#F5F5F5] rounded transition-colors"
                  aria-label="Select Language"
                >
                  <Globe className="w-3 h-3 text-[#111111] stroke-[1.4]" />
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-tight">{currentLang}</span>
                  <ChevronDown className="w-2.5 h-2.5 text-[#555555] stroke-[1.5]" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-1.5 w-32 bg-white border border-[#EAEAEA] rounded-lg shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 text-[10.5px] flex items-center justify-between hover:bg-[#F5F5F5] transition-colors ${
                          currentLang === lang.code ? 'font-semibold text-[#111111] bg-[#FAFAFA]' : 'text-[#666666]'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {currentLang === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Minimal Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#111111] hover:bg-[#F5F5F5] rounded transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[2]" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Minimal Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#EAEAEA] px-5 py-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-[#111111] hover:text-[#555555]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EAEAEA] space-y-2">
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] text-white py-3 rounded-lg text-xs font-semibold"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F5F5] text-[#111111] py-2.5 rounded-lg text-xs font-medium border border-[#EAEAEA]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#111111]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
