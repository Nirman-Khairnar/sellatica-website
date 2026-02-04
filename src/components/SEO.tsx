import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const SEO = ({
  title = "Sellatica - Custom AI Systems for Mid-Market Businesses",
  description = "Sellatica builds custom AI systems that transform operational chaos into scalable execution for mid-market businesses. Proven ROI in weeks, not months.",
  canonical = "https://www.sellatica.in",
  image = "https://storage.googleapis.com/gpt-engineer-file-uploads/pUXKzUVcLsNkIiWmJAurN0HSxD33/social-images/social-1770104614326-Screenshot_20260203_130543_Gallery.png"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
