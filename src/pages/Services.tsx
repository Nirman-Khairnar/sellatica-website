import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import NewsletterCapture from '@/components/sections/NewsletterCapture';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Search, Cog, Rocket, TrendingUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Search,
    phase: '01',
    title: 'AI OS Audit',
    description: 'We begin with a deep-dive diagnostic of your workflows. Our team identifies bottlenecks, integration gaps, and high-impact automation opportunities to create a clear roadmap. We do not just look at technology; we look at business outcomes.',
    features: [
      'Workflow map across your entire operation',
      'Identification of integration gaps',
      'AI OS module backlog tailored to your needs',
      'ROI modeling with defensible projections',
    ],
    whyMatters: 'An operating layer requires a blueprint. We ensure every dollar spent drives specific, measurable operational improvements.',
    duration: '1-2 weeks',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'AI OS Pilot',
    description: 'We execute the build for 1-2 modules end-to-end (like Sales OS or Knowledge OS), proving value quickly. We connect fragmented tools into a unified ecosystem and deploy custom AI agents that handle repetitive tasks with human-like precision.',
    features: [
      'Pilot module shipped and integrated',
      'Connect required legacy systems via API',
      'Build AI-powered automation layers for specific tasks',
      'Deploy real-time reporting for the module',
    ],
    whyMatters: 'Fast time-to-value is critical. By deploying a focused pilot, we demonstrate immediate ROI and build team confidence in the new operating system.',
    duration: '2-4 weeks',
  },
  {
    icon: TrendingUp,
    phase: '03',
    title: 'AI OS Partner',
    description: 'Launch is just the beginning. We provide ongoing maintenance, iteration, and monitoring. We implement feedback loops where the AI OS learns from human corrections, improving accuracy over time.',
    features: [
      'Continuous system performance monitoring',
      'AI accuracy improvement and iteration',
      'Quarterly strategy and OS reviews',
      'On-demand scaling support and change requests',
    ],
    whyMatters: 'Static systems degrade. Our adaptive OS gets smarter with use, compounding value over time and ensuring your infrastructure remains a competitive advantage.',
    duration: 'Monthly Retainer',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Solutions & Services | Sellatica"
        description="Explore our custom AI system development services for mid-market businesses. Strategic assessment, system build, and optimization."
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
              AI OS: Audit → Pilot →
              <span className="text-muted-foreground"> Partner</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Not generic consulting. Not off-the-shelf software. Every engagement is designed
              specifically for your operational chaos and business goals.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-6 italic">
              Our approach is rooted in direct operational experience. We don't just patch software holes; we re-architect how your data flows across the entire organization. By combining deep business logic with cutting-edge AI automation, we create systems that are not only efficient but resilient—capable of adapting as your business scales and market conditions change.
            </p>
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
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
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

      <NewsletterCapture />

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
              Ready to discuss your operations?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every engagement starts with our flagship AI OS Audit to map operations.
            </p>
            <Link to="/ai-os-audit">
              <Button size="lg" className="group">
                <span>Book AI OS Audit</span>
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
