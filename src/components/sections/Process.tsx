import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    duration: '1-2 weeks',
    description: 'Deep-dive into systems, workflows, and pain points. Data audit and architecture design with clear ROI projections.',
  },
  {
    number: '02',
    title: 'Build & Integration',
    duration: '4-10 weeks',
    description: 'Phased development with highest-impact modules first. Weekly demos and real-time collaboration.',
  },
  {
    number: '03',
    title: 'Deployment & Training',
    duration: '1-2 weeks',
    description: 'Staged rollout, team training, and comprehensive documentation. Performance monitoring and stabilization.',
  },
  {
    number: '04',
    title: 'Optimization & Scale',
    duration: 'Ongoing',
    description: 'System performance tracking, learning loops, and quarterly reviews. Support for scaling as your business grows.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Every Engagement is Custom-Designed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No fixed packages. Solutions tailored to your specific operational challenges 
            and business objectives.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < phases.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-px bg-border" />
              )}
              
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-secondary border border-border flex items-center justify-center">
                <span className="font-display text-sm font-semibold text-primary">{phase.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
