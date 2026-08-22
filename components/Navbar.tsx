'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, MessageSquare } from 'lucide-react';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: '3D Equipment', href: '#equipment' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
          isScrolled
            ? 'bg-[#142027]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Gym Brand Logo & Typography (Exact Match to Reference Screenshot) */}
          <a href="#hero" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative h-13 w-13 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-amber-400/90 group-hover:border-amber-300 group-hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.45)] shrink-0 bg-slate-950">
              <Image
                src={GYM_CONFIG.logo}
                alt={GYM_CONFIG.name}
                fill
                priority
                className="object-cover scale-105"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="font-bold text-xs sm:text-sm tracking-wider text-white uppercase font-sans">
                LEGENDS FITNESS
              </span>
              <span className="font-bold text-xs sm:text-sm tracking-wider text-white uppercase font-sans mt-0.5">
                CENTRE
              </span>
              <span className="text-[10px] tracking-[0.22em] font-mono text-amber-400 font-bold uppercase mt-1">
                {GYM_CONFIG.subName}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links Glass Capsule Pill Bar (Exact Match to Screenshot) */}
          <nav className="hidden xl:flex items-center space-x-1 glass-pill border border-white/20 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 shadow-2xl">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full ${
                    isActive
                      ? 'bg-[#29424f] text-white border border-sky-400/60 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Button (Exact Match to Cyan Pill in Screenshot) */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#38bdf8] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-full hover:bg-sky-300 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:scale-105"
            >
              <MessageSquare className="h-4 w-4 fill-slate-950 stroke-slate-950" />
              <span>JOIN NOW</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2.5 rounded-full glass-card text-white hover:border-sky-400 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        activeSection={activeSection}
      />
    </>
  );
}
