'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Zap } from 'lucide-react';
import { GYM_CONFIG, TrainerItem } from '@/lib/config';

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
              ELITE COACHING STAFF
            </span>
            <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
              MASTER <span className="text-gradient-red">TRAINERS</span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light">
            Guiding your progression with biomechanical precision, customized nutrition, and relentless discipline.
          </p>
        </div>

        {/* Trainers Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GYM_CONFIG.trainers.map((trainer: TrainerItem, idx: number) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card border border-white/12 glass-card-hover flex flex-col"
            >
              {/* Photo Banner with Zoom */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2d35] via-transparent to-transparent opacity-90" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel border border-white/20 text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                  <Award className="h-3 w-3 text-sky-300" />
                  <span>{trainer.experience}</span>
                </div>
              </div>

              {/* Card Footer Overlay Details */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between -mt-6 relative z-10 bg-[#1f2d35]">
                <div>
                  <h3 className="text-xl font-bold font-display text-white uppercase group-hover:text-sky-300 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                    {trainer.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-sky-400" /> {trainer.specialty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
