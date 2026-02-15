import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
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
    title: 'Strategic Assessment & Architecture Design',
    description: 'We begin with a deep-dive analysis of your current systems, data flows, and manual workflows. Our team identifies bottlenecks, integration gaps, and high-impact automation opportunities to create a roadmap for ROI. We don\'t just look at technology; we look at business outcomes. For example, identifying where manual data entry in freight forwarding causes 20% delays.',
    features: [
      'Comprehensive audit of current tech stack and workflows',
      'Identification of integration gaps and automation opportunities',
      'Design of end-to-end, scalable system architecture',
      'ROI modeling and detailed business case development',
    ],
    whyMatters: 'Without a clear architectural blueprint, 60% of automation projects fail. We ensure every dollar spent drives specific, measurable operational improvements.',
    duration: '1-2 weeks',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'System Build & Integration',
    description: 'We execute the build, connecting fragmented tools (CRM, ERP, Email, Spreadsheets) into a unified ecosystem. We build custom AI agents and automation layers that handle repetitive tasks with human-like precision, creating a single source of truth for your data. We might automate invoice processing using optical character recognition (OCR) or build a custom CRM agent that pre-qualifies leads 24/7.',
    features: [
      'Connect 8-15 fragmented systems via secure APIs',
      'Build AI-powered automation layers for complex tasks',
      'Create unified data warehouses for real-time insights',
      'Deploy real-time dashboards and custom alert systems',
    ],
    whyMatters: 'Disconnected tools create data silos. A unified ecosystem provides a single source of truth, enabling real-time decision-making and eliminating manual reconciliation errors.',
    duration: '4-10 weeks',
  },
  {
    icon: Rocket,
    phase: '03',
    title: 'Deployment & Training',
    description: 'Technology is only as good as its adoption. We manage a staged rollout to ensure system stability and provide hands-on training for your team. We ensure your staff feels empowered, not replaced, by the new tools. We conduct role-specific workshops, ensuring your sales team knows exactly how to leverage their new AI assistant effectively.',
    features: [
      'Staged, low-risk rollout to minimize operational disruption',
      'Hands-on team training and workshops on new interfaces',
      'Setup of comprehensive performance monitoring',
      'Creation of detailed Documentation and SOPs',
    ],
    whyMatters: 'Adoption is the biggest hurdle in tech implementation. Our hands-on training ensures your team is confident and productive from day one, maximizing immediate ROI.',
    duration: '1-2 weeks',
  },
  {
    icon: TrendingUp,
    phase: '04',
    title: 'Optimization & Scale',
    description: 'Launch is just the beginning. We implement feedback loops where the AI system learns from human corrections, improving accuracy over time. We support you as you scale, adding new capabilities and handling increased volume. If the AI misclassifies a complex customer query, our feedback loop allows a human to correct it, preventing the same error from happening twice.',
    features: [
      'Continuous system performance tracking and tuning',
      'AI accuracy improvement mechanisms over time',
      'Quarterly strategy and optimization reviews',
      'On-demand scaling support as your business grows',
    ],
    whyMatters: 'Static systems degrade. Our adaptive systems get smarter with use, compounding value over time and ensuring your infrastructure remains a competitive advantage.',
    duration: 'Ongoing',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Solutions & Services | Sellatica"
        description="Explore our custom AI system development services for mid-market businesses. Strategic assessment, system build, and optimization."
        canonical="https://www.sellatica.in/services"
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
              "name": "Services",
              "item": "https://www.sellatica.in/services"
            }]
          })}
        </script>
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
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.05] mb-4 max-w-5xl"
          >
            Custom-built systems for
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gold-gradient leading-[1.05] mb-8 max-w-5xl"
          >
            operational excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            Not generic consulting. Not off-the-shelf software. Every engagement is designed
            specifically for your operational chaos and business goals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base text-muted-foreground/80 leading-relaxed max-w-3xl border-l-2 border-[hsl(45_80%_60%/0.3)] pl-6 italic"
          >
            Our approach is rooted in direct operational experience. We don't just patch software holes; we re-architect how your data flows across the entire organization. By combining deep business logic with cutting-edge AI automation, we create systems that are not only efficient but resilient—capable of adapting as your business scales and market conditions change.
          </motion.p>
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
                    <span className="font-display text-4xl lg:text-5xl font-medium text-gold-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                      {service.phase}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gold-subtle flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {/* Why This Matters Subsection */}
                    <div className="p-5 rounded-lg border border-[hsl(45_80%_60%/0.15)] bg-gold-subtle">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[hsl(45_80%_60%)]" />
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
                          <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
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
      <section className="py-24 lg:py-32 border-t border-border/50 bg-card/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.03)_0%,transparent_70%)] blur-[40px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em] mb-6">
                <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
                What Makes Us Different
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.1]">
                Industry-specific intelligence, not <span className="text-gold-gradient">generic tools</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our systems understand your business context—legal metrics, real estate deal cycles,
                freight Incoterms, content brand voice. We build for your existing workflows,
                meeting teams where they already work.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Built for Existing Workflows', desc: 'Systems integrate where teams already work—Slack, WhatsApp, Gmail. Minimal behavior change required.' },
                { title: 'Learning Systems', desc: 'AI accuracy improves as systems learn from team feedback—one client saw accuracy increase from 82% to 94% in 4 months.' },
                { title: 'You Own Everything', desc: 'Custom-built infrastructure deployed on your accounts. You own the system, not dependent on subscriptions to us.' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-border/50 hover:border-[hsl(45_80%_60%/0.3)] transition-all duration-300 bg-card/50 hover-glow-gold">
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
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
                Ready to discuss your <span className="text-gold-gradient">operations</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Every engagement starts with a discovery call to understand your specific challenges.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group text-base px-8 py-6 hover-glow-gold">
                  <span>Book Discovery Call</span>
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

export default Services;
