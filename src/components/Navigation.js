import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg">
              CS
            </div>
            <span className="hidden sm:block font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Charan Sai
            </span>
          </div>
          <div className="flex gap-6 md:gap-8">
            <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
