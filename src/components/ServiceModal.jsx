'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, Code, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-all duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg max-h-[85vh] bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xl overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent Header */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-yellow"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3 mb-4 pr-6">
          <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-200 flex-shrink-0">
            {service.icon}
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-wider">Computikal Service</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{service.title}</h3>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Service Deliverables */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Deliverables & Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-brand-blue" />
            <span>Technologies & Tools</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {service.techStack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <p className="text-[11px] text-slate-500 font-mono">Custom scope based on your requirements.</p>
          <a
            href="#contact"
            onClick={() => {
              onClose();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-xs text-white bg-brand-blue hover:bg-brand-blue-dark transition-all shadow-sm active:scale-95"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
