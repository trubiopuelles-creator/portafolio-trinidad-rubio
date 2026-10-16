'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  from?: { opacity?: number; y?: number; rotateX?: number };
  to?: { opacity?: number; y?: number; rotateX?: number };
  textAlign?: 'left' | 'center' | 'right';
}

/**
 * SplitText — estilo ReactBits: título dividido en caracteres que entran
 * uno a uno con desplazamiento vertical y ligera rotación 3D.
 * Los caracteres se agrupan por palabras (contenedores con white-space
 * nowrap) para que el navegador nunca parta una palabra a mitad.
 */
export default function SplitText({
  text,
  className = '',
  delay = 60,
  duration = 0.6,
  splitType = 'chars',
  from = { opacity: 0, y: 40, rotateX: -60 },
  to = { opacity: 1, y: 0, rotateX: 0 },
  textAlign = 'left',
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: delay / 1000 } },
  };

  const child: Variants = {
    hidden: from,
    visible: {
      ...(to as Record<string, number>),
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const words =
    splitType === 'chars'
      ? text.split(' ').map((w) => Array.from(w))
      : null;

  const align = textAlign === 'center' ? 'center' : textAlign === 'right' ? 'right' : 'left';

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      aria-label={text}
      className={`inline-block ${className}`}
      style={{ perspective: 600, textAlign: align }}
    >
      {splitType === 'chars' && words
        ? words.map((chars, wi) => (
            <span
              key={wi}
              className="inline-block whitespace-nowrap"
              aria-hidden="true"
            >
              {chars.map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={child}
                  className="inline-block will-change-transform"
                >
                  {ch}
                </motion.span>
              ))}
              {wi < words.length - 1 ? '\u00A0' : null}
            </span>
          ))
        : text.split(' ').map((word, wi) => (
            <motion.span
              key={wi}
              variants={child}
              className="inline-block whitespace-nowrap will-change-transform"
              aria-hidden="true"
            >
              {word}
              {wi < text.split(' ').length - 1 ? '\u00A0' : null}
            </motion.span>
          ))}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
}
