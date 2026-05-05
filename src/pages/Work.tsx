import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const caseStudies = [
  {
    industry: 'Legal',
    client: '42-attorney law firm',
    problem: 'The managing partner was the single decision point for intake. 15 hours per week routed through one person unnecessarily.',
    solution: 'Redesigned the intake routing and ownership structure so decisions were made at the right level without partner involvement.',
    result: '$180K in annual revenue protected. Break-even in 3.3 weeks.',
  },
  {
    industry: 'Real Estate',
    client: '18-person brokerage',
    problem: 'High-value leads were going cold within 4 hours because follow-up was manual and inconsistent.',
    solution: 'Built a response and prioritisation system that cut lead response time from hours to under 20 minutes.',
    result: '$94K in new revenue in the first quarter after implementation.',
  },
  {
    industry: 'Logistics',
    client: '23-truck fleet operator',
    problem: '50 manual coordination calls per day, all running through one dispatcher. Any growth would require more dispatchers to manage the same chaos.',
    solution: 'Built a decision and communication layer so drivers could resolve routing questions independently. Dispatch capacity freed up entirely.',
    result: '78% reduction in daily coordination calls. 40% increase in operational capacity.',
  },
  {
    industry: 'Marketing Agency',
    client: '22-person content agency',
    problem: 'The team was rebuilding briefs, research frameworks, and content structures from scratch every week. No reuse, no compounding work.',
    solution: 'Built a content operations system with reusable templates and research frameworks. Same team, six times the output.',
    result: '6x content output increase. Break-even in 1.9 weeks.',
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Client Work | Sellatica"
        description="How Sellatica has helped legal firms, real estate teams, logistics operators, and agencies fix their operations."
        breadcrumbs={[{ name: 'Work', item: 'https://www.sellatica.in/work' }]}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              What we have built.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Four businesses. Four different industries. The same pattern: too much manual work, too much friction, growth being held back by how the business operates. Here is what changed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {caseStudies.map((study) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="border-t border-border/50 py-16 lg:py-24"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left - Header */}
                  <div className="lg:col-span-3">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-3">
                      {study.industry}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground">
                      {study.client}
                    </h3>
                  </div>

                  {/* Middle - Story */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Problem
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        What we did
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right - Result */}
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                      Result
                    </span>
                    <p className="text-lg font-medium text-foreground leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              These results started with one conversation.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every engagement starts with a Strategy Review. Book yours and find out what we would fix in your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                <span>Book a Strategy Review</span>
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

export default Work;
