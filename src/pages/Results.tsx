import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { siteMeta, solutionPatterns } from '@/content/siteContent';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const Results = () => {
  const description =
    'See the solution patterns Sellatica builds for legal, real estate, logistics, and service teams to improve workflow reliability and execution clarity.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Solutions | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/results"
        keywords="operations automation case patterns, workflow integration examples, ai operations systems"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Solutions', url: 'https://www.sellatica.in/results' },
          ]),
          webpageSchema({
            title: 'Sellatica Solutions',
            description,
            url: 'https://www.sellatica.in/results',
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
              <span className="text-kicker">Solution library</span>
              <h1 className="text-fluid-display mt-4 font-semibold text-foreground">
                Built from real operational constraints, not hypothetical dashboards.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We design each implementation around workflow reliability. The patterns below show where {siteMeta.brand}
                typically creates the most operational lift for mid-market teams.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell border-y border-border/60 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-5">
              {solutionPatterns.map((pattern, index) => (
                <motion.article
                  key={pattern.industry}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="surface p-6"
                >
                  <div className="grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-3">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Industry</p>
                      <h2 className="mt-3 text-2xl font-medium text-foreground">{pattern.industry}</h2>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Operational challenge</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pattern.challenge}</p>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">System pattern</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pattern.outcome}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pattern.focus.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="surface p-6"
              >
                <h3 className="text-xl font-medium text-foreground">Typical outcome themes</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Faster internal response by removing manual status checks.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Higher process consistency through owner-specific workflow routing.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Clearer management decisions from unified operational reporting.</li>
                </ul>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="surface p-6"
              >
                <h3 className="text-xl font-medium text-foreground">How to evaluate fit</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">You already run an active sales or delivery operation.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Your team depends on multiple disconnected tools today.</li>
                  <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">You need predictable execution more than another generic automation stack.</li>
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
              <h2 className="text-fluid-heading font-semibold text-foreground">Want a use-case map for your business?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                We can map your current process and identify where workflow orchestration will reduce operational friction first.
              </p>
              <Link to="/contact" className="mt-7 inline-block">
                <Button size="lg" className="group rounded-full px-8">
                  Discuss Your Workflow
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

export default Results;
