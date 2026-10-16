'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Briefcase } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SplitText from '@/components/reactbits/SplitText';

interface Entry {
  icon: 'bot' | 'briefcase';
  when: string;
  title: string;
  place: string;
  desc: string;
  highlight?: boolean;
}

const experience: Entry[] = [
  {
    icon: 'bot',
    when: 'Enero 2026 — Marzo 2026',
    title: 'Participante — ASTI Robotics Challenge',
    place: 'Programa educativo de robótica móvil y tecnologías STEM',
    desc: 'Participé en el ASTI Robotics Challenge, un programa educativo centrado en robótica móvil y tecnologías STEM, donde desarrollé el trabajo en equipo y la resolución de problemas aplicando conocimientos técnicos.',
    highlight: true,
  },
  {
    icon: 'briefcase',
    when: 'Experiencia previa',
    title: 'Apoyo en negocio familiar',
    place: 'Asesoría fiscal y contable',
    desc: 'Trabajos esporádicos realizando tareas en Excel y Word para la gestión de documentación e información.',
  },
];

const education: Entry[] = [
  {
    icon: 'bot',
    when: '2025 — En curso',
    title: 'Grado Medio en Sistemas Microinformáticos y Redes (SMR)',
    place: 'Digitech FP · Segundo curso',
    desc: 'Formación técnica en sistemas, redes, servicios, virtualización y seguridad informática.',
    highlight: true,
  },
  {
    icon: 'briefcase',
    when: '2021 — 2025',
    title: 'Educación Secundaria Obligatoria (ESO)',
    place: 'María Inmaculada Virgen de la Victoria (Gamarra)',
    desc: 'Título de Educación Secundaria Obligatoria.',
  },
];

function Timeline({ entries, ariaLabel }: { entries: Entry[]; ariaLabel: string }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative ml-3 space-y-10 border-l-0" aria-label={ariaLabel}>
      {/* línea base gris + línea que se dibuja al hacer scroll encima */}
      <div className="absolute bottom-2 left-[7px] top-1 w-[2px] bg-[#01101D]/10" aria-hidden="true" />
      <div className="absolute bottom-2 left-[7px] top-1 w-[2px] overflow-hidden">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-[#0099FF] via-[#0099FF] to-[#F5A08C]"
          style={{ scaleY: lineScale }}
        />
      </div>

      {entries.map((entry, i) => (
        <AnimatedContent key={entry.title} delay={i * 0.12} distance={36}>
          <li className="relative pl-10">
            <span
              className={`dot-pulse absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-[3px] ${
                entry.highlight ? 'border-[#0099FF] bg-[#FFF3F0]' : 'border-[#01101D]/25 bg-[#FFF3F0]'
              }`}
              aria-hidden="true"
            />
            <p className="font-mono-powder text-[11px] uppercase text-[#0099FF]">{entry.when}</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-[#01101D]">
              {entry.icon === 'bot' ? <Bot className="mr-2 mb-0.5 inline h-5 w-5 text-[#01101D]/40" /> : <Briefcase className="mr-2 mb-0.5 inline h-5 w-5 text-[#01101D]/40" />}
              {entry.title}
            </h3>
            <p className="mt-1 text-[15px] font-medium text-[#01101D]/55">{entry.place}</p>
            <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-[#01101D]/65">
              {entry.desc}
            </p>
          </li>
        </AnimatedContent>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <>
      <section id="experiencia" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimatedContent>
            <p className="font-mono-powder mb-4 text-[12px] uppercase text-[#0099FF]">
              (Experiencia)
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#01101D] md:text-[3.4rem]">
              <SplitText text="Mi trayectoria" delay={34} />
              <span className="text-[#01101D]/45">
                <SplitText text=" en movimiento." delay={34} />
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#01101D]/60">
              Experiencias que han reforzado mis habilidades técnicas y profesionales.
            </p>
          </AnimatedContent>
          <div className="mt-14">
            <Timeline entries={experience} ariaLabel="Cronología de experiencia" />
          </div>
        </div>
      </section>

      <section id="formacion" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <AnimatedContent>
            <p className="font-mono-powder mb-4 text-[12px] uppercase text-[#0099FF]">
              (Formación académica)
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#01101D] md:text-[3.4rem]">
              <SplitText text="Mi formación," delay={34} />
              <span className="text-[#01101D]/45">
                <SplitText text=" base sólida." delay={34} />
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#01101D]/60">
              Mi recorrido formativo en el ámbito de la informática y las redes.
            </p>
          </AnimatedContent>
          <div className="mt-14">
            <Timeline entries={education} ariaLabel="Cronología de formación" />
          </div>
        </div>
      </section>
    </>
  );
}
