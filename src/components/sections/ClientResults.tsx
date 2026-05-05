import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const caseStudies = [
  {
    industry: 'Legal firm, 42 attorneys',
    story: 'Their intake process was routing every decision through the managing partner, even when it did not need to be there. It cost him 15 hours a week and created a single point of failure that slowed every case in the firm.',
    outcome: 'We redesigned how work was routed and who owned each decision. The constraint disappeared. Partner time was redirected to client work.',
    metrics: '$180K in annual revenue protected. Break-even: 3.3 weeks.',
  },
  {
    industry: 'Logistics operator, 23 trucks',
    story: 'Every driver called in for routing every morning. 50 calls per day, every day. The dispatcher could not handle anything else because the entire operation ran through one person\'s phone.',
    outcome: 'We built a clear decision layer so drivers could resolve 90% of situations without calling in. Dispatch capacity increased 40%.',
    metrics: '40% capacity increase. 78% fewer coordination calls.',
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.industry}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border/50 p-10 lg:p-12 rounded-xl"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-8">
                {study.industry}
              </span>

              <p className="text-foreground leading-relaxed mb-6 text-lg">
                {study.story}
              </p>

              <p className="text-foreground leading-relaxed mb-10 text-lg">
                {study.outcome}
              </p>

              <div className="pt-8 border-t border-border/50">
                <p className="text-lg font-medium text-foreground">
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
