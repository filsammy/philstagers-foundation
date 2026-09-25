'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const hasMatch = !!match;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!hasMatch || !isInView || shouldReduceMotion) return;

    const controls = animate(0, target, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [hasMatch, isInView, shouldReduceMotion, target]);

  if (!hasMatch) return <span ref={ref}>{value}</span>;

  const shown = shouldReduceMotion ? (isInView ? target : 0) : display;
  return <span ref={ref}>{shown}{suffix}</span>;
}
