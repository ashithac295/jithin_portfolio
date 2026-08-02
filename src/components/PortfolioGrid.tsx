import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA, JITHIN_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { Search, Eye, ArrowUpRight } from 'lucide-react';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'branding', label: 'Branding & Identity' },
    { id: 'films', label: 'Films & Commercials' },
    { id: 'creative-direction', label: 'Creative Direction' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
              03 // SELECTED ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Directorial & Brand Identity Works
            </h2>
            <p className="text-white/70 text-sm font-light">
              Explore curated brand visual identities, commercial film direction, and multi-channel creative strategies engineered for leading Middle Eastern & international clients.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search works or clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0d0d0d] border border-white/10 text-white text-xs font-mono placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 text-xs font-mono uppercase tracking-[1.5px] font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-[#0d0d0d] border border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-[#0d0d0d] border border-white/10 text-white/60 font-mono text-xs">
            <p>No works found matching your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-amber-400 underline uppercase tracking-wider font-bold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-[#0d0d0d] border border-white/10 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#050505]/90 border border-white/10 text-[9px] uppercase font-mono tracking-[1px] text-amber-400 font-bold">
                    {project.category.replace('-', ' ')}
                  </div>

                  {/* Hover Quick Action Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-mono font-bold uppercase tracking-[1px]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Project</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-white/50">
                      <span className="text-amber-400 font-bold">{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-wide text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2 font-light">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white/50">
                      Role: <strong className="text-white">{project.role}</strong>
                    </span>
                    <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

