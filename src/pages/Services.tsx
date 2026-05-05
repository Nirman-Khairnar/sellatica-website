import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const services = [
  {
    phase: '01',
    title: 'Strategy Review',
    tagline: 'Where we start.',
    description: 'A 45-minute working session where we analyse how your business operates and identify the highest-impact problems to fix. We do not deliver a generic list of suggestions. We tell you specifically what to fix, why it is costing you, and what the result looks like when it is resolved.',
    deliverables: [
      'A clear picture of what to fix and in what order',
      'Clear priority order: what to fix first, second, and third',
      'An honest answer on whether Sellatica is the right fit for implementation',
    ],
    audience: 'Business owners and operators who want clarity on what is actually broken before committing to a larger engagement.',
  },
  {
    phase: '02',
    title: 'Systems Design',
    tagline: 'The blueprint for the fix.',
    description: 'For clients who want to move beyond diagnosis into action. We work with your operations lead to design the exact systems and workflows that solve the identified problems. This is not a slide deck or a recommendation document. It is a buildable plan, specific enough to hand off to a developer, a no-code builder, or our own implementation team.',
    deliverables: [
      'Workflow maps for every process being redesigned',
      'Tool and integration recommendations based on your existing stack',
      'A phased build plan so you know exactly what gets done and in what order',
    ],
    audience: 'Clients who have completed a Strategy Review and are ready to build.',
  },
  {
    phase: '03',
    title: 'Implementation',
    tagline: 'We build it.',
    description: 'We architect and build the systems defined in the design phase. This means actual automation, actual integrations, and actual working tools inside your business. Not prototypes or proof-of-concepts. Everything is built on infrastructure you own. There is no ongoing subscription to Sellatica unless you choose to retain us for support.',
    deliverables: [
      'Fully functional systems delivered and tested',
      'Handover documentation so your team can operate everything independently',
      'One month of support post-launch included in every implementation engagement',
    ],
    audience: 'Clients who want Sellatica to do the work, not just advise on it.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Services | Sellatica"
        description="Strategy Review, Systems Design, and Implementation. Three ways to work with Sellatica on your operations."
        breadcrumbs={[{ name: 'Services', item: 'https://www.sellatica.in/services' }]}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
              Our services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We work in three stages. You can start at any point. Most clients begin with a Strategy Review, then choose whether to go deeper.
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
                className="border-t border-border/50 py-16 lg:py-20"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Phase Number */}
                  <div className="lg:col-span-2">
                    <span className="font-display text-4xl lg:text-5xl font-medium text-border">
                      {service.phase}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-6">
                    <span className="text-sm text-muted-foreground block mb-2">
                      {service.tagline}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="bg-secondary border border-border/50 rounded-lg p-5">
                      <p className="text-sm font-medium text-foreground mb-1">Who this is for</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {service.audience}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-4">
                    <p className="text-sm font-medium text-foreground mb-4">What you receive</p>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
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
              Most clients start with a Strategy Review.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              45 minutes, a clear written plan, and a direct answer on whether we are the right fit. No commitment required.
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

export default Services;
