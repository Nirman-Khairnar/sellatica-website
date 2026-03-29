import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';

import Footer from '@/components/sections/Footer';
import { ArrowRight, Check, Cog, Lightbulb, Rocket, Target, Zap, Shield, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { usePrice } from '@/hooks/usePrice';

const services = [
  {
    icon: Search,
    phase: '01',
    title: 'AI Operations Diagnostic',
    description: 'Design the fix alongside our operational experts. We translate the Diagnostic roadmap into technical blueprints, vendor selection, and system architecture.',
    features: [
      'Revenue Leakage Heatmap',
      'Bottleneck Priority Analysis',
      '90-Day AI Integration Roadmap',
    ],
    whyMatters: 'We directly analyze your current workflows and tech debt in a 45-minute intensive call, delivering a full Action Roadmap within 48 hours.',
    duration: '45-Minute Call / 48-Hour Delivery',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'Strategy engagement',
    description: 'Design the solution alongside our operational experts. We translate the Diagnostic roadmap into strategic blueprints, vendor selection, and system architecture.',
    features: [
      'Custom workflow prototyping',
      'Vendor neutrality assessment',
      'ROI projection modeling',
    ],
    whyMatters: 'Translating strategy into a deployable tech stack minimizes risk. This step is only available after a diagnostic secures the baseline.',
    duration: 'Blueprint Phase',
  },
  {
    icon: TrendingUp,
    phase: '03',
    title: 'Implementation',
    description: 'We architect and guide the implementation of system changes. Full client ownership, zero vendor lock-in. You own the code, the accounts, and the infrastructure.',
    features: [
      'Full-stack integration deployment',
      'Staff training & documentation',
      'Post-launch optimization (30 days)',
    ],
    whyMatters: 'Execution without dependency. Our objective is to implement sustainable efficiency, coach your team, and get out of the way.',
    duration: 'Execution Phase',
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
    description: 'Data is your businesss primary asset. We architect systems that keep you in control of the metrics that drive your revenue. No vendor lock-in.',
  },
];

const Services = () => {
  const price = usePrice();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operational Architecture & Consulting Modules | Sellatica"
        description="Explore Sellatica's operational consulting services: strategic diagnostics, module implementation, and ongoing partnerships for firms experiencing growth friction."
        canonical="https://www.sellatica.in/services"
      
        breadcrumbs={[{ name: 'Services', item: 'https://www.sellatica.in/services' }]} 
      />
      <Helmet>
        
        {/* Service-Specific FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does a typical implementation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A typical end-to-end implementation ranges from 6 to 14 weeks. This includes 1-2 weeks for diagnostic, 4-10 weeks for architecture and implementation, and 1-2 weeks for deployment and coaching."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to replace my existing software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Our methodology focuses on integrating your existing tools (like CRMs, ERPs, and spreadsheets) into a unified system. We only recommend replacements if a tool is critically blocking automation."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure data security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our solutions are architected on secure, enterprise-grade cloud infrastructure (like AWS or Google Cloud) with strict access controls. Your data remains yours; we design systems where we do not retain or sell your proprietary information."
                }
              }
            ]
          })}
        </script>
      </Helmet>
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
              How we<br />
              <span className="text-muted-foreground">work.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              We eliminate operational friction. Our three-tier architecture identifies revenue leaks, designs the structural fix, and handles the implementation.
            </p>
            <div className="flex items-center gap-3 text-primary mb-8 border-l-2 border-primary/20 pl-6">
              <Check className="w-5 h-5" />
              <span className="font-medium tracking-tight">$5,000 efficiency guarantee on diagnostics</span>
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
                What makes us different
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              Operating principles
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our systems integrate with your specific business context: legal billing cycles, real estate deal tracking, or logistics dispatch rules.
            </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Native Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Systems operate where teams already work: Slack, WhatsApp, and Gmail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Feedback Loops</h3>
                    <p className="text-sm text-muted-foreground">
                      Accuracy improves as systems learn from team feedback. One client saw a 45% reduction in manual data entry within 30 days.
                    </p>
                  </div>
                </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-medium text-foreground mb-2">You Own Everything</h3>
                <p className="text-sm text-muted-foreground">
                  Custom-architected infrastructure deployed on your accounts. You own the system,
                  not dependent on subscriptions to us.
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
              Your competitors are already fixing this. Are you?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every engagement starts with the AI Operations Diagnostic. Secure your roadmap today.
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
