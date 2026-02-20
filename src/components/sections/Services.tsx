import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicePillars } from '@/content/siteContent';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="section-shell border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="text-kicker">Service architecture</span>
            <h2 className="text-fluid-heading mt-4 font-semibold text-foreground">
              Engagement model built for operations-heavy mid-market teams.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We do not ship generic automation bundles. Each implementation follows an operating model that aligns workflow logic,
              ownership, and reporting into one system.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View detailed service scope
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {servicePillars.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface h-full p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">PHASE {service.phase}</span>
                <span className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Custom
                </span>
              </div>

              <h3 className="text-2xl font-medium text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>

              <ul className="mt-5 space-y-2.5">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{deliverable}</span>
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

export default Services;
