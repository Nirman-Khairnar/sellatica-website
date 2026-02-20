import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { trustPillars } from '@/content/siteContent';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-shell border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="surface relative overflow-hidden px-6 py-10 text-center sm:px-10"
        >
          <div className="floating-orb left-[-7rem] top-[-5rem] h-44 w-44 bg-primary/25" />
          <div className="floating-orb bottom-[-8rem] right-[-6rem] h-52 w-52 bg-accent/15" />

          <span className="text-kicker justify-center">Next Step</span>
          <h2 className="mt-4 text-fluid-heading font-semibold text-foreground">
            Ready to align your systems around one operating workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Start with a discovery call. We will review your current state, identify friction points,
            and propose a build sequence based on business impact.
          </p>

          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="group rounded-full px-8 text-base">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl gap-2 text-left sm:grid-cols-3">
            {trustPillars.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border/65 bg-background/65 px-3 py-2 text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
