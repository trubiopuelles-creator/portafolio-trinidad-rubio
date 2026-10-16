'use client';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ScrollProgress from '@/components/reactbits/ScrollProgress';
import SmoothAnchors from '@/components/reactbits/SmoothAnchors';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#FFF3F0] text-[#01101D]">
      <SmoothAnchors />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
