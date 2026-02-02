import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Cog, Rocket, LineChart } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Strategic Assessment & Architecture Design',
    description: 'Audit your tech stack, identify integration gaps, and design end-to-end system architecture with clear ROI modeling.',
    features: ['Tech stack audit', 'Integration gap analysis', 'Architecture design', 'ROI projection'],
  },
  {
    icon: Cog,
    title: 'System Build & Integration',
    description: 'Connect fragmented tools via APIs, build AI-powered automation layers, and create unified data warehouses.',
    features: ['API integrations (8-15 systems)', 'AI automation layers', 'Unified data warehouse', 'Real-time dashboards'],
  },
  {
    icon: Rocket,
    title: 'Deployment & Training',
    description: 'Staged rollout to minimize disruption, team training on new interfaces, and comprehensive documentation.',
    features: ['Phased deployment', 'Team training', 'Performance monitoring', 'SOPs & documentation'],
  },
  {
    icon: LineChart,
    title: 'Continuous Optimization',
    description: 'Learning loops that improve accuracy over time, quarterly reviews, and support for scaling as you grow.',
    features: ['System performance tracking', 'AI accuracy improvement', 'Quarterly optimization', 'Scale support'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
            Custom-Built Operational Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not generic consulting. Not off-the-shelf software. Solutions tailored 
            to your specific operational chaos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
