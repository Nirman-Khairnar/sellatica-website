import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const problems = [
  {
    stat: '50/day',
    label: 'Dispatch Calls',
    description: 'One logistics team was routing every driver through manual coordination.',
  },
  {
    stat: '4 hrs',
    label: 'Lead Response Lag',
    description: 'High-value inquiries were going cold before anyone owned the reply.',
  },
  {
    stat: '15 hrs/wk',
    label: 'Partner Admin Load',
    description: 'Senior decision-makers were trapped in intake and review loops.',
  },
  {
    stat: '48 hrs',
    label: 'To A Fix Plan',
    description: 'The Diagnostic turns hidden waste into a ranked action roadmap.',
  },
];

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              What We See First
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-[1.1]">
              The tool is rarely the problem.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The break usually happens underneath the tool: no clear owner, no response-time rule,
              no clean handoff, and no automatic next step. AI does not fix that by itself.
              <strong> It exposes it.</strong>
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                The Business Impact
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Follow-up depends on one busy person
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Approvals and updates live in inboxes
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Reporting is manual, delayed, or both
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  Growth adds headcount before it adds control
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 rounded-xl bg-card border border-border/50 hover:border-border transition-colors"
              >
                <span className="font-display text-3xl lg:text-4xl font-medium text-foreground block mb-2">
                  {problem.stat}
                </span>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  {problem.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
