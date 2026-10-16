'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#certificaciones', label: 'Certificaciones' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#01101D]/10 bg-[#FFF3F0]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#01101D] text-[13px] font-bold tracking-tight text-[#FFF3F0] transition-transform duration-300 group-hover:rotate-[-8deg]">
            TR
          </span>
          <span className="font-mono-powder text-[13px] uppercase text-[#01101D]/80">
            Trinidad Rubio
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[15px] font-medium text-[#01101D]/70 transition-colors hover:text-[#01101D]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#0099FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#01101D] px-5 py-2.5 text-[14px] font-semibold text-[#FFF3F0] transition-all duration-300 hover:bg-[#0099FF] hover:shadow-[0_10px_24px_-8px_rgba(0,153,255,0.6)]"
          >
            Contacto
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#01101D]/10 bg-white/70 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-[#01101D]/10 bg-[#FFF3F0]/95 backdrop-blur-xl lg:hidden"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-xl px-4 py-3 text-[16px] font-medium text-[#01101D]/80 hover:bg-[#FAE6E1]"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#01101D] px-5 py-3 text-[15px] font-semibold text-[#FFF3F0]"
              >
                Contacto <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
