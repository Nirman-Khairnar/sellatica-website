import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-foreground">Sellatica</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Growth Partner</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sellatica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
