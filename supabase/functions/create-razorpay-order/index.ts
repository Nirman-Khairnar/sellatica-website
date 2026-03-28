import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
     // Handle CORS preflight requests
     if (req.method === "OPTIONS") {
          return new Response("ok", { headers: corsHeaders });
     }

     try {
          const { currency } = await req.json();

          // Safely extract our securely stored keys at runtime
          const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID");
          const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");

          if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
               console.error("Razorpay credentials are not configured in edge function environment.");
               return new Response(JSON.stringify({ error: "Server Configuration Error: Missing Secret Keys" }), {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
               });
          }

          // Determine precise amount based on currency request
          // Rs. 7,999 = 799900 paise. $97 = 9700 cents.
          let amount = 0;
          let paymentCurrency = "USD";

          if (currency === "INR") {
               amount = 799900;
               paymentCurrency = "INR";
          } else {
               amount = 9700;
               paymentCurrency = "USD";
          }

          // 1. Create a Razorpay Order server-side (Highly Secure)
          const razorpayAuth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
          
          console.log(`Creating Razorpay Order for ${amount} ${paymentCurrency}...`);

          const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${razorpayAuth}`
               },
               body: JSON.stringify({
                    amount,
                    currency: paymentCurrency,
                    receipt: `receipt_${crypto.randomUUID()}`
               })
          });

          const orderData = await orderRes.json();

          if (!orderRes.ok || orderData.error) {
               console.error("Razorpay API Error Response:", orderData.error);
               throw new Error(orderData.error?.description || "Failed to generate Razorpay transaction.");
          }

          // 2. Return ONLY the public information to the frontend
          return new Response(JSON.stringify({
               success: true,
               orderId: orderData.id,
               amount: orderData.amount,
               currency: orderData.currency,
               keyId: RAZORPAY_KEY_ID // The frontend needs the public key to launch the checkout popup
          }), {
               status: 200,
               headers: { ...corsHeaders, "Content-Type": "application/json" },
          });

     } catch (error: any) {
          console.error("Razorpay edge function error:", error);
          return new Response(JSON.stringify({ error: error.message }), {
               status: 500,
               headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
     }
});
