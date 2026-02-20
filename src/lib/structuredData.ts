import { siteMeta } from "@/content/siteContent";

type SchemaRecord = Record<string, unknown>;

export const organizationSchema: SchemaRecord = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMeta.brand,
  url: siteMeta.url,
  email: siteMeta.email,
  description: siteMeta.description,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export const websiteSchema: SchemaRecord = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMeta.brand,
  url: siteMeta.url,
  description: siteMeta.description,
  publisher: {
    "@type": "Organization",
    name: siteMeta.brand,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteMeta.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const professionalServiceSchema: SchemaRecord = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteMeta.brand,
  url: siteMeta.url,
  description: siteMeta.description,
  areaServed: ["India", "Global"],
  email: siteMeta.email,
};

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): SchemaRecord => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const webpageSchema = (input: {
  title: string;
  description: string;
  url: string;
}): SchemaRecord => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: input.title,
  description: input.description,
  url: input.url,
  isPartOf: {
    "@type": "WebSite",
    name: siteMeta.brand,
    url: siteMeta.url,
  },
});

export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
): SchemaRecord => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
