'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress — barra fina de progreso de lectura fijada arriba.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-[#0099ff]"
      style={{ scaleX }}
    />
  );
}
