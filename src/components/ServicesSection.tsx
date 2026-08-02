import React from 'react';
import { SERVICES_DATA, JITHIN_INFO } from '../data/portfolioData';
import { Sparkles, Clapperboard, Palette, ArrowRight, CheckCircle2, Radio } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Clapperboard,
  Palette,
  Radio,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
            02 // SERVICES & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Branding, Film & Creative Mastery
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
            From strategic brand architecture and luxury identity systems to cinema commercial direction and 360° campaign execution.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="group relative p-8 bg-[#0d0d0d] border border-white/10 hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Service Index & Icon */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-white/40">
                      0{index + 1} // DOMAIN
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-amber-400 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="text-[10px] uppercase font-mono tracking-[2px] text-white/50 font-bold">
                      Key Deliverables
                    </div>
                    <ul className="space-y-2 text-xs text-white/80 font-light">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-8 mt-6">
                  <a
                    href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent(`Hi Jithin, I am interested in your ${service.title} services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[1px] font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Commission {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

