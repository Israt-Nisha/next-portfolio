"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Get In Touch</h2>
        <div className="h-[1px] w-full bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.a
          href={`mailto:${portfolioData.contact.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-400 text-sm">{portfolioData.contact.email}</p>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-4">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
          <p className="text-gray-400 text-sm">{portfolioData.contact.phone}</p>
        </motion.div>

        <motion.a
          href={`https://wa.me/${portfolioData.contact.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all hover:-translate-y-1"
        >
          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
          <p className="text-gray-400 text-sm">{portfolioData.contact.whatsapp}</p>
        </motion.a>
      </div>
    </section>
  );
}
