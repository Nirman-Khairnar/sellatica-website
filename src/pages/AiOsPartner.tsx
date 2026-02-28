import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { ShieldCheck, LineChart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AiOsPartner = () => {
     return (
          <div className="min-h-screen bg-background">
               <SEO
                    title="AI OS Partner | Sellatica"
                    description="Continuous maintenance, iteration, and scaling for your AI OS."
                    canonical="https://www.sellatica.in/ai-os-partner"
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
                                   Step 03
                              </span>
                              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                                   The AI OS <span className="text-muted-foreground">Partner</span>
                              </h1>
                              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                                   Static systems degrade. The AI OS Partner program operates on a monthly retainer to provide continuous monitoring, iteration, and scale support to ensure your infrastructure compounding value over time.
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
                                   <RefreshCw className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Feedback Loops</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        We implement learning mechanisms where the AI OS gets smarter from your team's corrections, driving accuracy continuously upwards.
                                   </p>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.1 }}
                                   className="bg-card p-8 rounded-xl border border-border/50"
                              >
                                   <LineChart className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Quarterly Reviews</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        Business isn't static. We conduct quarterly OS reviews to pull new modules from the backlog and adapt the system to changing market conditions.
                                   </p>
                              </motion.div>
                              <motion.div
                                   initial={{ opacity: 0, y: 40 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: 0.2 }}
                                   className="bg-card p-8 rounded-xl border border-border/50"
                              >
                                   <ShieldCheck className="w-8 h-8 text-foreground mb-6" />
                                   <h3 className="text-xl font-medium mb-3">Governance & Maintenance</h3>
                                   <p className="text-sm text-muted-foreground leading-relaxed">
                                        Proactive API monitoring and change request management ensures your automated systems stay healthy and secure against third-party updates.
                                   </p>
                              </motion.div>
                         </div>

                         <div className="mt-20 text-center">
                              <Link to="/ai-os-audit">
                                   <Button size="lg" variant="outline">Learn about the AI OS Audit</Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
};

export default AiOsPartner;
