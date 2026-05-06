import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { runtimeConfig } from '@/lib/runtime';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Book', href: runtimeConfig.calcomBookingUrl, external: true },
  { name: 'Blog', href: 'https://blogs.sellatica.in', external: true },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="relative z-10" data-track="nav_logo_clicked">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
                  Sellatica
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                const className = `relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                  }`;

                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={className}
                      data-track="nav_link_clicked"
                      data-track-props={JSON.stringify({ destination: item.href, location: 'desktop_nav' })}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={className}
                    data-track="nav_link_clicked"
                    data-track-props={JSON.stringify({ destination: item.href, location: 'desktop_nav' })}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button
                asChild
                variant="outline"
                size="sm"
                className="group border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
              >
                <a
                  href={runtimeConfig.calcomBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="cta_clicked"
                  data-track-props={JSON.stringify({ location: 'header' })}
                >
                  <span>Book a Strategy Review</span>
                  <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-foreground"
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
            <div
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                const className = `text-3xl font-display font-medium transition-colors ${isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
                  }`;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        className={className}
                        data-track="nav_link_clicked"
                        data-track-props={JSON.stringify({ destination: item.href, location: 'mobile_nav' })}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={className}
                        data-track="nav_link_clicked"
                        data-track-props={JSON.stringify({ destination: item.href, location: 'mobile_nav' })}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <ThemeToggle />
                <Button asChild size="lg" className="text-lg">
                  <a
                    href={runtimeConfig.calcomBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="cta_clicked"
                    data-track-props={JSON.stringify({ location: 'mobile_menu' })}
                  >
                    Book a Strategy Review
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
