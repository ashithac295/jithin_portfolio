import React, { useState } from 'react';
import { MessageSquare, Calculator, Send, CheckCircle, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

export const InquiryBuilder: React.FC = () => {
  const [serviceType, setServiceType] = useState('Brand Identity & Strategy');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [scope, setScope] = useState('Full Scale Transformation');
  const [clientName, setClientName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Brand Identity & Strategy',
    'Commercial Film & TVC Directing',
    'Creative Direction & Campaigns',
  ];

  const timelineOptions = [
    'Immediate (Next 2 Weeks)',
    'Within 1 Month',
    'Q3 / Q4 2026',
    'Flexible / Long-term Advisory',
  ];

  const scopeOptions = [
    'Focused Advisory / Campaign',
    'Full Scale Transformation',
    'Multi-Market Global Launch',
  ];

  const formattedWhatsAppText = `Hi Jithin,
I would like to inquire about a project:
• Service: ${serviceType}
• Scope: ${scope}
• Timeline: ${timeline}
• Name: ${clientName || 'Not specified'}
• Company: ${company || 'Not specified'}
• Contact Email: ${email || 'Not specified'}
• Project Details: ${details || 'None provided'}
Looking forward to connecting!`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
              04 // COMMISSION BRIEF
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Initiate Creative Partnership
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
              Select your creative requirements below to generate an instant project brief. You can transmit your inquiry directly to Jithin Sunil on WhatsApp or via direct phone consultation.
            </p>

            <div className="p-6 bg-[#0d0d0d] border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <Sparkles className="w-4 h-4" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-[2px] text-white">
                  Direct Contact & Advisory
                </h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Jithin directly oversees all brand strategy engagements, commercial film direction, and creative campaigns across Dubai and international creative hubs.
              </p>
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2 font-mono text-xs">
                <a
                  href={`tel:${JITHIN_INFO.phoneRaw}`}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +971 563 555 198</span>
                </a>
                <span className="text-white/50">Location: {JITHIN_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column Form & Configurator */}
          <div className="lg:col-span-7 bg-[#0d0d0d] p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
            
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  Brief Generated Successfully
                </h3>
                <p className="text-xs text-white/70 max-w-md mx-auto font-light">
                  Your project scope is ready. Launch WhatsApp below to send it directly to Jithin Sunil (+971 563 555 198).
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-[1px] hover:bg-emerald-500 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 bg-black border border-white/20 text-white font-mono text-xs uppercase tracking-[1px] font-bold hover:bg-white/10"
                  >
                    Modify Scope
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Step 1: Select Service */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-[2px] font-bold text-amber-400 block">
                    1. Select Domain
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setServiceType(opt)}
                        className={`p-3 border text-xs text-left font-mono font-medium transition-all cursor-pointer ${
                          serviceType === opt
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-black/60 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Scope */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-[2px] font-bold text-amber-400 block">
                    2. Scope & Scale
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {scopeOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setScope(opt)}
                        className={`p-3 border text-[11px] font-mono text-center transition-all cursor-pointer ${
                          scope === opt
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-black/60 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Select Timeline */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-[2px] font-bold text-amber-400 block">
                    3. Target Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setTimeline(opt)}
                        className={`p-2.5 border text-[10px] font-mono text-center transition-all cursor-pointer ${
                          timeline === opt
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-black/60 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Al-Sabah"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">Company / Brand</label>
                    <input
                      type="text"
                      placeholder="e.g. Lumina Group"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@luminagroup.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">Project Goals & Brief</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your vision, broadcast requirements, or film objective..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-[1px] hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    Build & Submit Brief
                  </button>

                  <a
                    href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 text-white font-mono font-bold text-xs uppercase tracking-[1px] hover:bg-emerald-500 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

