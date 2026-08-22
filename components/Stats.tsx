'use client';

import { motion } from 'framer-motion';
import { GYM_CONFIG } from '@/lib/config';

export default function Stats() {
  const statItems = [
    { label: "Active Members", value: GYM_CONFIG.stats.members, sub: "Community of Driven Athletes" },
    { label: "Elite Equipment", value: GYM_CONFIG.stats.equipment, sub: "Biomechanical Strength Units" },
    { label: "Expert Coaches", value: GYM_CONFIG.stats.trainers, sub: "Certified Transformation Leads" },
    { label: "Days Open Weekly", value: `${GYM_CONFIG.stats.daysOpen} Days`, sub: "Early & Late Training Hours" },
  ];

  return (
    <section className="relative py-16 bg-[#152026] border-y border-white/10 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-sky-400/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="text-3xl sm:text-5xl font-semibold text-white group-hover:text-sky-300 transition-colors tracking-tight font-sans">
                  {item.value}
                </span>
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-400 pt-3 border-t border-white/10 mt-4">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
