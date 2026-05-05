import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By using this website or engaging Sellatica services, you agree to these Terms and Conditions.',
      'If you do not accept these terms, please do not use the website or engage services.',
      'These terms apply to B2B service engagements and business users only.',
    ],
  },
  {
    title: '2. Nature of Services',
    content: [
      'Sellatica provides B2B operational consulting, workflow architecture, systems integration, and implementation support.',
      'Detailed scope, deliverables, timelines, and commercials are defined in signed proposals, statements of work (SOW), or master service agreements (MSA).',
      'If there is any conflict, signed client agreements prevail over website-level terms.',
    ],
  },
  {
    title: '3. Payment Terms',
    content: [
      'Fees, milestone schedules, taxes, and due dates are defined in written commercial documents.',
      'Payments must be made on agreed dates to avoid delivery delays or temporary service suspension.',
      'Late payments may pause work until outstanding dues are cleared.',
    ],
  },
  {
    title: '4. Intellectual Property Ownership',
    content: [
      'Each party retains ownership of its pre-existing intellectual property.',
      'Ownership and licensing of project outputs are governed by signed contracts.',
      'Sellatica retains rights to reusable methods, frameworks, templates, and non-client-specific implementation know-how.',
    ],
  },
  {
    title: '5. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Sellatica is not liable for indirect, incidental, consequential, or special damages.',
      'Sellatica is not responsible for losses caused by client-side misuse, third-party tools, outages, or policy changes outside our control.',
      'Aggregate liability, if any, is limited to fees paid for the specific services giving rise to the claim, unless otherwise stated in a signed agreement.',
    ],
  },
  {
    title: '6. Governing Law',
    content: [
      'These Terms are governed by the laws of India.',
      'Business location reference: Vadodara, Gujarat.',
    ],
  },
  {
    title: '7. Dispute Resolution',
    content: [
      'Any dispute must first be raised in writing at contact@sellatica.in for good-faith resolution.',
      'If unresolved, disputes are subject to competent courts in Gujarat, India, unless otherwise agreed in writing.',
    ],
  },
  {
    title: '8. Business Contact',
    content: [
      'Business Name: Sellatica',
      'Address: Vadodara, Gujarat',
      'Contact: contact@sellatica.in',
      'Last updated: February 23, 2026',
    ],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms & Conditions | Sellatica"
        description="Terms and Conditions for Sellatica B2B operational consulting services."
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
              <h1 className="mt-4 font-display text-4xl md:text-5xl font-medium text-foreground">Terms &amp; Conditions</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                These terms govern use of the Sellatica website and all B2B operational consulting engagements.
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

export default Terms;
