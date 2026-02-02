import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, TrendingDown, Clock, Database } from 'lucide-react';

const problems = [
  {
    icon: Database,
    stat: '6-15',
    label: 'Disconnected Systems',
    description: 'Data scattered across tools that don\'t talk to each other',
  },
  {
    icon: TrendingDown,
    stat: '51%',
    label: 'Achieve Expected Outcomes',
    description: '89% adopt AI tools, but only half see real value',
  },
  {
    icon: Clock,
    stat: '82%',
    label: 'Integration Struggles',
    description: 'Data quality and integration blocking progress',
  },
  {
    icon: AlertCircle,
    stat: '$400K+',
    label: 'Revenue Leakage',
    description: 'Lost to operational inefficiencies annually',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Tech Adoption ≠ Tech Value
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most organizations invest heavily in technology but struggle to move 
            beyond pilots to production systems that deliver real business outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl bg-card border-gradient hover:shadow-glow transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <problem.icon className="h-6 w-6 text-primary" />
                <span className="font-display text-2xl font-semibold text-foreground">
                  {problem.stat}
                </span>
              </div>
              <h3 className="font-body text-sm font-semibold text-foreground mb-2">
                {problem.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Root causes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-border"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            The Business Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-muted-foreground text-sm">Revenue leakage from slow response times</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Cash flow surprises from invisible receivables</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Team burnout from constant firefighting</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Growth paralysis without proportional hiring</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
