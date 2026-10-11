import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquareQuote,
  PhoneCall
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#10243A]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#202833]'
            : 'bg-[#10243A] py-5 border-b border-[#10243A]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C7A56A] rounded-lg p-1">
              <div className="w-10 h-10 rounded-lg bg-[#C7A56A] flex items-center justify-center font-bold text-[#10243A] text-xl tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#FAFAF7] transition-colors">
                  HIRA <span className="text-[#C7A56A] font-medium text-lg">OUTSOURCING</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#EEF1F4]/70 uppercase font-medium">
                  China Sourcing Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? 'text-[#C7A56A] bg-[#FFFFFF]/5'
                      : 'text-[#EEF1F4]/85 hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions / Primary CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#EEF1F4]/80 hover:text-[#C7A56A] flex items-center gap-1.5 transition-colors"
                title="WhatsApp Quick Desk"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Fast WhatsApp Desk</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="text-xs bg-[#C7A56A] text-[#10243A] px-3 py-1.5 rounded font-semibold"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#EEF1F4] hover:text-[#C7A56A] focus:outline-none focus:ring-2 focus:ring-[#C7A56A] rounded-md"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#10243A] border-t border-[#202833] px-4 pt-4 pb-6 space-y-3 transition-all animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[#C7A56A] bg-[#FFFFFF]/10'
                      : 'text-[#EEF1F4]/90 hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-[#202833]/80 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#C7A56A] text-[#10243A] py-3 rounded-md font-semibold text-sm shadow"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>Request a Sourcing Quote</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#C7A56A]/50 text-[#EEF1F4] py-2.5 rounded-md text-xs font-medium hover:bg-[#C7A56A]/10"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C7A56A]" />
                <span>WhatsApp Sourcing Desk: {siteConfig.whatsapp.displayNumber}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
