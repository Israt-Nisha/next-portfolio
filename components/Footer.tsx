import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 mt-12 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Israt Nisha. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
