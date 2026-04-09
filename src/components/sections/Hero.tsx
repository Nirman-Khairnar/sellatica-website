import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { usePrice } from '@/hooks/usePrice';

const proofLines = [
  "312% ROI: 42-attorney firm. Break-even in 3.3 weeks.",
  "280% ROI: 18-person brokerage. Zero deals lost to slow response.",
  "78% call reduction: 23-truck logistics operation.",
  "410% ROI: 22-person agency. 50 pieces per week became 300.",
];

const Hero = () => {
  const [proofIndex, setProofIndex] = useState(0);
  const price = usePrice();

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

          {/* Left Column */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground leading-[1.05] uppercase"
            >
              REVENUE IS LEAKING THROUGH YOUR OPERATIONS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              We diagnose where follow-up, handoffs, approvals, and reporting are breaking down, quantify the cost, and deliver a written action plan within 48 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6"
            >
              <Link to="/diagnostic" className="w-full xl:w-auto" data-track="cta_clicked" data-track-props={JSON.stringify({ location: 'hero' })}>
                <Button size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-14 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                  Book AI Operations Diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="flex h-14 items-center px-4 font-mono text-xs border-2 border-border bg-card">
                {price.loading ? '...' : price.display}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-mono text-xs text-muted-foreground border-l-2 border-accent/50 pl-4 mb-8 space-y-2 flex flex-col"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-accent font-bold uppercase tracking-wider">{price.footer}</span>
              </div>
              <div>45 minutes. Written report in 48 hours. Refund if we cannot find $5,000 in recoverable waste.</div>
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

          {/* Right Column: Diagnostic Report Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-card border-2 border-border shadow-elevated overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <span className="ml-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Sellatica_Diagnostic_Report</span>
              </div>

              {/* Report Body */}
              <div className="flex-1 p-8 font-mono text-xs bg-blueprint space-y-6 overflow-auto">
                <div className="border border-border p-4 bg-card">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Report ID</p>
                  <p className="text-foreground font-bold">EST_144 // Real Estate Brokerage // 18 persons</p>
                </div>

                <div className="border border-border p-4 bg-card space-y-4">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Revenue Leak Identified</p>
                    <p className="text-foreground">$47,200/yr lost to manual follow-up delays on high-value leads.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Root Cause</p>
                    <p className="text-foreground">No ownership map. Leads routing through the MD with no response-time rule.</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Roadmap</p>
                    <p className="text-foreground">4 action items. Priority order. Week 1 executable without new tools.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-accent/30 p-4 bg-card">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Net ROI</p>
                    <p className="text-2xl font-bold text-foreground">280%</p>
                  </div>
                  <div className="border border-border p-4 bg-card">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Break-even</p>
                    <p className="text-2xl font-bold text-foreground">3.0 wks</p>
                  </div>
                </div>

                <div className="border border-border p-3 bg-card flex items-center justify-between">
                  <span className="text-muted-foreground">Report delivered</span>
                  <span className="text-accent font-bold">38 hrs after Diagnostic</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-card border border-border shadow-elevated p-4 font-mono text-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>4 clients. 4 sectors.</span>
              </div>
              <span className="text-muted-foreground text-[10px]">All results independently measurable.</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
