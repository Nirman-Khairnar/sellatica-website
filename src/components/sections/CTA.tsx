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
    <section ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.15]">
            Ready to see what we would fix in your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Book a Strategy Review. 45 minutes, a clear written plan, and a direct answer on whether working with Sellatica makes sense for you.
          </p>

          <Link
            to="/contact"
            data-track="cta_clicked"
            data-track-props={JSON.stringify({ location: 'bottom_cta' })}
          >
            <Button size="lg" className="group text-base px-8 h-14">
              Book Your Strategy Review
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
