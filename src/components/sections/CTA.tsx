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
            Start Here
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-[1.1]">
            Book Your AI Operations Diagnostic
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            45 minutes. I'll show you exactly where your business is leaking revenue and give you a written roadmap to fix it — delivered within 48 hours.
          </p>

          <Link to="/ai-os-audit" data-track="cta_clicked" data-track-props={JSON.stringify({ location: 'bottom_cta' })}>
            <Button size="lg" className="group">
              Book AI Operations Diagnostic
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
            <p className="text-sm text-muted-foreground mb-6">What you get from the Diagnostic:</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Revenue leakage identified
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Prioritised action roadmap
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Written report in 48 hrs
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-foreground" />
                Money-back guarantee
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
