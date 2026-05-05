import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  'Service businesses and agencies',
  'Real estate teams and brokerages',
  'Logistics and fleet operations',
  'Professional services firms',
];

const WhoWeWorkWith = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-[1.15]">
              Built for businesses that are already growing.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our clients are not struggling startups. They are operators running teams of 10 to 100 people who have outgrown spreadsheets and manual processes. Their business works. It just takes too much effort to run.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 text-sm text-foreground bg-card border border-border/60 rounded-full"
              >
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
