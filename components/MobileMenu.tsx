'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-[#09090b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pt-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-amber-400/90 shadow-[0_0_12px_rgba(245,158,11,0.4)] bg-slate-950 shrink-0">
                <Image
                  src={GYM_CONFIG.logo}
                  alt={GYM_CONFIG.name}
                  fill
                  unoptimized
                  className="object-cover scale-105"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-bold text-xs tracking-wider text-white uppercase font-sans">
                  LEGENDS FITNESS
                </span>
                <span className="font-bold text-xs tracking-wider text-white uppercase font-sans mt-0.5">
                  CENTRE
                </span>
                <span className="text-[9px] tracking-[0.2em] font-mono text-amber-400 font-bold uppercase mt-0.5">
                  {GYM_CONFIG.subName}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-accent hover:border-brand-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 my-8">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className={`text-2xl font-display font-extrabold tracking-wide uppercase transition-all flex items-center justify-between ${
                    isActive ? 'text-brand-accent pl-2 border-l-4 border-brand-accent' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`h-5 w-5 ${isActive ? 'opacity-100 text-brand-accent' : 'opacity-40'}`} />
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Actions & Membership CTA */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-xl glass-card flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 font-mono uppercase">Monthly Membership</p>
                <p className="text-xl font-bold text-white">
                  {GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership} <span className="text-xs text-zinc-400 font-normal">/ month</span>
                </p>
              </div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="px-4 py-2.5 bg-brand-accent text-white font-bold text-sm rounded-lg hover:bg-brand-accentHover flex items-center gap-1.5 shadow-glow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                JOIN NOW
              </a>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-brand-accent" /> {GYM_CONFIG.phone}
              </span>
              <span>{GYM_CONFIG.stats.members} MEMBERS</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
