'use client';

import Image from 'next/image';
import { Instagram, MessageSquare, Youtube, Facebook, ArrowUp } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121b20] border-t border-white/10 pt-20 pb-12 text-slate-300 font-sans relative overflow-hidden">
      
      {/* Top Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <div className="relative h-13 w-13 rounded-full overflow-hidden border-2 border-amber-400/90 group-hover:border-amber-300 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.45)] shrink-0 bg-slate-950">
                <Image
                  src={GYM_CONFIG.logo}
                  alt={GYM_CONFIG.name}
                  fill
                  className="object-cover scale-105"
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-bold text-sm tracking-wider text-white uppercase font-sans">
                  LEGENDS FITNESS
                </span>
                <span className="font-bold text-sm tracking-wider text-white uppercase font-sans mt-0.5">
                  CENTRE
                </span>
                <span className="text-[10px] tracking-[0.22em] font-mono text-amber-400 font-bold uppercase mt-1">
                  {GYM_CONFIG.subName}
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {GYM_CONFIG.shortDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-emerald-400 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href={GYM_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={GYM_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-sky-400 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">NAVIGATION</h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Facilities', '3D Equipment', 'Trainers', 'Membership', 'Gallery', 'Location'].map((item) => {
                const id = item.toLowerCase().replace(' ', '');
                return (
                  <li key={item}>
                    <a href={`#${id === '3dequipment' ? 'equipment' : id}`} className="hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white">ARENA DETAILS</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p><strong className="text-white font-semibold">Address:</strong> {GYM_CONFIG.address}</p>
              <p><strong className="text-white font-semibold">Phone:</strong> {GYM_CONFIG.phone}</p>
              <p><strong className="text-white font-semibold">Hours:</strong> {GYM_CONFIG.openingHours}</p>
              <p><strong className="text-white font-semibold">Monthly Membership:</strong> {GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership} / month</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 {GYM_CONFIG.name}. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-slate-300 hover:text-white hover:border-sky-400 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
