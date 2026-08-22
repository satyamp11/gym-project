'use client';

import { Dumbbell } from 'lucide-react';

interface WebGLFallbackProps {
  title?: string;
  subtitle?: string;
}

export default function WebGLFallback({ title = "3D PERFORMANCE VIEW", subtitle = "Interactive rendering active" }: WebGLFallbackProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#121218] to-[#08080a] border border-white/10 rounded-2xl p-8 overflow-hidden group">
      {/* Decorative Glow Spot */}
      <div className="absolute inset-0 bg-brand-accent/10 blur-3xl rounded-full transform group-hover:scale-125 transition-transform duration-700" />
      
      {/* Central Metallic Icon Graphic */}
      <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow-md flex flex-col items-center space-y-4">
        <div className="h-20 w-20 rounded-full bg-brand-accent/20 border border-brand-accent flex items-center justify-center text-brand-accent animate-pulse-slow">
          <Dumbbell className="h-10 w-10 stroke-[1.5]" />
        </div>
        <div className="text-center space-y-1">
          <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">{title}</h4>
          <p className="text-xs text-zinc-400 font-mono uppercase">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
