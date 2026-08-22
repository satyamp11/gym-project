'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck, Zap, PhoneCall, Sparkles } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

export default function WhatsAppCard() {
  return (
    <section className="relative py-28 bg-[#152026] border-t border-white/10 overflow-hidden font-sans">
      {/* Background Ambient Spotlight Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-sky-500/15 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-8 sm:p-16 glass-panel border border-emerald-400/35 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden text-center space-y-10 group bg-gradient-to-b from-[#1e2f38]/95 via-[#18262e]/95 to-[#121c22]/95 backdrop-blur-2xl"
        >
          {/* Top Glowing Gradient Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981]" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />

          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-emerald-400/40 text-emerald-300 text-xs font-mono uppercase tracking-[0.25em] font-semibold mx-auto shadow-glow-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span>DIRECT COACHING ACCESS</span>
          </div>

          {/* Large WhatsApp Icon Badge */}
          <div className="relative mx-auto h-22 w-22 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400/60 flex items-center justify-center text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.35)] transform group-hover:scale-110 transition-all duration-300">
            <MessageSquare className="h-10 w-10 stroke-[2] fill-emerald-500/30" />
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-[#18262e]" />
          </div>

          {/* Headings */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-medium sm:font-semibold text-white uppercase tracking-tight leading-[1.08] font-sans">
              READY TO FORGE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 font-semibold">
                TRANSFORMATION?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl mx-auto leading-relaxed">
              Have questions about membership, timings, biomechanical equipment, or personal training? Chat with our head coach directly on WhatsApp.
            </p>
          </div>

          {/* High-Impact WhatsApp CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:shadow-[0_0_55px_rgba(16,185,129,0.85)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group/btn font-sans"
            >
              <MessageSquare className="h-5 w-5 fill-slate-950 stroke-slate-950" />
              <span>START DIRECT WHATSAPP CHAT</span>
              <ArrowRight className="h-4.5 w-4.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* 3-Column Trust Details Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl glass-card border border-white/8">
              <Zap className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Response &lt; 5 Mins</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl glass-card border border-white/8">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership} / Month Pass</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl glass-card border border-white/8">
              <PhoneCall className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>{GYM_CONFIG.phone}</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
