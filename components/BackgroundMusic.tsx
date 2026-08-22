'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

const GYM_AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=workout-motivation-113334.mp3';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(GYM_AUDIO_URL);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play blocked:', err);
        });
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 font-sans select-none">
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="px-2.5 py-1.5 rounded-full border border-white/16 glass-pill backdrop-blur-xl shadow-xl flex items-center gap-2.5 bg-[#121b20]/85 hover:border-sky-400/50 transition-all duration-300 group"
      >
        {/* Compact Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause Gym Beats' : 'Play Gym Beats'}
          className={`h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
            isPlaying
              ? 'bg-sky-400 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.6)] scale-105'
              : 'bg-white/10 text-white hover:bg-sky-400 hover:text-slate-950'
          }`}
        >
          {isPlaying ? (
            <Pause className="h-3 w-3 fill-current" />
          ) : (
            <Play className="h-3 w-3 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Music Track Info & Equalizer */}
        <div className="flex items-center gap-2 pr-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
            <Music className="h-3 w-3 text-sky-400 shrink-0" />
            <span className="hidden sm:inline">MOTIVATION BEATS</span>
          </span>

          {/* Compact Audio Equalizer Visualizer Bars */}
          <div className="flex items-end gap-0.5 h-2.5">
            {[0.4, 0.9, 0.5, 0.8].map((height, i) => (
              <motion.span
                key={i}
                animate={
                  isPlaying
                    ? {
                        height: ['20%', '100%', '30%', '80%', '20%'],
                      }
                    : { height: '20%' }
                }
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.15,
                }}
                className="w-0.5 bg-sky-400 rounded-full"
                style={{ height: `${height * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="p-1 rounded-full text-slate-400 hover:text-white transition-colors shrink-0"
        >
          {isMuted ? (
            <VolumeX className="h-3.5 w-3.5 text-rose-400" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 text-sky-400" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
