'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn, Camera } from 'lucide-react';
import { GYM_CONFIG, GalleryItem } from '@/lib/config';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="relative py-28 bg-[#152026] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-sky-400 font-semibold">
              <Camera className="h-4 w-4" />
              <span>VISUAL IDENTITY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium sm:font-semibold text-white uppercase tracking-tight font-sans">
              BUILT, <span className="text-gradient-red">NOT GIVEN.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md font-light">
            An editorial look into our iron floor, power platforms, heavy weight stacks, and atmospheric lighting.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[300px]">
          {GYM_CONFIG.gallery.map((item: GalleryItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className={`${item.span} group relative rounded-3xl overflow-hidden glass-card border border-white/12 cursor-pointer shadow-xl`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152026] via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full glass-panel border border-white/20 text-[10px] font-mono text-slate-200 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <div className="h-10 w-10 rounded-full bg-sky-400/20 border border-sky-400 text-sky-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-[#121b20]/95 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-sky-400 hover:text-slate-900 transition-colors"
              aria-label="Close Preview"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[65vh] sm:h-[75vh] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                unoptimized={selectedImage.image.startsWith('/images/')}
                className="object-contain bg-[#152026]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#121b20] via-[#121b20]/85 to-transparent">
                <span className="text-[11px] sm:text-xs font-mono uppercase text-sky-400 font-semibold tracking-widest">
                  {selectedImage.category}
                </span>
                <h4 className="text-lg sm:text-2xl font-bold font-sans text-white uppercase mt-0.5">
                  {selectedImage.title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
