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
      
      {/* Gold-tinted radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[60px]" />
      
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Gold accent line + badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em]">
              <span className="w-12 h-px bg-[hsl(45_80%_60%/0.5)]" />
              AI-Powered Systems Integration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-[1.05] mb-4"
          >
            Your tech stack is growing.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-muted-foreground leading-[1.05] mb-8"
          >
            Your margins aren't.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            We architect AI-powered systems that eliminate the operational drag 
            between your tools, your teams, and your revenue — delivering 
            measurable ROI in weeks, not quarters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <Link to="/contact">
              <Button size="lg" className="group text-base hover-glow-gold">
                Book Your Free Strategy Session
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/results">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground text-base">
                See How We Did It
              </Button>
            </Link>
          </motion.div>

          {/* Trust line + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-8">
              Trusted by teams managing <span className="text-gold">$100M+</span> in revenue
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-border/50">
              <div>
                <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                  <AnimatedCounter end={1500} suffix="%" />
                </div>
                <p className="text-sm text-muted-foreground">Avg. First-Year ROI</p>
              </div>
              <div>
                <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                  <AnimatedCounter end={3} suffix=" weeks" />
                </div>
                <p className="text-sm text-muted-foreground">To Positive ROI</p>
              </div>
              <div>
                <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                  <AnimatedCounter end={89} suffix="%" />
                </div>
                <p className="text-sm text-muted-foreground">Operational Time Reclaimed</p>
              </div>
              <div>
                <div className="font-display text-4xl lg:text-5xl font-medium text-foreground mb-2">
                  <AnimatedCounter prefix="$" end={100} suffix="M+" />
                </div>
                <p className="text-sm text-muted-foreground">Client Revenue Protected</p>
              </div>
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
