import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Strategic Assessment',
    description: 'Audit your tech stack, identify integration gaps, and design end-to-end system architecture with clear ROI modeling.',
    features: ['Tech stack audit', 'Gap analysis', 'Architecture design', 'ROI projection'],
  },
  {
    number: '02',
    title: 'System Build & Integration',
    description: 'Connect fragmented tools via APIs, build AI-powered automation layers, and create unified data warehouses.',
    features: ['API integrations', 'AI automation', 'Data warehouse', 'Real-time dashboards'],
  },
  {
    number: '03',
    title: 'Deployment & Training',
    description: 'Staged rollout to minimize disruption, team training on new interfaces, and comprehensive documentation.',
    features: ['Phased rollout', 'Team training', 'Performance monitoring', 'Documentation'],
  },
  {
    number: '04',
    title: 'Continuous Optimization',
    description: 'Learning loops that improve accuracy over time, quarterly reviews, and support for scaling as you grow.',
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
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.1]">
              Custom-built operational systems
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
              className="p-8 lg:p-10 bg-background hover:bg-card/50 transition-colors"
            >
              <span className="text-sm text-muted-foreground/50 font-medium mb-6 block">
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
                    <Check className="w-3 h-3 text-foreground" />
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
