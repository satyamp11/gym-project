'use client';

import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Flame } from 'lucide-react';
import Showcase3DCanvas from './canvas/Showcase3DCanvas';

export default function Equipment3D() {
  const highlights = [
    { title: "STRENGTH", subtitle: "High-density cast iron & competition steel", icon: <Shield className="h-5 w-5 text-sky-400" /> },
    { title: "PRECISION", subtitle: "Calibrated weight tolerance within +/- 10g", icon: <Cpu className="h-5 w-5 text-sky-400" /> },
    { title: "PERFORMANCE", subtitle: "Ergonomic grip contours for explosive lifts", icon: <Flame className="h-5 w-5 text-sky-400" /> },
  ];

  return (
    <section id="equipment" className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      {/* Background Atmosphere Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold px-3 py-1 rounded-full glass-card border border-sky-400/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE HARDWARE SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
            BIOMECHANICAL <span className="text-gradient-red">EXCELLENCE</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Every bar, weight plate, and kettlebell is engineered for maximum overload and zero energy loss.
          </p>
        </div>

        {/* 3D Showcase Arena with Overlay Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
          {/* Left Column Callouts */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {highlights.slice(0, 2).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-3xl glass-card border border-white/12 glass-card-hover space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:bg-sky-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black font-display text-white uppercase group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-1">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center 3D Interactive Canvas */}
          <div className="lg:col-span-4 h-[400px] lg:h-[500px] relative order-1 lg:order-2">
            <Showcase3DCanvas />
          </div>

          {/* Right Column Callout */}
          <div className="lg:col-span-4 space-y-6 order-3">
            {highlights.slice(2, 3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-3xl glass-card border border-white/12 glass-card-hover space-y-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:bg-sky-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black font-display text-white uppercase group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-1">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}

            {/* Spec Badge Pill */}
            <div className="p-5 rounded-3xl glass-panel border border-sky-400/30 text-center space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-mono">
                HARDWARE TOLERANCE
              </span>
              <p className="text-lg font-bold text-sky-300 font-display">
                CALIBRATED FOR CHAMPIONS
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
