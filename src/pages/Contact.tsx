import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Mail, ShieldCheck } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { runtimeConfig } from '@/lib/runtime';
import { trackEvent } from '@/utils/analytics';

const Contact = () => {
  const bookingUrl = runtimeConfig.calcomBookingUrl;

  const handleBookClick = () => {
    trackEvent('cta_clicked', {
      location: 'contact_page',
      type: 'strategy_review_booking',
    });
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
                Book the Strategy Review.
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                This is the normal booking funnel. You reserve the session, we confirm by email,
                and the booking workflow handles the follow-up sequence after the meeting is
                scheduled.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                  <ShieldCheck className="mt-1 h-6 w-6 text-foreground" />
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">After booking</h3>
                    <p className="text-sm text-muted-foreground">
                      You receive the confirmation email, then the booked-lead follow-up sequence
                      starts automatically with resources and reminders.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6">
                  <Mail className="mt-1 h-6 w-6 text-foreground" />
                  <div>
                    <h3 className="mb-1 font-medium text-foreground">Prefer email first?</h3>
                    <a
                      href="mailto:hello@sellatica.in"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
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
              className="rounded-2xl border border-border/50 bg-card p-8 shadow-2xl shadow-primary/5 lg:p-10"
            >
              <div className="mb-8">
                <h2 className="mb-3 font-display text-2xl font-medium text-foreground">
                  Ready to book?
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Open the calendar, pick a time, and you will get the standard confirmation and
                  follow-up workflow.
                </p>
              </div>

              <div className="space-y-5">
                <Button
                  asChild
                  size="lg"
                  className="h-14 w-full px-8 text-base group"
                  onClick={handleBookClick}
                >
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    <span>Book a Strategy Review</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  No lead magnet path here. This page is only for booking the meeting funnel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
