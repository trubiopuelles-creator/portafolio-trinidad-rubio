'use client';

import { useRef, useState, type MouseEvent } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  containerClassName?: string;
  imageClassName?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
}

/**
 * TiltedCard — estilo ReactBits: tarjeta con inclinación 3D que sigue
 * el cursor y un brillo especular.
 */
export default function TiltedCard({
  imageSrc,
  altText = '',
  containerClassName = '',
  imageClassName = '',
  rotateAmplitude = 12,
  scaleOnHover = 1.04,
  showTooltip = false,
  overlayContent,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const springX = useSpring(0, { stiffness: 180, damping: 18 });
  const springY = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(springX, (v: number) => `${v}deg`);
  const rotateY = useTransform(springY, (v: number) => `${v}deg`);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setGlow({ x: x * 100, y: y * 100 });
    springX.set((y - 0.5) * -2 * rotateAmplitude);
    springY.set((x - 0.5) * 2 * rotateAmplitude);
  };

  return (
    <div
      ref={ref}
      className={`tilted-card relative [perspective:900px] ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setScale(scaleOnHover)}
      onMouseLeave={() => {
        setScale(1);
        springX.set(0);
        springY.set(0);
      }}
    >
      <motion.div
        className="relative h-full w-full will-change-transform"
        style={{ rotateX, rotateY, scale }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className={`h-full w-full object-cover ${imageClassName}`}
          draggable={false}
        />
        {overlayContent}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.28), transparent 55%)`,
          }}
        />
      </motion.div>
      {showTooltip && null}
    </div>
  );
}
