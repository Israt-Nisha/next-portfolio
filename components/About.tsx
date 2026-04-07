"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiFirebase, SiMongodb } from 'react-icons/si';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

export default function About() {
  const tools = [
    { name: "VS Code", icon: <VscVscode className="w-6 h-6 text-blue-500" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-white" /> },
    { name: "Figma", icon: <FaFigma className="w-6 h-6 text-pink-500" /> },
    { name: "Firebase", icon: <SiFirebase className="w-6 h-6 text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text & Tools Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-200 text-lg leading-relaxed mb-12">
            I specialize in building robust, end-to-end applications with modern technologies like Next.js, Node.js, and TypeScript. From crafting responsive, type-safe front-end interfaces to designing high-performance back-end architectures, my focus is on delivering comprehensive full-stack solutions.
          </p>

          <div>
            <p className="text-white text-md mb-4 font-medium">Tools I use</p>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div 
                  key={tool.name}
                  className="w-14 h-14 bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-colors rounded-xl flex items-center justify-center cursor-pointer"
                  title={tool.name}
                >
                  {tool.icon}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Illustration Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
            alt="Developer Desk"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
