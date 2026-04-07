"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  if (!portfolioData.experience || portfolioData.experience.length === 0) return null;

  return (
    <section id="experience" className="relative py-28 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Ambient background orb */}
      <div
        className="pointer-events-none absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #f97316 0%, #fb923c 100%)' }}
      />

      {/* ── Heading ─────────────────────────────────────────── */}
      <motion.div
        className="mb-16 flex items-end gap-6"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-white/25 mb-1.5">
            Work history
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Professional{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fb923c88)' }}
            >
              Experience
            </span>
          </h2>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-2" />
        <span className="hidden sm:block text-xs font-mono text-white/20 mb-2 shrink-0">
          {portfolioData.experience.length} role{portfolioData.experience.length !== 1 ? 's' : ''}
        </span>
      </motion.div>

      {/* ── Cards ───────────────────────────────────────────── */}
      <div className="space-y-3">
        {portfolioData.experience.map((item, index) => (
          <ExperienceCard
            key={index}
            item={item}
            index={index}
            isOpen={expanded === index}
            onToggle={() => setExpanded(expanded === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────
interface ExperienceItem {
  duration: string;
  role: string;
  company: string;
  description: string;
  location?: string;
  type?: string;
  tags?: string[];
}

// ─── Individual card ─────────────────────────────────────────────────────────
function ExperienceCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        onClick={onToggle}
        className={`
          group relative rounded-2xl border cursor-pointer overflow-hidden
          transition-all duration-300 select-none
          ${isOpen
            ? 'border-orange-500/30 bg-orange-500/[0.04]'
            : 'border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]'
          }
        `}
      >
        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-2xl"
          style={{ background: 'linear-gradient(180deg, #f97316, #fb923c44)' }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* ── Header row ── */}
        <div className="flex items-center gap-4 px-6 py-5">
          {/* Icon */}
          <div
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center shrink-0
              transition-all duration-300
              ${isOpen
                ? 'bg-orange-500/20 text-orange-400'
                : 'bg-white/[0.06] text-white/40 group-hover:text-orange-400/70'
              }
            `}
          >
            <Briefcase className="w-4 h-4" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
              <h3 className="text-[15px] font-bold text-white/90 truncate">{item.role}</h3>
              {item.type && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-orange-500/10 text-orange-400 shrink-0">
                  {item.type}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="text-sm text-white/45 font-medium">{item.company}</span>
              {item.location && (
                <span className="flex items-center gap-1 text-xs text-white/25">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
              )}
            </div>
          </div>

          {/* Duration + chevron */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-white/30">
              <Calendar className="w-3 h-3" />
              {item.duration}
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-white/20 group-hover:text-white/40 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* ── Expandable body ── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                {/* Divider */}
                <div className="h-px w-full bg-white/[0.06] mb-5" />

                {/* Duration on mobile */}
                <div className="flex sm:hidden items-center gap-1.5 text-xs font-mono text-white/30 mb-4">
                  <Calendar className="w-3 h-3" />
                  {item.duration}
                </div>

                {/* Description */}
                <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>

                {/* Skill tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.07] text-white/35 bg-white/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}