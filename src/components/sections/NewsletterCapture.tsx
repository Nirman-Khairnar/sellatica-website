import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const NewsletterCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Future integration: Hook this up to Supabase or mailing list
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="border-y border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 py-6 md:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          
          {/* Pitch */}
          <div className="flex-1 w-full text-left">
            <h3 className="font-display text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
              <span className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center border border-accent/20">
                <Mail className="w-4 h-4 text-accent" />
              </span>
              Intercept The Future
            </h3>
            <p className="text-sm text-muted-foreground font-mono border-l-2 border-accent/30 pl-3 ml-1">
              &gt; 4,000+ COOs receive our weekly tactical dispatch on enterprise AI scaling.
            </p>
          </div>
          
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full max-w-lg relative flex items-center group shadow-elevated">
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 bg-background border border-border px-4 py-2 font-mono text-sm focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
              disabled={submitted}
            />
            <Button 
              type="submit" 
              disabled={submitted}
              className="absolute right-1 top-1 bottom-1 h-auto rounded-none font-mono tracking-wider uppercase text-[10px] md:text-xs"
            >
              {submitted ? (
                <span className="flex items-center text-green-400">
                  Secured <CheckCircle2 className="w-3 h-3 ml-2" />
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe <ArrowRight className="w-3 h-3 ml-2" />
                </span>
              )}
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default NewsletterCapture;
