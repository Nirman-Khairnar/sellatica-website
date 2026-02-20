import { Link } from 'react-router-dom';
import { navItems, siteMeta } from '@/content/siteContent';

const Footer = () => {
  return (
    <footer className="section-shell border-t border-border/60 pt-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="text-2xl font-semibold tracking-tight text-foreground">{siteMeta.brand}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Operations Systems</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteMeta.description}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{siteMeta.location}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteMeta.email}`} className="transition-colors hover:text-foreground">
                  {siteMeta.email}
                </a>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-foreground">
                  Book Discovery Call
                </Link>
              </li>
              <li>
                <Link to="/faq" className="transition-colors hover:text-foreground">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteMeta.brand}. All rights reserved.</p>
          <p>{siteMeta.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
