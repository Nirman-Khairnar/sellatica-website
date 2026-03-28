import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';

import Footer from '@/components/sections/Footer';
import { ArrowRight, Search, Cog, Rocket, TrendingUp, Check } from 'lucide-react';
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
    description: 'Stop guessing where your margins are disappearing. Our diagnostic is a surgical assessment of your operational stack to find exactly where AI can replace manual friction.',
    features: [
      'Revenue Leakage Heatmap',
      'Bottleneck Priority Analysis',
      '90-Day AI Integration Roadmap',
    ],
    whyMatters: 'We directly audit your current workflows and tech debt in a 45-minute intensive call, delivering a full Action Roadmap within 48 hours.',
    duration: '45-Minute Call / 48-Hour Delivery',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'Strategy Engagement',
    description: 'Design the fix alongside your operations lead. We translate the Diagnostic roadmap into technical blueprints, vendor selection, and system architecture.',
    features: [
      'Custom Workflow Prototyping',
      'Vendor Neutrality Assessment',
      'ROI Projection Modeling',
    ],
    whyMatters: 'Translating strategy into a deployable tech stack minimizes risk. This step is only available after a diagnostic secures the baseline.',
    duration: 'Blueprint Phase',
  },
  {
    icon: TrendingUp,
    phase: '03',
    title: 'Implementation',
    description: 'We build and deploy the system changes. Full client ownership, zero vendor lock-in. You own the code, the accounts, and the infrastructure.',
    features: [
      'Full-Stack Integration Deployment',
      'Staff Training & Documentation',
      'Post-Launch Optimization (30 Days)',
    ],
    whyMatters: 'Execution without dependency. Our objective is to build sustainable automation, train your team, and get out of the way.',
    duration: 'Execution Phase',
  },
];

const Services = () => {
  const price = usePrice();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Solutions & Services | Sellatica"
        description="Explore Sellatica's AI Operating System services. Strategic audit, pilot build, and ongoing partnership — for any business with operational chaos."
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
                  "text": "A typical end-to-end implementation ranges from 6 to 14 weeks. This includes 1-2 weeks for assessment, 4-10 weeks for build and integration, and 1-2 weeks for deployment and training."
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
                  "text": "We build on secure, enterprise-grade cloud infrastructure (like AWS or Google Cloud) with strict access controls. Your data remains yours; we design systems where we do not retain or sell your proprietary information."
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
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              How We<br />
              <span className="text-muted-foreground">Work.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              We don't sell software. We eliminate friction. Our three-tier architecture identifies leakage, designs the fix, and deploys the system.
            </p>
            <div className="flex items-center gap-3 text-primary mb-8 border-l-2 border-primary/20 pl-6">
              <Check className="w-5 h-5" />
              <span className="font-medium tracking-tight">$5,000 Efficiency Guarantee on Diagnostics</span>
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
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {/* Why This Matters Subsection */}
                    <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        Why This Matters
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
                          <span className="text-sm text-muted-foreground">{feature}</span>
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
                What Makes Us Different
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Industry-specific intelligence, not generic tools
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our systems understand your business context—legal metrics, real estate deal cycles,
                freight Incoterms, content brand voice. We build for your existing workflows,
                meeting teams where they already work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-medium text-foreground mb-2">Built for Existing Workflows</h3>
                <p className="text-sm text-muted-foreground">
                  Systems integrate where teams already work—Slack, WhatsApp, Gmail.
                  Minimal behavior change required.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-medium text-foreground mb-2">Learning Systems</h3>
                <p className="text-sm text-muted-foreground">
                  AI accuracy improves as systems learn from team feedback—one client saw
                  accuracy increase from 82% to 94% in 4 months.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50">
                <h3 className="font-medium text-foreground mb-2">You Own Everything</h3>
                <p className="text-sm text-muted-foreground">
                  Custom-built infrastructure deployed on your accounts. You own the system,
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
            <Link to="/ai-os-audit">
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
