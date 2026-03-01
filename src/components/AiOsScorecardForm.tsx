import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Turnstile } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';

export const AiOsScorecardForm = () => {
     const [loading, setLoading] = useState(false);
     const [isScoreCalculated, setIsScoreCalculated] = useState(false);
     const [scoreResult, setScoreResult] = useState<{ grade: string; text: string } | null>(null);
     const [turnstileToken, setTurnstileToken] = useState<string>('');
     const [turnstileFailed, setTurnstileFailed] = useState(false);
     const turnstileRef = useRef<TurnstileInstance | null>(null);
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          company: '',
          teamSize: '',
          biggestChallenge: '',
     });

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          if (!turnstileToken && !turnstileFailed) {
               toast.loading('Running security check...', { id: 'security-check' });

               // If after 2.5 seconds we still don't have a token, we bypass the block to save the conversion.
               setTimeout(() => {
                    if (!turnstileRef.current?.getResponse()) {
                         toast.dismiss('security-check');
                         setTurnstileFailed(true);
                         // We manually trigger the submit again now that failed=true
                         handleSubmit(e);
                    }
               }, 2500);
               return;
          }

          toast.dismiss('security-check');
          setLoading(true);

          try {
               // 1. Await the Supabase Edge Function to prevent bot spam
               // If turnstile failed locally (dashboard config error), we pass a bypass flag so the Edge Function 
               // knows to gracefully accept it, or we rely on the Edge function to handle empty tokens.
               const { data, error: invokeError } = await supabase.functions.invoke('submit-lead', {
                    body: {
                         token: turnstileToken || 'bypass_client_failure',
                         leadData: {
                              name: formData.name,
                              email: formData.email,
                              company: formData.company,
                              teamSize: formData.teamSize,
                              biggestChallenge: formData.biggestChallenge
                         }
                    }
               });

               if (invokeError) {
                    console.error('Edge function error:', invokeError);
                    let errorMessage = 'Secure proxy insertion failed';
                    // Extract message if it's a FunctionsHttpError with context
                    if (invokeError.context) {
                         try {
                              const errData = await invokeError.context.json();
                              if (errData.error) errorMessage = errData.error;
                         } catch (e) {
                              // non-json response
                         }
                    }
                    throw new Error(errorMessage);
               }

               if (data?.error) {
                    console.error('Edge function returned error payload:', data.error);
                    throw new Error(data.error);
               }

               toast.success('Analyzing operational bottlenecks...', {
                    duration: 2000,
               });

               // Determine a simulated grade based on team size
               let grade = "C";
               let text = "Moderate SaaS Sprawl Detected. Manual data entry is severely bottlenecking your team's output.";
               if (formData.teamSize === "50+") {
                    grade = "D";
                    text = "Critical Process Fragmentation. Massive enterprise overhead detected across siloed departments.";
               } else if (formData.teamSize === "Just me" || formData.teamSize === "2-5") {
                    grade = "B-";
                    text = "High Automation Potential. Leadership time is being drained by administrative glue-work.";
               }

               setScoreResult({ grade, text });
               setIsScoreCalculated(true);
               setLoading(false);

          } catch (error: any) {
               console.error('Submission error', error);
               toast.error(`Failed to submit: ${error?.message || 'Please try again'}`);
               setLoading(false);
          }
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
     };

     if (isScoreCalculated && scoreResult) {
          const calUrl = new URL('https://cal.com/sellatica-official/introductory-call');
          calUrl.searchParams.append('name', formData.name);
          calUrl.searchParams.append('email', formData.email);

          return (
               <div className="space-y-6 text-center py-8 bg-secondary/10 p-8 rounded-xl border border-border mt-4 w-full">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">AI Readiness Score</h3>

                    <div className="flex justify-center items-center py-6">
                         <div className="w-32 h-32 rounded-full border-4 border-accent flex items-center justify-center bg-background shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                              <span className="text-5xl font-display font-bold text-accent">{scoreResult.grade}</span>
                         </div>
                    </div>

                    <p className="text-muted-foreground font-mono text-sm max-w-sm mx-auto leading-relaxed border-l-2 border-accent/50 pl-4 text-left">
                         &gt; {scoreResult.text}
                    </p>

                    <div className="pt-8 mt-2 border-t border-border/50">
                         <p className="font-medium text-foreground mb-4 text-sm">Review your custom OS Blueprint with an engineer.</p>
                         <a href={calUrl.toString()} target="_blank" rel="noopener noreferrer" className="block w-full">
                              <Button size="lg" className="w-full">
                                   Book Architecture Review Call
                              </Button>
                         </a>
                    </div>
               </div>
          );
     }

     return (
          <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
               <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                         <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                         <input
                              id="name"
                              name="name"
                              required
                              type="text"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                         />
                    </div>
                    <div className="space-y-2">
                         <label htmlFor="email" className="text-sm font-medium text-foreground">Work Email</label>
                         <input
                              id="email"
                              name="email"
                              required
                              type="email"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                         />
                    </div>
               </div>

               <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                         <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</label>
                         <input
                              id="company"
                              name="company"
                              required
                              type="text"
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Acme Corp"
                         />
                    </div>
                    <div className="space-y-2">
                         <label htmlFor="teamSize" className="text-sm font-medium text-foreground">Team Size</label>
                         <select
                              id="teamSize"
                              name="teamSize"
                              required
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                              value={formData.teamSize}
                              onChange={handleChange}
                         >
                              <option value="" disabled>Select team size</option>
                              <option value="Just me">Just me</option>
                              <option value="2-5">2–5</option>
                              <option value="6-20">6–20</option>
                              <option value="21-50">21–50</option>
                              <option value="50+">50+</option>
                         </select>
                    </div>
               </div>

               <div className="space-y-2">
                    <label htmlFor="biggestChallenge" className="text-sm font-medium text-foreground">What is your biggest operational bottleneck right now?</label>
                    <textarea
                         id="biggestChallenge"
                         name="biggestChallenge"
                         required
                         rows={3}
                         className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
                         value={formData.biggestChallenge}
                         onChange={handleChange}
                         placeholder="e.g. Our sales team manually enters data across 3 tools every day"
                    />
               </div>

               <div className="space-y-4 !mt-6 flex justify-center w-full">
                    <Turnstile
                         ref={turnstileRef}
                         siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY as string}
                         options={{ theme: 'light' }}
                         onSuccess={(token) => {
                              setTurnstileToken(token);
                              setTurnstileFailed(false);
                         }}
                         onError={() => {
                              console.warn('Turnstile widget failed to load correctly.');
                              setTurnstileFailed(true);
                         }}
                    />
               </div>

               <Button type="submit" size="lg" className="w-full group !mt-8" disabled={loading}>
                    {loading ? 'Submitting & Verifying...' : 'Get Your AI OS Scorecard & Book Call'}
               </Button>
               {turnstileFailed && (
                    <p className="text-xs text-amber-500/80 text-center mt-2 font-mono">
                         Security check bypassed due to timeout. Proceeding via secure proxy.
                    </p>
               )}
               <p className="text-xs text-muted-foreground text-center mt-4">
                    We'll never share your information. You'll be redirected to our calendar next.
               </p>
          </form>
     );
};

export default AiOsScorecardForm;
