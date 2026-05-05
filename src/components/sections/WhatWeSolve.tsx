import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    title: 'Too much manual work',
    body: 'Your team is spending hours on tasks that should take minutes. Reports built by hand, follow-ups done manually, information scattered across five different tools. Every hour spent on this is an hour not spent on the work that grows the business.',
  },
  {
    title: 'Slow response, lost revenue',
    body: 'Leads go cold. Clients wait. Requests fall through the gaps between your team members. Most of the time it is not a people problem — it is a systems problem. Fixing the system fixes the result.',
  },
  {
    title: 'Growth that creates chaos',
    body: 'Every time the business grows, the workload grows faster. You hire more people to manage the same problems. At some point, growth has to come from better systems, not more headcount.',
  },
];

const WhatWeSolve = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15]">
            These are the problems we actually fix.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
