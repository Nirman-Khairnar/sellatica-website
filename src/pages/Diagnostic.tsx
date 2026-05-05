import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import DiagnosticCheckout from '@/components/DiagnosticCheckout';
import { Network, CheckCircle2, DollarSign, LayoutList } from 'lucide-react';
import { usePrice } from '@/hooks/usePrice';

const diagnosticDeliverables = [
     {
          icon: Network,
          title: 'Revenue Leakage Map',
          description: 'A forensic mapping of where manual friction is explicitly costing your business margin.',
     },
     {
          icon: LayoutList,
          title: 'Bottleneck Analysis',
          description: 'Priority ranking of operational blockers that can be solved immediately with automation.',
     },
     {
          icon: DollarSign,
          title: 'ROI Projection Model',
          description: 'Defensible projections on capacity increase and cost savings before you implement.',
     },
     {
          icon: CheckCircle2,
          title: 'AI Integration Roadmap',
          description: 'A strict 90-day execution plan outlining exactly how to replace the identified friction points.',
     },
];

const Diagnostic = () => {
     const price = usePrice();

     return (
          <div className="min-h-screen bg-background">
      <SEO
                    title="AI Operations Diagnostic | Sellatica"
                    description="Book the Sellatica AI Operations Diagnostic: one focused 45-minute session, a written action plan in 48 hours, and a refund if we cannot identify $5,000 in recoverable waste."
               
        breadcrumbs={[{ name: 'AI Operations Diagnostic', item: 'https://www.sellatica.in/diagnostic' }]} 
      />
               <Header />

               <section className="pt-32 lg:pt-40 pb-20 border-b border-border/50">
                    <div className="container mx-auto px-6 lg:px-12">
                         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                              <motion.div
                                   initial={{ opacity: 0, y: 30 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8 }}
                              >
                                   <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
                                        Primary Engagement
                                   </span>
                                   <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                                        AI Operations <span className="text-muted-foreground">Diagnostic</span>
                                   </h1>
                                   <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              This is where we find the expensive breakpoints in your operation: slow follow-up, broken handoffs, approval bottlenecks, reporting drag, and admin work nobody should still be doing manually.
            </p>
                                   <p className="text-base text-muted-foreground leading-relaxed mb-12 border-l-2 border-primary/40 pl-4 py-1 italic">
                                        Flat Rate: {price.loading ? '...' : price.display}. Includes a written action plan delivered within 48 hours. If we do not identify at least $5,000 in recoverable annual waste, we refund the fee.
                                   </p>

                                   <div className="space-y-8">
                                        <h3 className="font-medium text-foreground text-xl">What's Included:</h3>
                                        <div className="grid sm:grid-cols-2 gap-8">
                                             {diagnosticDeliverables.map((item, i) => (
                                                  <motion.div
                                                       key={item.title}
                                                       initial={{ opacity: 0, y: 20 }}
                                                       animate={{ opacity: 1, y: 0 }}
                                                       transition={{ delay: 0.2 + (i * 0.1) }}
                                                  >
                                                       <item.icon className="w-6 h-6 text-foreground mb-4" />
                                                       <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
                                                       <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                                  </motion.div>
                                             ))}
                                        </div>
                                   </div>
                              </motion.div>

                              {/* Form Section */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.95 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                                   className="bg-card border border-border/50 p-8 lg:p-10 rounded-2xl sticky top-32 shadow-2xl shadow-primary/5"
                              >
                                   <div className="mb-8">
                                        <h2 className="font-display text-2xl font-medium text-foreground mb-3">
                                             Secure your diagnostic
                                        </h2>
                                        <p className="text-muted-foreground mb-8">
                One focused virtual session. We review how work actually moves through the business, where it stalls, and what should be fixed first.
              </p>
                                   </div>

                                   <DiagnosticCheckout />

                              </motion.div>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
};

export default Diagnostic;
