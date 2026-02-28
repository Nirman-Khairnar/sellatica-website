import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf8');
const supabaseUrl = envFile.match(/VITE_SUPABASE_URL="(.*?)"/)[1];
const supabaseAnonKey = envFile.match(/VITE_SUPABASE_ANON_KEY="(.*?)"/)[1];

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testEdgeFunction() {
     console.log("Attempting to invoke Edge Function 'submit-lead'...");

     const { data, error } = await supabase.functions.invoke('submit-lead', {
          body: {
               token: "dummy_token_for_testing",
               leadData: {
                    name: 'Proxy Test',
                    email: 'proxy@test.com',
                    company: 'Proxy Corp',
                    teamSize: 'Just me',
                    biggestChallenge: 'Testing'
               }
          }
     });

     if (error) {
          console.error("EDGE FUNCTION CALL FAILED (Infra Level):");
          console.error(error);
     } else if (data?.error) {
          console.error("EDGE FUNCTION RETURNED ERROR (Logic Level):");
          console.error(data.error);
     } else {
          console.log("EDGE FUNCTION SUCCESS:", data);
     }
}

testEdgeFunction();
