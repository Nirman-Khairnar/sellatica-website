import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ArrowRight, Terminal } from 'lucide-react';

const caseStudies = [
  {
    id: 'LGL_092',
    industry: 'Legal',
    title: 'Operations Intelligence Platform',
    client: '42-attorney firm',
    result: '1,576% Year 1 ROI',
    breakeven: '3.3 weeks',
    built: 'Intake automation + Document analysis module',
    metrics: [
      { value: 1576, suffix: '%', label: 'Net ROI' },
      { value: 835, prefix: '$', suffix: 'K', label: 'Rev Protected' },
    ],
  },
  {
    id: 'EST_144',
    industry: 'Real Estate',
    title: 'Lead Intelligence System',
    client: '18-person brokerage',
    result: '1,507% Year 1 ROI',
    breakeven: '3.0 weeks',
    built: 'Lead scoring module + CRM integration',
    metrics: [
      { value: 1507, suffix: '%', label: 'Net ROI' },
      { value: 2.72, prefix: '$', suffix: 'M', label: 'New Revenue' },
    ],
  },
  {
    id: 'LOG_031',
    industry: 'Logistics',
    title: 'Autonomous Operations',
    client: '7-person freight team',
    result: '480% Year 1 ROI',
    breakeven: '9.2 weeks',
    built: 'Dispatch automation module + Route optimization',
    metrics: [
      { value: 480, suffix: '%', label: 'Net ROI' },
      { value: 87, suffix: '%', label: 'Cap Increase' },
    ],
  },
  {
    id: 'MKT_210',
    industry: 'Marketing',
    title: 'Content Production Engine',
    client: '22-person agency',
    result: '2,871% Year 1 ROI',
    breakeven: '1.9 weeks',
    built: 'Content OS module + Research automation',
    metrics: [
      { value: 2871, suffix: '%', label: 'Net ROI' },
      { value: 6.4, suffix: 'x', label: 'Output Multiplier' },
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
              System Readouts
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Performance <br /> Data Logs
            </h2>
          </div>
          <Link
            to="/results"
            className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Access Full Database
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
                <div className="mb-8 border-b border-border/50 pb-6">
                  <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                    Sector: {study.industry}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-1 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Target: {study.client}
                  </p>
                </div>

                <div className="bg-muted p-4 border border-border/50 mb-8">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">Deployed Architecture:</p>
                  <p className="text-xs font-mono text-foreground font-medium leading-relaxed">{study.built}</p>
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

                <div className="mt-8 pt-4 border-t border-border flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">TTV Break-even</span>
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
