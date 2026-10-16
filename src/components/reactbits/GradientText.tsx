'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

/**
 * GradientText — estilo ReactBits: texto con degradado animado en movimiento.
 */
export default function GradientText({
  children,
  className = '',
  colors = ['#0099ff', '#01101d', '#f5a08c', '#0099ff'],
  animationSpeed = 6,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      {showBorder && (
        <motion.span
          className="absolute inset-0 rounded-2xl"
          style={gradientStyle}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: animationSpeed, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <motion.span
        className="gradient-text-fill relative"
        style={gradientStyle}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: animationSpeed, repeat: Infinity, ease: 'linear' }}
      >
        {children}
      </motion.span>
    </span>
  );
}
