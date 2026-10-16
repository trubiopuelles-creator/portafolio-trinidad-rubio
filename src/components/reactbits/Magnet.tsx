'use client';

import { useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  className?: string;
}

/**
 * Magnet — estilo ReactBits: el contenido se imanta al cursor cuando
 * se acerca al elemento.
 */
export default function Magnet({
  children,
  padding = 80,
  disabled = false,
  magnetStrength = 3,
  className = '',
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetRef.current || disabled) return;
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distX = Math.abs(centerX - e.clientX);
    const distY = Math.abs(centerY - e.clientY);

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setIsActive(true);
      setPosition({
        x: (e.clientX - centerX) / magnetStrength,
        y: (e.clientY - centerY) / magnetStrength,
      });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={magnetRef}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: `transform ${isActive ? 0.12 : 0.35}s cubic-bezier(0.22, 1, 0.36, 1)`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
