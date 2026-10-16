'use client';

import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SplitText from '@/components/reactbits/SplitText';
import Dock from '@/components/reactbits/Dock';
import StarBorder from '@/components/reactbits/StarBorder';

const email = 'trubiopuelles@gmail.com';
const linkedin =
  'https://www.linkedin.com/in/maría-trinidad-rubio-puelles-6a294a417';

export default function Contact() {
  return (
    <section id="contacto" className="relative px-5 pb-28 pt-6 md:px-8">
      <AnimatedContent direction="scale" distance={0}>
        <div className="noise-overlay relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#01101D] px-6 py-20 text-center md:px-12 md:py-28">
          {/* halos */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0,153,255,0.3), transparent 70%)' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(245,160,140,0.28), transparent 70%)' }}
          />
          {/* rejilla sutil */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />

          <div className="relative z-10">
            <p className="font-mono-powder mb-5 text-[12px] uppercase text-[#0099FF]">
              (Contacto)
            </p>
            <h2 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.03em] text-[#FFF3F0] md:text-7xl">
              <SplitText text="¿Hablamos?" delay={90} splitType="chars" textAlign="center" />
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/60">
              Estoy abierta a prácticas y oportunidades para seguir aprendiendo y
              desarrollarme profesionalmente. ¡Me encantaría saber de ti!
            </p>

            <div className="mt-11 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <StarBorder href={`mailto:${email}`} color="#0099ff" speed="6s">
                <span className="inline-flex items-center gap-2.5 font-semibold">
                  <Mail className="h-4.5 w-4.5" />
                  {email}
                </span>
              </StarBorder>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-[15px] font-semibold text-white/85 transition-all duration-300 hover:border-white/60 hover:text-white"
              >
                <Linkedin className="h-4.5 w-4.5" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4 opacity-60" />
              </a>
            </div>

            <div className="mt-16 flex justify-center">
              <Dock
                items={[
                  {
                    icon: <Mail className="text-white" />,
                    label: 'Email',
                    href: `mailto:${email}`,
                  },
                  {
                    icon: <Linkedin className="text-white" />,
                    label: 'LinkedIn',
                    href: linkedin,
                  },
                ]}
                baseItemSize={56}
                magnification={84}
              />
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}
