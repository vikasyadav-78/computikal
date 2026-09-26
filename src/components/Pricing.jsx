'use client';

import React, { useState } from 'react';
import { Layers, Sliders, Cpu, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [selectedServiceType, setSelectedServiceType] = useState('web-app');
  const [selectedComplexity, setSelectedComplexity] = useState('moderate');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'dashboard']);

  const featureOptions = [
    { id: 'auth', label: 'User Auth & Profiles' },
    { id: 'dashboard', label: 'Admin Management Portal' },
    { id: 'api', label: 'Custom REST API Integration' },
    { id: 'payment', label: 'Payment Gateway Setup' },
    { id: 'database', label: 'Scalable Database & Storage' },
    { id: 'mobile-opt', label: 'Cross-Platform Optimization' },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleTransferToContact = () => {
    const serviceMap = {
      'website': 'Website Development',
      'web-app': 'Web Application',
      'android': 'Android App',
      'ios': 'iOS App',
    };
    
    const details = `Project Scope Inquiry:\n- Service: ${serviceMap[selectedServiceType]}\n- Complexity level: ${selectedComplexity}\n- Key Features needed: ${selectedFeatures.map(f => featureOptions.find(opt => opt.id === f)?.label).join(', ')}`;
    
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('computikal_inquiry_preset', JSON.stringify({
        service: serviceMap[selectedServiceType],
        details: details
      }));
      window.dispatchEvent(new Event('computikal_preset_updated'));
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-14 md:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
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
            Transparent Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Every Project Is <span className="text-brand-blue">Different</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            We believe pricing should match the actual requirements of a project. That&apos;s why Computikal provides project-based pricing based on features, complexity, technology and scope.
          </p>
        </motion.div>

        {/* 3 Visual Core Factors Cards (Side & Fade Animations) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          {/* Factor 1 (Slide Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue border border-blue-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-400 block mb-0.5">FACTOR 01</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Project Scope</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              Whether you need a sleek landing page, a multi-page business website, or a full enterprise application stack.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-3">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Single vs Multi-Platform</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Total Page & Screen Count</span>
              </li>
            </ul>
          </motion.div>

          {/* Factor 2 (Fade Up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-100 text-brand-red border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform flex-shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-400 block mb-0.5">FACTOR 02</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Features & Functionality</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              Specific capabilities like custom APIs, user roles, real-time databases, payment integrations, or push notifications.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-3">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Third-Party API Connections</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>User Dashboards & Auth</span>
              </li>
            </ul>
          </motion.div>

          {/* Factor 3 (Slide Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-400 block mb-0.5">FACTOR 03</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Technology & Complexity</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              Framework requirements, performance benchmarks, cloud infrastructure, and custom architectural logic.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-3">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Tech Stack Optimization</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Data Security Requirements</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Interactive Scope Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-8 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-brand-blue uppercase mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Interactive Requirement Planner</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">Define Your Project Parameters</h3>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-slate-700 border border-slate-200 flex-shrink-0">
              No Fixed Packages • 100% Tailored
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                1. Select Digital Product Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'website', name: 'Website' },
                  { id: 'web-app', name: 'Web Application' },
                  { id: 'android', name: 'Android App' },
                  { id: 'ios', name: 'iOS App' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedServiceType(item.id)}
                    className={`px-3 py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all text-left ${
                      selectedServiceType === item.id
                        ? 'bg-brand-blue text-white border-brand-blue shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                2. Select Project Complexity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard' },
                  { id: 'moderate', label: 'Moderate' },
                  { id: 'advanced', label: 'Advanced' },
                ].map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComplexity(comp.id)}
                    className={`px-2.5 py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all text-center ${
                      selectedComplexity === comp.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {comp.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              3. Select Required Feature Modules
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-2.5 rounded-lg border cursor-pointer text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                      isChecked
                        ? 'bg-white text-brand-blue border-brand-blue shadow-2xs'
                        : 'bg-white/60 text-slate-700 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{feat.label}</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isChecked ? 'bg-brand-blue text-white' : 'border border-slate-300'}`}>
                      {isChecked ? '✓' : ''}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Ready to turn these parameters into an exact project quote?
              </p>
            </div>
            <button
              onClick={handleTransferToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue-dark shadow-sm transition-all active:scale-95 flex-shrink-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
