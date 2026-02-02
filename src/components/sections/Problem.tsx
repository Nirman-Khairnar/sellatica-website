import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    stat: '89%',
    label: 'Adopt AI Tools',
    description: 'But only 51% achieve expected outcomes',
  },
  {
    stat: '6-15',
    label: 'Disconnected Systems',
    description: 'Data scattered across tools that don\'t talk to each other',
  },
  {
    stat: '82%',
    label: 'Integration Struggles',
    description: 'Data quality and integration blocking progress',
  },
  {
    stat: '$400K+',
    label: 'Annual Revenue Leakage',
    description: 'Lost to operational inefficiencies',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              The Problem
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.1]">
              Tech adoption ≠ tech value
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Most organizations invest heavily in technology but struggle to move 
              beyond pilots to production systems that deliver real business outcomes.
            </p>
            
            {/* Business Impact */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                The Business Impact
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Revenue leakage from slow response times
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Cash flow surprises from invisible receivables
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Team burnout from constant firefighting
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Growth paralysis without proportional hiring
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-colors"
              >
                <span className="font-display text-3xl lg:text-4xl font-medium text-foreground block mb-2">
                  {problem.stat}
                </span>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {problem.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
