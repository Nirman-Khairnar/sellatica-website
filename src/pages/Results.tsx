import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';

import Footer from '@/components/sections/Footer';
import { ArrowRight, Building2, Home, Truck, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

const caseStudies = [
  {
    icon: Building2,
    industry: 'Legal',
    title: 'Law Firm Operations Intelligence Platform',
    client: '42-attorney firm',
    challenge: 'Zero operational visibility, 15 hours per week wasted on manual reporting, decisions made on 3-week-old data',
    solution: 'AI operations intelligence platform connecting 8 systems with natural language query interface',
    results: [
      { value: 312, suffix: '%', label: 'Net ROI' },
      { value: 180, prefix: '$', suffix: 'K', label: 'Revenue Protected' },
      { value: 15, suffix: ' hrs', label: 'Weekly Time Saved' },
      { value: 3.3, suffix: ' wks', label: 'Break-even' },
    ],
    breakeven: '3.3 weeks',
  },
  {
    icon: Home,
    industry: 'Real Estate',
    title: 'Lead Intelligence System',
    client: '18-person brokerage',
    challenge: '8-12 hour response time losing deals, 25 hours per week burned on manual lead research',
    solution: 'AI lead intelligence engine with multi-source capture, enrichment layer, and priority scoring',
    results: [
      { value: 280, suffix: '%', label: 'Net ROI' },
      { value: 94, prefix: '$', suffix: 'K', label: 'New Revenue' },
      { value: 45, suffix: ' min', label: 'Response Time' },
      { value: 3, suffix: ' wks', label: 'Break-even' },
    ],
    breakeven: '3 weeks',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Autonomous Operations System',
    client: '23-truck logistics operation',
    challenge: '50 daily coordination calls creating dispatch chaos, capacity constrained by manual coordination overhead',
    solution: 'Autonomous dispatch system with AI-powered route coordination and real-time communication layer',
    results: [
      { value: 78, suffix: '%', label: 'Call Reduction' },
      { value: 40, suffix: '%', label: 'Capacity Increase' },
      { value: 11, suffix: '', label: 'Calls (down from 50)' },
      { value: 9.2, suffix: ' wks', label: 'Break-even' },
    ],
    breakeven: '9.2 weeks',
  },
  {
    icon: Palette,
    industry: 'Marketing',
    title: 'Content Production Engine',
    client: '22-person digital marketing agency',
    challenge: 'Content bottleneck: could deliver 50 pieces/week, client needed 150. Team working 55–60 hour weeks.',
    solution: 'AI content production engine with research automation, brand voice training, and multi-format adaptation',
    results: [
      { value: 410, suffix: '%', label: 'Net ROI' },
      { value: 6, suffix: 'x', label: 'Output Multiplier' },
      { value: 75, suffix: '%', label: 'Time Saved' },
      { value: 1.9, suffix: ' wks', label: 'Break-even' },
    ],
    breakeven: '1.9 weeks',
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies & Results | Sellatica"
        description="See how Sellatica delivers measurable ROI for operations-heavy businesses. Real case studies with verifiable outcomes."
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
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              Proven results across
              <span className="text-muted-foreground"> industries</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Real outcomes from real clients. Every system we build delivers measurable
              business value—typically within weeks of deployment.
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
              What could we build for you?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every business has unique operational challenges. Let's discuss yours.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                <span>Start Your Transformation</span>
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
