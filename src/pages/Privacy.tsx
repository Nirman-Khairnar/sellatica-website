import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const sections = [
  {
    title: '1. Policy Scope and Business Context',
    content: [
      'This Privacy Policy explains how Sellatica collects, uses, stores, and protects information when you use https://www.sellatica.in or engage with Sellatica for B2B automation and systems integration services.',
      'Sellatica operates as a business-focused consulting partner and this policy is written for company representatives, operators, founders, and project stakeholders interacting with us.',
      'This policy applies to website inquiries, discovery calls, pre-sales evaluation, project delivery communications, and support interactions unless a signed agreement states otherwise.',
    ],
  },
  {
    title: '2. Who We Are and How to Contact Us',
    content: [
      'Business Name: Sellatica',
      'Primary Contact: hello@sellatica.in',
      'Location: Gujarat, India',
      'For privacy requests, include your name, company name, email used in communication, and the specific request details.',
    ],
  },
  {
    title: '3. Information We Collect',
    content: [
      'Identification and contact information submitted by you: name, business email, company name, role, phone number, and inquiry details.',
      'Commercial and operational context shared during discovery and delivery: process bottlenecks, workflow stages, software stack, team structure, service requirements, and project constraints.',
      'Communication records: emails, meeting notes, call summaries, requirement documents, and support exchanges needed to execute services.',
      'Technical and usage data: timestamps, page interactions, browser/device metadata, and security logs used for site reliability, fraud prevention, and diagnostics.',
      'We do not intentionally collect personal data that is unrelated to a legitimate B2B interaction.',
    ],
  },
  {
    title: '4. How We Use Information',
    content: [
      'To review your inquiry, schedule discovery calls, and respond to business requests.',
      'To qualify engagement fit, prepare proposals, define project scope, and create statements of work.',
      'To deliver consulting and implementation services, including workflow design, integration planning, communication, support, and reporting.',
      'To run, monitor, and secure our website and operations infrastructure.',
      'To comply with legal obligations, enforce contractual rights, and maintain audit and governance records.',
    ],
  },
  {
    title: '5. Legal and Operational Basis',
    content: [
      'For inquiry handling and pre-sales communication, processing is based on your request and our legitimate business interest in evaluating and responding to B2B opportunities.',
      'For active delivery work, processing is based on contract performance and operational necessity.',
      'Where required, processing may also rely on consent, which can be withdrawn subject to legal and contractual limitations.',
      'Our processing approach is aligned to applicable India laws and contractual obligations relevant to business data handling.',
    ],
  },
  {
    title: '6. Data Sharing and Sub-processors',
    content: [
      'We do not sell personal data.',
      'Information may be shared with vetted service providers required to operate our delivery systems (for example: hosting, communications, analytics, workflow automation, and cloud infrastructure providers), subject to access control and confidentiality safeguards.',
      'We may share data with professional advisors (legal, accounting, compliance) when necessary for lawful business operations.',
      'We may disclose information where required by law, lawful regulator direction, or court order, or to protect legal rights, security, and platform integrity.',
    ],
  },
  {
    title: '7. Cross-border Processing',
    content: [
      'Sellatica serves India-first and global B2B clients. Depending on deployment architecture and tooling choices, data may be processed in jurisdictions outside India.',
      'Where cross-border processing occurs, we apply reasonable contractual and operational safeguards consistent with service and compliance requirements.',
    ],
  },
  {
    title: '8. Data Retention',
    content: [
      'Inquiry and pre-sales records are retained for follow-up, quality control, and compliance tracking for a limited business period.',
      'Client delivery records are retained for continuity, support, legal/commercial recordkeeping, and tax/accounting requirements.',
      'Data retention periods may vary by contractual terms, legal obligations, dispute requirements, and operational necessity.',
      'When information is no longer required, we delete, anonymize, or archive it with restricted access as appropriate.',
    ],
  },
  {
    title: '9. Security Measures',
    content: [
      'We implement reasonable technical and organizational safeguards including role-based access, logging and monitoring, secure credential practices, and process controls for operational tooling.',
      'We restrict internal access to business information on a need-to-know basis.',
      'No method of transmission or storage is fully risk-free. We continuously improve controls based on threat and operational risk signals.',
    ],
  },
  {
    title: '10. Your Rights and Choices',
    content: [
      'Subject to applicable law and contract terms, you may request access to, correction of, or deletion of your relevant information.',
      'You may opt out of non-essential communications.',
      'We may request reasonable verification before processing rights requests to protect data security.',
      'Some requests may be limited by legal obligations, active contractual commitments, fraud prevention needs, or ongoing dispute handling.',
    ],
  },
  {
    title: '11. Cookies and Tracking',
    content: [
      'Our website may use essential and analytics-related technologies to improve reliability, performance, and user experience.',
      'You can manage cookie preferences through browser controls. Disabling certain cookies may affect website behavior.',
    ],
  },
  {
    title: '12. Third-party Links and Platforms',
    content: [
      'This website may link to third-party tools or external websites. Their privacy practices are governed by their own policies.',
      'Sellatica is not responsible for third-party privacy or security controls outside our managed environment.',
    ],
  },
  {
    title: '13. Grievance and Escalation',
    content: [
      'If you have a privacy concern or data grievance, contact hello@sellatica.in with subject line: Privacy Grievance.',
      'Please include your company name, contact details, and a clear description of the issue so we can investigate and respond efficiently.',
    ],
  },
  {
    title: '14. Policy Updates',
    content: [
      'We may update this Privacy Policy to reflect legal, operational, or service changes. Material updates will be posted on this page with a revised date.',
      'Last updated: February 23, 2026',
    ],
  },
];

const Privacy = () => {
  const description =
    'Sellatica Privacy Policy for B2B consulting and AI automation services, including data handling, retention, and security practices.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Privacy Policy | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/privacy"
        keywords="sellatica privacy policy, b2b data policy, india consulting privacy"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Privacy Policy', url: 'https://www.sellatica.in/privacy' },
          ]),
          webpageSchema({
            title: 'Sellatica Privacy Policy',
            description,
            url: 'https://www.sellatica.in/privacy',
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
              <h1 className="text-fluid-display mt-4 font-semibold text-foreground">Privacy Policy</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This policy describes how Sellatica handles information for website visitors, prospects, and client teams in the
                course of B2B systems integration and automation consulting engagements.
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

export default Privacy;
