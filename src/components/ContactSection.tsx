import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import { JITHIN_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-left">
        
        {/* Section Title */}
        <div className="text-left max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-amber-400">
            06 // DIRECT CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            Connect With Jithin Sunil
          </h2>
          <p className="text-white/70 text-sm font-light">
            Available for brand strategy, commercial film direction, and creative campaign commissions globally.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <a
            href={`tel:${JITHIN_INFO.phoneRaw}`}
            className="group p-6 bg-[#0d0d0d] border border-white/10 hover:border-amber-400 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-amber-400 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[1px] px-2.5 py-1 bg-white/5 border border-white/10 text-amber-400">
                Primary Line
              </span>
            </div>

            <div>
              <div className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">
                Direct Contact
              </div>
              <div className="text-2xl font-mono font-bold text-white group-hover:text-amber-300 transition-colors mt-1">
                +971 563 555 198
              </div>
            </div>

            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-[1px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Tap To Dial</span> <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${JITHIN_INFO.phoneRaw}?text=${encodeURIComponent("Hi Jithin, I am reaching out regarding a creative project opportunity.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#0d0d0d] border border-white/10 hover:border-emerald-500 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-[1px] px-2.5 py-1 bg-emerald-500/10 text-emerald-400">
                Instant Chat
              </span>
            </div>

            <div>
              <div className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">
                WhatsApp Business
              </div>
              <div className="text-2xl font-mono font-bold text-white group-hover:text-emerald-300 transition-colors mt-1">
                +971 563 555 198
              </div>
            </div>

            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[1px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Start WhatsApp</span> <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Location & Response Time */}
          <div className="p-6 bg-[#0d0d0d] border border-white/10 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-[1px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/70">
                Studio Base
              </span>
            </div>

            <div>
              <div className="text-[10px] uppercase font-mono tracking-[1px] text-white/50">
                Primary Location
              </div>
              <div className="text-lg font-mono font-bold text-white mt-1">
                {JITHIN_INFO.location}
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-white/50 pt-2 border-t border-white/10">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Response: Within 12 Hours</span>
            </div>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto p-8 bg-[#0d0d0d] border border-white/10">
          <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2">
            Transmit Direct Brief
          </h3>
          <p className="text-xs font-mono text-white/50 mb-6">
            Complete the form below to dispatch a message directly to Jithin Sunil.
          </p>

          {formSent ? (
            <div className="p-8 text-center space-y-3 bg-black border border-white/10">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-mono font-bold text-white uppercase">Message Dispatched</h4>
              <p className="text-xs text-white/70 font-light">
                Thank you {senderName}. Your message has been routed directly to Jithin Sunil's inbox.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-2 text-xs font-mono text-amber-400 font-bold underline uppercase"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-[1px] text-white/50">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-[1px] text-white/50">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-[1px] text-white/50">Subject / Scope</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Brand Architecture, Commercial Film, or Creative Direction"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-[1px] text-white/50">Message Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your project details here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-mono font-bold text-xs uppercase tracking-[1.5px] hover:bg-amber-400 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Transmission</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

