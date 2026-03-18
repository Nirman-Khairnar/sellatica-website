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
    title: 'Results-Obsessed',
    description: 'If I cannot measure it and it cannot run without me checking on it daily, it does not ship.',
  },
  {
    icon: Users,
    title: 'Human-Centered',
    description: 'Technology augments human capability. I build systems that retain your best people by removing the work they hate.',
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'Three phases. Seven days to blueprint. Three weeks to break-even. Every module must justify itself in measurable ROI.',
  },
  {
    icon: Shield,
    title: 'Client Ownership',
    description: 'You own your infrastructure. No ongoing subscription dependencies, no vendor lock-in, no surprises.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Nirman & Sellatica | AI Operating Systems Built for Operations"
        description="I am Nirman Khairnar, founder of Sellatica. Three years as a copywriter, one pattern: operations, not messaging, was the real constraint."
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
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
              Founder / Operator
            </span>
          <div className="grid md:grid-cols-12 gap-8 items-center mb-8">
            <div className="md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-1">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
                I am Nirman Khairnar.
              </h1>
            </div>
            <div className="md:col-span-4 lg:col-span-5 lg:col-start-8 flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative">
                  <img
                    src="/nirman-portrait.png"
                    alt="Nirman Khairnar, founder of Sellatica"
                    className="rounded-full object-cover border-2 border-border w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For three years I worked as a copywriter, convinced the problem was messaging. It was not. Every client, whether in logistics, legal, or real estate, had the same constraint: operations, not marketing. Work had no clear path, no owner, and no automatic next step.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I co-founded Flow Bait. The pattern repeated. Clients bought AI tools, ran demos, set up integrations, and six months later, the team was still doing everything manually. The tool was never the problem. The missing operating system was.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sellatica launched in September 2024 on a simple premise: build the layer that makes AI work. Not tools. Not consulting. Custom-built operating systems that run without the owner in every loop.
            </p>
          <div className="mt-8 p-6 bg-card border border-border">
            <span className="font-mono text-[10px] opacity-70 block mb-2">CLIENT STANDARD</span>
            <p className="font-display text-xl font-medium leading-snug">
              Every system I build has a number attached to it and runs without me in the loop. If it does not meet both conditions, it does not leave my desk.
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
                The Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Making AI work for businesses, not the other way around
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                89% of enterprises adopt AI tools. Only 51% achieve expected outcomes. The gap is not better tools—it is the operating layer that connects them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sellatica builds that layer. Global delivery. Same rigor. In-person where geography allows, remote where it does not. The outcome is the same.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-background rounded-2xl border border-border/50 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="font-display text-6xl md:text-7xl font-medium text-foreground mb-4">51%</div>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Only half of enterprises achieve expected outcomes from their tech investments
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              Book an AI OS Audit to map your operational challenges and explore how our modules can help scale your business.
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

export default About;