import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/work' },
    { name: 'Blog', href: 'https://blogs.sellatica.in', external: true },
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
              We help growing businesses simplify operations using AI and automation. Strategy, system design, and implementation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-track="nav_link_clicked"
                    data-track-props={JSON.stringify({ destination: link.href, location: 'footer_company' })}
                  >
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
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-track="nav_link_clicked"
                      data-track-props={JSON.stringify({ destination: link.href, location: 'footer_resources' })}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-track="nav_link_clicked"
                      data-track-props={JSON.stringify({ destination: link.href, location: 'footer_resources' })}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@sellatica.in"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-track="email_link_clicked"
                  data-track-props={JSON.stringify({ location: 'footer_contact' })}
                >
                  hello@sellatica.in
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-track="cta_clicked"
                  data-track-props={JSON.stringify({ location: 'footer_contact' })}
                >
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sellatica. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-track="nav_link_clicked" data-track-props={JSON.stringify({ destination: '/privacy', location: 'footer_legal' })}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-track="nav_link_clicked" data-track-props={JSON.stringify({ destination: '/terms', location: 'footer_legal' })}>
              Terms and Conditions
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-track="nav_link_clicked" data-track-props={JSON.stringify({ destination: '/refund', location: 'footer_legal' })}>
              Engagement Terms
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-track="nav_link_clicked" data-track-props={JSON.stringify({ destination: '/contact', location: 'footer_legal' })}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
