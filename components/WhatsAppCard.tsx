'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, PhoneCall, Sparkles } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.705 1.454h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppCard() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#152026] border-t border-white/10 overflow-hidden font-sans">
      {/* Background Ambient Spotlight Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-sky-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-6 sm:p-8 glass-panel border border-emerald-400/35 shadow-[0_15px_50px_rgba(0,0,0,0.5)] overflow-hidden text-center space-y-5 group bg-gradient-to-b from-[#1e2f38]/95 via-[#18262e]/95 to-[#121c22]/95 backdrop-blur-2xl"
        >
          {/* Top Glowing Highlight Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981]" />

          {/* Header Row: Badge & Small Icon */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-emerald-400/40 text-emerald-300 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold shadow-glow-sm">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span>DIRECT COACHING ACCESS</span>
            </div>

            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/25 to-teal-500/10 border border-emerald-400/60 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.35)] shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 border border-[#18262e]" />
            </div>
          </div>

          {/* Headings */}
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-xl sm:text-3xl font-semibold text-white uppercase tracking-tight leading-tight font-sans">
              READY TO FORGE YOUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 font-semibold">
                TRANSFORMATION?
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Have questions about membership, timings, or personal training? Chat directly with our head coach on WhatsApp.
            </p>
          </div>

          {/* Compact WhatsApp CTA Button */}
          <div className="pt-1 flex justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn font-sans"
            >
              <WhatsAppIcon className="h-4 w-4 fill-slate-950" />
              <span>START DIRECT WHATSAPP CHAT</span>
              <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Compact 3-Item Info Strip */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Response &lt; 5 Mins</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>{GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership} / Month Pass</span>
            </div>

            <div className="flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>{GYM_CONFIG.phone}</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}


