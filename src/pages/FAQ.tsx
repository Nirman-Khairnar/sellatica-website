import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { aeoFAQs } from '@/content/siteContent';
import { breadcrumbSchema, faqSchema, webpageSchema } from '@/lib/structuredData';

const FAQ = () => {
  const description =
    'Frequently asked questions about Sellatica services, implementation model, team fit, and engagement process.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="FAQ | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/faq"
        keywords="sellatica faq, ai systems integration questions, operations automation faq"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'FAQ', url: 'https://www.sellatica.in/faq' },
          ]),
          webpageSchema({
            title: 'Sellatica FAQ',
            description,
            url: 'https://www.sellatica.in/faq',
          }),
          faqSchema(aeoFAQs),
        ]}
      />

      <Header />

      <main className="pb-8 pt-32 lg:pt-36">
        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <span className="text-kicker">Frequently Asked Questions</span>
              <h1 className="text-fluid-display mt-4 font-semibold text-foreground">
                Clear answers for buyers, operators, and delivery teams.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This page is structured for both decision-makers and AI-assisted search experiences,
                so key service questions are easy to parse and verify.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell border-y border-border/60 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="surface mx-auto max-w-4xl p-6 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-primary" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Service Q&A</p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {aeoFAQs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
