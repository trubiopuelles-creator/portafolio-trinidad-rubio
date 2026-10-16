'use client';

import LogoLoop from '@/components/reactbits/LogoLoop';

const items = [
  'Windows', 'Linux', 'Cisco Packet Tracer', 'TCP/IP', 'Subnetting', 'DHCP',
  'DNS', 'Hardware', 'Virtualización', 'Seguridad', 'Backups', 'HTML',
  'CSS', 'VS Code', 'Bases de datos', 'Excel', 'Word', 'Access',
];

export default function Marquee() {
  return (
    <section aria-label="Tecnologías y herramientas" className="relative py-8">
      <LogoLoop
        items={items.map((label) => ({ label }))}
        speed={30}
        direction="left"
      />
    </section>
  );
}
