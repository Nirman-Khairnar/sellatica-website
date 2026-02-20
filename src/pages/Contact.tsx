import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Mail, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import SEO from '@/components/SEO';
import { siteMeta } from '@/content/siteContent';
import { breadcrumbSchema, webpageSchema } from '@/lib/structuredData';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().trim().min(1, 'Company name is required').max(200, 'Company name must be less than 200 characters'),
  phone: z.string().trim().max(50, 'Phone must be less than 50 characters').optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
  website: z.string().trim().max(0).optional(),
});

const CONTACT_WEBHOOK_URL =
  import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
  'https://n8n.sellatica.in/webhook/sellatica/company-contact-web-v1';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  website: '',
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: 'Validation Error',
        description: validation.error.errors[0]?.message || 'Please check your input.',
        variant: 'destructive',
      });
      return;
    }

    if (validation.data.website) {
      setFormData(initialFormState);
      toast({
        title: 'Message sent successfully',
        description: 'We received your request and will respond within 24 hours.',
      });
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const payload = {
        name: validation.data.name,
        email: validation.data.email,
        company: validation.data.company,
        phone: validation.data.phone || undefined,
        message: validation.data.message,
        source: 'sellatica_website_contact_form',
      };

      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      let responseBody: unknown = null;
      const contentType = response.headers.get('content-type') || '';

      if (contentType.includes('application/json')) {
        responseBody = await response.json().catch(() => null);
      } else {
        responseBody = await response.text().catch(() => '');
      }

      const accepted =
        response.ok &&
        (
          (typeof responseBody === 'object' && responseBody !== null && (responseBody as { status?: string }).status === 'accepted') ||
          responseBody === '' ||
          typeof responseBody === 'string'
        );

      if (!accepted) {
        throw new Error(`Contact webhook request failed with status ${response.status}`);
      }

      toast({
        title: 'Message sent successfully',
        description: 'We received your request and will respond within 24 hours.',
      });

      setFormData(initialFormState);
    } catch (error) {
      const message = error instanceof Error && error.name === 'AbortError'
        ? 'Request timed out. Please try again or email us directly.'
        : 'Something went wrong. Please try again or email us directly.';

      toast({
        title: 'Submission failed',
        description: message,
        variant: 'destructive',
      });
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const description =
    'Contact Sellatica to schedule a discovery call and discuss custom AI systems integration for your operations team.';

  return (
    <div className="page-shell bg-background">
      <SEO
        title="Contact | Sellatica"
        description={description}
        canonical="https://www.sellatica.in/contact"
        keywords="contact sellatica, discovery call, operations automation consultation"
        structuredData={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://www.sellatica.in' },
            { name: 'Contact', url: 'https://www.sellatica.in/contact' },
          ]),
          webpageSchema({
            title: 'Contact Sellatica',
            description,
            url: 'https://www.sellatica.in/contact',
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Sellatica',
            url: 'https://www.sellatica.in/contact',
            description,
          },
        ]}
      />

      <Header />

      <main className="pb-8 pt-32 lg:pt-36">
        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <span className="text-kicker">Contact</span>
                <h1 className="text-fluid-display mt-4 font-semibold text-foreground">
                  Let us map your workflow challenges.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Every engagement starts with a discovery call. We review your current systems,
                  operational bottlenecks, and decision priorities before proposing any build.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="surface-muted flex items-start gap-3 p-4">
                    <Calendar className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">Discovery-first process</h2>
                      <p className="mt-1 text-sm text-muted-foreground">A scoped conversation before implementation planning.</p>
                    </div>
                  </div>
                  <div className="surface-muted flex items-start gap-3 p-4">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">Response within 24 hours</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        You can also reach us directly at <a className="underline underline-offset-2" href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.
                      </p>
                    </div>
                  </div>
                  <div className="surface-muted flex items-start gap-3 p-4">
                    <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h2 className="text-sm font-semibold text-foreground">Business data respect</h2>
                      <p className="mt-1 text-sm text-muted-foreground">We only use inquiry details for response and discovery qualification.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="lg:col-span-7"
              >
                <form onSubmit={handleSubmit} className="surface space-y-5 p-6 sm:p-8" aria-busy={isSubmitting}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="border-border/70 bg-background/75"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Work Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="border-border/70 bg-background/75"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">Company *</label>
                      <Input
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Operations"
                        className="border-border/70 bg-background/75"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="border-border/70 bg-background/75"
                      />
                    </div>
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <Input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                      What workflow challenges are you solving? *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Share your current systems, bottlenecks, and target outcomes."
                      className="resize-none border-border/70 bg-background/75"
                    />
                  </div>

                  <Button type="submit" size="lg" className="group w-full rounded-full" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending request...' : 'Request Discovery Call'}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting this form, you agree to be contacted about your inquiry.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
