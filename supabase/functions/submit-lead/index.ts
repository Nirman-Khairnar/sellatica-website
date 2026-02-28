import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY") || "";

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
          const { token, leadData } = await req.json();

          // 1. Verify Cloudflare Turnstile Token
          if (!token) {
               return new Response(JSON.stringify({ error: "Missing Turnstile verification token" }), {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
               });
          }

          const formData = new FormData();
          formData.append("secret", TURNSTILE_SECRET_KEY);
          formData.append("response", token);

          const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
               method: "POST",
               body: formData,
          });

          const turnstileData = await turnstileRes.json();

          if (!turnstileData.success) {
               console.error("Turnstile verification failed for given token:", turnstileData);
               return new Response(JSON.stringify({ error: "Cloudflare bot verification failed" }), {
                    status: 403,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
               });
          }

          // 2. Token is verified, user is human. Proceed to Supabase insert via privileged Service Key
          // Create an explicit superuser client by setting the bearer Token header
          const supabaseAdmin = createClient(
               Deno.env.get('SUPABASE_URL') ?? '',
               Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
               {
                    auth: {
                         persistSession: false,
                         autoRefreshToken: false,
                         detectSessionInUrl: false,
                    }
               }
          );

          const { error: insertError } = await supabaseAdmin.from("leads").insert([
               {
                    name: leadData.name,
                    email: leadData.email,
                    company: leadData.company,
                    team_size: leadData.teamSize,
                    bottleneck: leadData.biggestChallenge,
                    status: "form_submitted",
                    source: "ai_os_audit"
               }
          ]);

          if (insertError) {
               console.error("Database insert error:", insertError);
               return new Response(JSON.stringify({ error: `DB Error: ${insertError.message} (Code: ${insertError.code})` }), {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
               });
          }

          return new Response(JSON.stringify({ success: true, message: "Lead submitted securely" }), {
               status: 200,
               headers: { ...corsHeaders, "Content-Type": "application/json" },
          });

     } catch (error: any) {
          console.error("Edge function error:", error);
          return new Response(JSON.stringify({ error: error.message }), {
               status: 500,
               headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
     }
});
