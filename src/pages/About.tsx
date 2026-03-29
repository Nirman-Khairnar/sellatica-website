import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Target, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

const values = [
  {
    icon: Target,
    title: 'Precision in Measurement',
    description: 'We avoid approximations. Every recommendation relies on specific data points and projected ROI calculations. Measurement is our primary focus.',
  },
  {
    icon: Zap,
    title: 'Direct and Clear Communication',
    description: 'Complex systems require simple language. We use straightforward terminology so teams can execute without confusion.',
  },
  {
    icon: Shield,
    title: 'Data Ownership',
    description: 'Data is your businesss primary asset. We architect systems that keep you in control of the metrics that drive your revenue. No vendor lock-in.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Nirman & Sellatica | Operational Consulting for High-Growth Firms"
        description="I am Nirman Khairnar, founder of Sellatica. We replace operational chaos with data-driven clarity through intensive consulting and coaching."
        canonical="https://www.sellatica.in/about"
        breadcrumbs={[{ name: 'About', item: 'https://www.sellatica.in/about' }]}
      />

      <Header />

      {/* Hero Section - Nirman's Narrative */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 md:mb-6 block">
              Founder / Advisor
            </span>
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center mb-10">
              <div className="md:col-span-8 lg:col-span-7">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
                  I am Nirman Khairnar.
                </h1>
              </div>
              <div className="md:col-span-4 lg:col-span-4 lg:col-start-9 flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative">
                    <img
                      src="/nirman-portrait.png"
                      alt="Nirman Khairnar, founder of Sellatica"
                      className="rounded-full object-cover border-2 border-border w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 transition-transform duration-300 group-hover:rotate-1"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For three years I worked as a copywriter under the assumption that messaging was the primary constraint for growth. My experience with clients in logistics, legal, and real estate proved otherwise. The common bottleneck was operations. Work lacked clear paths, ownership, or automatic next steps.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The pattern repeated when I co-founded Flow Bait. Strategy failed at the implementation layer. Clients would buy expensive AI tools and watch demos, yet teams remained trapped in manual processes six months later. The missing operating system was the real failure point.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sellatica launched in September 2024 to solve this through consulting and coaching. We diagnose operational friction alongside your team and design shared blueprints that work. Our side-by-side implementation ensures transitions stick and manual chaos becomes a measurable system.
            </p>

            <div className="mt-12 p-8 bg-card border border-border/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <span className="font-mono text-[10px] opacity-70 block mb-3 tracking-widest uppercase">The Diagnostic Standard</span>
              <p className="font-display text-xl md:text-2xl font-medium leading-tight relative z-10">
                "We provide outcomes. Every roadmap follows a direct partnership model and carries a $5,000 efficiency guarantee."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Updated with global positioning */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
                The Efficiency Standard
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                We find what is costing you money. Then we fix it.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sellatica is a bespoke consulting firm focused on eliminating operational waste. We provide data-driven clarity for businesses experiencing growth friction.
              </p>
              <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4 py-1 italic">
                Our initial diagnostic identifies recoverable operational waste. If we find less than $5,000 in annual savings, the engagement is free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-background rounded-2xl border border-border/50 flex items-center justify-center p-8">
                <div className="text-center p-12">
                  <div className="font-display text-5xl md:text-6xl font-medium text-foreground mb-4 border-b border-border/50 pb-4 inline-block">$5,000</div>
                  <p className="text-muted-foreground text-lg max-w-xs mx-auto mt-4 leading-snug">
                    Guaranteed efficiency savings from our flagship diagnostic.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Updated with Nirman's direct voice */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              What Drives This
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Operating Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-colors h-full">
                  <value.icon className="w-8 h-8 text-foreground mb-6" />
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Book an AI Operations Diagnostic to map your operational challenges and explore how our consulting modules can help scale your business.
            </p>
            <Link to="/diagnostic">
              <Button size="lg" className="group">
                <span>Book AI Operations Diagnostic</span>
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

export default About;