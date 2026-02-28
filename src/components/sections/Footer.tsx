import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/results' },
    { name: 'Process', href: '/services' },
  ],
};

const Footer = () => {
  return (
    <footer className="py-16 lg:py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-semibold text-foreground">Sellatica</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Business AI Operating System for mid-market businesses experiencing
              operational chaos from growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@sellatica.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@sellatica.in
                </a>
              </li>
              <li>
                <Link to="/ai-os-audit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Book AI OS Audit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sellatica. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Refund &amp; Cancellation
            </Link>
            <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Shipping Policy
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
