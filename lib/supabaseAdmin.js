import { createClient } from '@supabase/supabase-js';

// Returns a Supabase admin client using the service role key.
// Called lazily inside API route handlers so the client is never created at
// module load time — prevents Vercel build failures when env vars are absent
// during static page-data collection.
// Never import this into client components or 'use client' files.
export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error('Missing Supabase admin environment variables');
  }

  return createClient(supabaseUrl, supabaseSecretKey);
}
