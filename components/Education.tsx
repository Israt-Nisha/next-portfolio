"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, BookOpen, ChevronDown, Building2, Award } from 'lucide-react';

// ─── Static education entries (no year) ──────────────────────────────────────
const staticEducation = [
  {
    degree: 'Bachelor of Social Science (BSS)',
    institution: portfolioData.education?.[0]?.institution ?? 'University Name',
    description: portfolioData.education?.[0]?.description ?? 'Studied core social science disciplines including sociology, political science, and economics. Developed strong analytical and research skills through coursework and thesis work.',
    iconName: 'GraduationCap' as const,
    color: '#38BDF8',
    grade: portfolioData.education?.[0]?.grade ?? 'CGPA 3.60 / 4.00',
    highlights: ['Major in Sociology & Political Science', 'Thesis in social research methodology', 'Dean\'s List recipient'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: portfolioData.education?.[1]?.institution ?? 'College Name',
    description: portfolioData.education?.[1]?.description ?? 'Completed Higher Secondary education under the Science group with outstanding results. Secured a strong academic foundation in core subjects.',
    iconName: 'BookOpen' as const,
    color: '#A78BFA',
    grade: portfolioData.education?.[1]?.grade ?? 'GPA 5.00 / 5.00',
    highlights: ['Humanities group', 'College merit scholarship', 'Top 1% in board results'],
  },
];

const iconMap = {
  GraduationCap,
  BookOpen,
};

export default function Education() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="education" className="relative py-28 px-4 max-w-5xl mx-auto overflow-hidden">
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute top-32 right-1/3 w-[500px] h-[280px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #38BDF8 0%, #818cf8 100%)' }}
      />

      {/* ── Heading ── */}
      <motion.div
        className="mb-16 flex items-end gap-6"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] font-semibold text-white/25 mb-1.5">
            Academic background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Educational{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #818cf888)' }}
            >
              Qualification
            </span>
          </h2>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-2" />
        <span className="hidden sm:block text-xs font-mono text-white/20 mb-2 shrink-0">
          {staticEducation.length} qualifications
        </span>
      </motion.div>

      {/* ── Cards ── */}
      <div className="space-y-3">
        {staticEducation.map((item, index) => (
          <EducationCard
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

// ─── Card ─────────────────────────────────────────────────────────────────────
function EducationCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof staticEducation)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const IconComponent = iconMap[item.iconName];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        onClick={onToggle}
        className={`
          group relative rounded-2xl border cursor-pointer overflow-hidden
          transition-all duration-300 select-none
          ${isOpen
            ? 'border-sky-400/25 bg-sky-400/[0.03]'
            : 'border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]'
          }
        `}
      >
        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] rounded-l-2xl"
          style={{ background: `linear-gradient(180deg, ${item.color}, ${item.color}44)` }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* ── Header ── */}
        <div className="flex items-center gap-4 px-6 py-5">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
            style={{
              background: isOpen ? `${item.color}20` : 'rgba(255,255,255,0.06)',
              color: isOpen ? item.color : 'rgba(255,255,255,0.35)',
            }}
          >
            <IconComponent className="w-4 h-4" />
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-bold text-white/90 truncate">{item.degree}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="flex items-center gap-1.5 text-sm text-white/40">
                <Building2 className="w-3 h-3 shrink-0" />
                {item.institution}
              </span>
            </div>
          </div>

          {/* Grade + chevron */}
          <div className="flex items-center gap-4 shrink-0">
            <span
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg"
              style={{ background: `${item.color}15`, color: item.color }}
            >
              <Award className="w-3 h-3" />
              {item.grade}
            </span>
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

                {/* Grade (mobile) */}
                <div className="flex sm:hidden items-center gap-1.5 mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <Award className="w-3 h-3" />
                    {item.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed mb-5">{item.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-xl border border-white/[0.07] text-white/35 bg-white/[0.03]"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: item.color }}
                      />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}