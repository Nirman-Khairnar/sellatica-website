import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const SEO = ({
  title = "Sellatica | AI Operations for Growing Businesses",
  description = "We help service businesses, agencies, and operators remove manual work and build systems that scale. Strategy, design, and implementation.",
  canonical,
  image = "https://www.sellatica.in/og-image.png",
  breadcrumbs
}: SEOProps) => {
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    if (typeof window !== 'undefined') {
      return window.location.href.split('?')[0];
    }
    return "https://www.sellatica.in";
  };

  const canonicalUrl = getCanonicalUrl();

  const renderBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sellatica.in" },
        ...breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": crumb.name,
          "item": crumb.item
        }))
      ]
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

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {renderBreadcrumbSchema()}
    </Helmet>
  );
};

export default SEO;
