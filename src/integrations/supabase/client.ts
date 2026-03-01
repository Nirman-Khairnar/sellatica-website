import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yzluxtbltmkzmawekjnm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bHV4dGJsdG1rem1hd2Vram5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjU3NjEsImV4cCI6MjA4NjkwMTc2MX0.4IrnzTtdRPJucOQufZ0t7GWv_VvqwuYT3bYdDhQVzIM';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
