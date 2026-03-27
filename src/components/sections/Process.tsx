import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    number: '01',
    title: 'AI Operations Diagnostic',
    duration: '45 minutes + 48 hr report',
    description: 'A focused session to identify exactly where your business is leaking revenue. You receive a written report with a clear, prioritised roadmap — delivered within 48 hours.',
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
            How We Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
            The path from visitor to result
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line for desktop */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/50 -z-10" />
              )}

              <div className="mb-6">
                <span className="font-display text-5xl lg:text-6xl font-medium text-muted-foreground/20">
                  {phase.number}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
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
