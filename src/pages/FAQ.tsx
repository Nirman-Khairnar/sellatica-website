import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
      {
        question: "Who is Sellatica a good fit for?",
        answer: "Owner-led and operations-heavy businesses with 10 to 100 people. If you are spending too much time on manual work, losing leads to slow follow-up, or hiring people to manage problems that should be solved by systems, we can help."
      },
      {
        question: "What is the Strategy Review?",
        answer: "A 45-minute working session where we look at how your business actually operates and identify the highest-impact problems to fix. You receive a written action plan within 48 hours, whether or not you work with us after."
      },
      {
        question: "What happens after the Strategy Review?",
        answer: "You decide. Some clients take the action plan and run with it on their own. Others move into Systems Design and Implementation with us. There is no pressure and no automatic upsell."
      },
      {
        question: "Do I need technical expertise to work with you?",
        answer: "No. We need to understand how your business runs, not your tech stack. Your team shows us how work moves. We handle the system design and build from there."
      },
      {
        question: "What industries do you work with?",
        answer: "Service businesses, agencies, real estate teams, logistics operators, and professional services firms. If your business runs on processes and people, we can likely help."
      }
    ];

    return (
        <div className="min-h-screen bg-background">
      <SEO
        title="FAQ | Sellatica"
        description="Frequently asked questions about working with Sellatica on your business operations."
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
                        <div className="mb-16">
                            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6">
                                Common questions.
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
