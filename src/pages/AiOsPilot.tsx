import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Cog, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AiOsPilot = () => {
     return (
          <div className="min-h-screen bg-background">
               <SEO
                    title="AI OS Pilot | Sellatica"
                    description="Launch your first AI OS module in 14-28 days. Prove the ROI before scaling."
                    canonical="https://www.sellatica.in/ai-os-pilot"
               />
               <Header />

               <section className="pt-32 lg:pt-40 pb-20">
                    <div className="container mx-auto px-6 lg:px-12">
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className="max-w-4xl mx-auto text-center"
                         >
                              <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
                                   Step 02
                              </span>
                              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                                   The AI OS <span className="text-muted-foreground">Pilot</span>
                              </h1>
                              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                                   Once the blueprint is complete, we move fast. The AI OS Pilot takes 14-28 days and focuses on building 1-2 high-impact modules from end-to-end to demonstrate immediate ROI.
                              </p>
                         </motion.div>
                    </div>
               </section>

               <section className="py-20 border-t border-border/50 bg-secondary/10">
                    <div className="container mx-auto px-6 lg:px-12">
                         <div className="grid md:grid-cols-3 gap-8">
                              <motion.div
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="bg-card p-8 rounded-xl border border-border/50"
                              >
                                   <Cog className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Rapid Deployment</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        Connect your legacy systems via APIs and deploy custom AI agents powered by Claude Code to automate your first core operational bottleneck.
                                   </p>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.1 }}
                                   className="bg-card p-8 rounded-xl border border-border/50"
                              >
                                   <Zap className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Immediate ROI</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        Prove value within weeks, not months. The pilot sets the performance baseline and secures team buy-in by making their jobs visibly easier.
                                   </p>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.2 }}
                                   className="bg-card p-8 rounded-xl border border-border/50"
                              >
                                   <CheckCircle className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Team Training</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        Technology without adoption is useless. We provide hands-on training for your team to ensure they know exactly how to operate the new module.
                                   </p>
                              </motion.div>
                         </div>

                         <div className="mt-20 text-center">
                              <h3 className="text-2xl font-medium mb-6">Ready to see what a pilot could do for you?</h3>
                              <Link to="/ai-os-audit">
                                   <Button size="lg">Start with the AI OS Audit</Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
};

export default AiOsPilot;
