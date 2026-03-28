import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Terminal } from 'lucide-react';

const caseStudies = [
  {
    id: 'LGL_092',
    industry: 'Legal',
    title: 'Operations Intelligence',
    client: '42-attorney firm',
    result: '312% Net ROI',
    breakeven: '3.3 weeks',
    finding: 'Intake was routing 15 hrs/week through the managing partner unnecessarily.',
    change: 'A clear ownership map and decision path removed the bottleneck entirely.',
    metrics: [
      { value: 312, suffix: '%', label: 'ROI (Legal)' },
      { value: 180, prefix: '$', suffix: 'K', label: 'Rev Protected' },
    ],
  },
  {
    id: 'EST_144',
    industry: 'Real Estate',
    title: 'Lead Intelligence',
    client: '18-person brokerage',
    result: '280% Net ROI',
    breakeven: '3.0 weeks',
    finding: 'High-value leads were going cold within 4 hours due to manual follow-up delays.',
    change: 'A response-time ownership map and prioritisation system cut lead response to under 20 minutes.',
    metrics: [
      { value: 280, suffix: '%', label: 'ROI (Real Estate)' },
      { value: 94, prefix: '$', suffix: 'K', label: 'New Revenue' },
    ],
  },
  {
    id: 'LOG_031',
    industry: 'Logistics',
    title: 'Autonomous Operations',
    client: '23-truck operation',
    result: '78% Call Reduction',
    breakeven: '9.2 weeks',
    finding: '50 daily coordination calls were creating dispatch chaos — every driver called in for routing.',
    change: 'Clear decision rules and a communication layer eliminated the need for manual coordination.',
    metrics: [
      { value: 78, suffix: '%', label: 'Reduction in Calls (Logistics)' },
      { value: 40, suffix: '%', label: 'Cap. Increase' },
    ],
  },
  {
    id: 'MKT_210',
    industry: 'Marketing',
    title: 'Content Production',
    client: '22-person agency',
    result: '410% Net ROI',
    breakeven: '1.9 weeks',
    finding: 'The team was rebuilding briefs from scratch each week — no reuse of research or structure.',
    change: 'A content operations system created reusable frameworks, multiplying output 6x with the same headcount.',
    metrics: [
      { value: 410, suffix: '%', label: 'ROI (Marketing)' },
      { value: 6, suffix: 'x', label: 'Output Multiplier' },
    ],
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" ref={ref} className="py-24 lg:py-32 bg-background bg-blueprint border-t border-border/50 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">
              <Terminal className="w-3 h-3" />
              Client Results
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              What we found. <br /> What changed.
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border flex flex-col hover:border-foreground transition-colors shadow-sm"
            >
              {/* Terminal Header */}
              <div className="bg-foreground text-background font-mono text-[10px] p-3 flex justify-between items-center uppercase tracking-widest">
                <span>ID: {study.id}</span>
                <span className="flex items-center gap-2 text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Data Body */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <div className="mb-6 border-b border-border/50 pb-6">
                  <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                    Sector: {study.industry}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-1 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Client: {study.client}
                  </p>
                </div>

                <div className="bg-muted p-4 border border-border/50 mb-6 space-y-3">
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">What we found:</p>
                    <p className="text-xs font-mono text-foreground leading-relaxed">{study.finding}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">What changed:</p>
                    <p className="text-xs font-mono text-foreground leading-relaxed">{study.change}</p>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-display text-3xl font-bold tracking-tighter text-foreground mb-1">
                        <AnimatedCounter
                          end={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                        />
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">Break-even</span>
                  <span className="font-mono text-xs font-bold text-foreground">{study.breakeven}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
