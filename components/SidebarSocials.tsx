import React from 'react';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function SidebarSocials() {
  return (
    <div className="fixed left-6 bottom-0 z-40 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-400 after:mt-2">
      <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <Twitter className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
        <Facebook className="w-5 h-5" />
        <span className="sr-only">Facebook</span>
      </Link>
    </div>
  );
}
