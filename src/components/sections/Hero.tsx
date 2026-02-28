import { motion } from 'framer-motion';
import { ArrowRight, Activity, Database, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background bg-blueprint border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-mono font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-sm w-fit mb-8 uppercase tracking-wider border border-accent/20"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              System Online // V.2026.1
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-foreground leading-[1.05]"
            >
              Business AI <br />
              <span className="text-secondary-foreground">Operating System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-muted-foreground text-sm mb-12 max-w-lg leading-relaxed border-l-2 border-accent/50 pl-4"
            >
              &gt; Turn operational chaos into predictable execution. <br />
              &gt; AI-native workflows built for enterprise scale. <br />
              &gt; Deploying proprietary intelligence layers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <Link to="/ai-os-audit" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-14 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                  Initialize Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-14 px-8 border-2 border-foreground hover:bg-foreground/5">
                  View Modules
                </Button>
              </Link>
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
                <div className="col-span-2 bg-card border border-border p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase mb-1 block">System Entropy</span>
                    <span className="font-display text-4xl font-bold tracking-tighter">0.04%</span>
                  </div>
                  <Activity className="w-8 h-8 text-accent opacity-50" />
                </div>

                {/* Status Box 1 */}
                <div className="bg-card border border-border p-4 shadow-sm">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase mb-3 block">Data Layer</span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center">
                      <Database className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-bold">SYNCED</span>
                      <span className="block font-mono text-[10px] text-muted-foreground">14ms latency</span>
                    </div>
                  </div>
                </div>

                {/* Status Box 2 */}
                <div className="bg-card border border-border p-4 shadow-sm">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase mb-3 block">Security</span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-bold">ACTIVE</span>
                      <span className="block font-mono text-[10px] text-muted-foreground">SOC2 Compliant</span>
                    </div>
                  </div>
                </div>

                {/* Workflow Animation Box */}
                <div className="col-span-2 bg-foreground text-background p-4 shadow-sm relative overflow-hidden">
                  <span className="font-mono text-[10px] text-background/50 uppercase mb-4 block">Active Workflows</span>

                  <div className="space-y-3">
                    <div className="h-6 w-full flex items-center gap-2">
                      <Zap className="w-3 h-3 text-accent" />
                      <div className="h-1 flex-1 bg-background/20 overflow-hidden">
                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full bg-accent" />
                      </div>
                    </div>
                    <div className="h-6 w-full flex items-center gap-2">
                      <Activity className="w-3 h-3 text-accent/50" />
                      <div className="h-1 flex-1 bg-background/20 overflow-hidden">
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
                <span>Agent Deployed</span>
              </div>
              <span className="text-muted-foreground text-[10px]">Processing 14k events/sec</span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
