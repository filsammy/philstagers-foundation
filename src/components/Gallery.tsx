'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { MediaItem } from '../data/media';

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const active = items[activeIndex];

  function goTo(i: number) {
    setActiveIndex((i + items.length) % items.length);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setZoomOpen(false);
      if (e.key === 'ArrowRight') goTo(activeIndex + 1);
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
    }

    if (zoomOpen) document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, zoomOpen, items.length]);

  return (
    <>
      <div className="gallery-viewer">
        <div
          className="gallery-main"
          role={active.type === 'image' ? 'button' : undefined}
          tabIndex={active.type === 'image' ? 0 : undefined}
          onClick={() => active.type === 'image' && setZoomOpen(true)}
          onKeyDown={(e) => {
            if (active.type === 'image' && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setZoomOpen(true);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.src}
              className="gallery-main-media"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            >
              {active.type === 'image' ? (
                <>
                  <Image
                    src={active.src}
                    alt={active.caption ?? ''}
                    width={active.width}
                    height={active.height}
                    sizes="(max-width: 760px) 100vw, 900px"
                    priority
                  />
                  <span className="gallery-zoom-hint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M9 3H4v5M15 3h5v5M9 21H4v-5M15 21h5v-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </>
              ) : (
                <video src={active.src} poster={active.poster} controls />
              )}
            </motion.div>
          </AnimatePresence>
          {active.caption && <p className="gallery-main-caption">{active.caption}</p>}

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-main-nav gallery-main-prev"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(activeIndex - 1);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-main-nav gallery-main-next"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(activeIndex + 1);
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        {items.length > 1 && (
          <div className="gallery-strip" role="list">
            {items.map((item, i) => (
              <button
                type="button"
                role="listitem"
                key={item.src}
                className={`gallery-thumb${i === activeIndex ? ' active' : ''}`}
                aria-label={item.caption ?? `View item ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              >
                {item.type === 'image' ? (
                  <Image src={item.src} alt="" width={160} height={100} sizes="160px" />
                ) : item.poster ? (
                  <Image src={item.poster} alt="" width={160} height={100} sizes="160px" />
                ) : (
                  <span className="gallery-thumb-video">▶</span>
                )}
                {item.type === 'video' && <span className="gallery-thumb-badge">▶</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {zoomOpen && active.type === 'image' && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption ?? 'Gallery image'}
            onClick={() => setZoomOpen(false)}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setZoomOpen(false)}>
              ✕
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goTo(activeIndex - 1);
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
                goTo(activeIndex + 1);
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
