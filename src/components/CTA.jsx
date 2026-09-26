'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-yellow shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="bg-gradient-to-br from-slate-900 via-[#0B1326] to-slate-950 rounded-[22px] p-6 sm:p-10 text-center relative overflow-hidden text-white border border-slate-800">
            
            {/* Ambient Lighting Orbs */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl pointer-events-none"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-brand-yellow text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
              <span>Turn Strategy Into Code</span>
            </div>

            {/* Main CTA Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3 max-w-xl mx-auto">
              Have an Idea? <span className="text-sky-400">Let&apos;s Build It.</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed font-normal">
              Tell us what you want to build and let&apos;s discuss the right digital solution for your business.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/30 transition-all duration-200 group active:scale-95 border border-blue-400/30"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all duration-200 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-brand-red" />
                <span>Contact Us</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
