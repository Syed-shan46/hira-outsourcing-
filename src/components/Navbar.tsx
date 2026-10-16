import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquareQuote,
  PhoneCall,
  Search,
  Package
} from 'lucide-react';
import { siteConfig } from '../config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickTrackId, setQuickTrackId] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickTrackId.trim()) {
      setShowSearchModal(false);
      navigate(`/${quickTrackId.trim()}`);
      setQuickTrackId('');
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#10243A]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#202833]'
            : 'bg-[#10243A] py-4 border-b border-[#202833]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo & Brand Mark */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#D8B87D] to-[#C7A56A] flex items-center justify-center font-extrabold text-[#10243A] text-base sm:text-lg tracking-wider shadow-sm transition-transform duration-300 group-hover:scale-105">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight">
                  HIRA <span className="text-[#C7A56A] font-semibold">OUTSOURCING</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-[#EEF1F4]/70 uppercase font-medium">
                  China Sourcing Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive(link.href)
                      ? 'text-[#C7A56A] bg-white/10 font-semibold'
                      : 'text-[#EEF1F4]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Action Bar (Prominent Track Shipment Button + Sourcing Quote) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {/* Prominent High-End Track Order Button */}
              <button
                type="button"
                onClick={() => setShowSearchModal(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-4.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap group"
                title="Track Live Cargo & Shipment Progress"
              >
                <Package className="w-4 h-4 text-[#10243A] transition-transform group-hover:scale-110" />
                <span>Track Order</span>
                <Search className="w-3.5 h-3.5 opacity-70" />
              </button>

              {/* Sourcing Request Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C7A56A]/60 rounded-xl transition-all shadow-sm whitespace-nowrap"
              >
                <span>Sourcing Request</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A56A]" />
              </Link>

              {/* WhatsApp Quick Icon */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:inline-flex items-center gap-1.5 text-xs font-medium text-[#EEF1F4]/75 hover:text-[#25D366] px-2.5 py-2 rounded-xl hover:bg-white/5 transition-colors"
                title="WhatsApp Quick Desk"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Controls - Clean Hamburger Only (Track is in Hero & Drawer) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C7A56A] bg-white/5 hover:bg-white/10 rounded-lg border border-[#EEF1F4]/15 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#10243A] border-t border-[#202833] px-5 pt-4 pb-6 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[#C7A56A] bg-white/10 font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#C7A56A] hover:bg-white/5 flex items-center justify-between"
              >
                <span>Live Order Tracking</span>
                <Package className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-3 border-t border-[#202833] space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#C7A56A] text-[#10243A] py-3 rounded-xl font-bold text-sm shadow"
              >
                <MessageSquareQuote className="w-4 h-4" />
                <span>Request a Quote</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-white/20 text-[#EEF1F4] py-2.5 rounded-xl text-xs font-medium hover:bg-white/5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C7A56A]" />
                <span>WhatsApp Desk ({siteConfig.whatsapp.displayNumber})</span>
              </a>
            </div>
          </div>
        )}

        {/* Interactive Order Search Modal */}
        {showSearchModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#10243A] border border-[#C7A56A]/40 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#202833] pb-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Package className="w-4 h-4 text-[#C7A56A]" />
                  <span>Track Live Order Status</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="text-stone-400 hover:text-white p-1 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                Enter your HIRA Order ID to view real-time factory progress, dispatch, and port arrival updates:
              </p>

              <form onSubmit={handleTrackSubmit} className="space-y-3">
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. HIRA-100087"
                  value={quickTrackId}
                  onChange={(e) => setQuickTrackId(e.target.value)}
                  className="w-full bg-[#0c1b2c] border border-[#202833] rounded-xl px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C7A56A] font-mono"
                />
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowSearchModal(false)}
                    className="px-4 py-2 text-xs font-medium text-stone-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#C7A56A] hover:bg-[#d8b87d] text-[#10243A] px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow"
                  >
                    Track Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
