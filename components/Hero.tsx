"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-block relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#1e293b] shadow-2xl mx-auto">
            <Image
              src="/profile.png"
              alt="Israt Nisha"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl font-semibold text-white mb-4"
        >
          Israt Nisha
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
        >
          Hi, I'm Nisha, a Full Stack Developer specializing in Next.js and TypeScript. I am passionate about building scalable, fast, and type-safe applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 px-8 py-3 rounded-md bg-transparent border border-white/20 text-white hover:bg-white/5 transition-colors font-medium text-sm w-full sm:w-auto justify-center"
          >
            Contact me <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors font-medium text-sm w-full sm:w-auto justify-center"
          >
            My Resume <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
