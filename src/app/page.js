'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyComputikal from '@/components/WhyComputikal';
import About from '@/components/About';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyComputikal />
      <About />
      <Process />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
