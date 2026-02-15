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
        answer: "Sellatica provides custom AI system development, business automation solutions, and operational efficiency tools specifically designed for mid-market businesses. We focus on scalable execution with proven ROI. Our services range from intelligent document processing and automated customer support agents to predictive analytics dashboards and complete workflow orchestration systems."
    },
    {
        question: "How long does AI implementation take?",
        answer: "We deliver proven ROI in weeks, not months. Our implementation timeline depends on project scope, but we prioritize rapid deployment and iterative improvements. typically, a pilot system is live within 2-3 weeks, with full-scale rollouts completing in 6-10 weeks depending on complexity and integration requirements."
    },
    {
        question: "What industries does Sellatica serve?",
        answer: "We serve mid-market businesses across various industries seeking to transform operational chaos into scalable execution through custom AI systems. Our core expertise lies in Logistics, Real Estate, Legal Services, and Manufacturing—sectors where high-volume data processing and operational precision are critical."
    },
    {
        question: "Do I need technical expertise to manage these systems?",
        answer: "No. We build our systems with user-friendly interfaces designed for business operators, not just engineers. We provide comprehensive training, documentation, and ongoing support to ensure your team can manage and leverage the system effectively without needing a dedicated data science team."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. Security is a cornerstone of our architecture. We implement enterprise-grade security protocols, including encryption at rest and in transit, role-based access control, and strict data isolation. We do not use your proprietary data to train public models."
    },
    {
        question: "What is Sellatica's pricing model?",
        answer: "Our pricing is customized based on your specific needs and project scope. We typically work on a project basis for initial builds with optional retainer models for ongoing optimization and support. Contact us at hello@sellatica.in for a detailed consultation and quote."
    },
    {
        question: "How do I contact Sellatica?",
        answer: "You can reach us at hello@sellatica.in for general inquiries. For project discussions, we recommend booking a discovery call through our website to help us better understand your specific operational challenges."
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

            <main className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,hsl(45_80%_60%/0.04)_0%,transparent_70%)] blur-[60px]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-[0.2em] mb-6 justify-center">
                                <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
                                Common Questions
                                <span className="w-8 h-px bg-[hsl(45_80%_60%/0.5)]" />
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-6 text-center">
                                Frequently Asked{' '}
                                <span className="text-gold-gradient">Questions</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Everything you need to know about our services, process, and results.
                            </p>
                        </div>

                        <div className="p-6 md:p-8 rounded-2xl border border-[hsl(45_80%_60%/0.15)] bg-card/50 glow-gold">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                                        <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-gold transition-colors">
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
