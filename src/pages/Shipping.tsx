import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';

const sections = [
  {
    title: '1. Service-only Delivery Model',
    content: [
      'Sellatica provides digital/consulting services only. No physical goods are shipped.',
      'All project outputs are delivered in digital format within B2B service engagements.',
    ],
  },
  {
    title: '2. Deliverables Covered',
    content: [
      'Typical deliverables include automation workflows, integration logic, technical documentation, implementation notes, and access handover instructions.',
      'Any credential-related transfer is handled through secure, approved channels only.',
    ],
  },
  {
    title: '3. Typical Delivery Timelines',
    content: [
      'Discovery outputs are typically shared within 3 to 5 business days after required inputs are received.',
      'Build and implementation milestones are typically delivered in 1 to 3 week cycles based on scope complexity.',
      'Final documentation and handover are typically delivered within 5 business days after final milestone confirmation.',
    ],
  },
  {
    title: '4. Delivery Channels',
    content: [
      'Deliverables are shared by email, secured cloud links, project workspaces, or client-approved collaboration tools.',
      'Delivery links may be permission-controlled or time-bound for security and compliance.',
    ],
  },
  {
    title: '5. Delay Conditions',
    content: [
      'Timelines may shift when client-side inputs, approvals, or third-party access are delayed.',
      'Sellatica communicates schedule impacts through official project communication channels.',
    ],
  },
  {
    title: '6. Contact',
    content: [
      'Business Name: Sellatica',
      'Address: Bilimora, Navsari, Gujarat 396321, India',
      'Email: hello@sellatica.in',
      'Last updated: February 23, 2026',
    ],
  },
];

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shipping Policy | Sellatica"
        description="Shipping Policy for Sellatica digital consulting services and delivery timelines."
        canonical="https://www.sellatica.in/shipping"
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
              <h1 className="mt-4 font-display text-4xl md:text-5xl font-medium text-foreground">Shipping Policy</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Sellatica is a service business. This policy explains how digital deliverables are shared and expected timelines by project phase.
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

export default Shipping;