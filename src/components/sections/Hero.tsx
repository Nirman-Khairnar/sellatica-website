import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, Database, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const proofLines = [
  "312% ROI — 42-attorney firm. Break-even: 3.3 weeks.",
  "280% ROI — 18-person brokerage. Zero deals lost to slow response.",
  "78% call reduction — 23-truck logistics operation.",
  "410% ROI — 22-person agency: 50 pieces/week became 300.",
];

const Hero = () => {
  const [proofIndex, setProofIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % proofLines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background bg-blueprint border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground leading-[1.05]"
            >
              Your business is leaking revenue. <span className="text-secondary-foreground">I find it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              I find it — and give you the exact roadmap to stop it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6"
            >
              <Link to="/ai-os-audit" className="w-full sm:w-auto" data-track="cta_clicked" data-track-props={JSON.stringify({ location: 'hero' })}>
                <Button size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-14 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                  Book AI Operations Diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-mono text-xs text-muted-foreground border-l-2 border-accent/50 pl-4 mb-8 space-y-1"
            >
              <div>45 minutes. Written report in 48 hours.</div>
              <div className="text-accent font-bold">Guarantee: If I don't find $5,000+ in operational waste — you pay nothing.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 font-mono text-xs text-accent"
            >
              <span>&gt;</span>
              <div className="relative h-5 overflow-hidden flex-1">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={proofIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 whitespace-nowrap font-bold"
                  >
                    {proofLines[proofIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dashboard Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            {/* Main Terminal Window */}
            <div className="absolute inset-0 bg-card border-2 border-border shadow-elevated overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <span className="ml-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Sellatica_Orchestrator_v2</span>
              </div>

              {/* Window Body (Bento Layout) */}
              <div className="flex-1 p-6 grid grid-cols-2 gap-4 bg-blueprint">

                {/* Metric Box */}
                <div className="col-span-2 bg-card border border-border p-4 flex items-center justify-between group cursor-crosshair hover:border-accent/50 transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase mb-1 block group-hover:text-accent transition-colors">Avg. Client Break-even</span>
                    <span className="font-display text-4xl font-bold tracking-tighter">3.3 wks</span>
                  </div>
                  <Activity className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Status Box 1 */}
                <div className="bg-card border border-border p-4 group cursor-crosshair hover:border-accent/50 transition-colors">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase mb-3 block group-hover:text-accent transition-colors">Data Layer</span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                      <Database className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-bold text-foreground">SYNCED</span>
                      <span className="block font-mono text-[10px] text-muted-foreground">14ms latency</span>
                    </div>
                  </div>
                </div>

          {/* Status Box 2 */}
          <div className="bg-card border border-border p-4 group cursor-crosshair hover:border-accent/50 transition-colors">
            <span className="font-mono text-[10px] text-muted-foreground uppercase mb-3 block group-hover:text-accent transition-colors">Systems</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <ShieldCheck className="w-4 h-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-xs font-bold text-foreground">4</span>
                <span className="block font-mono text-[10px] text-muted-foreground">Clients in production</span>
              </div>
            </div>
          </div>

                {/* Workflow Animation Box */}
                <div className="col-span-2 bg-card border border-border p-4 relative overflow-hidden group cursor-crosshair hover:border-accent/50 transition-colors">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase mb-4 block group-hover:text-accent transition-colors">Active Workflows</span>

                  <div className="space-y-3">
                    <div className="h-6 w-full flex items-center gap-2">
                      <Zap className="w-3 h-3 text-accent" />
                      <div className="h-1 flex-1 bg-border overflow-hidden rounded-full">
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full bg-accent" />
                      </div>
                    </div>
                    <div className="h-6 w-full flex items-center gap-2">
                      <Activity className="w-3 h-3 text-accent/50" />
                      <div className="h-1 flex-1 bg-border overflow-hidden rounded-full">
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }} className="h-full bg-accent/50" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-card border border-border shadow-elevated p-4 font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>OS Running</span>
              </div>
              <span className="text-muted-foreground text-[10px]">4 clients. 4 sectors. All measurable.</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
