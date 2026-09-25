'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { MediaItem } from '../data/media';

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const active = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex, items.length]);

  return (
    <>
      <div className="gallery-masonry">
        {items.map((item, i) => (
          <figure
            className="gallery-item"
            key={item.src}
            role={item.type === 'image' ? 'button' : undefined}
            tabIndex={item.type === 'image' ? 0 : undefined}
            onClick={() => item.type === 'image' && setActiveIndex(i)}
            onKeyDown={(e) => {
              if (item.type === 'image' && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                setActiveIndex(i);
              }
            }}
          >
            {item.type === 'image' ? (
              <>
                <Image
                  src={item.src}
                  alt={item.caption ?? ''}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="gallery-zoom-hint" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9 3H4v5M15 3h5v5M9 21H4v-5M15 21h5v-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </>
            ) : (
              <video src={item.src} poster={item.poster} controls />
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && active.type === 'image' && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption ?? 'Gallery image'}
            onClick={() => setActiveIndex(null)}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setActiveIndex(null)}>
              ✕
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
              }}
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i + 1) % items.length));
              }}
            >
              ›
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.src}
                className="lightbox-img-wrap"
                onClick={(e) => e.stopPropagation()}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
              >
                <Image
                  src={active.src}
                  alt={active.caption ?? ''}
                  width={active.width}
                  height={active.height}
                  sizes="90vw"
                  className="lightbox-img"
                  priority
                />
                {active.caption && <div className="lightbox-caption">{active.caption}</div>}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
