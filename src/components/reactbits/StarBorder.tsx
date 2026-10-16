'use client';

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface StarBorderProps {
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
  style?: CSSProperties;
  href?: string;
  onClick?: () => void;
}

/**
 * StarBorder — estilo ReactBits: borde con haz de luz giratorio
 * tipo estrella alrededor del botón.
 */
export default function StarBorder({
  className = '',
  color = '#0099ff',
  speed = '6s',
  thickness = 2,
  children,
  href,
  onClick,
  style,
}: StarBorderProps) {
  const content = (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${className}`}
      style={{ padding: `${thickness + 2}px`, ...style }}
    >
      <motion.div
        className="star-border-beam absolute inset-0 will-change-transform"
        style={{
          aspectRatio: '1',
          width: '180%',
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 70deg, ${color} 140deg, transparent 220deg, ${color} 300deg, transparent 360deg)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 flex w-full items-center justify-center rounded-full bg-[#01101D] px-7 py-3.5 text-white">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-block cursor-pointer">
      {content}
    </button>
  );
}
