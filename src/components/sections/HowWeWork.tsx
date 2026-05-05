import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Strategy Review',
    body: 'We spend 45 minutes looking at how your business actually runs. We tell you what is broken, what is costing you, and what to fix first. You leave with a written action plan, whether or not you work with us after.',
  },
  {
    number: '02',
    title: 'Systems Design',
    body: 'For clients who want to go further. We work directly with your team to design the systems and workflows that solve the problems we identified. No vague recommendations. A specific, buildable plan.',
  },
  {
    number: '03',
    title: 'Implementation',
    body: 'We build the systems. Everything runs on your infrastructure. You own it fully with no vendor lock-in and no ongoing dependency on Sellatica unless you choose to keep us.',
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-we-work" ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15]">
            Three ways we work with clients.
          </h2>
        </motion.div>

        <div className="grid gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <div className="lg:col-span-1">
                <span className="font-display text-4xl lg:text-5xl font-medium text-border">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-11 max-w-2xl">
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
