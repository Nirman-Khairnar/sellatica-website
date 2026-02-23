import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By using this website or engaging Sellatica for services, you agree to these Terms and Conditions.',
      'If you do not agree, please do not use the website or submit business inquiry data.',
      'These terms are intended for business users and organizations evaluating or engaging Sellatica services.',
    ],
  },
  {
    title: '2. Nature of Services',
    content: [
      'Sellatica provides B2B AI automation consulting, systems integration, workflow design, and related implementation support.',
      'Detailed scope, deliverables, timelines, and commercials are governed by written proposals, statements of work (SOW), or master service agreements (MSA).',
      'In case of conflict, signed client agreements override website-level terms.',
    ],
  },
  {
    title: '3. Discovery and Qualification',
    content: [
      'All engagements start with a discovery and qualification process.',
      'Sellatica may decline projects that are not operationally ready, are out of scope, or carry unacceptable compliance or execution risk.',
    ],
  },
  {
    title: '4. Client Responsibilities',
    content: [
      'Clients must provide accurate business and technical information needed for planning and delivery.',
      'Clients are responsible for obtaining internal approvals and lawful rights to systems, data, credentials, and third-party platforms they ask Sellatica to work with.',
      'Delays caused by missing access, feedback, or approvals may affect timelines and commercial terms.',
      'Clients remain responsible for decisions made using outputs, recommendations, and automations deployed in their environment.',
    ],
  },
  {
    title: '5. Fees, Invoicing, and Payment',
    content: [
      'Fees, milestone schedules, and payment terms are defined in the signed commercial document.',
      'Unless otherwise stated in writing, invoices are due as per agreed timeline and may attract applicable taxes and statutory levies.',
      'Late payments may pause work, support access, or deployment activity until accounts are regularized.',
    ],
  },
  {
    title: '6. Change Requests and Scope Control',
    content: [
      'Any change beyond the agreed scope may require written change approval, timeline revision, and commercial adjustment.',
      'Urgent or unplanned requests may be handled on time-and-material basis if mutually agreed in writing.',
    ],
  },
  {
    title: '7. Intellectual Property',
    content: [
      'Each party retains pre-existing intellectual property.',
      'Ownership and licensing of project outputs are governed by the signed proposal/SOW/MSA.',
      'Sellatica may retain reusable know-how, methods, templates, and non-client-specific implementation patterns.',
    ],
  },
  {
    title: '8. Confidentiality',
    content: [
      'Both parties must protect confidential information shared during discussions and delivery.',
      'Confidential information may only be used for the engagement purpose and may not be disclosed except as required by law or approved in writing.',
    ],
  },
  {
    title: '9. Third-party Tools and Dependencies',
    content: [
      'Sellatica implementations may rely on third-party software, APIs, and infrastructure.',
      'Client acknowledges that third-party platform availability, pricing, policy changes, and outages are outside Sellatica direct control.',
      'Client is responsible for maintaining valid licenses and compliant use of third-party tools in their environment.',
    ],
  },
  {
    title: '10. Acceptable Use',
    content: [
      'You agree not to misuse this website, attempt unauthorized access, interfere with platform security, or submit unlawful content.',
      'Sellatica may restrict access or deny service in case of abuse, fraud indicators, or legal non-compliance.',
    ],
  },
  {
    title: '11. Service Disclaimer',
    content: [
      'Sellatica designs and implements systems for improved operational reliability and execution discipline, but does not guarantee specific revenue, profit, or business outcomes unless explicitly contracted.',
      'Recommendations are based on provided inputs, project constraints, and implementation realities at the time of delivery.',
      'The website and informational materials are provided on an as-is basis and do not constitute legal, tax, or regulatory advice.',
    ],
  },
  {
    title: '12. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Sellatica is not liable for indirect, incidental, consequential, or special damages including loss of revenue, profits, goodwill, or business interruption.',
      'Aggregate liability, if any, is limited to the fees paid for the specific services giving rise to the claim, unless a signed agreement states otherwise.',
    ],
  },
  {
    title: '13. Indemnity',
    content: [
      'Client agrees to indemnify and hold Sellatica harmless against third-party claims arising from client-provided content, unlawful instructions, unauthorized data use, or breach of these terms or signed agreements.',
      'Sellatica agrees to address validated claims directly caused by its willful misconduct, subject to agreed contractual limits.',
    ],
  },
  {
    title: '14. Suspension and Termination',
    content: [
      'Sellatica may suspend or terminate services for non-payment, material breach, compliance risk, or unlawful use.',
      'Clients may terminate as per their signed agreement. Completed work and accrued fees remain payable.',
    ],
  },
  {
    title: '15. Governing Law and Jurisdiction',
    content: [
      'These Terms are governed by the laws of India.',
      'Subject to applicable law, courts in Gujarat, India shall have jurisdiction over disputes unless otherwise agreed in a signed contract.',
    ],
  },
  {
    title: '16. Contact',
    content: [
      'For legal or commercial queries regarding these Terms, write to hello@sellatica.in.',
      'Last updated: February 23, 2026',
    ],
  },
];

const Terms = () => {
  const description =
    'Sellatica Terms and Conditions for B2B AI automation consulting, service engagement, payments, liability, and jurisdiction in India.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Terms & Conditions | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/terms"
        keywords="sellatica terms and conditions, b2b consulting terms india, automation consulting contract terms"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Terms & Conditions', url: 'https://www.sellatica.in/terms' },
          ]),
          webpageSchema({
            title: 'Sellatica Terms and Conditions',
            description,
            url: 'https://www.sellatica.in/terms',
          }),
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
              className="max-w-4xl"
            >
              <span className="text-kicker">Legal</span>
              <h1 className="text-fluid-display mt-4 font-semibold text-foreground">Terms &amp; Conditions</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                These terms govern website use and B2B service engagement with Sellatica. They are designed for professional
                consulting and implementation relationships, not consumer product transactions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-shell border-y border-border/60 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-5">
              {sections.map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="surface p-6"
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

export default Terms;
