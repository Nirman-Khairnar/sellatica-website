import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';
import { usePrice } from '@/hooks/usePrice';
import { toast } from 'sonner';
import { Turnstile } from '@marsidev/react-turnstile';
import type { TurnstileInstance } from '@marsidev/react-turnstile';
import { createDiagnosticOrder, verifyDiagnosticPayment } from '@/lib/backend';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DiagnosticCheckout = () => {
     const price = usePrice();
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [formData, setFormData] = useState({ name: '', email: '' });
     const [turnstileToken, setTurnstileToken] = useState<string>('');
     const turnstileRef = useRef<TurnstileInstance | null>(null);

     useEffect(() => {
          // Dynamically load Razorpay SDK securely when the component mounts
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.async = true;
          document.body.appendChild(script);

          return () => {
               if (document.body.contains(script)) {
                    document.body.removeChild(script);
               }
          };
     }, []);

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setIsSubmitting(true);

          try {
               // Determine currency context
               const isIndia = price.display.includes('Rs');
               const currency = isIndia ? 'INR' : 'USD';

               // 1. Call Secure Supabase Engine
               const { orderId, keyId, amount } = await createDiagnosticOrder({
                    currency,
                    token: turnstileToken,
                    leadData: {
                         name: formData.name,
                         email: formData.email,
                         source: 'sellatica_diagnostic_checkout'
                    }
               });

               if (!window.Razorpay) {
                    throw new Error("Secure payment system is still loading. Please try again in a moment.");
               }

               // 2. Initialize native Razorpay popup
               const options = {
                    key: keyId, // Public Key returned from backend
                    amount: amount,
                    currency: currency,
                    name: "Sellatica",
                    description: "AI Operations Diagnostic",
                    order_id: orderId,
                    handler: async function (response: any) {
                         try {
                              const verification = await verifyDiagnosticPayment({
                                   payment: {
                                        razorpay_payment_id: response.razorpay_payment_id,
                                        razorpay_order_id: response.razorpay_order_id,
                                        razorpay_signature: response.razorpay_signature,
                                   },
                                   leadData: {
                                        name: formData.name,
                                        email: formData.email,
                                        source: 'sellatica_diagnostic_checkout'
                                   }
                              });

                              toast.success("Payment Received", {
                                   description: verification.verified
                                        ? "Redirecting to priority booking calendar..."
                                        : "Payment captured. Redirecting to booking..."
                              });

                              window.location.href = verification.bookingUrl;
                         } catch (verificationError: any) {
                              console.error("Payment verification error:", verificationError);
                              toast.error("Payment verification failed", {
                                   description: verificationError.message || "Please contact us and we will help you complete the booking."
                              });
                              setIsSubmitting(false);
                              setTurnstileToken('');
                              turnstileRef.current?.reset();
                         }
                    },
                    prefill: {
                         name: formData.name,
                         email: formData.email,
                    },
                    theme: {
                         color: "#0f172a" 
                    },
                    modal: {
                         ondismiss: function() {
                              setIsSubmitting(false); // Enable the button again if user closes the modal
                              setTurnstileToken(''); // Clear token to force re-verification
                              turnstileRef.current?.reset();
                         }
                    }
               };

               const rzp = new window.Razorpay(options);
               
               rzp.on('payment.failed', function (response: any){
                    toast.error("Transaction Failed", {
                         description: response.error.description || "The payment could not be processed."
                    });
                    setIsSubmitting(false);
                    setTurnstileToken('');
                    turnstileRef.current?.reset();
               });

               rzp.open();

          } catch (err: any) {
               console.error("Checkout error:", err);
               toast.error("Checkout Error", {
                    description: err.message || "Failed to initialize secure checkout. Please try again."
               });
               setIsSubmitting(false);
               setTurnstileToken('');
               turnstileRef.current?.reset();
          }
     };

     return (
          <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-4">
                    <div>
                         <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                              Full Name
                         </label>
                         <input
                              type="text"
                              id="name"
                              required
                              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                         />
                    </div>
                    <div>
                         <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                              Work Email
                         </label>
                         <input
                              type="email"
                              id="email"
                              required
                              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         />
                    </div>
               </div>

               <div className="pt-4 flex flex-col items-center justify-center min-h-[65px]">
                    <Turnstile
                         ref={turnstileRef}
                         siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACj_6j74UwLAs3Fm'}
                         options={{ theme: 'dark' }}
                         onSuccess={(token) => setTurnstileToken(token)}
                         onError={() => toast.error("Verification failed. Please refresh the page.")}
                    />
               </div>

               <div className="pt-2">
                    <Button
                         type="submit"
                         size="lg"
                         className="w-full group h-14 text-lg font-medium tracking-wide flex items-center justify-between px-6"
                         disabled={isSubmitting || price.loading || !turnstileToken}
                    >
                         <span className="flex items-center gap-2">
                              <Lock className="w-5 h-5 opacity-70" />
                              {isSubmitting ? 'Routing Securely...' : `Secure Checkout (${price.loading ? '...' : price.display})`}
                         </span>
                         <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
               </div>

               <div className="flex items-start gap-3 mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                         <p className="text-sm font-medium text-foreground mb-1">
                              $5,000 Efficiency Guarantee
                         </p>
                         <p className="text-xs text-muted-foreground leading-relaxed">
                              If we do not identify at least five thousand dollars in manual revenue leakage during your diagnostic, your fee will be refunded immediately. No questions asked.
                         </p>
                    </div>
               </div>
          </form>
     );
};

export default DiagnosticCheckout;
