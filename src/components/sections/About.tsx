'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SplitText from '@/components/reactbits/SplitText';

const points = [
  'Montaje, mantenimiento y diagnóstico de equipos informáticos.',
  'Configuración y administración de redes locales (LAN).',
  'Sistemas operativos Windows y Linux y servicios en red.',
  'Seguridad informática y copias de seguridad.',
  'Ganas de aprender, trabajo en equipo y adaptabilidad.',
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedContent direction="horizontal" distance={48}>
            <p className="font-mono-powder mb-4 text-[12px] uppercase text-[#0099FF]">
              (Sobre mí)
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#01101D] md:text-[3.4rem]">
              <SplitText text="Responsable," delay={40} />
              <br />
              <SplitText text="curiosa y con" delay={40} />
              <br />
              <span className="relative inline-block">
                <SplitText text="muchas ganas." delay={40} className="text-[#0099FF]" />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full"
                  fill="none"
                >
                  <motion.path
                    d="M3 9C60 3 160 3 217 8"
                    stroke="#F5A08C"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                  />
                </svg>
              </span>
            </h2>
          </AnimatedContent>

          <div>
            <AnimatedContent delay={0.1}>
              <p className="text-lg leading-relaxed text-[#01101D]/70">
                Soy María Trinidad Rubio Puelles, estudiante de segundo curso del Grado Medio en{' '}
                <strong className="font-semibold text-[#01101D]">
                  Sistemas Microinformáticos y Redes (SMR)
                </strong>{' '}
                en Digitech FP. Me interesa profundamente la informática y las nuevas
                tecnologías, y quiero seguir desarrollándome en sistemas, redes, soporte técnico
                y seguridad informática.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-[#01101D]/70">
                Busco una oportunidad de prácticas para adquirir experiencia real y aplicar de
                forma profesional todo lo aprendido durante mi formación, aportando
                responsabilidad, ilusión y un compromiso firme con cada proyecto del que formo
                parte.
              </p>
            </AnimatedContent>

            <ul className="mt-9 grid gap-3.5 sm:grid-cols-2" aria-label="Puntos fuertes">
              {points.map((point, i) => (
                <AnimatedContent key={point} delay={0.15 + i * 0.08} distance={26}>
                  <li className="flex items-start gap-3 rounded-2xl border border-[#01101D]/8 bg-white/80 p-4 transition-colors duration-300 hover:border-[#0099FF]/40">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0099FF]" />
                    <span className="text-[15px] font-medium leading-snug text-[#01101D]/80">
                      {point}
                    </span>
                  </li>
                </AnimatedContent>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
