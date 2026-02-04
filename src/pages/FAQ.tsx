import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { HelpCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What AI services does Sellatica provide?",
        answer: "Sellatica provides custom AI system development, business automation solutions, and operational efficiency tools specifically designed for mid-market businesses. We focus on scalable execution with proven ROI."
    },
    {
        question: "How long does AI implementation take?",
        answer: "We deliver proven ROI in weeks, not months. Our implementation timeline depends on project scope, but we prioritize rapid deployment and iterative improvements."
    },
    {
        question: "What industries does Sellatica serve?",
        answer: "We serve mid-market businesses across various industries seeking to transform operational chaos into scalable execution through custom AI systems."
    },
    {
        question: "What is Sellatica's pricing model?",
        answer: "Our pricing is customized based on your specific needs and project scope. Contact us at hello@sellatica.in for a consultation."
    },
    {
        question: "How do I contact Sellatica?",
        answer: "You can reach us at hello@sellatica.in."
    }
];

const FAQ = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="FAQ - Sellatica | AI Systems Questions"
                description="Frequently asked questions about Sellatica's custom AI systems for mid-market businesses"
                canonical="https://www.sellatica.in/faq"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.sellatica.in"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "FAQ",
                            "item": "https://www.sellatica.in/faq"
                        }]
                    })}
                </script>
            </Helmet>

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
                                Common Questions
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6 flex items-center justify-center gap-4">
                                Frequently Asked Questions
                                <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground/50" />
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to know about our services, process, and results.
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
