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
    description: 'We begin with a deep-dive analysis of your current systems, data flows, and manual workflows. Our team identifies bottlenecks, integration gaps, and high-impact automation opportunities to create a roadmap for ROI. We don\'t just look at technology; we look at business outcomes.',
    features: [
      'Comprehensive audit of current tech stack and workflows',
      'Identification of integration gaps and automation opportunities',
      'Design of end-to-end, scalable system architecture',
      'ROI modeling and detailed business case development',
    ],
    duration: '1-2 weeks',
  },
  {
    icon: Cog,
    phase: '02',
    title: 'System Build & Integration',
    description: 'We execute the build, connecting fragmented tools (CRM, ERP, Email, Spreadsheets) into a unified ecosystem. We build custom AI agents and automation layers that handle repetitive tasks with human-like precision, creating a single source of truth for your data.',
    features: [
      'Connect 8-15 fragmented systems via secure APIs',
      'Build AI-powered automation layers for complex tasks',
      'Create unified data warehouses for real-time insights',
      'Deploy real-time dashboards and custom alert systems',
    ],
    duration: '4-10 weeks',
  },
  {
    icon: Rocket,
    phase: '03',
    title: 'Deployment & Training',
    description: 'Technology is only as good as its adoption. We manage a staged rollout to ensure system stability and provide hands-on training for your team. We ensure your staff feels empowered, not replaced, by the new tools.',
    features: [
      'Staged, low-risk rollout to minimize operational disruption',
      'Hands-on team training and workshops on new interfaces',
      'Setup of comprehensive performance monitoring',
      'Creation of detailed Documentation and SOPs',
    ],
    duration: '1-2 weeks',
  },
  {
    icon: TrendingUp,
    phase: '04',
    title: 'Optimization & Scale',
    description: 'Launch is just the beginning. We implement feedback loops where the AI system learns from human corrections, improving accuracy over time. We support you as you scale, adding new capabilities and handling increased volume.',
    features: [
      'Continuous system performance tracking and tuning',
      'AI accuracy improvement mechanisms over time',
      'Quarterly strategy and optimization reviews',
      'On-demand scaling support as your business grows',
    ],
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
              Custom-built systems for
              <span className="text-muted-foreground"> operational excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Not generic consulting. Not off-the-shelf software. Every engagement is designed
              specifically for your operational chaos and business goals.
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
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
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
              Ready to discuss your operations?
            </h2>
            <p className="text-muted-foreground mb-8">
              Every engagement starts with a discovery call to understand your specific challenges.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                <span>Book Discovery Call</span>
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
