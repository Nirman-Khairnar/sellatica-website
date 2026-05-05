import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PalantirIndex = () => {
  const [bootText, setBootText] = useState<string[]>([]);
  const bootSequence = [
    "[SYSTEM INITIALIZATION]",
    "ESTABLISHING SECURE UPLINK... OK",
    "LOADING DIAGNOSTIC MODULES... OK",
    "SELLATICA AI OS ONLINE."
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
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Background Grid - Very subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 border-b border-[#222] bg-[#050505]/90 backdrop-blur-sm">
        <div className="text-xl font-bold tracking-widest text-white">SELLATICA<span className="text-[#666] ml-2 text-sm">OS</span></div>
        <div className="hidden md:flex gap-12 text-xs tracking-[0.2em] text-[#888] font-mono">
          <a href="#platform" className="hover:text-white transition-colors">PLATFORM</a>
          <a href="#diagnostic" className="hover:text-white transition-colors">DIAGNOSTIC</a>
          <a href="#impact" className="hover:text-white transition-colors">IMPACT</a>
        </div>
        <div className="text-xs font-mono tracking-widest px-6 py-2 border border-[#444] text-white hover:bg-white hover:text-black transition-all cursor-pointer">
          BOOK DIAGNOSTIC
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-8 max-w-7xl mx-auto space-y-32 pb-32">
        
        {/* Section 1: Hero */}
        <section className="min-h-[80vh] flex flex-col justify-center border-l border-[#222] pl-8 lg:pl-16 relative">
          {/* Decorative Terminal Line */}
          <div className="absolute top-0 left-[-4px] w-[8px] h-[8px] bg-white"></div>
          
          <div className="mb-8 font-mono text-xs text-[#666] uppercase tracking-[0.2em] flex flex-col gap-2 h-20">
            {bootText.map((line, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{`> ${line}`}</motion.div>
            ))}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] uppercase max-w-5xl mb-8"
          >
            Revenue is leaking through your operations.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="text-[#888] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light"
          >
            We diagnose where follow-up, handoffs, approvals, and reporting are breaking down, quantify the cost, and deliver a written action plan within 48 hours.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="w-full sm:w-auto bg-white text-black font-mono text-xs font-bold tracking-[0.15em] px-10 py-5 hover:bg-[#ccc] transition-colors uppercase">
              Deploy Diagnostic Module
            </button>
            <div className="font-mono text-xs text-[#666] tracking-widest flex items-center gap-4">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              $5,000 WASTE IDENTIFICATION GUARANTEE
            </div>
          </motion.div>
        </section>

        {/* Section 2: Problem Data Grid */}
        <section id="impact" className="border-t border-[#222] pt-32">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="font-mono text-xs text-[#666] tracking-[0.2em] mb-6 uppercase">SYSTEM_ANALYSIS</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 uppercase">The tool is rarely the problem.</h2>
              <p className="text-[#888] leading-relaxed mb-8">
                The break usually happens underneath the tool: no clear owner, no response-time rule, no clean handoff, and no automatic next step. AI does not fix that by itself. 
                <span className="text-white block mt-4 font-medium">It exposes it.</span>
              </p>
              
              <div className="space-y-4 border-l border-[#333] pl-6 font-mono text-sm text-[#888]">
                <div className="flex gap-4"><span className="text-white">01</span> Follow-up depends on one busy person</div>
                <div className="flex gap-4"><span className="text-white">02</span> Approvals and updates live in inboxes</div>
                <div className="flex gap-4"><span className="text-white">03</span> Reporting is manual, delayed, or both</div>
                <div className="flex gap-4"><span className="text-white">04</span> Growth adds headcount before it adds control</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '50/day', label: 'Dispatch Calls', desc: 'Manual coordination overhead.' },
                { stat: '4 hrs', label: 'Lead Response Lag', desc: 'High-value inquiries going cold.' },
                { stat: '15 hrs/wk', label: 'Partner Admin Load', desc: 'Trapped in intake and review loops.' },
                { stat: '48 hrs', label: 'To A Fix Plan', desc: 'Ranked action roadmap delivery.' }
              ].map((item, i) => (
                <div key={i} className="border border-[#222] bg-[#0a0a0a] p-8 flex flex-col justify-between group hover:border-[#555] transition-colors">
                  <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">{item.stat}</div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[#888] uppercase mb-2 group-hover:text-white transition-colors">{item.label}</div>
                    <div className="text-[#555] text-xs font-mono">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: The Service / Diagnostic */}
        <section id="diagnostic" className="border border-[#222] bg-[#0a0a0a] p-8 md:p-16 relative">
          {/* Abstract Data Viz element */}
          <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-[#222] opacity-50 hidden lg:flex items-center justify-center">
             <div className="w-32 h-32 border border-[#444] rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute w-16 h-16 border border-[#666] rounded-full"></div>
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="font-mono text-xs text-white bg-[#222] inline-block px-3 py-1 mb-8 tracking-[0.2em]">OPERATIONAL_PROTOCOL</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 uppercase">Start with the Diagnostic.</h2>
            <p className="text-[#888] text-lg mb-12 font-light">
              One focused session to find where follow-up, handoffs, approvals, and reporting are costing you money. You get a written report with the highest-value fixes ranked in order.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-16 font-mono text-sm text-[#aaa]">
              <div className="flex items-center gap-4 border-b border-[#222] pb-4">
                <div className="w-1.5 h-1.5 bg-white"></div> Revenue leakage map
              </div>
              <div className="flex items-center gap-4 border-b border-[#222] pb-4">
                <div className="w-1.5 h-1.5 bg-white"></div> Bottleneck priority list
              </div>
              <div className="flex items-center gap-4 border-b border-[#222] pb-4">
                <div className="w-1.5 h-1.5 bg-white"></div> 90-day action roadmap
              </div>
              <div className="flex items-center gap-4 border-b border-[#222] pb-4">
                <div className="w-1.5 h-1.5 bg-white"></div> Written report in 48 hours
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-[#222] pt-8">
              <div className="flex-1">
                <div className="font-mono text-[10px] text-[#666] tracking-[0.2em] mb-2 uppercase">Service Guarantee</div>
                <div className="text-sm">If we do not identify at least $5,000 in recoverable annual waste, we refund the fee.</div>
              </div>
              <div className="w-px h-12 bg-[#222] hidden sm:block"></div>
              <div className="text-center sm:text-right">
                <div className="font-mono text-[10px] text-[#666] tracking-[0.2em] mb-2 uppercase">Execution Time</div>
                <div className="font-mono text-xl text-white">45 MIN</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#222] bg-black py-8 px-8 font-mono text-xs text-[#555] flex justify-between items-center flex-col sm:flex-row gap-4">
        <div>SELLATICA_OS // VERSION_4.2.9</div>
        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer transition-colors">SECURE_LOGIN</span>
          <span className="hover:text-white cursor-pointer transition-colors">SYSTEM_STATUS</span>
        </div>
      </footer>
    </div>
  );
};

export default PalantirIndex;
