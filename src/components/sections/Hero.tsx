'use client';

import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import TextType from '@/components/reactbits/TextType';
import CountUp from '@/components/reactbits/CountUp';
import Particles from '@/components/reactbits/Particles';
import TiltedCard from '@/components/reactbits/TiltedCard';
import Magnet from '@/components/reactbits/Magnet';
import StarBorder from '@/components/reactbits/StarBorder';

const stats = [
  { value: 2, suffix: '', label: 'Certificaciones Cisco' },
  { value: 6, suffix: '', label: 'Áreas de competencia' },
  { value: 1, suffix: '', label: 'Inglés — Nivel B1' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="noise-overlay relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* Halo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[540px] w-[540px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,153,255,0.18) 0%, rgba(250,230,225,0.5) 45%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[460px] w-[460px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(245,160,140,0.28) 0%, rgba(250,230,225,0.5) 50%, transparent 72%)',
        }}
      />
      <Particles
        particleCount={60}
        particleColors={['#0099ff', '#f5a08c', '#01101d']}
        speed={0.3}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#01101D]/12 bg-white/80 px-4 py-2 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            </span>
            <span className="font-mono-powder text-[11px] uppercase text-[#01101D]/75">
              Abierta a prácticas y oportunidades
            </span>
          </motion.div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#01101D] sm:text-6xl md:text-[4.2rem]">
            <BlurText
              text="Hola, soy Trinidad."
              delay={260}
              className="block"
            />
            <BlurText
              text="Estudiante de Sistemas y Redes."
              delay={90}
              className="block text-[#0099FF]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#01101D]/65"
          >
            Apasionada por la tecnología, con foco en{' '}
            <TextType
              text={['redes y subnetting.', 'soporte técnico.', 'seguridad informática.', 'virtualización de sistemas.']}
              className="font-semibold text-[#01101D]"
              typingSpeed={65}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnet padding={48}>
              <StarBorder href="#certificaciones" color="#0099ff" speed="7s">
                <span className="font-semibold">Ver certificaciones →</span>
              </StarBorder>
            </Magnet>
            <Magnet padding={36}>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-[#01101D]/15 bg-white/80 px-8 py-4 text-[15px] font-semibold text-[#01101D] transition-all duration-300 hover:border-[#01101D] hover:shadow-[0_12px_28px_-12px_rgba(1,16,29,0.35)]"
              >
                Contactar
              </a>
            </Magnet>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#01101D]/10 pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-[#01101D]">
                  <CountUp to={s.value} suffix={s.suffix} duration={1.8} />
                </dd>
                <dd className="mt-1 text-[13px] leading-snug text-[#01101D]/55">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Tarjeta de foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-[#FAE6E1] via-white to-[#0099FF]/15"
          />
          <TiltedCard
            imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/perfil.jpeg`}
            altText="Fotografía de María Trinidad Rubio Puelles"
            rotateAmplitude={9}
            scaleOnHover={1.03}
            containerClassName="relative rounded-[2rem] border border-[#01101D]/10 bg-white shadow-[0_30px_70px_-30px_rgba(1,16,29,0.4)]"
            imageClassName="aspect-[4/5] rounded-[2rem]"
            overlayContent={
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-[#01101D]/85 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-[13px] font-bold text-white">M. Trinidad Rubio Puelles</p>
                  <p className="font-mono-powder text-[10px] uppercase text-white/60">
                    SMR · Digitech FP
                  </p>
                </div>
                <BadgeCheck className="h-5 w-5 shrink-0 text-[#0099FF]" />
              </div>
            }
          />
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        aria-label="Bajar a la sección Sobre mí"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#01101D]/45 transition-colors hover:text-[#0099FF] md:flex"
      >
        <span className="font-mono-powder text-[10px] uppercase">Desliza</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
