import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';

import Footer from '@/components/sections/Footer';
import { ArrowRight, Check, Cog, Target, Zap, Shield, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { usePrice } from '@/hooks/usePrice';

const services = [
  {
    icon: Search,
    phase: '01',
    title: 'AI Operations Diagnostic',
    description: 'We map where follow-up, handoffs, approvals, and reporting are leaking revenue, then rank the fixes by speed, cost, and likely impact.',
    features: [
      'Revenue leakage map',
      'Bottleneck priority list',
      '90-day action roadmap',
    ],
    whyMatters: 'You do not need another AI brainstorm. You need a decision-ready view of what is broken, what it costs, and what to fix first.',
    duration: '45-Minute Call / 48-Hour Delivery',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'System design',
    description: 'Reserved for diagnostic clients. We turn the findings into workflow rules, ownership maps, tool choices, data flows, and rollout order.',
    features: [
      'Workflow and owner map',
      'Tool and data architecture',
      'Rollout sequence and constraints',
    ],
    whyMatters: 'This is where we remove ambiguity. The team gets a concrete operating design instead of a stack of disconnected ideas.',
    duration: 'Reserved for Diagnostic clients',
  },
  {
    icon: TrendingUp,
    phase: '03',
    title: 'Implementation',
    description: 'Reserved for system design clients. We implement the changes, train the team, and hand over a system you can run without depending on us for every next step.',
    features: [
      'Implementation and rollout',
      'Team training and handoff',
      'Post-launch stabilization',
    ],
    whyMatters: 'The goal is not to create reliance on Sellatica. The goal is to leave you with a system your operators can trust.',
    duration: 'Reserved for System Design clients',
  },
];

const values = [
  {
    icon: Target,
    title: 'Precision in measurement',
    description: 'We avoid approximations. Every recommendation relies on specific data points and projected ROI calculations. Measurement is our primary focus.',
  },
  {
    icon: Zap,
    title: 'Direct and clear communication',
    description: 'Complex systems require simple language. We use straightforward terminology so teams can execute without confusion.',
  },
  {
    icon: Shield,
    title: 'Data ownership',
    description: 'Data is your business\'s primary asset. We architect systems that keep you in control of the metrics that drive your revenue. No vendor lock-in.',
  },
];

const Services = () => {
  const price = usePrice();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operational Architecture & Consulting Modules | Sellatica"
        description="Sellatica works in three steps: diagnose the revenue leak, design the operating system, then implement the fix."
        canonical="https://www.sellatica.in/services"
      
        breadcrumbs={[{ name: 'Services', item: 'https://www.sellatica.in/services' }]} 
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
              Our services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              Diagnose. Design.<br />
              <span className="text-muted-foreground">Implement.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              There is one public starting point: the Diagnostic. Everything else happens only after we have measured the problem and agreed on what should be fixed.
            </p>
            <div className="flex items-center gap-3 text-primary mb-8 border-l-2 border-primary/20 pl-6">
              <Check className="w-5 h-5" />
              <span className="font-medium tracking-tight">Every engagement begins with the Diagnostic</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-t border-border/50 py-16 lg:py-20"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Phase Number */}
                  <div className="lg:col-span-2">
                    <span className="font-display text-4xl lg:text-5xl font-medium text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                      {service.phase}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-6 h-6 text-foreground" />
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {service.phase === '01' ? (price.loading ? '...' : price.display + ' Flat Fee') : service.duration}
                      </span>
                      {service.phase === '01' && (
                        <span className="text-sm text-muted-foreground hidden sm:inline-block">({service.duration})</span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-4 capitalize">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {/* Why This Matters Subsection */}
                    <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        Why this matters
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.whyMatters}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-4">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-foreground mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground capitalize">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-20 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
                Why clients move forward
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                What they are buying
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Not generic AI advice. Not a tool demo. Not a pile of automation ideas with no owner. Clients buy diagnosis first, then a system that can actually run.
              </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Measured Before Built</h3>
                    <p className="text-sm text-muted-foreground">
                      We quantify the cost of the problem before recommending the fix.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Decision Rules, Not Tool Hype</h3>
                    <p className="text-sm text-muted-foreground">
                      We define who owns the next step, what triggers the action, and what data the team needs to move.
                    </p>
                  </div>
                </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-medium text-foreground mb-2">You Own Everything</h3>
                <p className="text-sm text-muted-foreground">
                  The system runs on your accounts, your tools, and your infrastructure. No vendor lock-in. No black box dependency.
                </p>
              </div>
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
              If the problem is real, diagnose it properly.
            </h2>
            <p className="text-muted-foreground mb-8">
              The fastest way to improve operations is not another brainstorm. It is a better first decision. Start with the Diagnostic.
            </p>
            <Link to="/diagnostic">
              <Button size="lg" className="group">
                <span>Start with the Diagnostic</span>
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

export default Services;
