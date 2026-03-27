import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Turnstile } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { trackEvent } from '@/utils/analytics';

export const AiOsScorecardForm = () => {
     const [loading, setLoading] = useState(false);
     const [turnstileToken, setTurnstileToken] = useState<string>('');
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
          setLoading(true);

          try {
               const { data, error: invokeError } = await supabase.functions.invoke('submit-lead', {
                    body: {
                         token: turnstileToken,
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

               toast.success('Submitted successfully. Redirecting to booking...', {
                    duration: 3000,
               });

               trackEvent('form_submitted', { form_id: 'ai_operations_diagnostic' });

               const calUrl = new URL('https://cal.com/sellatica-official/introductory-call');
               calUrl.searchParams.append('name', formData.name);
               calUrl.searchParams.append('email', formData.email);

               setTimeout(() => {
                    window.location.href = calUrl.toString();
               }, 1000);

          } catch (error: any) {
               console.error('Submission error', error);
               toast.error(`Failed to submit: ${error?.message || 'Please try again'}`);
               setLoading(false);
          }
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
     };

     return (
          <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
               <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                         <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
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
                              <option value="2-5">2 to 5</option>
                              <option value="6-20">6 to 20</option>
                              <option value="21-50">21 to 50</option>
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

               <div className="space-y-4 !mt-6 flex flex-col justify-center items-center w-full min-h-[65px]">
                    <Turnstile
                         ref={turnstileRef}
                         siteKey="0x4AAAAAACj_6j74UwLAs3Fm"
                         options={{ theme: 'light' }}
                         onSuccess={(token) => setTurnstileToken(token)}
                         onError={() => {
                              console.warn('Turnstile widget failed to solve securely.');
                              turnstileRef.current?.reset();
                         }}
                    />
               </div>

               <Button type="submit" size="lg" className="w-full group !mt-8" disabled={loading}>
                    {loading ? 'Submitting...' : 'Book AI Operations Diagnostic'}
               </Button>
               <p className="text-xs text-muted-foreground text-center mt-4">
                    We will never share your information. You will be redirected to our calendar next.
               </p>
          </form>
     );
};

export default AiOsScorecardForm;
