import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PalantirPrototype = () => {
  const [bootText, setBootText] = useState<string[]>([]);
  const bootSequence = [
    "[SYSTEM INITIALIZATION STARTED]",
    "LOADING KERNEL MODULES... OK",
    "MOUNTING DATA VOLUMES... OK",
    "ESTABLISHING NEURAL UPLINK... OK",
    "SELLATICA AI OS [VERSION 4.2.9] ONLINE",
    "AWAITING COMMAND..."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setBootText((prev) => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Radar/Node mock background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-900/30 rounded-full flex items-center justify-center pointer-events-none opacity-50">
        <div className="w-[600px] h-[600px] border border-cyan-900/40 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[400px] h-[400px] border border-cyan-900/50 rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="text-xl font-bold tracking-[0.2em] text-cyan-400">SELLATICA<span className="text-white/50 text-sm ml-2">OS</span></div>
        <div className="flex gap-8 text-xs tracking-widest text-white/70">
          <a href="#" className="hover:text-cyan-400 transition-colors">MODULES</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">DATA</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">INTELLIGENCE</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">SYSTEM</a>
        </div>
        <div className="text-xs tracking-widest px-4 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 cursor-pointer transition-colors">
          INITIALIZE
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col md:flex-row h-[calc(100vh-80px)]">
        
        {/* Left Sidebar - Terminal */}
        <div className="w-full md:w-1/3 border-r border-white/10 p-6 flex flex-col justify-end bg-black/40 backdrop-blur-sm">
          <div className="text-xs text-cyan-500/70 mb-4 tracking-widest">SYSTEM_LOG //</div>
          <div className="space-y-2 text-xs md:text-sm text-green-400">
            {bootText.map((line, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className={i === bootSequence.length - 1 ? "animate-pulse" : ""}
              >
                &gt; {line}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 p-12 flex flex-col justify-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-5xl md:text-7xl font-light tracking-tighter mb-6"
          >
            ENTERPRISE <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              INTELLIGENCE.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-white/60 max-w-md text-sm md:text-base tracking-wide leading-relaxed"
          >
            Deploy the Sellatica AI OS. Unify your data architecture, automate complex operational workflows, and deploy sovereign agents to scale your infrastructure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 flex gap-4"
          >
            <button className="bg-cyan-900/40 border border-cyan-500 text-cyan-400 px-8 py-3 text-sm tracking-widest hover:bg-cyan-900/60 transition-colors">
              DEPLOY SYSTEM
            </button>
            <button className="border border-white/20 text-white/80 px-8 py-3 text-sm tracking-widest hover:bg-white/10 transition-colors">
              VIEW ARCHITECTURE
            </button>
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default PalantirPrototype;
