import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Selected Works', href: '#portfolio' },
    { label: 'Estimation', href: '#inquiry' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border border-white/30 group-hover:border-amber-400 flex items-center justify-center text-white transition-all">
            <span className="font-mono text-xs font-bold tracking-tighter">JS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[2px] text-white uppercase group-hover:text-amber-400 transition-colors">
              JITHIN SUNIL
            </span>
            <span className="text-[9px] uppercase tracking-[1.5px] text-white/50 font-mono -mt-0.5">
              Branding Specialist • Filmmaker
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs uppercase tracking-[2px] font-mono text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direct Action Contacts */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${JITHIN_INFO.phoneRaw}`}
            id="nav-call-button"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700/80 text-neutral-200 text-xs font-medium hover:border-amber-500/50 hover:text-amber-300 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{JITHIN_INFO.phone}</span>
          </a>

          <a
            href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, I reviewed your portfolio and would like to discuss a project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-button"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-semibold hover:from-emerald-500 hover:to-emerald-400 shadow-md shadow-emerald-950/40 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-6 mt-2 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${JITHIN_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-medium"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {JITHIN_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, I reviewed your portfolio and would like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
