import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Search } from 'lucide-react';
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
            className="max-w-2xl"
          >
            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              How We Start
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              One offer. <br /> One guarantee.
            </h2>
          </motion.div>
        </div>

        {/* Single Public Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border-2 border-accent/30 shadow-sm p-8 lg:p-12 relative overflow-hidden group hover:border-accent/60 transition-colors"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Search className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 border border-accent/20">
                    Rs. 7,999 / ~$97
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold tracking-tight mb-4">AI Operations Diagnostic</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8 max-w-lg">
                  A focused 45-minute session where our consultants analyse your operations and identify exactly where revenue is leaking. You walk away with a written report and a clear roadmap delivered within 48 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span>Revenue leakage identification</span>
                    </li>
                    <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span>Operational bottleneck map</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span>Prioritised action roadmap</span>
                    </li>
                    <li className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                      <span>Written report in 48 hours</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted border border-border p-4 font-mono text-xs text-accent font-bold">
                  Guarantee: If we do not find $5,000+ in operational waste, you pay nothing.
                </div>
              </div>

              <div className="lg:w-64 flex-shrink-0 flex flex-col items-start lg:items-end gap-4 lg:pt-16">
                <div className="w-full lg:w-auto text-center lg:text-right">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">Duration</span>
                  <span className="font-display text-2xl font-bold text-foreground">45 minutes</span>
                </div>
                <div className="w-full lg:w-auto text-center lg:text-right">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">Report Delivery</span>
                  <span className="font-display text-2xl font-bold text-foreground">48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-card border-2 border-border p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse hidden sm:block" />
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              45 min. Written report. Guaranteed.
            </p>
          </div>
          <Link to="/ai-os-audit" className="w-full sm:w-auto" data-track="cta_clicked" data-track-props={JSON.stringify({ location: 'services_footer' })}>
            <Button size="lg" className="w-full sm:w-auto rounded-none font-mono tracking-wide uppercase text-xs h-12 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
              Book AI Operations Diagnostic
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
