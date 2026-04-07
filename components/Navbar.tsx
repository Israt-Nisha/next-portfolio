import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
        Nisha<span className="text-blue-500">.</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="md:hidden">
        {/* Simple mobile menu indicator or could add a hamburger here later */}
        <span className="text-gray-400 text-sm">Menu</span>
      </div>
    </nav>
  );
}
