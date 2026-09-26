'use client';

import React, { useState } from 'react';
import { Search, Compass, Palette, Code, Rocket, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Understand your business, goals and requirements.',
      detail: 'We begin with thorough discovery to align on project objectives, user needs, and exact technical specifications.',
      icon: <Search className="w-5 h-5" />,
      color: 'bg-brand-blue text-white',
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define the features, technology and project scope.',
      detail: 'We outline the architecture, tech stack selection, milestone roadmap, and cost-effective scope parameters.',
      icon: <Compass className="w-5 h-5" />,
      color: 'bg-amber-500 text-white',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create a clean and intuitive user experience.',
      detail: 'Crafting responsive user interfaces, clear user flows, and modern design systems tuned to your brand identity.',
      icon: <Palette className="w-5 h-5" />,
      color: 'bg-brand-red text-white',
    },
    {
      number: '04',
      title: 'Develop',
      description: 'Build the solution using modern development practices.',
      detail: 'Engineered with clean code, modern frameworks, robust security protocols, and performance optimization.',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-sky-600 text-white',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Test, launch and help ensure the product works reliably.',
      detail: 'Rigorous cross-device testing, deployment, and post-launch assistance to keep your product operating smoothly.',
      icon: <Rocket className="w-5 h-5" />,
      color: 'bg-emerald-600 text-white',
    },
  ];

  return (
    <section id="process" className="relative py-14 md:py-16 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue mb-2 block">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Our Simple <span className="text-brand-blue">Development Process</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            A transparent 5-step workflow engineered to deliver dependable software solutions efficiently and predictably.
          </p>
        </motion.div>

        {/* Desktop Process Timeline Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-3 relative mb-6">
          
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-5 z-0"></div>

          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 p-4 rounded-xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-2 border-brand-blue shadow-md scale-102'
                    : 'bg-white/90 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xl font-black font-mono ${isSelected ? 'text-brand-blue' : 'text-slate-400'}`}>
                      {step.number}
                    </span>
                    <div className={`p-2 rounded-lg ${step.color} shadow-xs`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed line-clamp-2">{step.description}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span>Step {step.number}</span>
                  {isSelected && <span className="text-brand-blue font-bold">ACTIVE</span>}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-brand-blue border border-blue-200">
                STAGE {steps[activeStep].number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{steps[activeStep].title} Phase</h3>
            </div>
            <p className="text-xs font-mono text-slate-500">Click steps to inspect each phase</p>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-normal">
            {steps[activeStep].detail}
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
            <Check className="w-4 h-4" />
            <span>Structured & Cost-Effective Deliverables</span>
          </div>
        </motion.div>

        {/* Mobile & Tablet Step List View */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3"
            >
              <div className={`p-2 rounded-lg ${step.color} flex-shrink-0 shadow-xs`}>
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs sm:text-sm font-mono font-bold text-brand-blue">{step.number}</span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-1">{step.description}</p>
                <p className="text-slate-500 text-xs italic">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
