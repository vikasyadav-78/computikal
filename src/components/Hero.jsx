'use client';

import React from 'react';
import { ArrowRight, Globe, Smartphone, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Hero Content (Slide-in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Value/Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red -ml-3"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue -ml-3"></span>
              <span className="text-slate-900 ml-1">Web</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-900">Web Apps</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-900">Android</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-900">iOS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4">
              Building <span className="text-brand-blue">Digital Solutions</span> That Move Your Business Forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 max-w-xl font-normal">
              Computikal designs and develops modern websites, web applications and mobile apps that are accessible, cost-effective, reliable and built around your business requirements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue-dark shadow-sm transition-all duration-200 group active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-2xs transition-all duration-200 active:scale-95"
              >
                Explore Our Services
              </a>
            </div>

            {/* Quick Value Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-1.5 text-slate-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span className="font-semibold">Tailored Solutions</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="font-semibold">Cost-Effective</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-semibold">Reliable Performance</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Element (Slide-in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-br from-brand-blue via-brand-red to-brand-yellow shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#0B1326] rounded-xl overflow-hidden p-4 sm:p-5 border border-slate-800 space-y-3.5 text-white">
                  
                  {/* Visual Header / Mock Browser Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block shadow-xs flex-shrink-0"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block shadow-xs flex-shrink-0"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block shadow-xs flex-shrink-0"></span>
                      <span className="ml-1 text-xs font-mono text-slate-300 font-semibold truncate">computikal.dev</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-brand-blue/20 text-blue-300 border border-brand-blue/40 font-bold flex-shrink-0">
                      PRODUCTION READY
                    </span>
                  </div>

                  {/* Mock Workspace Graphic Cards */}
                  <div className="space-y-3">
                    
                    {/* Item 1 - Blue Theme */}
                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 hover:border-brand-blue/60 transition-all duration-200">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2.5 rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/40 flex-shrink-0">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-white truncate">Web Engineering</h4>
                          <p className="text-xs sm:text-sm text-slate-300 truncate">React • Next.js • Tailwind</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 flex-shrink-0">100% High Speed</span>
                    </div>

                    {/* Item 2 - Red Theme */}
                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 hover:border-brand-red/60 transition-all duration-200">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2.5 rounded-lg bg-brand-red/20 text-brand-red border border-brand-red/40 flex-shrink-0">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-white truncate">Mobile Apps</h4>
                          <p className="text-xs sm:text-sm text-slate-300 truncate">Android & iOS Solutions</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-blue-300 font-bold bg-brand-blue/20 px-2.5 py-1 rounded border border-brand-blue/40 flex-shrink-0">Native & Cross</span>
                    </div>

                    {/* Item 3 - Yellow Theme */}
                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2.5 hover:border-brand-yellow/60 transition-all duration-200">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2.5 rounded-lg bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40 flex-shrink-0">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-white truncate">Custom Web Applications</h4>
                          <p className="text-xs sm:text-sm text-slate-300 truncate">Tailored Business Workflows</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-amber-300 font-bold bg-brand-yellow/15 px-2.5 py-1 rounded border border-brand-yellow/30 flex-shrink-0">Scalable</span>
                    </div>

                  </div>

                  {/* Bottom Value Banner */}
                  <div className="p-3 rounded-lg bg-gradient-to-r from-brand-blue/20 via-slate-900 to-brand-red/20 border border-slate-700/80 flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 min-w-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold text-slate-200 truncate">Custom Business Scope</span>
                    </div>
                    <span className="text-xs font-mono text-brand-yellow font-bold flex-shrink-0">100% Reliable</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
