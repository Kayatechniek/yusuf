import React from 'react';
import { Zap } from 'lucide-react';
import ThunderEffect from './ThunderEffect';
import { heroBackground } from '../assets/hero-bg';
import { translations } from '../constants/translations';

export default function Hero() {
  const { hero } = translations;
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black opacity-80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.2) contrast(1.1)'
          }}
        ></div>
      </div>

      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      <ThunderEffect />

      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-8">
          <Zap className="w-20 h-20 text-yellow-300 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-title">
          <span className="bg-gradient-to-r from-yellow-300 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            {hero.title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeIn">
          {hero.subtitle}
        </p>
        <button className="bg-gradient-to-r from-yellow-300 via-purple-400 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform animate-bounce shadow-lg hover:shadow-purple-500/50">
          {hero.cta}
        </button>
      </div>
    </div>
  );
}