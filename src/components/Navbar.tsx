import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
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
      setIsScrolled(window.scrollY > 10);
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
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-200 border-b ${
          isScrolled ? 'border-[#EAEAEA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]' : 'border-[#EAEAEA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-md"
            >
              <div className="w-8 h-8 rounded-md bg-[#111111] text-white flex items-center justify-center font-semibold text-sm tracking-tight transition-transform duration-200 group-hover:scale-95">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold tracking-tight text-[#111111] leading-none">
                  HIRA <span className="font-normal text-[#666666]">OUTSOURCING</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#888888] uppercase font-medium mt-1">
                  China Sourcing Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
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

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Track Order Quick Trigger */}
              <button
                type="button"
                onClick={() => setShowSearchModal(true)}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-black px-3.5 py-2 rounded-md border border-[#EAEAEA] hover:border-[#111111] bg-white transition-colors duration-150 cursor-pointer"
                title="Track Live Cargo & Shipment Progress"
              >
                <Package className="w-3.5 h-3.5 text-[#666666]" />
                <span>Track Order</span>
              </button>

              {/* Primary Black Action CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white text-[13px] font-medium px-4 py-2 rounded-md transition-colors duration-150"
              >
                <span>Sourcing Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center sm:hidden gap-2">
              <button
                type="button"
                onClick={() => setShowSearchModal(true)}
                className="p-2 text-[#111111] rounded-md border border-[#EAEAEA]"
                aria-label="Track order"
              >
                <Package className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#111111] rounded-md border border-[#EAEAEA] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#EAEAEA] px-6 py-6 space-y-5 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-1.5 tracking-tight transition-colors ${
                    isActive(link.href)
                      ? 'text-[#111111] font-semibold'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/tracking"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-1.5 tracking-tight text-[#111111] font-medium flex items-center justify-between border-t border-[#EAEAEA] pt-3"
              >
                <span>Live Order Tracking</span>
                <Package className="w-4 h-4 text-[#666666]" />
              </Link>
            </div>

            <div className="pt-3 border-t border-[#EAEAEA] space-y-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white py-2.5 rounded-md text-sm font-medium"
              >
                <span>Start Sourcing Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-medium text-[#666666] py-2 hover:text-[#111111]"
              >
                <span>WhatsApp: {siteConfig.whatsapp.displayNumber}</span>
              </a>
            </div>
          </div>
        )}

        {/* Interactive Order Search Modal */}
        {showSearchModal && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-[#EAEAEA] rounded-lg p-6 max-w-md w-full shadow-xl space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                  <Package className="w-4 h-4 text-[#111111]" />
                  <span>Track Live Order</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSearchModal(false)}
                  className="text-[#666666] hover:text-[#111111] p-1 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-[#666666] leading-relaxed">
                Enter your HIRA Order ID to inspect production milestones, customs status, and port arrival updates:
              </p>

              <form onSubmit={handleTrackSubmit} className="space-y-3">
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. HIRA-100087"
                  value={quickTrackId}
                  onChange={(e) => setQuickTrackId(e.target.value)}
                  className="w-full bg-[#F8F8F8] border border-[#EAEAEA] rounded-md px-3.5 py-2.5 text-sm text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#111111] focus:bg-white font-mono transition-colors"
                />
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowSearchModal(false)}
                    className="px-3.5 py-2 text-xs font-medium text-[#666666] hover:text-[#111111]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-md text-xs font-medium transition-colors"
                  >
                    Track Status
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
