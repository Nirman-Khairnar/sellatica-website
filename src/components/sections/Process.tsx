import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    number: '01',
    title: 'AI Operations Diagnostic',
    duration: '45 minutes + 48 hr written report',
    description: 'We identify where follow-up, approvals, reporting, and handoffs are leaking revenue, then rank the fixes by speed and financial impact.',
  },
  {
    number: '02',
    title: 'System Design',
    duration: 'Reserved for Diagnostic clients',
    description: 'We turn the findings into a decision-ready system: owner map, workflow rules, tool choices, rollout order, and operating constraints.',
  },
  {
    number: '03',
    title: 'Implementation',
    duration: 'Reserved for System Design clients',
    description: 'We implement the changes, train the team, and hand over a system your business can run without depending on us for every next step.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            The Engagement Path
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
            Diagnose first. Build second.
          </h2>
        </motion.div>

        <div className="grid gap-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border-l-2 border-border pl-8"
            >
              <div className="mb-4">
                <span className="font-display text-5xl lg:text-6xl font-medium text-muted-foreground/20">
                  {phase.number}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {phase.title}
                </h3>
              </div>
              <span className="text-xs text-muted-foreground mb-4 block">
                {phase.duration}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
