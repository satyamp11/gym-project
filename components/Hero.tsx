'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageSquare, Dumbbell, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GYM_CONFIG, getWhatsAppLink } from '@/lib/config';

const TOTAL_FRAMES = 300;
const FRAME_DIR = '/images/ezgif-1a914aa9fc584766-png-split';

function getFrameUrl(index: number) {
  const paddedIndex = String(index).padStart(3, '0');
  return `${FRAME_DIR}/ezgif-frame-${paddedIndex}.png`;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameObj = useRef({ currentFrame: 1 });

  // Preload frames for smooth canvas rendering
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      // In case of error fallback
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Draw current frame to canvas with aspect cover & DPR scaling
  const renderCanvasFrame = (frameIndex: number) => {
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

    // Aspect ratio cover math
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

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      renderCanvasFrame(Math.round(frameObj.current.currentFrame));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial draw once first images load
  useEffect(() => {
    if (imagesRef.current[0]) {
      renderCanvasFrame(1);
    }
  }, [loadProgress]);

  // GSAP ScrollTrigger timeline for scroll-driven sequence
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? '250%' : '400%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: () => {
            renderCanvasFrame(Math.round(frameObj.current.currentFrame));
          },
        },
      });

      // 1. Scroll-driven Image Sequence Progress (1 -> 300)
      tl.to(frameObj.current, {
        currentFrame: TOTAL_FRAMES,
        ease: 'none',
        duration: 10,
      }, 0);

      // 2. Subtle Zoom & Camera Scale on Canvas
      if (canvasRef.current) {
        tl.fromTo(
          canvasRef.current,
          { scale: 1 },
          { scale: 1.08, ease: 'power1.out', duration: 10 },
          0
        );
      }

      // 3. Smooth Text Reveal & Fade Out
      if (textContentRef.current) {
        // Initial hero text holding
        tl.to(textContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 2,
        }, 0);

        // Text fade out as scroll deepens into sequence
        tl.to(textContentRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.95,
          ease: 'power2.in',
          duration: 3,
        }, 4);
      }

      // 4. Subtle Dark Overlay Intensity Increase near sequence end for smooth section transition
      if (overlayRef.current) {
        tl.to(overlayRef.current, {
          opacity: 0.85,
          ease: 'power2.inOut',
          duration: 2,
        }, 8);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#121b20] text-white select-none font-sans"
    >
      {/* Scroll-driven HTML Canvas Video Render Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Cinematic Vignette & Gradient Overlays */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-t from-[#18242a] via-[#121b20]/50 to-black/60 pointer-events-none transition-opacity duration-300 opacity-60"
      />
      <div className="absolute inset-0 z-10 bg-radial-vignette pointer-events-none" />

      {/* Subtle Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 blur-[160px] rounded-full pointer-events-none z-10" />

      {/* Content Container (Pinned 100vh Layout) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div ref={textContentRef} className="space-y-6 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Brand Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-white/20 text-xs font-mono text-sky-300 uppercase tracking-[0.25em] font-semibold"
          >
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span>{GYM_CONFIG.name} — {GYM_CONFIG.subName}</span>
          </motion.div>

          {/* Main Large Hero Title (Inter 500-600) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-white uppercase leading-[1.02] font-sans drop-shadow-2xl"
          >
            FORGE YOUR <br />
            <span className="text-gradient-red font-semibold">STRONGEST SELF.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 font-normal max-w-2xl leading-relaxed font-sans drop-shadow"
          >
            Train harder. Move better. Become stronger.
          </motion.p>

          {/* Direct CTA Action Buttons (Inter 500-600) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-sky-400 text-slate-950 font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:bg-sky-300 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group font-sans"
            >
              <MessageSquare className="h-4.5 w-4.5 fill-slate-950 stroke-slate-950" />
              <span>JOIN NOW</span>
            </a>

            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-medium text-sm uppercase tracking-wider hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 flex items-center justify-center gap-2 font-sans"
            >
              <Dumbbell className="h-4.5 w-4.5 text-sky-400" />
              <span>EXPLORE THE GYM</span>
            </a>
          </motion.div>

          {/* Price & Guarantee Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs font-mono text-slate-300 flex items-center justify-center gap-1.5 pt-2"
          >
            <ShieldCheck className="h-4 w-4 text-sky-400" />
            Monthly Membership at {GYM_CONFIG.currencySymbol}{GYM_CONFIG.monthlyMembership} / month — No Lock-in Contract
          </motion.p>

        </div>
      </div>

      {/* Preloader indicator if assets are still loading */}
      {!imagesLoaded && (
        <div className="absolute bottom-16 right-8 z-30 flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono text-slate-300">
          <div className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          <span>PRELOADING FRAMES {loadProgress}%</span>
        </div>
      )}

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400">
          SCROLL TO UNLOCK EXPERIENCE
        </span>
        <ChevronDown className="h-4 w-4 text-sky-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
