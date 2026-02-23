import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const sections = [
  {
    title: '1. Policy Scope',
    content: [
      'This Refund and Cancellation Policy applies to Sellatica B2B consulting and implementation engagements, including discovery, architecture, build, and optimization phases.',
      'Because services are customized and capacity-based, this policy is different from consumer product return models.',
      'If a signed MSA/SOW contains different refund terms, the signed agreement governs that engagement.',
    ],
  },
  {
    title: '2. Discovery Calls and Advisory Sessions',
    content: [
      'Discovery calls are generally non-chargeable unless explicitly offered as a paid advisory session.',
      'If a paid session is booked, cancellation or rescheduling requests should be made at least 24 hours in advance.',
      'Missed paid sessions or late cancellations may be treated as utilized time and may not be refundable.',
    ],
  },
  {
    title: '3. Project Kickoff and Milestone Payments',
    content: [
      'Any advance or kickoff fee reserves delivery capacity and planning time and is non-refundable once project initiation activities have started.',
      'Milestone payments become non-refundable once corresponding milestone work has been delivered or made available for review.',
      'Where partial work is completed, refunds (if any) are assessed only on the unstarted scope after deducting completed effort, committed costs, and applicable taxes/charges.',
      'Client-requested pauses do not automatically create refund eligibility unless expressly agreed in writing.',
    ],
  },
  {
    title: '4. Cancellation by Client',
    content: [
      'Cancellation requests must be sent in writing to hello@sellatica.in by an authorized client representative.',
      'On cancellation, the client is responsible for payment of completed work, work in progress, and non-cancellable third-party commitments already approved.',
      'Any planned but unstarted work may be canceled based on the signed agreement terms.',
      'Any refundable amount, if approved, is processed after commercial reconciliation and documentation review.',
    ],
  },
  {
    title: '5. Retainers and Ongoing Support',
    content: [
      'For monthly or periodic support retainers, cancellation terms and notice periods follow the signed agreement.',
      'Unless otherwise agreed, billed periods already started are non-refundable, and services continue through the paid cycle.',
    ],
  },
  {
    title: '6. Cancellation by Sellatica',
    content: [
      'Sellatica may suspend or cancel services for material breach, non-payment, legal/compliance risk, or unsafe/unlawful usage requests.',
      'If Sellatica terminates without client breach, a fair adjustment of unused prepaid scope may be considered after reconciliation of completed work and committed costs.',
    ],
  },
  {
    title: '7. Duplicate or Erroneous Payments',
    content: [
      'If a duplicate payment or clear billing error is verified, the excess amount will be refunded or adjusted in writing within a reasonable processing period.',
      'Payment gateway, banking, and statutory timelines may affect final settlement timing.',
    ],
  },
  {
    title: '8. Non-refundable Items',
    content: [
      'Custom architecture work, delivered strategy documents, implementation code/workflows already delivered, and consumed consulting time are non-refundable.',
      'Third-party software/tooling charges paid on client instruction are non-refundable unless the third-party provider refunds them.',
      'Taxes, gateway processing fees, and statutory deductions may be excluded from refunds where applicable by law or provider policy.',
    ],
  },
  {
    title: '9. Rework and Service Correction',
    content: [
      'Refund is not the default remedy for project dissatisfaction where the agreed scope has been delivered.',
      'For documented quality or specification issues, Sellatica may provide reasonable correction, rework, or alignment within the agreed scope before considering any commercial adjustment.',
    ],
  },
  {
    title: '10. Chargebacks and Payment Disputes',
    content: [
      'Before initiating a chargeback, clients agree to raise a written dispute with Sellatica for commercial review.',
      'Unauthorized or bad-faith chargebacks may result in suspension of services and legal recovery of dues.',
    ],
  },
  {
    title: '11. Disputes and Resolution',
    content: [
      'For billing disputes, clients should notify Sellatica within 7 business days of invoice or payment confirmation.',
      'Both parties agree to attempt good-faith resolution based on project records, scope documents, and delivery evidence.',
    ],
  },
  {
    title: '12. Processing Timeline',
    content: [
      'Once a refund is approved in writing, processing is typically initiated within 7 to 15 business days, subject to payment rail and banking timelines.',
      'Actual credit timelines can vary by bank, card network, and payment provider.',
    ],
  },
  {
    title: '13. Contact',
    content: [
      'For cancellation or refund requests, write to hello@sellatica.in with project name, invoice reference, and request details.',
      'Last updated: February 23, 2026',
    ],
  },
];

const Refund = () => {
  const description =
    'Sellatica Refund and Cancellation Policy for B2B AI automation consulting, milestone projects, retainers, and billing adjustments.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Refund & Cancellation Policy | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/refund"
        keywords="sellatica refund policy, cancellation policy b2b consulting, india automation consulting refunds"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Refund & Cancellation Policy', url: 'https://www.sellatica.in/refund' },
          ]),
          webpageSchema({
            title: 'Sellatica Refund and Cancellation Policy',
            description,
            url: 'https://www.sellatica.in/refund',
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
              <h1 className="text-fluid-display mt-4 font-semibold text-foreground">Refund &amp; Cancellation Policy</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This policy explains how cancellations and refunds are handled for Sellatica&apos;s custom B2B consulting
                and systems implementation services.
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

export default Refund;
