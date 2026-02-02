import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowRight, Mail, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      revenue: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
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
                    <p className="text-sm text-muted-foreground">
                      hello@sellatica.com
                    </p>
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
                    <label htmlFor="revenue" className="text-sm font-medium text-foreground block mb-2">
                      Annual Revenue
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-card border border-border/50 text-foreground text-sm focus:border-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    >
                      <option value="">Select range</option>
                      <option value="1-5m">$1M - $5M</option>
                      <option value="5-10m">$5M - $10M</option>
                      <option value="10-25m">$10M - $25M</option>
                      <option value="25-50m">$25M - $50M</option>
                      <option value="50-100m">$50M - $100M</option>
                      <option value="100m+">$100M+</option>
                    </select>
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
