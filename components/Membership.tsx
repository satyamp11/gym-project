'use client';

import { motion } from 'framer-motion';
import { Check, ShieldCheck, MessageSquare, Zap } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

export default function Membership() {
  return (
    <section id="membership" className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold px-3.5 py-1 rounded-full glass-card border border-sky-400/30">
            <Zap className="h-3.5 w-3.5" />
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
            MONTHLY <span className="text-gradient-red">MEMBERSHIP</span>
          </h2>
          <p className="text-sm text-slate-300 font-light">
            One simple, transparent membership tier granting complete access to our arena, equipment, and amenities.
          </p>
        </div>

        {/* Featured Premium Membership Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-sky-400/40 shadow-glow-lg overflow-hidden group"
          >
            {/* Top Glowing Ribbon Badge */}
            <div className="absolute top-0 right-0 bg-sky-400 text-slate-900 font-mono text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-glow-sm">
              MOST POPULAR ACCESS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Heading & Price Tag */}
              <div className="md:col-span-6 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
                    ALL-INCLUSIVE PASS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white uppercase font-sans">
                    MONTHLY MEMBERSHIP
                  </h3>
                </div>

                {/* Big Price Typography (EXACT: ₹1,399 / MONTH) */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-6xl font-semibold text-white tracking-tight font-sans">
                      {GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership}
                    </span>
                    <span className="text-sm font-mono text-slate-300 uppercase">/ month</span>
                  </div>
                  <p className="text-xs text-emerald-300 font-mono flex items-center gap-1.5 pt-1">
                    <ShieldCheck className="h-4 w-4" /> No hidden fees or long-term lock-in contract
                  </p>
                </div>

                {/* Direct Action Button */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-sky-400 text-slate-950 font-medium sm:font-semibold text-sm uppercase tracking-wider rounded-full shadow-glow-md hover:bg-sky-300 transition-all duration-300 flex items-center justify-center gap-3 group/btn font-sans"
                >
                  <MessageSquare className="h-4 w-4 fill-slate-950" />
                  JOIN NOW ON WHATSAPP
                </a>
              </div>

              {/* Right Column: Feature List */}
              <div className="md:col-span-6 space-y-4 md:border-l md:border-white/10 md:pl-8">
                <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-slate-200">
                  INCLUDED MEMBERSHIP PRIVILEGES:
                </h4>
                <div className="space-y-3">
                  {GYM_CONFIG.membershipFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-sky-400/20 border border-sky-400/50 flex items-center justify-center text-sky-300 shrink-0 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
