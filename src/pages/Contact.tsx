import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import SEO from '@/components/SEO';
import { trackEvent } from '@/utils/analytics';
import { submitContactInquiry } from '@/lib/backend';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const Contact = () => {
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

      await submitContactInquiry(payload);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact | Sellatica"
        description="Book a Strategy Review or get in touch with the Sellatica team."
        breadcrumbs={[{ name: 'Contact', item: 'https://www.sellatica.in/contact' }]}
      />

      <Header />

      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-medium text-foreground leading-[1.15] mb-8">
                Let's figure out if we are the right fit.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Book a Strategy Review and we will spend 45 minutes looking at how your business operates. You will leave with a clear picture of what to fix, in what order, and what the impact will be. Whether you work with us after that is entirely your decision.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <Mail className="w-6 h-6 text-foreground mt-1" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Prefer to send a message first?</h3>
                    <a href="mailto:hello@sellatica.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      hello@sellatica.in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

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
                      Business Email *
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
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Tell us about your business and what you need help with *
                  </label>
                  <p className="text-xs text-muted-foreground mb-3">
                    What does your business do, how big is your team, and what is the main operational problem you are dealing with?
                  </p>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your situation here..."
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
                  <span>{isSubmitting ? 'Sending...' : 'Book a Strategy Review'}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
