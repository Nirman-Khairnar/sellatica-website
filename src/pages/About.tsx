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
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
              About Sellatica
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              We transform operational chaos into
              <span className="text-muted-foreground"> predictable execution</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Sellatica is an AI-powered systems integration firm that designs and implements
              custom tech systems for mid-market businesses—turning fragmented tools into
              unified workflows that deliver measurable value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Bridging the gap between tech investment and business value
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

      {/* Values Section */}
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
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              Core Principles
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
              Ready to transform your operations?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a discovery call to discuss your operational challenges and explore how we can help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                <span>Get Started</span>
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
