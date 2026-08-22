'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GYM_CONFIG } from '@/lib/config';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#121b20] px-6 py-12 select-none font-sans"
        >
          {/* Top subtle badge */}
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-mono">
            {GYM_CONFIG.subName} — Cinematic Fitness Experience
          </div>

          {/* Center Brand Title & Progress */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-lg">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-amber-400/90 shadow-[0_0_35px_rgba(245,158,11,0.5)] bg-slate-950">
                <Image
                  src={GYM_CONFIG.logo}
                  alt={GYM_CONFIG.name}
                  fill
                  priority
                  unoptimized
                  className="object-cover scale-105"
                />
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-white font-sans uppercase">
                  LEGENDS FITNESS CENTRE
                </h1>
                <p className="text-xs sm:text-sm text-amber-400 tracking-[0.25em] font-mono font-bold uppercase">
                  {GYM_CONFIG.subName}
                </p>
              </div>
            </motion.div>

            {/* Glowing progress bar */}
            <div className="w-64 sm:w-80 h-1 bg-slate-800 rounded-full overflow-hidden relative border border-white/10">
              <motion.div
                className="h-full bg-sky-400 shadow-[0_0_15px_#38bdf8]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Bottom Percentage */}
          <div className="flex items-center justify-between w-full max-w-5xl text-xs text-slate-400 font-mono tracking-wider">
            <span>LOADING ASSETS</span>
            <span className="text-sky-400 font-semibold text-sm">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
