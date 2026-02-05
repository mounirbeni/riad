'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

type GalleryGridProps = {
  images: string[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="group relative w-full overflow-hidden rounded-3xl"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image}
              alt="Riad Antara gallery image"
              width={800}
              height={1000}
              className="w-full transition duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
          >
            <div className="relative max-w-4xl">
              <Image
                src={images[activeIndex]}
                alt="Riad Antara gallery enlarged"
                width={1200}
                height={900}
                className="rounded-3xl"
              />
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className={clsx(
                  'absolute -right-3 -top-3 rounded-full bg-warmwhite px-3 py-2 text-xs uppercase tracking-[0.25em] text-charcoal',
                  'shadow-soft'
                )}
                aria-label="Close gallery"
              >
                Close
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
