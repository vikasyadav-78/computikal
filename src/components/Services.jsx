'use client';

import React, { useState } from 'react';
import { Globe, Layout, Smartphone, Tablet, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'website-dev',
      title: 'Website Design & Development',
      description: 'Modern, responsive and performance-focused websites designed to represent your brand and convert visitors into customers.',
      icon: <Globe className="w-6 h-6" />,
      accentColor: 'blue',
      badge: 'Web',
      deliverables: [
        'Custom Responsive UI/UX Design',
        'SEO-Optimized Code & Structure',
        'High Speed & Performance Optimization',
        'Contact Form & Lead Capture Integration',
        'Cross-Browser & Mobile Compatibility',
        'Scalable Content Structure'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'SEO Best Practices']
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Scalable and user-focused web applications built around your business workflows, features and requirements.',
      icon: <Layout className="w-6 h-6" />,
      accentColor: 'red',
      badge: 'Web App',
      deliverables: [
        'Custom Business Logic & Workflows',
        'Interactive User Dashboards & Admin Portals',
        'Secure API & Database Integration',
        'User Authentication & Role Management',
        'High Scalability Architecture',
        'Clean & Maintainable Codebase'
      ],
      techStack: ['React', 'Next.js App Router', 'JavaScript', 'REST APIs', 'Node.js Architecture', 'Tailwind CSS']
    },
    {
      id: 'android-app',
      title: 'Android App Development',
      description: 'Custom Android applications designed for smooth performance, usability and real-world business needs.',
      icon: <Smartphone className="w-6 h-6" />,
      accentColor: 'yellow',
      badge: 'Android',
      deliverables: [
        'Native & Cross-Platform Android UI',
        'Smooth Performance & Battery Efficiency',
        'Offline Capabilities & Caching',
        'Google Play Store Readiness',
        'Push Notifications & API Syncing',
        'Secure Data Storage'
      ],
      techStack: ['Android SDK', 'Kotlin / Java', 'React Native', 'Mobile UI Design', 'REST API Integration']
    },
    {
      id: 'ios-app',
      title: 'iOS App Development',
      description: 'Modern iOS applications with clean interfaces and reliable functionality tailored to your product requirements.',
      icon: <Tablet className="w-6 h-6" />,
      accentColor: 'blue',
      badge: 'iOS',
      deliverables: [
        'Human Interface Guidelines Compliance',
        'Fluid Touch Gestures & Animations',
        'Apple Ecosystem Compatibility',
        'App Store Submission Preparation',
        'Robust Data Security & Privacy',
        'Clean Mobile Architecture'
      ],
      techStack: ['Swift', 'iOS Architecture', 'React Native', 'Xcode', 'Mobile UX', 'API Integration']
    }
  ];

  return (
    <section id="services" className="relative py-14 md:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header (Fade Up) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solutions Built for Your <span className="text-brand-blue">Digital Growth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            From websites to complete mobile and web applications, Computikal helps businesses turn ideas into reliable digital products.
          </p>
        </motion.div>

        {/* 4 Service Cards Grid (Side Slide-in Animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const isBlue = service.accentColor === 'blue';
            const isRed = service.accentColor === 'red';
            const slideDirection = index % 2 === 0 ? -50 : 50;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: slideDirection }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="group relative rounded-2xl bg-slate-50/70 border border-slate-200 p-6 hover:bg-white hover:border-slate-300 card-animated flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Top Accent Gradient Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isBlue
                      ? 'bg-gradient-to-r from-brand-blue to-blue-400 group-hover:h-1.5'
                      : isRed
                      ? 'bg-gradient-to-r from-brand-red to-rose-400 group-hover:h-1.5'
                      : 'bg-gradient-to-r from-brand-yellow to-amber-400 group-hover:h-1.5'
                  }`}
                ></div>

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border transition-transform duration-300 group-hover:scale-110 ${
                        isBlue
                          ? 'bg-blue-100/70 text-brand-blue border-blue-200'
                          : isRed
                          ? 'bg-red-100/70 text-brand-red border-red-200'
                          : 'bg-amber-100/70 text-amber-700 border-amber-200'
                      }`}
                    >
                      {service.icon}
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-bold bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2.5 group-hover:text-brand-blue transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between">
                  <span className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue group-hover:text-brand-blue-dark transition-colors">
                    <span>Learn More & Scope Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">Custom Scope</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
