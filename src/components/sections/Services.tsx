import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Diagnose & Design',
    description: 'We map every inefficiency, quantify the cost, and architect a system blueprint with guaranteed ROI projections before a single line of code is written.',
    features: ['Tech stack audit', 'Gap analysis', 'Architecture design', 'ROI projection'],
  },
  {
    number: '02',
    title: 'Engineer & Integrate',
    description: 'We connect your fragmented tools into a single nervous system — APIs, AI automation layers, and unified dashboards that eliminate manual handoffs.',
    features: ['API integrations', 'AI automation', 'Data warehouse', 'Real-time dashboards'],
  },
  {
    number: '03',
    title: 'Deploy & Enable',
    description: 'Zero-disruption rollout with hands-on team training. Your people adopt the new system confidently, with documentation they\'ll actually use.',
    features: ['Phased rollout', 'Team training', 'Performance monitoring', 'Documentation'],
  },
  {
    number: '04',
    title: 'Evolve & Scale',
    description: 'Systems that get smarter over time. Quarterly performance reviews, AI model tuning, and architecture that scales with your next growth phase.',
    features: ['Performance tracking', 'AI improvement', 'Quarterly reviews', 'Scale support'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              What We Build
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
              We don't sell software.{' '}
              <span className="text-muted-foreground">We build the system your business is missing.</span>
            </h2>
          </div>
          <Link 
            to="/services" 
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/50 rounded-xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 lg:p-10 bg-background hover:bg-card/50 transition-all duration-300 group hover:border-[hsl(45_80%_60%/0.15)]"
            >
              <span className="text-sm font-medium mb-6 block text-gold-gradient">
                {service.number}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="w-3 h-3 text-[hsl(45_80%_60%)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
