"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TbDeviceLaptop, TbShoppingBag, TbApi,
  TbLayoutCards, TbDeviceDesktop
} from 'react-icons/tb';
import { RiNextjsLine } from 'react-icons/ri';

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Responsive Web Design',
    description: 'Crafting seamless experiences across all devices with mobile-first, pixel-perfect designs that delight every user.',
    icon: TbDeviceLaptop,
    color: '#38BDF8',
    tag: 'Design',
  },
  {
    title: 'Next.js Optimization',
    description: 'Boosting app speed with SSR, SSG, and advanced state management for lightning-fast, production-ready apps.',
    icon: RiNextjsLine,
    color: '#ffffff',
    tag: 'Performance',
  },
  {
    title: 'E-commerce Development',
    description: 'Scalable online stores with cart, payment gateway integration, and full inventory management built for growth.',
    icon: TbShoppingBag,
    color: '#34D399',
    tag: 'Commerce',
  },
  {
    title: 'API Development & Integration',
    description: 'Robust RESTful APIs and seamless third-party integrations — Stripe, Firebase, social logins, and beyond.',
    icon: TbApi,
    color: '#FB923C',
    tag: 'Backend',
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting, fast-loading landing pages tailored to your brand identity and marketing objectives.',
    icon: TbLayoutCards,
    color: '#A78BFA',
    tag: 'Marketing',
  },
  {
    title: 'Custom Website Development',
    description: 'Tailor-made web solutions built from scratch to solve unique business challenges with precision and care.',
    icon: TbDeviceDesktop,
    color: '#F472B6',
    tag: 'Full-Stack',
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 110, damping: 18 },
  },
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-28 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute top-20 left-1/4 w-[500px] h-[260px] rounded-full blur-[130px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #38BDF8, #A78BFA)' }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 w-[400px] h-[200px] rounded-full blur-[130px] opacity-[0.04]"
        style={{ background: '#34D399' }}
      />

      {/* ── Heading ── */}
      <motion.div
        className="mb-16 flex flex-col sm:flex-row sm:items-end gap-4"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-white/25 mb-1.5">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            What I{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #A78BFA88)' }}
            >
              Do
            </span>
          </h2>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-2" />
        <span className="hidden sm:block text-xs font-mono text-white/20 mb-2 shrink-0">
          {services.length} services
        </span>
      </motion.div>

      {/* ── Grid ── */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

// ─── Service card ──────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.025]
                 hover:border-white/[0.15] hover:bg-white/[0.045] transition-colors duration-300
                 overflow-hidden cursor-default flex flex-col"
    >
      {/* Radial glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: `radial-gradient(320px circle at 20% 0%, ${service.color}12, transparent 65%)`,
        }}
      />

      {/* Top row: icon + tag */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${service.color}15`, color: service.color }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-lg tracking-wide"
          style={{ background: `${service.color}12`, color: service.color }}
        >
          {service.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-white/90 mb-2.5 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-white/40 leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
        }}
        initial={{ width: 0, left: '50%' }}
        animate={inView ? { width: '100%', left: 0 } : {}}
        transition={{ duration: 0.85, ease: 'easeOut', delay: 0.2 + index * 0.05 }}
      />
    </motion.div>
  );
}