import { Variants } from 'framer-motion';

// Framer Motion Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade Up Variant
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

// Fade In Scale
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Reveal text variants
export const textReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
