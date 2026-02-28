import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf8');
const supabaseUrl = envFile.match(/VITE_SUPABASE_URL="(.*?)"/)[1];
const supabaseAnonKey = envFile.match(/VITE_SUPABASE_ANON_KEY="(.*?)"/)[1];

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
     console.log("Attempting isolated insert into leads table...");
     const { data, error } = await supabase.from('leads').insert([
          {
               name: 'Direct Script Test',
               email: 'script@test.com',
               company: 'Script Corp',
               team_size: 'Just me',
               bottleneck: 'Testing DB connection',
               status: 'form_submitted',
               source: 'ai_os_audit'
          }
     ]);

     if (error) {
          console.error("INSERT FAILED:");
          console.error(JSON.stringify(error, null, 2));
     } else {
          console.log("INSERT SUCCESS! Data:", data);
     }
}

testInsert();
