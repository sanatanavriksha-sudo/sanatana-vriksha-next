import { supabase } from '@/lib/supabaseClient';
import { SVData } from '@/lib/data';
import ServicesClient, { type ServiceItem } from './ServicesClient';

type SupabaseServiceRow = {
  title: string;
  slug: string;
  category: string;
  description: string;
  image_url: string | null;
  price_label: string;
  devanagari_name: string;
  glyph: string;
  is_active: boolean;
  sort_order: number;
};

function rowToItem(row: SupabaseServiceRow): ServiceItem {
  return {
    name:  row.title,
    dev:   row.devanagari_name,
    glyph: row.glyph,
    img:   row.image_url ?? undefined,
    desc:  row.description,
    price: row.price_label,
  };
}

const CATEGORY_KEYS = ['homas', 'poojas', 'samskaras', 'specialized'] as const;
type CategoryKey = typeof CATEGORY_KEYS[number];

// lib/data.js fallback — used per category when Supabase has no rows for it.
const FALLBACK: Record<CategoryKey, ServiceItem[]> = {
  homas:       SVData.homas       as ServiceItem[],
  poojas:      SVData.poojas      as ServiceItem[],
  samskaras:   SVData.samskaras   as ServiceItem[],
  specialized: SVData.specialized as ServiceItem[],
};

export default async function ServicesPage() {
  // Start from a full fallback copy; replace per-category as Supabase rows arrive.
  const categoryItems: Record<string, ServiceItem[]> = { ...FALLBACK };

  try {
    const { data, error } = await supabase
      .from('services')
      .select('title, slug, category, description, image_url, price_label, devanagari_name, glyph, is_active, sort_order')
      .eq('is_active', true)
      .order('category')
      .order('sort_order');

    if (!error && data && data.length > 0) {
      // Group rows by category key.
      const grouped: Partial<Record<CategoryKey, SupabaseServiceRow[]>> = {};
      for (const row of data as SupabaseServiceRow[]) {
        const cat = row.category as CategoryKey;
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat]!.push(row);
      }

      // Replace fallback only for categories that returned rows.
      for (const cat of CATEGORY_KEYS) {
        const rows = grouped[cat];
        if (rows && rows.length > 0) {
          categoryItems[cat] = rows.map(rowToItem);
        }
        // Otherwise categoryItems[cat] keeps the SVData fallback set above.
      }
    }
    // If error is set or data is empty, all categories keep SVData fallback.
  } catch {
    // Supabase unreachable or env vars missing — all categories keep SVData fallback.
  }

  return <ServicesClient categoryItems={categoryItems} />;
}
