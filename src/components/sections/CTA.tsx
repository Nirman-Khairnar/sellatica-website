import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[40px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Premium gold border frame */}
          <div className="p-10 lg:p-16 rounded-2xl border border-[hsl(45_80%_60%/0.15)] glow-gold">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.1]">
              The cost of inaction is{' '}
              <span className="text-gold-gradient">compounding daily</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Every week without a unified system is another week of revenue leakage, 
              team burnout, and decisions made without data. Let's fix that.
            </p>

            <Link to="/contact">
              <Button size="lg" className="group text-base px-8 py-6 hover-glow-gold">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">What you get from our discovery call:</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)]" />
                Complimentary systems audit
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)]" />
                Custom ROI forecast
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)]" />
                Architecture blueprint
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)]" />
                Zero obligation
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
