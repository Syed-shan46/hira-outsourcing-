import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe,
  ChevronDown,
  ArrowRight
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
    { name: 'Services', href: '/services' },
    { name: 'Import Process', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'Operations', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: '中文', label: '中文 (Mandarin)' },
    { code: 'हिन्दी', label: 'हिन्दी (Hindi)' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled ? 'border-[#EAEAEA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]' : 'border-[#EAEAEA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            
            {/* Hira Outsourcing Logo */}
            <Link 
              to="/" 
              className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md py-1"
            >
              <img 
                src="/images/hira_logo_official_original.png" 
                alt="Hira Outsourcing Services Pvt Ltd" 
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[13px] tracking-tight transition-colors duration-150 ${
                    isActive(link.href)
                      ? 'text-[#111111] font-semibold'
                      : 'text-[#666666] hover:text-[#111111] font-normal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Controls: Language Selector + Primary CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#111111] hover:bg-[#F5F5F5] rounded-md transition-colors border border-[#EAEAEA]"
                  aria-label="Select Language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#666666]" />
                  <span className="font-medium">{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-[#666666]" />
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-1.5 w-40 bg-white border border-[#EAEAEA] rounded-lg shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#F5F5F5] ${
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

              {/* Desktop Quick Quote CTA */}
              <a
                href="#quote"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Minimal Hamburger Menu */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#111111] hover:bg-[#F5F5F5] rounded-md transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Minimal Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#EAEAEA] px-5 py-5 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-[#111111] font-semibold' : 'text-[#666666]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-[#EAEAEA] space-y-2.5">
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] text-white py-3 rounded-lg text-sm font-medium"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F5F5] text-[#111111] border border-[#EAEAEA] py-3 rounded-lg text-sm font-medium"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
