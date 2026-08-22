'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Flame, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TOTAL_NEW_FRAMES = 300;
const NEW_FRAME_DIR = '/new images';

function getNewFrameUrl(index: number) {
  const paddedIndex = String(index).padStart(3, '0');
  return `${NEW_FRAME_DIR}/ezgif-frame-${paddedIndex}.png`;
}

export default function Equipment3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObj = useRef({ currentFrame: 1 });

  const highlights = [
    { title: "STRENGTH", subtitle: "High-density cast iron & competition steel", icon: <Shield className="h-5 w-5 text-sky-400" /> },
    { title: "PRECISION", subtitle: "Calibrated weight tolerance within +/- 10g", icon: <Cpu className="h-5 w-5 text-sky-400" /> },
    { title: "PERFORMANCE", subtitle: "Ergonomic grip contours for explosive lifts", icon: <Flame className="h-5 w-5 text-sky-400" /> },
  ];

  // Preload sequence frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_NEW_FRAMES; i++) {
      const img = new Image();
      img.src = getNewFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_NEW_FRAMES) * 100));
        if (loadedCount === TOTAL_NEW_FRAMES) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_NEW_FRAMES) * 100));
        if (loadedCount === TOTAL_NEW_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Render canvas frame with aspect cover math & DPR scaling
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = width / height;

    let drawW = width;
    let drawH = height;
    let offsetX = 0;
    let offsetY = 0;

    if (containerRatio > imgRatio) {
      drawH = width / imgRatio;
      offsetY = (height - drawH) / 2;
    } else {
      drawW = height * imgRatio;
      offsetX = (width - drawW) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  };

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrame(Math.round(frameObj.current.currentFrame));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial draw
  useEffect(() => {
    if (imagesRef.current[0]) {
      renderFrame(1);
    }
  }, [loadProgress]);

  // GSAP ScrollTrigger timeline for scroll animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? '150%' : '250%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top+=60',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: () => {
            renderFrame(Math.round(frameObj.current.currentFrame));
          },
        },
      });

      // Scroll-driven frame progress (1 -> 300)
      tl.to(frameObj.current, {
        currentFrame: TOTAL_NEW_FRAMES,
        ease: 'none',
        duration: 10,
      }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="equipment"
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-[#18242a] border-t border-white/10 overflow-hidden font-sans select-none"
    >
      {/* Ambient Spotlight Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold px-4 py-1.5 rounded-full glass-card border border-sky-400/30 shadow-glow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>SCROLL-DRIVEN HARDWARE SHOWCASE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
            BIOMECHANICAL <span className="text-gradient-red">EXCELLENCE</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto">
            Every bar, weight plate, and kettlebell is engineered for maximum overload and zero energy loss.
          </p>
        </div>

        {/* Scroll-Driven Canvas Video Showcase & Telemetry Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Callouts */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            {highlights.slice(0, 2).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-5 rounded-3xl glass-card border border-white/12 glass-card-hover space-y-2 group bg-[#1f2d35]/90"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:bg-sky-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-sans text-white uppercase group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center HTML Canvas Video Sequence Display (Replaces 3D Kettlebell) */}
          <div className="lg:col-span-6 h-[400px] sm:h-[500px] relative order-1 lg:order-2">
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border-2 border-sky-400/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] group bg-black/60">
              
              {/* Canvas Render Layer */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18242a] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Bottom Telemetry Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel border border-white/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-ping" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-200 font-semibold">
                    CINEMATIC HARDWARE TELEMETRY
                  </span>
                </div>
                <span className="text-[11px] font-mono uppercase text-sky-400 font-bold hidden sm:inline">
                  SCROLL TO ANIMATE
                </span>
              </div>

              {/* Loading Indicator */}
              {!imagesLoaded && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full glass-panel border border-white/10 text-[10px] font-mono text-sky-300 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
                  <span>LOADING {loadProgress}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column Callout */}
          <div className="lg:col-span-3 space-y-6 order-3">
            {highlights.slice(2, 3).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-5 rounded-3xl glass-card border border-white/12 glass-card-hover space-y-2 group bg-[#1f2d35]/90"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:bg-sky-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-sans text-white uppercase group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}

            {/* Spec Badge Pill */}
            <div className="p-5 rounded-3xl glass-panel border border-sky-400/30 text-center space-y-1 bg-[#1f2d35]/80">
              <span className="text-[10px] uppercase tracking-widest text-slate-300 font-mono flex items-center justify-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-sky-400" /> HARDWARE TOLERANCE
              </span>
              <p className="text-base font-bold text-sky-300 font-sans uppercase">
                CALIBRATED FOR CHAMPIONS
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
