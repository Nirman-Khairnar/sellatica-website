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
    description: 'Every system we build is measured by one standard: measurable business value delivered.',
  },
  {
    icon: Users,
    title: 'Human-Centered',
    description: 'Technology should augment human capability, not replace it. We build systems that empower teams.',
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'Phased deployment means you see results in weeks, not months. Highest impact modules first.',
  },
  {
    icon: Shield,
    title: 'Client Ownership',
    description: 'You own your infrastructure. No vendor lock-in, no ongoing subscription dependencies.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Sellatica | AI System Integration Experts"
        description="We build custom AI systems that transform operational chaos into predictable execution. Learn about our mission and core principles."
        canonical="https://www.sellatica.in/about"
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
              "name": "About",
              "item": "https://www.sellatica.in/about"
            }]
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Background effects */}
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
              About Sellatica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.05] mb-4 max-w-5xl"
          >
            We transform operational chaos into
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gold-gradient leading-[1.05] mb-8 max-w-5xl"
          >
            predictable execution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Sellatica is an AI-powered systems integration firm that designs and implements
            custom tech systems for mid-market businesses—turning fragmented tools into
            unified workflows that deliver measurable value.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.03)_0%,transparent_70%)] blur-[40px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em] mb-6">
                <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.1]">
                Bridging the gap between tech investment and <span className="text-gold-gradient">business value</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                89% of enterprises adopt AI and automation tools, but only 51% achieve expected outcomes.
                The problem isn't the technology—it's the implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We exist to close that gap. Through custom-built operational systems, we help
                growth-stage businesses move beyond pilots to production-ready infrastructure
                that scales with them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl border border-[hsl(45_80%_60%/0.15)] glow-gold flex items-center justify-center bg-card/50">
                <div className="text-center p-12">
                  <div className="font-display text-7xl md:text-8xl font-medium text-gold-gradient mb-4">51%</div>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Only half of enterprises achieve expected outcomes from their tech investments
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.03)_0%,transparent_70%)] blur-[40px]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4 mx-auto justify-center">
              <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
              What We Stand For
              <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Core <span className="text-gold-gradient">Principles</span>
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
                <div className="p-8 rounded-xl border border-border/50 hover:border-[hsl(45_80%_60%/0.3)] transition-all duration-300 h-full bg-card/50 hover-glow-gold">
                  <div className="w-12 h-12 rounded-lg bg-gold-subtle flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
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
      <section className="py-24 lg:py-32 border-t border-border/50 bg-card/30 relative overflow-hidden">
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
                Ready to transform your <span className="text-gold-gradient">operations</span>?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Book a discovery call to discuss your operational challenges and explore how we can help.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group text-base px-8 py-6 hover-glow-gold">
                  <span>Get Started</span>
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

export default About;
