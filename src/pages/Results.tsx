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
    client: '42-attorney firm, $18M revenue',
    challenge: 'Zero operational visibility, 15 hours per week wasted on manual reporting, decisions made on 3-week-old data',
    solution: 'AI operations intelligence platform connecting 8 systems with natural language query interface',
    results: [
      { value: 1576, suffix: '%', label: 'Year 1 ROI' },
      { value: 835, prefix: '$', suffix: 'K', label: 'Revenue Protected' },
      { value: 15, suffix: ' hrs', label: 'Weekly Time Saved' },
      { value: 40, suffix: '%', label: 'Burnout Reduction' },
    ],
    breakeven: '3.3 weeks',
  },
  {
    icon: Home,
    industry: 'Real Estate',
    title: 'Lead Intelligence System',
    client: '18-person commercial real estate firm, $4.2M revenue',
    challenge: '8-12 hour response time losing deals, 25 hours per week burned on manual lead research',
    solution: 'AI lead intelligence engine with multi-source capture, enrichment layer, and priority scoring',
    results: [
      { value: 1507, suffix: '%', label: 'Year 1 ROI' },
      { value: 2.72, prefix: '$', suffix: 'M', label: 'New Revenue' },
      { value: 45, suffix: ' min', label: 'Response Time' },
      { value: 94, suffix: '%', label: 'Lead Accuracy' },
    ],
    breakeven: '3 weeks',
  },
  {
    icon: Truck,
    industry: 'Logistics',
    title: 'Autonomous Operations System',
    client: '7-person freight forwarding team, ₹8.5 Cr revenue',
    challenge: '18-24 hour quote response time, 15-20% shipment delays from documentation errors',
    solution: 'Autonomous operations with AI email parsing, agent rate orchestration, and document validation',
    results: [
      { value: 480, suffix: '%', label: 'Year 1 ROI' },
      { value: 87, suffix: '%', label: 'Capacity Increase' },
      { value: 45, suffix: ' min', label: 'Quote Response' },
      { value: 97, suffix: '%', label: 'Doc Accuracy' },
    ],
    breakeven: '2.3 months',
  },
  {
    icon: Palette,
    industry: 'Marketing',
    title: 'Content Production Engine',
    client: '22-person digital marketing agency, $2.1M revenue',
    challenge: 'Content bottleneck (could deliver 50 pieces weekly, needed 150), team working 55-60 hour weeks',
    solution: 'AI content production engine with research automation, brand voice training, and multi-format adaptation',
    results: [
      { value: 2871, suffix: '%', label: 'Year 1 ROI' },
      { value: 1.44, prefix: '$', suffix: 'M', label: 'New Revenue' },
      { value: 6.4, suffix: 'x', label: 'Output Increase' },
      { value: 75, suffix: '%', label: 'Time Saved' },
    ],
    breakeven: '1.9 weeks',
  },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Case Studies & Results | Sellatica"
        description="See how Sellatica delivers measurable ROI for mid-market businesses. Real case studies with proven outcomes."
        canonical="https://www.sellatica.in/results"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sellatica.in"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Results",
              "item": "https://www.sellatica.in/results"
            }]
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[60px]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">
              <span className="w-12 h-px bg-[hsl(45_80%_60%/0.5)]" />
              Case Studies
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.05] mb-4 max-w-5xl"
          >
            Proven results across
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gold-gradient leading-[1.05] mb-8 max-w-5xl"
          >
            industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Real outcomes from real clients. Every system we build delivers measurable
            business value—typically within weeks of deployment.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {caseStudies.map((study) => (
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
                      <div className="p-3 rounded-lg bg-gold-subtle border border-[hsl(45_80%_60%/0.15)]">
                        <study.icon className="w-6 h-6 text-gold" />
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(45_80%_60%/0.2)] bg-gold-subtle">
                      <span className="text-xs text-muted-foreground">Break-even:</span>
                      <span className="text-sm font-medium text-gold">{study.breakeven}</span>
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
                          <div className="font-display text-2xl lg:text-3xl font-medium text-gold-gradient mb-1">
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
      <section className="py-24 lg:py-32 border-t border-border/50 bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[60px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-gold-gradient mb-2">
                <AnimatedCounter end={1500} suffix="%" duration={2.5} />
              </div>
              <span className="text-sm text-muted-foreground">Average Year 1 ROI</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-gold-gradient mb-2">
                <AnimatedCounter end={3} suffix=" weeks" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">Avg. Break-even</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-gold-gradient mb-2">
                <AnimatedCounter end={94} suffix="%" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">AI Accuracy Achieved</span>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-gold-gradient mb-2">
                <AnimatedCounter end={8} suffix="-15" duration={2} />
              </div>
              <span className="text-sm text-muted-foreground">Systems Integrated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[40px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="p-10 lg:p-16 rounded-2xl border border-[hsl(45_80%_60%/0.15)] glow-gold">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.1]">
                What could we build <span className="text-gold-gradient">for you</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Every business has unique operational challenges. Let's discuss yours.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group text-base px-8 py-6 hover-glow-gold">
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;
