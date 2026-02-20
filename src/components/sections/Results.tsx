import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionPatterns } from '@/content/siteContent';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" ref={ref} className="section-shell border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="text-kicker">Solution patterns</span>
            <h2 className="text-fluid-heading mt-4 font-semibold text-foreground">
              Industry-aligned operating systems, mapped to real operational constraints.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              These are representative patterns from operations-heavy environments where teams need tighter workflow control,
              not more disconnected software.
            </p>
          </div>

          <Link
            to="/results"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore solution use cases
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {solutionPatterns.map((pattern, index) => (
            <motion.article
              key={pattern.industry}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{pattern.industry}</p>
              <h3 className="mt-3 text-xl font-medium text-foreground">Primary challenge</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pattern.challenge}</p>

              <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">System outcome</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pattern.outcome}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {pattern.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
