import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-foreground/[0.02] rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">
              <span className="w-12 h-px bg-border" />
              AI-Powered Systems Integration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-[1.05] mb-8"
          >
            Turn operational chaos into{' '}
            <span className="text-muted-foreground">predictable execution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            We design and implement custom AI-powered systems that transform 
            fragmented tech stacks into unified workflows—delivering measurable 
            business value for mid-market enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <Link to="/contact">
              <Button size="lg" className="group text-base">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/results">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground text-base">
                View Case Studies
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-border/50"
          >
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={1500} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">Average Year 1 ROI</p>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={3} suffix=" weeks" />
              </div>
              <p className="text-sm text-muted-foreground">To Break-Even</p>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter end={89} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">Time Savings</p>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                <AnimatedCounter prefix="$" end={100} suffix="M+" />
              </div>
              <p className="text-sm text-muted-foreground">Revenue Protected</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
