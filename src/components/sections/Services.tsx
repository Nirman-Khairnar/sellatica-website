import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Search, Cog, TrendingUp, Cpu, GitMerge } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-background bg-blueprint border-t border-border/50 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8"
          >
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Service Architecture
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
                Execute the <br /> Operating System
              </h2>
            </div>
            <Link
              to="/services"
              className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              View Full Specs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(300px,auto)]">

          {/* Card 1: Audit (Large, Spans 2 Col, 2 Row on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-card border-2 border-border shadow-sm p-8 lg:p-12 relative overflow-hidden group hover:border-accent/30 transition-colors"
          >
            {/* Background Graphic */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Search className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1">Phase 01</span>
              </div>

              <h3 className="font-display text-3xl font-bold tracking-tight mb-4">AI OS Audit</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-lg">
                We begin with a deep-dive diagnostic of your workflows. Our team identifies bottlenecks, integration gaps, and high-impact automation opportunities to create a rigorous architectural roadmap.
              </p>

              <div className="mt-auto grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                    <span>Global workflow mapping</span>
                  </li>
                  <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                    <span>Integration gap analysis</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                    <span>Custom OS module backlog</span>
                  </li>
                  <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                    <span>Defensible ROI projections</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Pilot (Small, Spans 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-border shadow-sm p-8 relative overflow-hidden group hover:border-accent/30 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center border border-border">
                <Cog className="w-4 h-4 text-foreground" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1">Phase 02</span>
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight mb-3">Pilot Module</h3>
            <p className="text-muted-foreground font-mono text-xs leading-relaxed mb-6">
              Execute the build for 1-2 modules end-to-end. Connect fragmented tools and deploy custom AI agents.
            </p>

            <div className="mt-auto">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-foreground block mb-2">Deliverables:</span>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground"><GitMerge className="w-3 h-3" /> API Integration</li>
                <li className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground"><Cpu className="w-3 h-3" /> Custom Automation</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Partner (Small, Spans 1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-foreground text-background shadow-sm p-8 relative overflow-hidden group flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-background" />
              </div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-background/50 bg-background/10 px-2 py-1">Phase 03</span>
            </div>

            <h3 className="font-display text-xl font-bold tracking-tight mb-3">AI OS Partner</h3>
            <p className="text-background/70 font-mono text-xs leading-relaxed mb-6">
              Ongoing governance and iteration. The adaptive OS gets smarter with use, compounding value over time.
            </p>

            <div className="mt-auto pt-6 border-t border-background/20">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-background/50">Engagement</span>
                <span className="font-mono text-xs font-bold text-accent">Monthly Retainer</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-card border-2 border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse hidden sm:block" />
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Every deployment begins with an Audit.
            </p>
          </div>
          <Link to="/ai-os-audit" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-12 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
              Initialize Audit Pipeline
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
