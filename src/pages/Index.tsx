import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Results from '@/components/sections/Results';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { aeoFAQs, siteMeta } from '@/content/siteContent';
import {
  faqSchema,
  organizationSchema,
  professionalServiceSchema,
  webpageSchema,
  websiteSchema,
} from '@/lib/structuredData';

const Index = () => {
  const description =
    'Custom AI systems integration for mid-market businesses that need reliable operations, better workflow ownership, and coordinated execution.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title={`${siteMeta.brand} | Custom AI Systems Integration for Mid-Market Operations`}
        description={description}
        canonical={siteMeta.url}
        keywords="custom ai systems integration, mid-market operations automation, workflow orchestration, business systems architecture"
        structuredData={[
          organizationSchema,
          websiteSchema,
          professionalServiceSchema,
          webpageSchema({
            title: `${siteMeta.brand} Home`,
            description,
            url: siteMeta.url,
          }),
          faqSchema(aeoFAQs.slice(0, 3)),
        ]}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Results />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
