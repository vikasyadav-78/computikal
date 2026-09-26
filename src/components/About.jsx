'use client';

import React from 'react';
import { CheckCircle2, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function About() {
  const highlights = [
    'Web Development',
    'Web Applications',
    'Android Development',
    'iOS Development',
    'Custom Solutions',
    'Business-Focused Development',
  ];

  return (
    <section id="about" className="relative py-14 md:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Column (Slide-in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
              <span>About Computikal</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Technology That Works for <span className="text-brand-blue">Your Business</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Computikal is a software development agency focused on creating practical, modern and reliable digital solutions. From websites and web applications to Android and iOS apps, we work with businesses to transform ideas into functional digital products.
            </p>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Value Badge */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800 flex-shrink-0">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Project-Tailored Engineering</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Quality-driven code built for long-term reliability.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Illustration Column (Slide-in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-2xl p-1 bg-gradient-to-br from-brand-blue via-brand-red to-brand-yellow shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-[#0B1326] rounded-xl p-5 border border-slate-800 space-y-4 text-white">
                  
                  {/* Brand Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="bg-white px-2.5 py-1 rounded-lg">
                      <Logo height={30} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-blue/20 text-blue-300 border border-brand-blue/40 flex-shrink-0">
                      Software Agency
                    </span>
                  </div>

                  {/* Visual Architecture Flow */}
                  <div className="space-y-3">
                    
                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3 hover:border-brand-blue/60 transition-all duration-200">
                      <div className="w-9 h-9 rounded-lg bg-brand-blue/20 text-brand-blue border border-brand-blue/40 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">Web & Mobile Solutions</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Websites • Web Apps • Android • iOS</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3 hover:border-brand-red/60 transition-all duration-200">
                      <div className="w-9 h-9 rounded-lg bg-brand-red/20 text-brand-red border border-brand-red/40 flex items-center justify-center flex-shrink-0">
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">Modular Architecture</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Clean code structure designed for future growth.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3 hover:border-brand-yellow/60 transition-all duration-200">
                      <div className="w-9 h-9 rounded-lg bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">Business Alignment</h4>
                        <p className="text-xs sm:text-sm text-slate-300">Built specifically around your functional goals.</p>
                      </div>
                    </div>

                  </div>

                  <div className="pt-1 text-center text-xs text-slate-300 font-mono">
                    Computikal • Accessible & Cost-Effective Software Development
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
