import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const caseStudies = [
  {
    industry: 'Legal firm, 42 attorneys',
    story: 'Their intake process was routing work through the managing partner for decisions that did not need to be there. It cost him 15 hours a week and created a bottleneck that slowed every case in the firm.',
    outcome: 'We redesigned how work was routed and who owned each decision. The bottleneck disappeared. Partner time was redirected to client work.',
    metrics: 'Revenue protected: $180K per year. Break-even: 3.3 weeks.',
  },
  {
    industry: 'Logistics operator, 23 trucks',
    story: 'Every driver called in for routing every morning. 50 calls per day, every day. The dispatcher could not handle anything else because the entire operation ran through one person\'s phone.',
    outcome: 'We built a clear decision layer so drivers could resolve 90% of situations without calling in. Dispatch capacity increased 40%.',
    metrics: 'Capacity increase: 40%. Coordination calls reduced: 78%.',
  },
];

const ClientResults = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" ref={ref} className="py-24 lg:py-32 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15]">
            What changes when you fix the systems.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border/50 p-8 lg:p-10 rounded-xl"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-6">
                {study.industry}
              </span>

              <p className="text-foreground leading-relaxed mb-6">
                {study.story}
              </p>

              <p className="text-foreground leading-relaxed mb-8">
                {study.outcome}
              </p>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-medium text-foreground">
                  {study.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
