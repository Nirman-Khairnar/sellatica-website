import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import AiOsScorecardForm from '@/components/AiOsScorecardForm';
import { Network, CheckCircle2, DollarSign, LayoutList } from 'lucide-react';

const auditDeliverables = [
     {
          icon: Network,
          title: 'Workflow Map',
          description: 'We document your current processes to identify precisely where time is leaking.',
     },
     {
          icon: LayoutList,
          title: 'AI OS Module Backlog',
          description: 'A prioritized list of AI modules specific to your operations, ranked by impact.',
     },
     {
          icon: DollarSign,
          title: 'ROI Model',
          description: 'Defensible projections on capacity increase and cost savings before you build.',
     },
     {
          icon: CheckCircle2,
          title: 'Pilot Plan',
          description: 'A clear roadmap for the next 14-28 days to build your first module.',
     },
];

const AiOsAudit = () => {
     return (
          <div className="min-h-screen bg-background">
               <SEO
                    title="AI OS Audit | Sellatica"
                    description="Get your AI OS Blueprint in 7-10 days. The flagship entry offer to transform operational chaos into scalable execution."
                    canonical="https://www.sellatica.in/ai-os-audit"
               
        breadcrumbs={[{ name: 'AI OS Audit', item: 'https://www.sellatica.in/ai-os-audit' }]} 
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
                                        Flagship Entry Offer
                                   </span>
                                   <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                                        The AI OS <span className="text-muted-foreground">Audit</span>
                                   </h1>
                                   <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        Most AI pilots fail because they lack an operational blueprint. The AI OS Audit is a 7–10 day paid diagnostic that maps your business processes and designs the architecture for your new operating layer.
                                   </p>
                                   <p className="text-base text-muted-foreground leading-relaxed mb-12">
                                        Instead of jumping straight into building, we first identify exactly where your operations are bleeding margin, and then we prescribe the specific AI OS modules to fix it.
                                   </p>

                                   <div className="space-y-8">
                                        <h3 className="font-medium text-foreground text-xl">What's Included:</h3>
                                        <div className="grid sm:grid-cols-2 gap-8">
                                             {auditDeliverables.map((item, i) => (
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
                                   className="bg-card border border-border/50 p-8 lg:p-10 rounded-2xl sticky top-32"
                              >
                                   <div className="mb-8">
                                        <h2 className="font-display text-2xl font-medium text-foreground mb-3">
                                             Score your operations
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                             Fill out this brief scorecard to qualify for an AI OS Audit. We will review your submission and redirect you to book our kickoff call.
                                        </p>
                                   </div>

                                   <AiOsScorecardForm />

                              </motion.div>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
};

export default AiOsAudit;
