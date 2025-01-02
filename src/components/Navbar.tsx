import React from 'react';
import { Zap } from 'lucide-react';
import { translations } from '../constants/translations';

export default function Navbar() {
  const { nav } = translations;
  
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-purple-500 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Y Kaya Elektro
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2">{nav.home}</a>
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2">{nav.services}</a>
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2">{nav.contact}</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}