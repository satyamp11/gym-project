'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

const GYM_AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=workout-motivation-113334.mp3';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [hasInteracted, setHasInteracted] = useState(false);
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
          setHasInteracted(true);
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
    <div className="fixed bottom-6 left-6 z-50 font-sans select-none">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="glass-card border border-white/20 p-2.5 sm:p-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex items-center gap-3 bg-[#18262e]/90"
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause Gym Beats' : 'Play Gym Beats'}
          className={`relative h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? 'bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.6)] scale-105'
              : 'bg-white/10 text-white hover:bg-sky-400 hover:text-slate-950'
          }`}
        >
          {isPlaying ? (
            <Pause className="h-4.5 w-4.5 fill-current" />
          ) : (
            <Play className="h-4.5 w-4.5 fill-current translate-x-0.5" />
          )}
        </button>

        {/* Music Track Info & Equalizer */}
        <div className="flex flex-col justify-center pr-1 hidden sm:flex">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-1.5">
              <Music className="h-3 w-3 text-sky-400" />
              <span>GYM MOTIVATION BEATS</span>
            </span>

            {/* Audio Equalizer Visualizer Bars */}
            <div className="flex items-end gap-0.5 h-3.5 pl-1">
              {[0.4, 0.8, 0.5, 0.9, 0.3].map((height, i) => (
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
                    duration: 0.8,
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

          <span className="text-[10px] text-slate-400 font-mono">
            {isPlaying ? 'Playing High-Energy Track' : 'Click to Play Audio'}
          </span>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="p-2 rounded-full text-slate-400 hover:text-white transition-colors"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-rose-400" />
          ) : (
            <Volume2 className="h-4 w-4 text-sky-400" />
          )}
        </button>
      </motion.div>
    </div>
  );
}
