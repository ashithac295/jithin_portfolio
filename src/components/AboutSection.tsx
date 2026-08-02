import React from 'react';
import { Sparkles, Film, Palette, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Brand Strategy & Identity',
      desc: 'Comprehensive brand architecture, visual identity systems, corporate rebrands, and strategic positioning for luxury and global enterprises.',
      icon: Sparkles,
    },
    {
      title: 'Cinematic Filmmaking',
      desc: 'Commercial TVC production, narrative films, and luxury fashion vignettes with high production value and precision cinematography.',
      icon: Film,
    },
    {
      title: 'Creative Direction',
      desc: '360° campaign direction, spatial visual design, and high-impact artistic strategies that command market distinction.',
      icon: Palette,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-none overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl group">
                <img
                  src={JITHIN_INFO.portraitImg}
                  alt="Jithin Sunil - Branding Specialist, Filmmaker & Creative Director"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-[#050505]/90 backdrop-blur-md border-t border-white/10 text-left">
                  <div className="text-xs uppercase tracking-[2px] font-mono text-amber-400 font-bold">
                    JITHIN SUNIL
                  </div>
                  <div className="text-xs text-white/70 font-mono mt-1">
                    Branding Specialist • Filmmaker • Creative Director
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Philosophy Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
                01 // THE VISIONARY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                Mastering Brand Architecture & Visual Narrative
              </h2>
            </div>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
              {JITHIN_INFO.bio}
            </p>

            <div className="p-6 rounded-none bg-[#0d0d0d] border border-white/10 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-[2px]">
                Creative Manifesto
              </h3>
              <p className="text-white/80 text-sm font-light italic leading-relaxed">
                "A powerful brand isn't just seen—it is felt, trusted, and remembered. By fusing high-level brand strategy with cinema-grade film production, we craft resonant stories that elevate market position and command prestige."
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[2px] text-white/50">
                Domains of Mastery
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-5 bg-[#0d0d0d] border border-white/10 space-y-3 hover:border-amber-400/50 transition-all">
                      <div className="w-8 h-8 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Connect Quick Card */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[2px] font-mono text-white/40 block">
                  Direct Inquiries & Phone
                </span>
                <a
                  href={`tel:${JITHIN_INFO.phoneRaw}`}
                  className="text-lg font-mono font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+971 563 555 198</span>
                </a>
              </div>

              <a
                href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, let's connect regarding creative consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[1px] px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Consult</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

