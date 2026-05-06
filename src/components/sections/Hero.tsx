import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { runtimeConfig } from '@/lib/runtime';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-[640px]">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-[1.1] mb-8"
          >
            Your business should run better than it does right now.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            We help growing businesses remove manual work, fix broken follow-up, and build systems that run without constant management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/score"
              data-track="cta_clicked"
              data-track-props={JSON.stringify({ location: 'hero', type: 'primary' })}
            >
              <Button size="lg" className="group text-base px-8 h-14">
                Find Out Your Operations Score
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button asChild variant="outline" size="lg" className="group text-base px-8 h-14 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5">
              <a
                href={runtimeConfig.calcomBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="cta_clicked"
                data-track-props={JSON.stringify({ location: 'hero', type: 'secondary' })}
              >
                Book a Strategy Review
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-muted-foreground mt-5"
          >
            3 minutes. 10 questions. A clear score that shows where you stand.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
