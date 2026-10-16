'use client';

import { useEffect, useRef } from 'react';

interface ParticlesProps {
  particleCount?: number;
  particleColors?: string[];
  particleSize?: number;
  speed?: number;
  className?: string;
  vy?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

/**
 * Particles — estilo ReactBits: partículas flotantes en canvas que reaccionan
 * ligeramente al cursor. Hidratación segura: todo se genera en el cliente
 * tras montar el canvas.
 */
export default function Particles({
  particleCount = 70,
  particleColors = ['#0099ff', '#f5a08c', '#01101d'],
  particleSize = 2.4,
  speed = 0.35,
  className = '',
  vy = -0.18,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: vy + (Math.random() - 0.5) * speed,
      size: Math.random() * particleSize + 1,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    });

    const init = () => {
      resize();
      particles = Array.from({ length: particleCount }, spawn);
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        // leve repulsión al cursor
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 8100) {
          const d = Math.sqrt(dist2) || 1;
          p.vx += (dx / d) * 0.015;
          p.vy += (dy / d) * 0.015;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.995;
        if (p.y < -10 || p.y > h + 10 || p.x < -10 || p.x > w + 10) {
          Object.assign(p, spawn(), { y: h + 8 });
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(step);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    init();
    step();
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [particleCount, particleColors, particleSize, speed, vy]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
