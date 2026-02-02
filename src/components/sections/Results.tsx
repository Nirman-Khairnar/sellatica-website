import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Building2, Home, Truck, Megaphone } from 'lucide-react';

const caseStudies = [
  {
    icon: Building2,
    industry: 'Law Firm',
    title: 'Operations Intelligence Platform',
    client: '42-attorney firm, $18M revenue',
    challenge: 'Zero operational visibility, 15 hrs/week on manual reporting',
    metrics: [
      { value: 1576, suffix: '%', label: 'Year 1 ROI' },
      { value: 835, prefix: '$', suffix: 'K', label: 'Revenue Protected' },
      { value: 15, suffix: ' hrs', label: 'Weekly Savings' },
      { value: 3.3, suffix: ' wks', label: 'Break-Even' },
    ],
    systems: ['Clio', 'QuickBooks', 'Microsoft 365', 'DocuSign', 'Slack'],
  },
  {
    icon: Home,
    industry: 'Commercial Real Estate',
    title: 'Lead Intelligence System',
    client: '18-person brokerage, $4.2M revenue',
    challenge: '8-12 hour response time, 25 hrs/week on manual research',
    metrics: [
      { value: 1507, suffix: '%', label: 'Year 1 ROI' },
      { value: 2.72, prefix: '$', suffix: 'M', label: 'New Revenue' },
      { value: 45, suffix: ' min', label: 'Response Time' },
      { value: 32, suffix: '', label: 'Extra Deals Closed' },
    ],
    systems: ['CRM', 'Email', 'Data Enrichment', 'Slack', 'Analytics'],
  },
  {
    icon: Truck,
    industry: 'Freight Forwarding',
    title: 'Autonomous Operations System',
    client: '7-person team, ₹8.5 Cr revenue',
    challenge: '18-24 hour quote response, 15-20% documentation errors',
    metrics: [
      { value: 480, suffix: '%', label: 'Year 1 ROI' },
      { value: 87, suffix: '%', label: 'Capacity Increase' },
      { value: 3, suffix: '%', label: 'Error Rate (from 20%)' },
      { value: 45, suffix: ' min', label: 'Quote Response' },
    ],
    systems: ['Email', 'Agent Network', 'Documentation', 'Tracking', 'Payments'],
  },
  {
    icon: Megaphone,
    industry: 'Marketing Agency',
    title: 'Content Production Engine',
    client: '22-person agency, $2.1M revenue',
    challenge: 'Content bottleneck, team working 55-60 hr weeks',
    metrics: [
      { value: 2871, suffix: '%', label: 'Year 1 ROI' },
      { value: 6.4, suffix: 'x', label: 'Output Increase' },
      { value: 1.44, prefix: '$', suffix: 'M', label: 'New Revenue' },
      { value: 75, suffix: '%', label: 'Time Reduction' },
    ],
    systems: ['Content CMS', 'SEO Tools', 'Brand Voice AI', 'Distribution'],
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="results" ref={ref} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Proven Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Real Systems. Real Outcomes.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-specific intelligence delivering measurable business value 
            across diverse sectors.
          </p>
        </motion.div>

        {/* Industry tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {caseStudies.map((study, index) => (
            <button
              key={study.industry}
              onClick={() => setActiveCase(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <study.icon className="h-4 w-4" />
              {study.industry}
            </button>
          ))}
        </motion.div>

        {/* Active case study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border shadow-card">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                {(() => {
                  const Icon = caseStudies[activeCase].icon;
                  return <Icon className="h-8 w-8 text-primary" />;
                })()}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {caseStudies[activeCase].title}
                </h3>
                <p className="text-muted-foreground mt-1">{caseStudies[activeCase].client}</p>
              </div>
            </div>

            <div className="mb-8 p-4 rounded-lg bg-secondary/30">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Challenge:</span>{' '}
                {caseStudies[activeCase].challenge}
              </p>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {caseStudies[activeCase].metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                    {isInView && (
                      <AnimatedCounter
                        end={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                </div>
              ))}
            </div>

            {/* Systems connected */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Systems Connected</p>
              <div className="flex flex-wrap gap-2">
                {caseStudies[activeCase].systems.map((system) => (
                  <span
                    key={system}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
