'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Compass } from 'lucide-react';
import { GYM_CONFIG } from '@/lib/config';

export default function Location() {
  return (
    <section id="location" className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
              <Compass className="h-4 w-4" />
              <span>THE ARENA LOCATION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
              VISIT <span className="text-gradient-red">US</span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light">
            Conveniently situated with dedicated parking, state-of-the-art facilities, and long training hours.
          </p>
        </div>

        {/* Content Layout: Left Info Cards, Right Map iframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl glass-card border border-white/12 space-y-3 bg-[#1f2d35]"
              >
                <div className="flex items-center gap-3 text-sky-400">
                  <MapPin className="h-5 w-5" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">LOCATION ADDRESS</h3>
                </div>
                <p className="text-sm text-slate-200 font-light leading-relaxed">
                  {GYM_CONFIG.address}
                </p>
              </motion.div>

              {/* Operating Hours Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-3xl glass-card border border-white/12 space-y-3 bg-[#1f2d35]"
              >
                <div className="flex items-center gap-3 text-sky-400">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">OPENING HOURS</h3>
                </div>
                <p className="text-sm text-slate-200 font-light leading-relaxed">
                  {GYM_CONFIG.openingHours}
                </p>
              </motion.div>

              {/* Phone Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-3xl glass-card border border-white/12 space-y-3 bg-[#1f2d35]"
              >
                <div className="flex items-center gap-3 text-sky-400">
                  <Phone className="h-5 w-5" />
                  <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-white">DIRECT LINE</h3>
                </div>
                <p className="text-sm text-slate-200 font-light">
                  {GYM_CONFIG.phone}
                </p>
              </motion.div>
            </div>

            {/* Get Directions Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={GYM_CONFIG.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4.5 bg-sky-400 text-slate-950 font-medium sm:font-semibold text-sm uppercase tracking-wider rounded-full shadow-glow-md hover:bg-sky-300 transition-all duration-300 flex items-center justify-center gap-3 group font-sans"
              >
                <Navigation className="h-4 w-4 transform group-hover:rotate-45 transition-transform" />
                GET DIRECTIONS ON GOOGLE MAPS
              </a>
            </motion.div>
          </div>

          {/* Right Map iframe */}
          <div className="lg:col-span-7 min-h-[400px] rounded-3xl overflow-hidden glass-card border border-white/12 shadow-2xl relative">
            <iframe
              src={GYM_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1) invert(0.85)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${GYM_CONFIG.name} Google Map Location`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
