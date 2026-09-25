'use client';

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [enabled, setEnabled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(252, 209, 22, 0.16), transparent 70%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabled = () => setEnabled(query.matches);
    updateEnabled();
    query.addEventListener('change', updateEnabled);
    return () => query.removeEventListener('change', updateEnabled);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enabled) return;
    const container = ref.current?.parentElement;
    if (!container) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    }

    container.addEventListener('pointermove', handlePointerMove);
    return () => container.removeEventListener('pointermove', handlePointerMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return <motion.div ref={ref} aria-hidden="true" className="hero-spotlight" style={{ background }} />;
}
