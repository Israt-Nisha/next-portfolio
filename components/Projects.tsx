"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

// ─── Variants ────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
};

// ─── Accent colours cycling per card ─────────────────────────────────────────
const ACCENTS = ['#38BDF8', '#A78BFA', '#34D399', '#FB923C', '#F472B6', '#FBBF24'];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full blur-[130px] opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #38BDF8 0%, #A78BFA 100%)' }}
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
            Selected work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Featured{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #38BDF8, #A78BFA88)' }}
            >
              Projects
            </span>
          </h2>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent mb-2" />
        <span className="hidden sm:block text-xs font-mono text-white/20 mb-2 shrink-0">
          {portfolioData.projects.length} projects
        </span>
      </motion.div>

      {/* ── Grid ── */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {portfolioData.projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            accent={ACCENTS[index % ACCENTS.length]}
          />
        ))}
      </motion.div>
    </section>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  accent,
}: {
  project: (typeof portfolioData.projects)[number];
  accent: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025]
                 overflow-hidden hover:border-white/20 transition-colors duration-300"
    >
      {/* Glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${accent}0d, transparent 70%)`,
        }}
      />

      {/* ── Image ── */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/30 to-transparent" />

        {/* Accent tag top-left */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide backdrop-blur-sm"
          style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
        >
          {project.category ?? 'Project'}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[15px] font-bold text-white/90 leading-snug">{project.title}</h3>
          <Link
            href={`/projects/${project.slug}`}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                       border border-white/[0.08] text-white/25 bg-white/[0.03]
                       hover:border-white/25 hover:text-white/70 hover:bg-white/[0.06]
                       transition-all duration-200"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Description */}
        <p className="text-xs text-white/40 leading-relaxed flex-1 mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.slice(0, 4).map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md border border-white/[0.07] text-white/30 bg-white/[0.02]"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 rounded-md text-white/20">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
            style={{ color: accent }}
          >
            View details
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}
        </div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        initial={{ width: 0, left: '50%' }}
        animate={inView ? { width: '100%', left: 0 } : {}}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
      />
    </motion.div>
  );
}