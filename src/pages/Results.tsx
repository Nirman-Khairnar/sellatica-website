import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';

import Footer from '@/components/sections/Footer';
import { ArrowRight, Building2, Home, Truck, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SEO from '@/components/SEO';

const caseStudies = [
  {
    icon: Building2,
    industry: 'Legal Sector',
    title: 'Managing partner bottleneck',
    client: 'ID: LGL_092',
    challenge: 'High-value decision cycles were stalled by manual administrative requirements for senior counsel, causing systemic revenue leakage.',
    solution: 'Replaced manual administrative loops with intelligent assessment protocols, directly recovering senior partner bandwidth.',
    results: [
      { value: 312, suffix: '%', label: 'Net ROI' },
      { value: 180, prefix: '$', suffix: 'K', label: 'Revenue Protected' },
      { value: 3.3, suffix: ' wks', label: 'Break-even' },
    ],
    breakeven: '3.3 weeks',
  },
  {
    icon: Home,
    industry: 'Real Estate',
    title: 'Lead response delays',
    client: 'ID: EST_144',
    challenge: 'Initial inquiry response lag causing warm deals to go cold while team manually assembled contextual data.',
    solution: 'Orchestrated automated data enrichment and instant response routing, eliminating manual wait times entirely.',
    results: [
      { value: 280, suffix: '%', label: 'Efficiency ROI' },
      { value: 94, prefix: '$', suffix: 'K', label: 'New Revenue' },
      { value: 3, suffix: ' wks', label: 'Time to Neutral' },
    ],
    breakeven: '3 weeks',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Autonomous operations',
    client: 'ID: LOG_031',
    finding: '50 daily coordination calls were creating dispatch chaos: every driver called in for routing.',
    challenge: 'Verbal dispatch confirmation was creating an operational bottleneck that hard-capped overall fleet capacity.',
    solution: 'Deployed autonomous routing confirmation, removing the manual call requirement for the vast majority of dispatch workflows.',
    results: [
      { value: 78, suffix: '%', label: 'Call Volume Reduction' },
      { value: 40, suffix: '%', label: 'Fleet Capacity Increase' },
    ],
    breakeven: '9.2 weeks',
  },
  {
    icon: Palette,
    industry: 'Marketing',
    finding: 'The team was rebuilding briefs from scratch each week: no reuse of research or structure.',
    title: 'Manual content briefs',
    client: 'ID: MKT_210',
    challenge: 'Manual research and formatting workflows were dragging output speed and burning out creative capacity.',
    solution: 'Elimination of manual research and structuring cycles through augmented intelligence frameworks.',
    results: [
      { value: 410, suffix: '%', label: 'Measured Return' },
      { value: 6, suffix: 'x', label: 'Output Multiplier' },
    ],
    breakeven: '1.9 weeks',
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies & ROI | Sellatica Operational Consulting"
        description="Detailed ROI analysis and operational impact reports from Sellatica's recent consulting engagements in logistics, legal, and real estate."
        canonical="https://www.sellatica.in/results"
        breadcrumbs={[{ name: 'Results', item: 'https://www.sellatica.in/results' }]}
      />
      
      <Header />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
              Verified Engagements 2025-2026
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              PRECISION
              <span className="text-muted-foreground"> ENGAGEMENTS</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A definitive breakdown of operational evolution. We quantify impact through rigorous data tracking, moving beyond speculation into verifiable economic recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-t border-border/50 py-16 lg:py-24"
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Header */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-card border border-border/50">
                        <study.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-3">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {study.client}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                      <span className="text-xs text-muted-foreground">Break-even:</span>
                      <span className="text-sm font-medium text-foreground">{study.breakeven}</span>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Challenge
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Solution
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-4">
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center lg:text-left">
                          <div className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-1">
                            <AnimatedCounter
                              end={result.value}
                              prefix={result.prefix}
                              suffix={result.suffix}
                              duration={2}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-20 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={1500} suffix="%" duration={2.5} />
              </div>
              <span className="text-sm text-muted-foreground">Average Year 1 ROI</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={3} suffix=" weeks" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">Avg. Break-even</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={94} suffix="%" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">AI Accuracy Achieved</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={8} suffix="-15" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">Systems Integrated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              These results started with one 45-minute call.
            </h2>
            <p className="text-muted-foreground mb-8">
              Every engagement starts with the AI Operations Diagnostic. Secure your roadmap today.
            </p>
            <Link to="/diagnostic">
              <Button size="lg" className="group">
                <span>Book the Diagnostic</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
