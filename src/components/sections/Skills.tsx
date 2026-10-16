'use client';

import {
  Cpu,
  Network,
  ShieldCheck,
  MonitorSmartphone,
  Code2,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import SplitText from '@/components/reactbits/SplitText';

interface Skill {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
}

const skills: Skill[] = [
  {
    icon: Cpu,
    title: 'Hardware y Sistemas',
    desc: 'Montaje y mantenimiento de equipos, instalación y configuración de Windows y Linux, gestión de usuarios y permisos.',
    tags: ['Hardware', 'Windows', 'Linux', 'Scripts'],
    accent: '#0099FF',
  },
  {
    icon: Network,
    title: 'Redes',
    desc: 'Configuración de redes LAN, direccionamiento IP, subnetting, TCP/IP, DHCP, DNS, routers y switches.',
    tags: ['TCP/IP', 'Subnetting', 'DHCP', 'DNS', 'Cisco'],
    accent: '#F5A08C',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y Servicios',
    desc: 'Medidas de seguridad en sistemas y redes, copias de seguridad, servicios en red y acceso remoto.',
    tags: ['Seguridad', 'Backups', 'Servidores', 'Acceso remoto'],
    accent: '#0099FF',
  },
  {
    icon: MonitorSmartphone,
    title: 'Virtualización',
    desc: 'Creación, configuración y gestión de máquinas virtuales y entornos virtualizados para pruebas y despliegues.',
    tags: ['VMs', 'Virtualización'],
    accent: '#F5A08C',
  },
  {
    icon: Code2,
    title: 'Desarrollo y BBDD',
    desc: 'Nociones de HTML y CSS en Visual Studio Code, y conceptos de creación y gestión de bases de datos.',
    tags: ['HTML', 'CSS', 'VS Code', 'Bases de datos'],
    accent: '#0099FF',
  },
  {
    icon: BarChart3,
    title: 'Ofimática',
    desc: 'Manejo avanzado de herramientas ofimáticas: Word, Excel, presentaciones y Access para la gestión de información.',
    tags: ['Word', 'Excel', 'Access'],
    accent: '#F5A08C',
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <AnimatedContent>
          <p className="font-mono-powder mb-4 text-[12px] uppercase text-[#0099FF]">
            (Habilidades técnicas)
          </p>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#01101D] md:text-[3.4rem]">
            <SplitText text="Lo que sé hacer," delay={34} />
            <br />
            <span className="text-[#01101D]/45">
              <SplitText text="paso a paso." delay={34} />
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#01101D]/60">
            Conocimientos adquiridos durante mi formación en Sistemas Microinformáticos y
            Redes, listos para ponerse a prueba en un entorno profesional.
          </p>
        </AnimatedContent>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <AnimatedContent key={skill.title} delay={i * 0.08} distance={40}>
              <SpotlightCard
                className="powder-lift group h-full rounded-3xl border border-[#01101D]/10 bg-white p-7"
                spotlightColor={`${skill.accent}1f`}
              >
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#01101D]/8 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                  style={{ backgroundColor: `${skill.accent}1a`, color: skill.accent }}
                >
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#01101D]">
                  {skill.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#01101D]/60">
                  {skill.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2" aria-label={`Tecnologías de ${skill.title}`}>
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#01101D]/10 bg-[#FFF3F0] px-3 py-1.5 text-[12.5px] font-medium text-[#01101D]/70 transition-colors duration-200 hover:border-[#0099FF]/50 hover:text-[#0099FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
