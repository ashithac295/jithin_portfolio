import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
            05 // ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Client & Executive Testimony
          </h2>
          <p className="text-white/70 text-sm font-light">
            Insights from executive leadership, luxury brand founders, and film producers who have commissioned Jithin Sunil.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="p-8 bg-[#0d0d0d] border border-white/10 space-y-6 flex flex-col justify-between hover:border-amber-400 transition-colors text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/40">0{index + 1}</span>
                </div>

                <Quote className="w-6 h-6 text-white/20" />

                <p className="text-white/80 text-sm leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/30"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {item.author}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400">
                    {item.title}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

