import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from '@/utils/analytics';
import { usePrice } from '@/hooks/usePrice';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
  'https://n8n.sellatica.in/webhook/sellatica/company-contact-web-v1';

const Contact = () => {
  const price = usePrice();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
      const payload = {
        name: validation.data.name,
        email: validation.data.email,
        company: validation.data.company,
        message: validation.data.message,
        source: 'sellatica_website_contact_form',
      };

      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const responseData = await response.json().catch(() => null);

      if (!response.ok || responseData?.status !== 'accepted') {
        throw new Error(`Contact webhook request failed with status ${response.status}`);
      }

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you within 24 hours.",
      });

      trackEvent('form_submitted', { form_id: 'contact_page_form' });

      setFormData({
        name: '',
        email: '',
        company: '',
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
        title="Contact Sellatica | Book an AI Operations Diagnostic"
        description="Ready to transform your operations? Book an AI Operations Diagnostic with Sellatica to map your processes and design your new operational blueprint."
        canonical="https://www.sellatica.in/contact"
      
        breadcrumbs={[{ name: 'Contact', item: 'https://www.sellatica.in/contact' }]} 
      />
      
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
                Every engagement starts with the AI Operations Diagnostic. We'll forensically map your
                challenges and determine exactly where you are leaking revenue.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-medium text-foreground mb-3">Business Contact Details</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Business Name:</span> Sellatica</p>
                    <p>
                      <span className="text-foreground font-medium">Email:</span>{' '}
                      <a href="mailto:hello@sellatica.in" className="hover:text-foreground transition-colors">hello@sellatica.in</a>
                    </p>
                    <p><span className="text-foreground font-medium">Address:</span> Vadodara, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <Calendar className="w-6 h-6 text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Operations Diagnostic</h3>
                    <p className="text-sm text-muted-foreground">
                      45-minute intensive call to calculate your manual waste and establish ROI.
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

                <div className="grid sm:grid-cols-1 gap-6">
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
                  <span>{isSubmitting ? 'Sending...' : 'Book AI Operations Diagnostic'}</span>
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
                  or can't scale without proportional hiringâ€”we can help.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">How quickly do you deliver the roadmap?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Following the 45-minute diagnostic call, your comprehensive Revenue Leakage Map and 90-Day Execution Roadmap are delivered within 48 hours.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">What is the investment for the diagnostic?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The AI Operations Diagnostic is {price.loading ? '...' : price.display}. It carries a firm $5,000 efficiency guarantee. If we don't locate at least $5,000 in recoverable waste, the diagnostic is refunded immediately.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-2">Do I need technical expertise to work with you?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No. We handle all technical implementation. Your team just needs to share
                  how they work today and what outcomes they want. We build systems that integrate
                  with existing workflowsâ€”minimal behavior change required.
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
