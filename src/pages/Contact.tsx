import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const contactTopics = [
  'Strategy Review',
  'Implementation',
  'Support',
  'Partnership',
  'Other',
];

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = contactForm.name.trim();
    const email = contactForm.email.trim();
    const topic = contactForm.topic.trim();
    const message = contactForm.message.trim();
    if (!name || !email || !topic || !message) return;

    setIsSubmitting(true);
    setContactSuccess(false);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwD_QJAAXjX3X5j8btVzgwnt4FvkS8Aq6gmD0pSxzU30JnXSofIp2lIpRKiMX4FWFIYKg/exec', {
        method: 'POST',
        mode: 'no-cors',
        // The critical fix: use text/plain to bypass CORS stripping
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name,
          email,
          company: "", // FIXED: Now passes an empty string so the column stays blank
          topic,
          message,
          source: window.location.pathname, // Dynamically grabs the route
          timestamp: new Date().toISOString(),
        }),
      });

      // Maintain that smooth, minimal feedback loop
      setContactSuccess(true);
      setContactForm({
        name: '',
        email: '',
        topic: '',
        message: '',
      });
      
      // Optional: Hide success message after a few seconds to keep UI clean
      setTimeout(() => setContactSuccess(false), 5000);
      
    } catch (error) {
      console.error('Contact form submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <SEO
        title="Contact Sellatica"
        description="Contact Sellatica about your business operations, systems, and implementation needs."
        breadcrumbs={[{ name: 'Contact', item: 'https://www.sellatica.in/contact' }]}
      />

      <div className="w-full max-w-xl">
        <h1 className="font-display text-4xl font-medium text-foreground">Contact Sellatica</h1>
        <p className="mt-4 text-muted-foreground">
          Send a message and we&apos;ll reply within 24 hours.
        </p>

        {contactSuccess && (
          <div className="mt-8 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground transition-all">
            Message sent. We&apos;ll reply within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
            <input
              type="text"
              required
              name="name"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              required
              name="email"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">
              What do you want to contact about?
            </label>
            <select
              required
              name="topic"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={contactForm.topic}
              onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
            >
              <option value="" disabled>
                Select a topic
              </option>
              {contactTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
            <textarea
              required
              name="message"
              className="w-full min-h-[160px] rounded-md border border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              placeholder="How can we help?"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
