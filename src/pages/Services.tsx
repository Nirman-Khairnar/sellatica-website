import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { servicePillars, siteMeta } from '@/content/siteContent';
import { breadcrumbSchema, faqSchema, webpageSchema } from '@/lib/structuredData';

const serviceFaqs = [
  {
    question: 'How does Sellatica scope a custom integration build?',
    answer:
      'Scope is defined during discovery by mapping existing workflows, ownership boundaries, and operational bottlenecks before implementation starts.',
  },
  {
    question: 'Will Sellatica replace our current tools?',
    answer:
      'Not by default. The preferred approach is integrating existing systems first and replacing only when a platform blocks operational reliability.',
  },
  {
    question: 'What does deployment include?',
    answer:
      'Deployment includes phased release, SOP documentation, team enablement, and monitoring setup for each workflow module.',
  },
];

const Services = () => {
  const description =
    'Sellatica services cover operational assessment, custom system build, deployment, and optimization for mid-market teams with fragmented workflows.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Services | Sellatica Custom AI Systems"
        description={description}
        canonical="https://www.sellatica.in/services"
        keywords="ai systems services, workflow integration services, operations automation consulting, custom business systems"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Services', url: 'https://www.sellatica.in/services' },
          ]),
          webpageSchema({
            title: 'Sellatica Services',
            description,
            url: 'https://www.sellatica.in/services',
          }),
          faqSchema(serviceFaqs),
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
              <span className="text-kicker">Service Scope</span>
              <h1 className="text-fluid-display mt-4 max-w-4xl font-semibold text-foreground">
                Build one coordinated operating workflow across your existing systems.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Each engagement is custom-designed around your operating reality. We focus on workflow reliability,
                reporting clarity, and execution speed without forcing a full-stack replacement.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell border-y border-border/60 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2">
              {servicePillars.map((service, index) => (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="surface p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Phase {service.phase}</p>
                  <h2 className="mt-3 text-2xl font-medium text-foreground">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="surface p-6"
              >
                <h3 className="text-xl font-medium text-foreground">What we prioritize in every build</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Clear workflow ownership by stage and function.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Operational visibility for founders and operations leaders.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Failure-safe routing and exception handling.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Team enablement so adoption survives scale pressure.</li>
                </ul>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="surface p-6"
              >
                <h3 className="text-xl font-medium text-foreground">What we avoid</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Generic automation templates detached from business context.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Vanity dashboards with no workflow ownership model.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">One-shot delivery without operational handoff readiness.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">System recommendations that ignore compliance and governance.</li>
                </ul>
              </motion.article>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-10 text-center"
            >
              <h2 className="text-fluid-heading font-semibold text-foreground">Need a scoped plan for your workflow stack?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Start with a discovery call. {siteMeta.brand} will map your current systems and define a practical implementation sequence.
              </p>
              <Link to="/contact" className="mt-7 inline-block">
                <Button size="lg" className="group rounded-full px-8">
                  Book Discovery Call
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

export default Services;
