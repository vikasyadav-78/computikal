'use client';

import React from 'react';
import { DollarSign, Tag, ShieldCheck, Target, Cpu, Sliders, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyComputikal() {
  const whyPoints = [
    {
      id: 1,
      title: 'Cost-Effective Solutions',
      description: 'Practical solutions designed around your budget and project requirements.',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'text-brand-blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Competitive Pricing',
      description: 'Flexible pricing based on project scope, complexity and features.',
      icon: <Tag className="w-5 h-5" />,
      color: 'text-amber-800',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      id: 3,
      title: 'Reliable Development',
      description: 'Focused on delivering dependable and maintainable digital products.',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      id: 4,
      title: 'Client-Focused Approach',
      description: "Every project is planned around the client's business goals and requirements.",
      icon: <Target className="w-5 h-5" />,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      id: 5,
      title: 'Modern Technology',
      description: 'Using modern development practices and technologies to build scalable solutions.',
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-sky-700',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
    },
    {
      id: 6,
      title: 'Flexible Project Scope',
      description: 'Whether you need a simple website or a complete application, solutions are tailored to your needs.',
      icon: <Sliders className="w-5 h-5" />,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section className="relative py-14 md:py-16 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
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
            Our Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why Choose <span className="text-brand-blue">Computikal</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We partner with businesses to deliver accessible, efficient, and dependable software solutions tailored specifically to your objectives.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPoints.map((point, index) => {
            const slideX = index % 2 === 0 ? -40 : 40;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, x: slideX, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-200 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg ${point.bgColor} ${point.color} border ${point.borderColor} flex items-center justify-center mb-4 flex-shrink-0`}>
                    {point.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{point.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-mono font-semibold">
                  <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Computikal Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
