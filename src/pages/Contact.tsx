import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, Mail, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { runtimeConfig } from '@/lib/runtime';
import { trackEvent } from '@/utils/analytics';

const Contact = () => {
  const bookingUrl = runtimeConfig.calcomBookingUrl;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preBookingEmail, setPreBookingEmail] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  
  // Contact Form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handlePreBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = preBookingEmail.trim();
    if (!email) return;
    
    setIsCapturing(true);
    try {
      const response = await fetch(runtimeConfig.prebookingWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'prebooking_intent',
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Pre-booking webhook failed with status ${response.status}`);
      }
      
      trackEvent('cta_clicked', {
        location: 'contact_page',
        type: 'strategy_review_booking_captured',
      });

      setPreBookingEmail('');
      setIsModalOpen(false);
      window.location.href = bookingUrl;
    } catch (err) {
      console.error('Failed to capture pre-booking email', err);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    
    setIsContactSubmitting(true);
    try {
      await fetch('https://n8n.sellatica.tech/webhook/sellatica/contact-v1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      setContactSuccess(true);
      setContactForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission failed', err);
    } finally {
      setIsContactSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Book a Strategy Review | Sellatica"
        description="Book a Strategy Review with Sellatica and get a clear view of what needs fixing in your business."
        breadcrumbs={[{ name: 'Book', item: 'https://www.sellatica.in/contact' }]}
      />

      <Header />

      <section className="pt-32 lg:pt-40 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                Strategy Review booking
              </span>
              <h1 className="mt-6 mb-8 font-display text-4xl font-medium leading-[1.15] text-foreground md:text-5xl lg:text-5xl">
                Let's get started.
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                Book a strategy review to discuss your AI Operating System integration, or send us a message if you have specific questions first.
              </p>

              {/* Contact Form Section */}
              <div className="rounded-2xl border border-border/50 bg-card p-8 lg:p-10 shadow-lg">
                <h3 className="mb-6 font-display text-2xl font-medium text-foreground flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send us a message
                </h3>
                {contactSuccess ? (
                  <div className="rounded-xl bg-primary/10 p-6 text-center text-primary">
                    <CheckCircle2 className="mx-auto h-12 w-12 mb-3" />
                    <h4 className="font-medium text-lg">Message Sent</h4>
                    <p className="text-sm mt-1">We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <textarea 
                        required
                        className="w-full min-h-[120px] rounded-md border border-border bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" disabled={isContactSubmitting} className="w-full">
                      {isContactSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-2xl border border-border/50 bg-card p-8 shadow-2xl shadow-primary/5 lg:p-10 sticky top-32"
            >
              <div className="mb-8">
                <h2 className="mb-3 font-display text-2xl font-medium text-foreground">
                  Ready to book?
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Open the calendar, pick a time, and you will get the standard confirmation and follow-up workflow.
                </p>
              </div>

              <div className="space-y-5">
                <Button
                  size="lg"
                  className="h-14 w-full px-8 text-base group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span>Book a Strategy Review</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Reserve a 45-minute deep dive session into your business operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-booking Capture Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
              
              <div className="mb-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">Reserve Your Spot</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your email to continue to the booking calendar.
                </p>
              </div>
              
              <form onSubmit={handlePreBookSubmit} className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    required
                    autoFocus
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={preBookingEmail}
                    onChange={(e) => setPreBookingEmail(e.target.value)}
                    placeholder="name@company.com"
                  />
                </div>
                <Button size="lg" type="submit" disabled={isCapturing} className="w-full">
                  {isCapturing ? "Loading Calendar..." : "Continue to Calendar"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Contact;
