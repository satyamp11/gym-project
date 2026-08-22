'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dumbbell, Disc, Activity, Zap, Users, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GYM_CONFIG, FacilityItem } from '@/lib/config';

// Dynamic Icon Resolver
const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="h-6 w-6" />,
  Disc: <Disc className="h-6 w-6" />,
  Activity: <Activity className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
};

export default function Facilities() {
  const facilities = GYM_CONFIG.facilities.filter(f => f.available);

  return (
    <section id="facilities" className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
              GYM <span className="text-gradient-red">FACILITIES</span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light">
            Engineered with high-end machinery and dedicated zones built for peak physical performance.
          </p>
        </div>

        {/* Facilities Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility: FacilityItem, idx: number) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/12 glass-card-hover flex flex-col justify-between"
            >
              {/* Top Image Banner with Zoom Effect */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d35] via-[#1f2d35]/40 to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl glass-panel border border-white/20 flex items-center justify-center text-sky-300 shadow-glow-sm group-hover:bg-sky-400 group-hover:text-slate-900 transition-colors duration-300">
                  {iconMap[facility.iconName] || <Dumbbell className="h-6 w-6" />}
                </div>

                {/* Available Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono uppercase tracking-wider">
                  AVAILABLE
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-[#1f2d35]/80">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white uppercase group-hover:text-sky-300 transition-colors flex items-center justify-between">
                    <span>{facility.title}</span>
                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom Glow Indicator */}
                <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-sky-400 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
