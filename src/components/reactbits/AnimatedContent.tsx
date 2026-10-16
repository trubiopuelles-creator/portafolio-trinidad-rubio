'use client';

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'horizontal' | 'vertical' | 'rotated' | 'scale';
  reverse?: boolean;
  duration?: number;
  ease?: number[];
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

interface MotionState {
  opacity: number;
  y?: number;
  x?: number;
  rotate?: number;
  scale?: number;
}

/**
 * AnimatedContent — estilo ReactBits: revela el contenido al hacer scroll
 * con desplazamiento y opacidad suaves.
 * Usa propiedades estructuradas de motion (x/y/rotate/scale) para que
 * framer-motion interpole siempre de forma fiable.
 */
export default function AnimatedContent({
  children,
  distance = 60,
  direction = 'vertical',
  reverse = false,
  duration = 0.9,
  ease = [0.22, 1, 0.36, 1],
  delay = 0,
  className = '',
  style,
}: AnimatedContentProps) {
  const initial: MotionState = { opacity: 0 };
  const visible: MotionState = { opacity: 1 };

  switch (direction) {
    case 'rotated':
      initial.rotate = reverse ? -6 : 6;
      initial.scale = 0.96;
      break;
    case 'horizontal':
      initial.x = reverse ? -distance : distance;
      break;
    case 'scale':
      initial.scale = 0.92;
      break;
    default:
      initial.y = reverse ? -distance : distance;
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
