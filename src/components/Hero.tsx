import React from 'react';
import { Phone, MessageSquare, ArrowUpRight, FolderKanban } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#050505] text-white">
      {/* Visual Accent Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-b from-white/[0.04] via-amber-500/[0.02] to-transparent pointer-events-none -z-0 clip-path-[polygon(20%_0,100%_0,100%_100%,0%_100%)]" />

      {/* Subtle Cinematic Background Still with dark overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
        <img
          src={JITHIN_INFO.cinematicHeroImg}
          alt="Cinematic Still by Jithin Sunil"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 text-left">
          
          {/* Header Tagline & Location */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[3px] font-mono text-white/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>JITHIN SUNIL • DUBAI, UAE</span>
            </div>

            <div className="flex items-center gap-6 text-xs uppercase tracking-[2px] font-mono text-white/50">
              <span>BRANDING SPECIALIST</span>
              <span className="text-white/20">•</span>
              <span>FILMMAKER</span>
              <span className="text-white/20">•</span>
              <span>CREATIVE DIRECTOR</span>
            </div>
          </div>

          {/* Main Oversized Sleek Title */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-black tracking-[-3px] sm:tracking-[-5px] uppercase leading-[0.88] text-white">
                Jithin<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-amber-400/90">
                  Sunil
                </span>
              </h1>
            </div>

            {/* Circular Magnet CTA Button */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
              <a
                href="#inquiry"
                className="group relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/30 hover:border-amber-400 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 flex flex-col items-center justify-center text-center cursor-pointer shadow-2xl"
              >
                <span className="text-[10px] uppercase tracking-[2px] font-bold group-hover:scale-105 transition-transform">
                  Start<br />Project
                </span>
                <ArrowUpRight className="w-4 h-4 mt-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Role Cards with Left Hairline Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4">
            <div className="border-l border-white/20 pl-5 space-y-2 hover:border-amber-400 transition-colors">
              <div className="text-[11px] uppercase tracking-[2px] text-white/50 font-mono font-semibold">
                01 / Brand Strategy
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-white/90 font-light">
                Branding Specialist crafting high-impact brand architecture, visual identity systems, and strategic market positioning.
              </div>
            </div>

            <div className="border-l border-white/20 pl-5 space-y-2 hover:border-amber-400 transition-colors">
              <div className="text-[11px] uppercase tracking-[2px] text-white/50 font-mono font-semibold">
                02 / Film Directing
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-white/90 font-light">
                Filmmaker capturing raw human emotion through anamorphic lenses, light sculpting, and high-end cinema direction.
              </div>
            </div>

            <div className="border-l border-white/20 pl-5 space-y-2 hover:border-amber-400 transition-colors">
              <div className="text-[11px] uppercase tracking-[2px] text-white/50 font-mono font-semibold">
                03 / Creative Direction
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-white/90 font-light">
                Creative Director leading cross-platform artistic strategies, commercial campaigns, and luxury brand transformations.
              </div>
            </div>
          </div>

          {/* Action CTAs & Phone Section */}
          <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Phone Display */}
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[2px] text-white/40 font-mono">
                Available for Worldwide Commissions
              </div>
              <a
                href={`tel:${JITHIN_INFO.phoneRaw}`}
                className="text-2xl sm:text-3xl font-light tracking-tight text-white hover:text-amber-400 transition-colors font-mono block"
              >
                +971 563 555 198
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-[1px] hover:bg-amber-400 transition-all cursor-pointer shadow-lg"
              >
                <FolderKanban className="w-3.5 h-3.5" />
                <span>Explore Works</span>
              </a>

              <a
                href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, I am reaching out regarding a project opportunity.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-emerald-600 hover:border-emerald-500 font-semibold text-xs uppercase tracking-[1px] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${JITHIN_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 text-xs font-mono uppercase tracking-[1px] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

