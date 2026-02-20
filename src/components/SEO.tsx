import { Helmet } from 'react-helmet-async';
import { siteMeta } from '@/content/siteContent';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  keywords?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SEO = ({
  title = `${siteMeta.brand} | ${siteMeta.tagline}`,
  description = siteMeta.description,
  canonical = siteMeta.url,
  image = `${siteMeta.url}/favicon.ico`,
  keywords = "custom AI systems, operations automation, workflow integration, mid-market operations",
  type = "website",
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteMeta.brand} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
