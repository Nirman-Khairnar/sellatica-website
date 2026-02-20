import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { siteMeta } from '@/content/siteContent';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const principles = [
  {
    title: 'Operational clarity over tool clutter',
    description:
      'We align systems around execution visibility so teams can act without waiting for manual reconciliation.',
  },
  {
    title: 'Custom systems over generic templates',
    description:
      'Every deployment is designed around your existing workflow constraints, ownership model, and reporting needs.',
  },
  {
    title: 'Measurable business value over vanity automation',
    description:
      'We prioritize workflow reliability, lead-to-action speed, and decision quality instead of superficial automation volume.',
  },
  {
    title: 'Human operators remain central',
    description:
      'Automation should reduce chaos, not remove accountability. We design systems where owners stay in control.',
  },
];

const About = () => {
  const description =
    'Learn how Sellatica approaches custom AI systems integration for operations-heavy mid-market businesses and why our model focuses on workflow reliability.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="About | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/about"
        keywords="about sellatica, ai systems integration partner, operations transformation company"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'About', url: 'https://www.sellatica.in/about' },
          ]),
          webpageSchema({
            title: 'About Sellatica',
            description,
            url: 'https://www.sellatica.in/about',
          }),
        ]}
      />

      <Header />

      <main className="pb-8 pt-32 lg:pt-36">
        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="text-kicker">About {siteMeta.brand}</span>
              <h1 className="text-fluid-display mt-4 max-w-4xl font-semibold text-foreground">
                We build systems that help growth-stage operations execute with less friction.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {siteMeta.brand} is an AI-powered systems integration partner for mid-market businesses facing operational complexity.
                Our focus is simple: connect fragmented workflows so teams can execute predictably.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell border-y border-border/60 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Mission</p>
                <h2 className="mt-3 text-2xl font-medium text-foreground">Turn operational chaos into predictable execution.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We design and implement custom systems that integrate your current stack into one coherent operating workflow with clear handoffs,
                  measurable status, and decision-ready visibility.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="surface p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Ideal fit</p>
                <h2 className="mt-3 text-2xl font-medium text-foreground">Mid-market teams with active workflows and scaling pressure.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We work best with organizations that already have meaningful process volume but need stronger systems integration,
                  workflow reliability, and operational visibility.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mb-8 max-w-3xl"
            >
              <span className="text-kicker">Operating principles</span>
              <h2 className="text-fluid-heading mt-4 font-semibold text-foreground">
                Engineering discipline aligned with business reality.
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="surface p-6"
                >
                  <h3 className="text-xl font-medium text-foreground">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 text-center"
            >
              <h2 className="text-fluid-heading font-semibold text-foreground">Need an external systems partner for your next phase?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with a discovery call and we will evaluate whether the fit is right for both sides.
              </p>
              <Link to="/contact" className="mt-7 inline-block">
                <Button size="lg" className="group rounded-full px-8">
                  Start a Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
