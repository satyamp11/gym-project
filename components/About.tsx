'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2, Dumbbell } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GYM_CONFIG } from '@/lib/config';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15, y: 50 },
        {
          scale: 1,
          y: -30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-[#18242a] border-t border-white/10 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading & Concise Copy */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
              <Dumbbell className="h-4 w-4 text-sky-300" />
              <span>THE PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold tracking-tight text-white uppercase leading-[1.05] font-sans">
              MORE THAN <br />
              <span className="text-gradient-red">A GYM.</span>
            </h2>
          </div>

          <p className="text-lg text-slate-300 font-light leading-relaxed">
            {GYM_CONFIG.name} is a high-performance unisex arena engineered for individuals who reject mediocrity. We combine biometrically optimized machinery, precision weight plates, and custom athletic conditioning to forge physical excellence.
          </p>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              "Biomechanical Precision Hardware",
              "Elite High-Performance Atmosphere",
              "Dedicated 1-on-1 Transformation",
              "Uncompromising Discipline & Culture",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl glass-card border border-white/10 hover:border-sky-400/40 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Parallax Gym Imagery */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/14 glass-card shadow-2xl group">
            
            {/* Parallax Container */}
            <div ref={imageRef} className="relative h-[450px] sm:h-[550px] w-full">
              <Image
                src="/images/trainer-discipline.jpg"
                alt="Discipline is the bridge between goals and achievements"
                fill
                priority
                unoptimized
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141f24] via-transparent to-transparent opacity-80" />
            </div>

            {/* Float Card Badge with Inspirational Quote */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-panel border border-white/20 flex flex-col gap-1.5 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 font-semibold">
                  FOUNDATIONAL MINDSET
                </span>
              </div>
              <p className="text-sm font-medium text-white italic font-sans">
                &ldquo;Discipline is the bridge between goals and achievements.&rdquo;
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
