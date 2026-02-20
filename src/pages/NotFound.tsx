import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn('404 route requested:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="page-shell flex min-h-screen items-center justify-center px-6 text-center">
      <SEO title="Page Not Found | Sellatica" description="The page you requested was not found." noIndex />
      <div className="surface max-w-xl p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The URL <span className="font-mono text-xs">{location.pathname}</span> does not match an active page.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full border border-border/70 bg-card/70 px-5 py-2 text-sm text-foreground transition-colors hover:bg-card"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
