import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { HelpCircle } from 'lucide-react';
import { usePrice } from '@/hooks/usePrice';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const price = usePrice();
    
    const faqs = [
      {
        question: "What is the format?",
        answer: "The diagnostic is delivered via one concentrated 45-minute virtual session. We dive directly into your current tech stack and operational workflows—no fluff, just discovery."
      },
      {
        question: "What is the price?",
        answer: `Our pricing is fixed to ensure transparency. The comprehensive AI Operations Diagnostic is priced at a flat rate of ${price.display}. There are no hidden fees or retainer requirements for this initial phase.`
      },
      {
        question: "What is the guarantee?",
        answer: "We operate on a performance-first model. If we cannot identify at least $5,000 in recoverable operational waste within your current systems, you receive a full 100% refund. No questions asked."
      },
      {
        question: "What is the deliverable?",
        answer: "You receive a comprehensive Intelligence Dossier following the call, which includes a Revenue Leakage Map, a detailed Bottleneck Analysis, and a prioritized AI Implementation Roadmap."
      }
    ];

    return (
        <div className="min-h-screen bg-background">
      <SEO
        title="FAQ - Sellatica | AI Systems Questions"
        description="Frequently asked questions about Sellatica's custom AI operating systems for operations-heavy businesses"
        canonical="https://www.sellatica.in/faq"
            
        breadcrumbs={[{ name: 'FAQ', item: 'https://www.sellatica.in/faq' }]} 
      />
            

            <Header />

            <main className="pt-32 lg:pt-40 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
                                FAQ
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6 flex items-center justify-center gap-4">
                                Common Questions.
                                <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground/50 hidden md:block" />
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to know before booking. No jargon.
                            </p>
                        </div>

                        <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary transition-colors">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FAQ;
