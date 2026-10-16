'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DockItem {
  icon: ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
  className?: string;
  panelClassName?: string;
  baseItemSize?: number;
  magnification?: number;
}

/**
 * Dock — estilo ReactBits: barra de acceso rápida con efecto de
 * magnificación tipo macOS.
 */
export default function Dock({
  items,
  className = '',
  panelClassName = '',
  baseItemSize = 52,
  magnification = 76,
}: DockProps) {
  const mouseX = useRef<number>(Infinity);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={`flex items-end justify-center ${className}`}
      onMouseMove={(e) => {
        mouseX.current = e.clientX;
      }}
      onMouseLeave={() => {
        mouseX.current = Infinity;
        setHovered(null);
      }}
    >
      <div
        className={`flex items-end gap-3 rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl ${panelClassName}`}
      >
        {items.map((item, i) => (
          <DockIcon
            key={i}
            item={item}
            mouseX={mouseX}
            baseItemSize={baseItemSize}
            magnification={magnification}
            hovered={hovered === i}
            onHover={() => setHovered(i)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </div>
  );
}

function DockIcon({
  item,
  mouseX,
  baseItemSize,
  magnification,
  hovered,
  onHover,
  onLeave,
}: {
  item: DockItem;
  mouseX: React.RefObject<number>;
  baseItemSize: number;
  magnification: number;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const onMove = () => {
    if (!ref.current || mouseX.current === Infinity) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    setDistance(Math.abs(mouseX.current - centerX));
  };

  const size =
    distance === null
      ? baseItemSize
      : Math.max(baseItemSize, magnification - Math.min(distance / 90, 1) * (magnification - baseItemSize));

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
      onClick={item.onClick}
      onMouseEnter={() => {
        onHover();
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ width: size, height: size }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] text-white"
      aria-label={item.label}
      title={item.label}
    >
      <span className="flex h-[55%] w-[55%] items-center justify-center [&>svg]:h-full [&>svg]:w-full">
        {item.icon}
      </span>
      {hovered && (
        <span className="pointer-events-none absolute -top-10 whitespace-nowrap rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-[#01101D] shadow-lg">
          {item.label}
        </span>
      )}
    </motion.a>
  );
}
