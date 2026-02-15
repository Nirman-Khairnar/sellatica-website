import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ArrowRight, Building2, Home, Truck, Palette } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    industry: 'Legal',
    title: 'Operations Intelligence Platform',
    client: '42-attorney firm, $18M revenue',
    result: '1,576% Year 1 ROI',
    breakeven: '3.3 weeks',
    metrics: [
      { value: 1576, suffix: '%', label: 'ROI' },
      { value: 835, prefix: '$', suffix: 'K', label: 'Revenue Protected' },
    ],
  },
  {
    icon: Home,
    industry: 'Real Estate',
    title: 'Lead Intelligence System',
    client: '18-person brokerage, $4.2M revenue',
    result: '1,507% Year 1 ROI',
    breakeven: '3 weeks',
    metrics: [
      { value: 1507, suffix: '%', label: 'ROI' },
      { value: 2.72, prefix: '$', suffix: 'M', label: 'New Revenue' },
    ],
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Autonomous Operations System',
    client: '7-person freight team',
    result: '480% Year 1 ROI',
    breakeven: '2.3 months',
    metrics: [
      { value: 480, suffix: '%', label: 'ROI' },
      { value: 87, suffix: '%', label: 'Capacity Increase' },
    ],
  },
  {
    icon: Palette,
    industry: 'Marketing',
    title: 'Content Production Engine',
    client: '22-person agency, $2.1M revenue',
    result: '2,871% Year 1 ROI',
    breakeven: '1.9 weeks',
    metrics: [
      { value: 2871, suffix: '%', label: 'ROI' },
      { value: 6.4, suffix: 'x', label: 'Output Increase' },
    ],
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  return (
    <section id="results" ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              Proven Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
              Real systems, real outcomes
            </h2>
          </div>
          <Link 
            to="/results" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
              className="group relative p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <study.icon className="w-5 h-5 text-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-medium text-foreground mb-2 leading-snug">
                {study.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                {study.client}
              </p>

              <div className="space-y-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="font-display text-2xl font-medium text-foreground">
                      <AnimatedCounter
                        end={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  Break-even: <span className="text-foreground">{study.breakeven}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
