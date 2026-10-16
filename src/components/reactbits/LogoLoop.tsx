'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';

interface LogoLoopItem {
  label: string;
  icon?: ReactNode;
}

interface LogoLoopProps {
  items: LogoLoopItem[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

/**
 * LogoLoop — estilo ReactBits: cinta infinita de marcas/etiquetas.
 * Hidratación segura: las copias se renderizan tras el montaje.
 */
export default function LogoLoop({
  items,
  speed = 32,
  direction = 'left',
  className = '',
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [duration, setDuration] = useState(speed);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setCopied(true);
      const node = trackRef.current;
      if (node) {
        const half = node.scrollWidth / 2;
        if (half > 0) {
          setDuration(Math.max(14, half / 34));
        }
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [items]);

  const rendered = copied ? [...items, ...items] : items;

  return (
    <div className={`logo-loop relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFF3F0] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFF3F0] to-transparent" />
      <div
        ref={trackRef}
        className="flex w-max items-center gap-4"
        style={{
          animation: copied
            ? `logo-loop-scroll ${duration}s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`
            : undefined,
        }}
      >
        {rendered.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[#01101D]/10 bg-white px-6 py-3 text-sm font-medium text-[#01101D]/80 shadow-[0_1px_0_rgba(1,16,29,0.04)]"
          >
            {item.icon}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
