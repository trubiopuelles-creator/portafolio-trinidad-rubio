'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#01101D]/10 py-9">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-[14px] text-[#01101D]/55 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} María Trinidad Rubio Puelles</p>
        <p className="font-mono-powder text-[11px] uppercase tracking-wider">
          Sistemas Microinformáticos y Redes · SMR
        </p>
        <motion.a
          href="#inicio"
          aria-label="Volver arriba"
          whileHover={{ y: -3 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#01101D]/12 bg-white text-[#01101D] transition-colors hover:border-[#0099FF] hover:text-[#0099FF]"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </motion.a>
      </div>
    </footer>
  );
}
