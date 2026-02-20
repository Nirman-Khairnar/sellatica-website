import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteMeta, trustPillars } from '@/content/siteContent';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="floating-orb left-[-10rem] top-0 h-72 w-72 bg-primary/30" />
      <div className="floating-orb bottom-[-8rem] right-[-4rem] h-80 w-80 bg-accent/20" />

      <div className="container relative z-10 mx-auto px-6 pb-16 pt-20 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6"
            >
              <span className="text-kicker">Custom AI Systems Integration</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05 }}
              className="text-fluid-display mb-6 max-w-4xl font-semibold text-foreground"
            >
              Build a reliable operating system for your business, not another disconnected stack.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {siteMeta.brand} helps mid-market teams connect fragmented tools into one coordinated workflow.
              The result is clearer execution, fewer manual bottlenecks, and faster operational decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mb-10 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/contact">
                <Button size="lg" className="group rounded-full px-7 text-base">
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-full border-border/70 bg-card/60 px-7 text-base text-foreground hover:bg-card"
                >
                  Explore Services
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {trustPillars.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="surface noise-overlay relative overflow-hidden p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Ops Control Layer
                </span>
                <span className="hero-glow inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </div>

              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.45 }}
                  className="gradient-border rounded-xl p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Signal</p>
                  <p className="mt-2 text-sm text-foreground">
                    Lead handoff delays are causing follow-up gaps across sales and ops.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.45 }}
                  className="gradient-border rounded-xl p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Action</p>
                  <p className="mt-2 text-sm text-foreground">
                    Route qualified leads to owner-specific workflows and trigger instant follow-up tasks.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.45 }}
                  className="gradient-border rounded-xl p-4"
                >
                  <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Outcome</p>
                  <p className="mt-2 text-sm text-foreground">
                    Operators get one clear system view instead of chasing updates across tabs and chats.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-9 w-5 rounded-full border border-border/70 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
