'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  onAnimationComplete?: () => void;
}

/**
 * BlurText — estilo ReactBits: las palabras aparecen con un desenfoque
 * que se disipa palabra a palabra al entrar en el viewport.
 */
export default function BlurText({
  text = '',
  delay = 220,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  onAnimationComplete,
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const called = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: direction === 'top' ? -18 : 18,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        delay: i * (delay / 1000),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  useEffect(() => {
    if (inView && !called.current && onAnimationComplete) {
      called.current = true;
      const total = elements.length * (delay / 1000) * 1000 + 500;
      const t = setTimeout(() => onAnimationComplete(), total);
      return () => clearTimeout(t);
    }
  }, [inView, elements.length, delay, onAnimationComplete]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-transform"
          custom={i}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          aria-hidden="true"
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : null}
        </motion.span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}
