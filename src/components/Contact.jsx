'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loadPreset = () => {
      if (typeof window !== 'undefined') {
        const saved = window.localStorage.getItem('computikal_inquiry_preset');
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            setFormData(prev => ({
              ...prev,
              service: parsed.service || prev.service,
              details: parsed.details || prev.details,
            }));
            window.localStorage.removeItem('computikal_inquiry_preset');
          } catch (e) {
            // ignore
          }
        }
      }
    };

    loadPreset();
    window.addEventListener('computikal_preset_updated', loadPreset);
    return () => window.removeEventListener('computikal_preset_updated', loadPreset);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone.trim() && !/^[0-[#+()-\s\d]{6,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Project details are required';
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Please provide a bit more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Website Development',
      details: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-14 md:py-16 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
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
            Start a Conversation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Let&apos;s Talk About <span className="text-brand-blue">Your Project</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Fill out the project inquiry form below to discuss requirements, features, project scope, and custom development pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel (Slide-in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue border border-blue-200 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Project Inquiry</h3>
                  <p className="text-xs text-slate-500">Direct Consultation & Evaluation</p>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Computikal reviews every project requirement thoroughly to provide realistic scope outlines and tailored development approaches.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-4.5 h-4.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">Fast Response</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Inquiries are reviewed promptly by our technical team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">No Fixed Bundles</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Pricing and scope are customized around your actual needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Sparkles className="w-4.5 h-4.5 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">Clear Planning</h4>
                    <p className="text-xs sm:text-sm text-slate-600">From concept to production-ready deployment.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Contact Form Card (Slide-in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                  
                  <p className="text-slate-600 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                    Your project inquiry has been received. Our team will evaluate your project details and get back to you shortly.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.name ? 'border-brand-red' : 'border-slate-200 focus:border-brand-blue'
                        } text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white text-xs sm:text-sm transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.email ? 'border-brand-red' : 'border-slate-200 focus:border-brand-blue'
                        } text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white text-xs sm:text-sm transition-all`}
                      />
                      {errors.email && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.phone ? 'border-brand-red' : 'border-slate-200 focus:border-brand-blue'
                        } text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white text-xs sm:text-sm transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Service Needed <span className="text-brand-red">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:border-brand-blue focus:outline-none focus:bg-white text-xs sm:text-sm transition-all"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Android App">Android App</option>
                        <option value="iOS App">iOS App</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Project Details <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Describe your product idea, required features, scope, or goals..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                        errors.details ? 'border-brand-red' : 'border-slate-200 focus:border-brand-blue'
                      } text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white text-xs sm:text-sm transition-all resize-y`}
                    ></textarea>
                    {errors.details && (
                      <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue-dark shadow-sm transition-all border border-blue-600 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                        <span>Processing Inquiry...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </span>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 font-mono">
                    Project scope evaluation • Confidential inquiry
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
