'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { GYM_CONFIG, TestimonialItem } from '@/lib/config';

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold px-3 py-1 rounded-full glass-card border border-sky-400/30">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>MEMBER REVIEWS & FEEDBACK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
            ATHLETE <span className="text-gradient-red">TESTIMONIALS</span>
          </h2>
          <p className="text-sm text-slate-300 font-light">
            Hear from members who train daily in our arena.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GYM_CONFIG.testimonials.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass-card border border-white/12 glass-card-hover flex flex-col justify-between relative group bg-[#1f2d35]"
            >
              <Quote className="h-10 w-10 text-white/10 absolute top-6 right-6 group-hover:text-sky-400/30 transition-colors" />

              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-200 italic leading-relaxed font-light">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Avatar & User Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-sky-400/50">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
