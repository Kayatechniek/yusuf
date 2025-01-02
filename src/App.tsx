import React from 'react';
import { Zap } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;