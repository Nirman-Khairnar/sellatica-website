import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, Dot } from 'lucide-react';
import { navItems, siteMeta } from '@/content/siteContent';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-border/70 bg-background/70 backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between lg:h-24">
            <Link to="/" className="relative z-10 group">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
                  {siteMeta.brand}
                </span>
                <span className="hidden h-5 w-px bg-border sm:block" />
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                  operations OS
                </span>
              </motion.div>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-border/50 bg-card/45 p-1 backdrop-blur-xl lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/12"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <span className="text-kicker">
                <Dot className="h-3 w-3 text-primary" />
                Reply within 24h
              </span>
              <Link to="/contact">
                <Button
                  size="sm"
                  className="group rounded-full px-5"
                >
                  <span>Book Discovery Call</span>
                  <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-10 rounded-full border border-border/60 bg-card/60 p-2 text-foreground backdrop-blur lg:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <button
              className="absolute inset-0 h-full w-full bg-background/96 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.nav
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative mx-6 mt-28 rounded-3xl border border-border/60 bg-card/85 px-6 py-10 backdrop-blur-2xl"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="w-full"
                >
                  <Link
                    to={item.href}
                    className={`block w-full rounded-2xl px-4 py-3 text-lg transition-colors ${
                      location.pathname === item.href
                        ? 'bg-foreground/10 text-foreground'
                        : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-6 w-full"
              >
                <Link to="/contact">
                  <Button size="lg" className="w-full rounded-full text-base">
                    Book Discovery Call
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
