import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Sellatica"
        description="Who we are, how we think about business operations, and why we built Sellatica."
        canonical="https://www.sellatica.in/about"
        breadcrumbs={[{ name: 'About', item: 'https://www.sellatica.in/about' }]}
      />

      <Header />

      {/* Section 1: Who we are */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.15] mb-8">
              We are not a software company. We are not a staffing firm. We are an operations partner.
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sellatica was built for businesses that are good at what they do but operationally inefficient in how they do it. Most of our clients have tried software tools. Some have hired operations managers. The problem was never a lack of tools or people — it was a lack of designed systems.
              </p>
              <p>
                We bring the thinking, the design, and the build. We work inside your business, understand how it actually runs, and make it run better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: How we think */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8 leading-[1.15]">
              Our view on AI and operations.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                AI does not fix a broken process. It accelerates one. Before we automate anything, we understand what the process should look like when it is working correctly. Then we build toward that.
              </p>
              <p>
                We are not interested in demos that impress people in meetings. We are interested in systems that work on a Tuesday morning when nobody is watching.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Founder */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8 leading-[1.15]">
                  Built by someone who has done it.
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nirman Khairnar founded Sellatica after three years of working inside businesses and seeing the same pattern: teams buying tools, attending strategy sessions, and watching AI demos while the actual operational problems stayed exactly where they were.
                  </p>
                  <p>
                    Every engagement is led directly — no account managers, no offshore delivery teams. When you work with Sellatica, you work with the person responsible for the result.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <img
                    src="/nirman-portrait.png"
                    alt="Nirman Khairnar, founder of Sellatica"
                    className="relative rounded-full object-cover border-2 border-border w-32 h-32 md:w-40 md:h-40 transition-transform duration-300 group-hover:rotate-1"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
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
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
              Ready to find out what we would change?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Book a Strategy Review and we will spend 45 minutes looking at how your business operates. You will leave with a clear plan.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                <span>Book a Strategy Call</span>
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
