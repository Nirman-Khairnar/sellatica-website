import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, DatabaseZap, Workflow, Wrench } from 'lucide-react';

const frictionSignals = [
  {
    icon: Workflow,
    title: 'Workflow ownership is unclear',
    text: 'Tasks move across teams with no reliable state change, so follow-up depends on manual checking.',
  },
  {
    icon: DatabaseZap,
    title: 'Data context is fragmented',
    text: 'Operators switch between tools to answer one business question, which slows execution and increases error risk.',
  },
  {
    icon: AlertTriangle,
    title: 'Escalations happen too late',
    text: 'Without real-time operational signals, teams discover failures after revenue or service impact is already visible.',
  },
  {
    icon: Wrench,
    title: 'Automation is brittle',
    text: 'Quick fixes and disconnected scripts fail under scale because system assumptions were never standardized.',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-shell border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <span className="text-kicker">Why teams hit execution ceilings</span>
            <h2 className="text-fluid-heading mt-4 max-w-3xl font-semibold text-foreground">
              Most growth problems are operations problems disguised as tool decisions.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              When systems do not share context, teams compensate with manual work. That creates invisible latency,
              inconsistent decisions, and unnecessary operational stress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="surface-muted lg:col-span-5 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">What changes after integration</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">One workflow state visible to every owner.</li>
              <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Exceptions trigger action automatically, not by chance.</li>
              <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Operations leaders get decision-grade data in real time.</li>
              <li className="rounded-lg border border-border/60 bg-background/55 px-3 py-2">Teams spend more time executing and less time reconciling.</li>
            </ul>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {frictionSignals.map((signal, index) => (
            <motion.article
              key={signal.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="surface p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/15 p-2.5 text-primary">
                <signal.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-foreground">{signal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{signal.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
