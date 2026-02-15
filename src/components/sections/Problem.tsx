import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const problems = [
  {
    stat: '89%',
    label: 'Adopt AI Tools',
    description: 'Yet only 51% ever see the expected outcomes from their investment',
  },
  {
    stat: '6-15',
    label: 'Disconnected Systems',
    description: 'Your data lives in silos — tools that don\'t talk to each other',
  },
  {
    stat: '82%',
    label: 'Integration Failures',
    description: 'Data quality and integration issues block real business progress',
  },
  {
    stat: '$400K+',
    label: 'Annual Revenue Leakage',
    description: 'Lost every year to operational inefficiencies you can\'t see',
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
              You're spending more on software.{' '}
              <span className="text-muted-foreground">Getting less in return.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every new tool promised efficiency. Instead, your data lives in silos, 
              your team toggles between 12 tabs, and your leadership team makes 
              decisions on gut feel — not real-time intelligence.
            </p>
            
            {/* Business Impact */}
            <div className="space-y-4 mb-10">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                The Business Impact
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)] mt-2 flex-shrink-0" />
                  Revenue leakage from slow response times and missed opportunities
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)] mt-2 flex-shrink-0" />
                  Cash flow surprises from invisible receivables and manual tracking
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)] mt-2 flex-shrink-0" />
                  Team burnout from constant firefighting instead of strategic work
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)] mt-2 flex-shrink-0" />
                  Growth paralysis — you can't scale without proportional hiring
                </li>
              </ul>
            </div>

            {/* Sound familiar CTA */}
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-opacity"
            >
              Sound familiar? Let's talk.
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-[hsl(45_80%_60%/0.3)] transition-all duration-300"
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
