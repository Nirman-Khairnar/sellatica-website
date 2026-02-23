import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';

const sections = [
  {
    title: '1. Scope and B2B Context',
    content: [
      'This Privacy Policy explains how Sellatica collects, uses, stores, and protects data for B2B interactions.',
      'Sellatica provides business services only. We do not intentionally collect personal consumer data unrelated to business communication or delivery.',
      'This policy applies to website inquiries, discovery calls, service delivery communication, and support interactions.',
    ],
  },
  {
    title: '2. Data We Collect',
    content: [
      'Business contact data such as name, work email, company name, role, phone details you choose to share, and inquiry content.',
      'Operational/project context such as workflow requirements, software stack information, and delivery notes shared for execution.',
      'Communication records such as emails, call notes, and support exchanges.',
      'Technical data such as IP metadata, browser details, timestamps, and security logs for reliability and fraud prevention.',
    ],
  },
  {
    title: '3. How Data Is Used',
    content: [
      'To respond to inquiries, schedule meetings, and evaluate B2B fit.',
      'To prepare proposals and deliver consulting and implementation services.',
      'To operate, secure, and improve website and delivery infrastructure.',
      'To comply with legal, tax, accounting, and contractual obligations.',
    ],
  },
  {
    title: '4. Third-Party Sharing',
    content: [
      'We do not sell personal data.',
      'Data may be shared with trusted third-party providers for hosting, analytics, communication, cloud infrastructure, and workflow operations under access controls.',
      'Data may be disclosed if required by law, regulator direction, or court order.',
    ],
  },
  {
    title: '5. Cookies and Tracking',
    content: [
      'The website may use essential cookies and analytics tools for performance, usability, and security.',
      'You can control cookie settings in your browser. Disabling cookies may affect website behavior.',
    ],
  },
  {
    title: '6. Data Retention',
    content: [
      'Inquiry and pre-sales records are retained for a limited period for operations and compliance.',
      'Project records may be retained based on service continuity, legal obligations, and accounting requirements.',
      'When no longer required, data is deleted, anonymized, or archived with restricted access.',
    ],
  },
  {
    title: '7. User Rights',
    content: [
      'Subject to applicable law, you may request access, correction, or deletion of relevant information.',
      'You may request opt-out from non-essential communication.',
      'Reasonable identity verification may be required before processing sensitive requests.',
    ],
  },
  {
    title: '8. Privacy Contact',
    content: [
      'For privacy requests, email contact@sellatica.in with subject line: Privacy Request.',
      'Business Name: Sellatica',
      'Address: Vadodara, Gujarat',
      'Last updated: February 23, 2026',
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Sellatica"
        description="Privacy Policy for Sellatica B2B AI automation consulting services."
        canonical="https://www.sellatica.in/privacy"
      />

      <Header />

      <main className="pt-32 pb-16 lg:pt-36">
        <section className="pb-10">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">
                LEGAL
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-5xl font-medium text-foreground">Privacy Policy</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This policy explains what business data we collect, why we collect it, and how Sellatica protects and processes it.
              </p>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-4">
              {sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                  className="rounded-2xl border border-border/60 bg-card/50 p-6"
                >
                  <h2 className="text-xl font-medium text-foreground">{section.title}</h2>
                  <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                    {section.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;