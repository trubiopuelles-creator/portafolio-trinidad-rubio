'use client';

import { Award, ShieldCheck } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SplitText from '@/components/reactbits/SplitText';
import ShinyText from '@/components/reactbits/ShinyText';

const certs = [
  {
    icon: ShieldCheck,
    title: 'Conceptos básicos de redes',
    issuer: 'DIGITECH · Cisco Networking Academy',
    when: 'Finalizado: 21 May 2026',
    fresh: true,
  },
  {
    icon: Award,
    title: 'Introducción a Cisco Packet Tracer',
    issuer: 'Networking Academy · Cisco Networking Academy',
    when: 'Finalizado: 22 Oct 2025',
    fresh: false,
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="relative py-24 md:py-32">
      {/* banda rosa suave de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-0 h-[70%] -translate-y-1/2 bg-[#FAE6E1]/60"
        style={{ borderRadius: '3rem' }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <AnimatedContent>
          <p className="font-mono-powder mb-4 text-[12px] uppercase text-[#0099FF]">
            (Certificaciones)
          </p>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#01101D] md:text-[3.4rem]">
            <SplitText text="Formación certificada" delay={34} />
            <br />
            <span className="text-[#01101D]/45">
              <SplitText text="por Cisco." delay={34} />
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#01101D]/60">
            Cursos completados a través del programa Cisco Networking Academy, avalados por
            una de las instituciones de referencia en redes del mundo.
          </p>
        </AnimatedContent>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {certs.map((cert, i) => (
            <AnimatedContent key={cert.title} delay={i * 0.12} distance={40}>
              <article className="powder-lift group relative h-full overflow-hidden rounded-3xl border border-[#01101D]/10 bg-white p-7 md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle, rgba(0,153,255,0.22), transparent 70%)' }}
                />
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#01101D] text-[#0099FF] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
                    <cert.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#01101D]">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] text-[#01101D]/55">{cert.issuer}</p>
                    <p className="font-mono-powder mt-3 inline-flex rounded-full border border-[#01101D]/10 bg-[#FFF3F0] px-3 py-1.5 text-[11px] uppercase text-[#01101D]/70">
                      {cert.when}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-[#01101D]/8 pt-4">
                  <ShinyText
                    text="Cisco Networking Academy — Credencial verificada"
                    speed={4.5}
                    className="text-[13px] font-medium"
                  />
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
