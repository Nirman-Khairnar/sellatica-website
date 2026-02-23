import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';

const sections = [
  {
    title: '1. Policy Scope',
    content: [
      'This Cancellation and Refunds Policy applies to Sellatica B2B AI automation consulting and implementation services.',
      'Services are custom and capacity-based, so this policy differs from physical product return models.',
    ],
  },
  {
    title: '2. Pre-kickoff Cancellation',
    content: [
      'If cancellation is requested before formal project kickoff, eligible fees are fully refundable.',
      'Approved refunds for pre-kickoff cancellations are processed within 7 business days.',
    ],
  },
  {
    title: '3. Post-kickoff Cancellation',
    content: [
      'If cancellation occurs after kickoff, refunds are partial and based on work completed and committed costs.',
      'Completed discovery, architecture, implementation, and documentation effort up to cancellation date is billable.',
    ],
  },
  {
    title: '4. Milestone-based Payments',
    content: [
      'Milestone payments are non-refundable once the milestone deliverable is submitted or made available for review.',
      'Any partial adjustment is considered only for clearly undelivered scope where applicable in writing.',
    ],
  },
  {
    title: '5. Completed and Delivered Work',
    content: [
      'No refunds are provided for completed and delivered work, including automation workflows, advisory deliverables, and implementation outputs.',
      'Post-delivery change requests are handled through scoped rework, not retroactive refunds.',
    ],
  },
  {
    title: '6. Dispute Process',
    content: [
      'For delivery or billing disputes, email hello@sellatica.in within 7 days of delivery.',
      'Include project name, invoice/milestone reference, and issue details for review.',
    ],
  },
  {
    title: '7. Refund Processing',
    content: [
      'Once a refund is approved in writing, payment is initiated to the original payment method.',
      'Final credit time may vary by payment gateway and banking timelines.',
    ],
  },
  {
    title: '8. Contact',
    content: [
      'Business Name: Sellatica',
      'Address: Bilimora, Navsari, Gujarat 396321, India',
      'Email: hello@sellatica.in',
      'Last updated: February 23, 2026',
    ],
  },
];

const Refund = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100">
      <SEO
        title="Refund & Cancellation Policy | Sellatica"
        description="Cancellation and Refunds Policy for Sellatica B2B AI automation consulting services."
        canonical="https://www.sellatica.in/refund"
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
              <span className="inline-block rounded-full border border-cyan-400/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                LEGAL
              </span>
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Refund &amp; Cancellation Policy</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                This policy defines how cancellations and refund eligibility are handled for Sellatica&apos;s B2B services.
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
                  className="rounded-2xl border border-cyan-900/60 bg-slate-950/40 p-6"
                >
                  <h2 className="text-xl font-medium text-cyan-300">{section.title}</h2>
                  <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
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