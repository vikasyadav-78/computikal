'use client';

import React from 'react';
import Logo from './Logo';
import { ArrowRight, ShieldCheck, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Website Development', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Android Apps', href: '#services' },
    { name: 'iOS Apps', href: '#services' },
  ];

  const socialLinks = [
    { name: 'LinkedIn Profile', icon: <Linkedin className="w-4 h-4 text-sky-400" />, href: '#contact' },
    { name: 'GitHub Showcase', icon: <Github className="w-4 h-4 text-slate-300" />, href: '#contact' },
    { name: 'Twitter / X', icon: <Twitter className="w-4 h-4 text-blue-400" />, href: '#contact' },
    { name: 'Email Inquiry', icon: <Mail className="w-4 h-4 text-brand-red" />, href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1220] border-t border-slate-800 text-slate-300 text-xs pt-10 pb-6 overflow-hidden">
      <div className="section-container">
        
        {/* Main 4-Column Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-3.5"
          >
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="inline-block bg-white px-2.5 py-1 rounded-lg shadow-xs">
              <Logo height={32} />
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building accessible, reliable and cost-effective digital solutions for modern businesses.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Project-Based Software Agency</span>
            </div>
          </motion.div>

          {/* Col 2: Quick Links (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            <h4 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-2 group text-xs sm:text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-blue transition-colors"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 mb-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-2 group text-xs sm:text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-red transition-colors"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button Positioned Under Services */}
            <div className="pt-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white bg-brand-blue hover:bg-brand-blue-dark shadow-sm transition-all active:scale-95 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Col 4: Connect & Social Media (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-3"
          >
            <h4 className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            
            {/* Social Media Links */}
            <ul className="space-y-2">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-2.5 group text-xs sm:text-sm font-semibold"
                  >
                    <span className="p-1 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Clean Footer Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <p>© 2026 Computikal. All rights reserved.</p>
          <div className="flex items-center gap-3 text-slate-300 font-semibold">
            <span>Web</span>
            <span>•</span>
            <span>Web Applications</span>
            <span>•</span>
            <span>Android</span>
            <span>•</span>
            <span>iOS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

