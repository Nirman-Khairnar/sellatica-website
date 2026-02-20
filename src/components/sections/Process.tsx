import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { processPhases } from '@/content/siteContent';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" ref={ref} className="section-shell border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-kicker">Execution model</span>
          <h2 className="text-fluid-heading mt-4 font-semibold text-foreground">
            A phased delivery sequence built for minimal operational disruption.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Each phase has explicit owners, outputs, and handoff criteria so teams know what changes and when.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processPhases.map((phase, index) => (
            <motion.article
              key={phase.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface relative h-full p-5"
            >
              {index < processPhases.length - 1 && (
                <span className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-border/70 lg:block" />
              )}

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{phase.timeline}</p>
              <h3 className="mt-3 text-2xl font-medium text-foreground">{phase.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
