import React, { useState } from 'react';
import { Project } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Check, ExternalLink, Calendar, User, Film } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/90 backdrop-blur-xl animate-fade-in">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 shadow-2xl text-left my-auto text-white">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#050505] border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[2px] text-amber-400">
              ARCHIVE // {project.category.replace('-', ' ')}
            </span>
            <h3 className="text-xl font-black text-white uppercase tracking-wide">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-black border border-white/20 hover:border-white text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Gallery Media Player */}
        <div className="relative aspect-video w-full bg-black overflow-hidden border-b border-white/10">
          {project.videoUrl ? (
            <div className="relative w-full h-full group">
              <video
                src={project.videoUrl}
                poster={project.thumbnail}
                autoPlay={isPlaying}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-3 bg-amber-400 text-black font-bold hover:bg-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 bg-black/80 text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <span className="text-xs text-white/70 font-mono uppercase tracking-[1px]">
                  Directing Cut • Jithin Sunil
                </span>
              </div>
            </div>
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-black border border-white/10 text-xs font-mono">
            <div>
              <div className="text-white/40 uppercase tracking-[1px] text-[10px]">Client</div>
              <div className="text-white font-bold mt-0.5">{project.client}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-[1px] text-[10px]">Year</div>
              <div className="text-white font-bold mt-0.5">{project.year}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-[1px] text-[10px]">Role</div>
              <div className="text-amber-400 font-bold mt-0.5">{project.role}</div>
            </div>
            <div>
              <div className="text-white/40 uppercase tracking-[1px] text-[10px]">Domain</div>
              <div className="text-white font-bold mt-0.5 capitalize">{project.category.replace('-', ' ')}</div>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[2px] text-amber-400">
              Overview & Creative Concept
            </h4>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[2px] text-white/50">
              Key Deliverables & Outputs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-black border border-white/10 text-xs font-mono text-white/80">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics / Impact if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-5 bg-black border border-amber-400/40 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-[2px] text-amber-400">
                Audience Reach & Impact Metrics
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-black text-amber-400">{metric.value}</div>
                    <div className="text-[11px] font-mono text-white/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono">
            <div className="text-xs text-white/50">
              Discuss similar creative direction or radio strategy?
            </div>

            <a
              href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent(`Hi Jithin, I saw your project "${project.title}" and would like to discuss something similar.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white text-xs font-bold uppercase tracking-[1px] hover:bg-emerald-500 transition-colors"
            >
              Discuss via WhatsApp
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

