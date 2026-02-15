import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    duration: '1-2 weeks',
    description: 'Deep-dive into your systems, workflows, and pain points. We quantify every inefficiency and deliver a clear architecture plan with ROI projections.',
  },
  {
    number: '02',
    title: 'Build & Integration',
    duration: '4-10 weeks',
    description: 'Highest-impact modules ship first. Weekly demos, real-time collaboration, and zero surprises along the way.',
  },
  {
    number: '03',
    title: 'Deployment & Training',
    duration: '1-2 weeks',
    description: 'Staged rollout with zero disruption. Your team gets hands-on training and documentation they\'ll actually reference.',
  },
  {
    number: '04',
    title: 'Optimization & Scale',
    duration: 'Ongoing',
    description: 'Performance tracking, AI model tuning, and quarterly reviews. Architecture that evolves with your next growth phase.',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 lg:py-32 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-6"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
            From chaos to clarity{' '}
            <span className="text-muted-foreground">in four phases</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-16 max-w-2xl"
        >
          No bloated timelines. No scope creep. Every engagement follows a battle-tested 
          framework designed to deliver value fast.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group p-6 rounded-xl hover:bg-card/50 transition-all duration-300"
            >
              {/* Gold connecting line for desktop */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[hsl(45_80%_60%/0.3)] to-transparent -z-10" />
              )}
              
              <div className="mb-6">
                <span className="font-display text-5xl lg:text-6xl font-medium text-gold-gradient">
                  {phase.number}
                </span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {phase.title}
                </h3>
              </div>
              <span className="text-xs text-[hsl(45_80%_60%/0.7)] mb-4 block">
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
