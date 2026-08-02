import React from 'react';
import { JITHIN_INFO } from '../data/portfolioData';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white/60 py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white">
                <span className="font-mono text-xs font-bold tracking-tighter">JS</span>
              </div>
              <span className="text-base font-black tracking-[2px] text-white uppercase">
                JITHIN SUNIL
              </span>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-light max-w-sm">
              Branding Specialist, Filmmaker & Creative Director shaping brand architecture, cinema commercial production, and luxury identities across Dubai, UAE, and global markets.
            </p>

            <div className="text-xs font-mono text-amber-400">
              Direct Phone: <a href={`tel:${JITHIN_INFO.phoneRaw}`} className="underline hover:text-amber-300">+971 563 555 198</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-xs font-bold uppercase tracking-[2px] text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">01 // About Jithin</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">02 // Services & Capabilities</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">03 // Selected Archive</a></li>
              <li><a href="#inquiry" className="hover:text-amber-400 transition-colors">04 // Commission Brief</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">05 // Direct Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Actions */}
          <div className="md:col-span-4 space-y-4 font-mono">
            <div className="text-xs font-bold uppercase tracking-[2px] text-white">
              Direct Contacts
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Dubai, United Arab Emirates. Available for global commissions.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={`tel:${JITHIN_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#0d0d0d] border border-white/10 text-white hover:border-amber-400 text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+971 563 555 198</span>
              </a>

              <a
                href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, connecting from your portfolio website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 text-white text-xs font-mono font-bold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            &copy; {new Date().getFullYear()} Jithin Sunil. Branding Specialist • Filmmaker • Creative Director.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] border border-white/10 hover:border-amber-400 text-white transition-colors cursor-pointer uppercase tracking-[1px] text-[10px] font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

