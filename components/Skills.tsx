"use client";

import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

// ─── Extended portfolio data with fullstack skills ───────────────────────────
const skillsData = {
  frontend: [
    { name: 'React', iconName: 'Atom', level: 92, color: '#61DAFB' },
    { name: 'Next.js', iconName: 'Zap', level: 88, color: '#ffffff' },
    { name: 'TypeScript', iconName: 'FileCode2', level: 85, color: '#3178C6' },
    { name: 'Tailwind CSS', iconName: 'Wind', level: 90, color: '#38BDF8' },
    { name: 'Framer Motion', iconName: 'Sparkles', level: 78, color: '#BB4FFF' },
  ],
  backend: [
    { name: 'Node.js', iconName: 'Server', level: 87, color: '#68A063' },
    { name: 'Express', iconName: 'GitBranch', level: 84, color: '#ffffff' },
    { name: 'REST APIs', iconName: 'Network', level: 90, color: '#FF6B6B' },
  ],
  database: [
    { name: 'PostgreSQL', iconName: 'Database', level: 82, color: '#336791' },
    { name: 'MongoDB', iconName: 'Layers', level: 85, color: '#47A248' },
    { name: 'Prisma ORM', iconName: 'Triangle', level: 80, color: '#5A67D8' },
  ],
  devops: [
    { name: 'Docker', iconName: 'Container', level: 75, color: '#2496ED' },
    { name: 'Git & GitHub', iconName: 'GitMerge', level: 92, color: '#F05032' },
    { name: 'CI/CD', iconName: 'RefreshCw', level: 70, color: '#4CAF50' },
  ],
};

const categories = [
  { key: 'frontend', label: 'Frontend', icon: 'Monitor', accent: '#38BDF8' },
  { key: 'backend', label: 'Backend', icon: 'ServerCog', accent: '#A78BFA' },
  { key: 'database', label: 'Database', icon: 'Database', accent: '#34D399' },
  { key: 'devops', label: 'DevOps', icon: 'Cpu', accent: '#FB923C' },
] as const;

// ─── Variants ────────────────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

// ─── Animated progress bar ───────────────────────────────────────────────────
function SkillBar({ level, color }: { level: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="w-full h-[3px] mt-3 rounded-full overflow-hidden bg-white/10">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
    </div>
  );
}

// ─── Single skill card ───────────────────────────────────────────────────────
function SkillCard({
  skill,
  accent,
}: {
  skill: { name: string; iconName: string; level: number; color: string };
  accent: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[skill.iconName] || Icons.Code;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative p-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm
                 hover:border-white/20 hover:bg-white/[0.07] transition-colors duration-300 cursor-default overflow-hidden"
    >
      {/* Glow orb on hover */}
      <div
        className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
        style={{ background: skill.color }}
      />

      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${skill.color}18`, color: skill.color }}
        >
          <IconComponent className="w-4 h-4" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold text-white/90 truncate">{skill.name}</span>
            <span
              className="text-[11px] font-mono font-bold shrink-0"
              style={{ color: skill.color }}
            >
              {skill.level}%
            </span>
          </div>
          <SkillBar level={skill.level} color={skill.color} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Category tab button ─────────────────────────────────────────────────────
function TabButton({
  cat,
  active,
  onClick,
}: {
  cat: (typeof categories)[number];
  active: boolean;
  onClick: () => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[cat.icon] || Icons.Code;
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      style={{
        color: active ? cat.accent : 'rgba(255,255,255,0.45)',
        background: active ? `${cat.accent}14` : 'transparent',
      }}
    >
      <IconComponent className="w-4 h-4" />
      {cat.label}
      {active && (
        <motion.div
          layoutId="tab-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
          style={{ background: cat.accent }}
        />
      )}
    </button>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function Skills() {
  const [activeTab, setActiveTab] = React.useState<(typeof categories)[number]['key']>('frontend');

  const activeCat = categories.find((c) => c.key === activeTab)!;
  const activeSkills = skillsData[activeTab];

  return (
    <section
      id="skills"
      className="relative py-28 px-4 max-w-5xl mx-auto"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-24 left-1/3 w-80 h-80 rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: activeCat.accent }}
        />
      </div>

      {/* Heading */}
      <motion.div
        className="flex items-center gap-5 mb-14"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-white/30 mb-1">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Skills &{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${activeCat.accent}, ${activeCat.accent}88)`,
              }}
            >
              Technologies
            </span>
          </h2>
        </div>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </motion.div>

      {/* Tab bar */}
      <motion.div
        className="flex flex-wrap gap-1 mb-8 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.07] w-fit"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {categories.map((cat) => (
          <TabButton
            key={cat.key}
            cat={cat}
            active={activeTab === cat.key}
            onClick={() => setActiveTab(cat.key)}
          />
        ))}
      </motion.div>

      {/* Stats bar */}
      <motion.div
        key={activeTab + '-stats'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-6 mb-8"
      >
        <span className="text-xs text-white/30 font-mono">
          {activeSkills.length} skills ·{' '}
          avg{' '}
          {Math.round(activeSkills.reduce((s, sk) => s + sk.level, 0) / activeSkills.length)}%
          proficiency
        </span>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      {/* Skill grid */}
      <motion.div
        key={activeTab}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} accent={activeCat.accent} />
        ))}
      </motion.div>

      {/* Legend dots */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {[
          { label: 'Familiar (60–74%)', opacity: 'opacity-40' },
          { label: 'Proficient (75–84%)', opacity: 'opacity-65' },
          { label: 'Advanced (85%+)', opacity: 'opacity-90' },
        ].map(({ label, opacity }) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-2.5 h-2.5 rounded-full ${opacity}`}
              style={{ background: activeCat.accent }}
            />
            <span className="text-[11px] text-white/30">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}