import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(200, "Company name must be less than 200 characters").optional(),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "Validation Error",
        description: validation.error.errors[0]?.message || "Please check your input",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Construct message with additional details
      const fullMessage = `
Name: ${validation.data.name}
Email: ${validation.data.email}
Company: ${validation.data.company || 'N/A'}
Phone: ${validation.data.phone || 'N/A'}

Message:
${validation.data.message}
      `.trim();

      const res = await fetch('https://xolq8brqgd.execute-api.us-east-1.amazonaws.com/Prod/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: validation.data.email,
          name: validation.data.name,
          message: fullMessage,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Sellatica | Schedule a Discovery Call"
        description="Ready to transform your operations? Book a discovery call with Sellatica to discuss your challenges and explore AI solutions."
        canonical="https://www.sellatica.in/contact"
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
              "name": "Contact",
              "item": "https://www.sellatica.in/contact"
            }]
          })}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-6 block">
                Get in Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-8">
                Let's discuss your
                <span className="text-muted-foreground"> operations</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Every engagement starts with a discovery call. We'll explore your operational
                challenges and determine if we're the right fit to help.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <Calendar className="w-6 h-6 text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">
                      30-minute call to understand your challenges and explore solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <MessageSquare className="w-6 h-6 text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <Mail className="w-6 h-6 text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Direct Email</h3>
                    <a href="mailto:hello@sellatica.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      hello@sellatica.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="bg-card border-border/50 focus:border-foreground/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="bg-card border-border/50 focus:border-foreground/50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground block mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="bg-card border-border/50 focus:border-foreground/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-card border-border/50 focus:border-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Tell us about your operational challenges *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What systems are you using? Where are you experiencing bottlenecks? What outcomes are you hoping to achieve?"
                    rows={6}
                    className="bg-card border-border/50 focus:border-foreground/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Request Discovery Call'}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl font-medium text-foreground text-center mb-12">
              Common Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-foreground mb-2">Who is Sellatica a good fit for?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mid-market businesses ($5M-$100M revenue) experiencing operational chaos from growth.
                  If you have data trapped in multiple systems, manual processes killing productivity,
                  or can't scale without proportional hiring—we can help.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">How long does a typical engagement take?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Total timeline is typically 6-14 weeks from discovery to deployment.
                  However, we deploy highest-impact modules first, so you'll see results
                  within weeks, not months.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">What's the investment range?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every engagement is custom-designed based on your specific challenges and goals.
                  We provide detailed proposals with clear ROI projections after the discovery phase.
                  Typical projects achieve break-even within 2-4 weeks.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">Do I need technical expertise to work with you?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No. We handle all technical implementation. Your team just needs to share
                  how they work today and what outcomes they want. We build systems that integrate
                  with existing workflows—minimal behavior change required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
