import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const SEO = ({
  title = 'Sellatica | AI Operations for Growing Businesses',
  description = 'We help service businesses, agencies, and operators remove manual work and build systems that scale. Strategy, design, and implementation.',
  canonical,
  image = 'https://www.sellatica.in/og-image.png',
  ogTitle,
  ogDescription,
  breadcrumbs,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.sellatica.in').replace(
    /\/+$/,
    ''
  );

  const getCanonicalUrl = () => {
    if (canonical) {
      return canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
    }

    const pathname = location.pathname || '/';
    return pathname === '/' ? siteUrl : `${siteUrl}${pathname}`;
  };

  const canonicalUrl = getCanonicalUrl();
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  const renderBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sellatica.in' },
        ...breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: crumb.name,
          item: crumb.item,
        })),
      ],
    };

    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={image} />

      {renderBreadcrumbSchema()}
    </Helmet>
  );
};

export default SEO;
