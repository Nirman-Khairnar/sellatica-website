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
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.1]">
            Get your AI OS Blueprint in 7–10 days
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can turn your operational chaos into predictable
            execution with a custom AI OS designed for your specific challenges.
          </p>

          <Link to="/ai-os-audit">
            <Button size="lg" className="group">
              Book AI OS Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">What you get from the AI OS Audit:</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Workflow map
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                AI OS module backlog
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                ROI model
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Pilot plan
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
