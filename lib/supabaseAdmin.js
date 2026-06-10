import { createClient } from '@supabase/supabase-js';

// Server-only admin client — uses the service role key which bypasses RLS.
// Never import this file into client components or pages with 'use client'.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);
