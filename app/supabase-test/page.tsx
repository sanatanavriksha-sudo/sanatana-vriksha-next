import { supabase } from '@/lib/supabaseClient';

type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  image_url: string | null;
};

export default async function SupabaseTestPage() {
  const { data, error } = await supabase
    .from('services')
    .select('id, title, category, description, image_url');

  return (
    <div style={{ fontFamily: 'monospace', padding: '32px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Supabase Test — public.services</h1>
      <p style={{ color: '#666', marginBottom: '32px', fontSize: '14px' }}>
        This page is not linked from the main site. It only exists to verify the Supabase connection.
      </p>

      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '6px', padding: '16px', color: '#b91c1c' }}>
          <strong>Error:</strong> {error.message}
        </div>
      )}

      {!error && (!data || data.length === 0) && (
        <p style={{ color: '#666' }}>No services found.</p>
      )}

      {!error && data && data.length > 0 && (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
              <th style={th}>ID</th>
              <th style={th}>Title</th>
              <th style={th}>Category</th>
              <th style={th}>Description</th>
              <th style={th}>Image URL</th>
            </tr>
          </thead>
          <tbody>
            {(data as Service[]).map((row) => (
              <tr key={row.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td style={td}>{row.id}</td>
                <td style={td}>{row.title}</td>
                <td style={td}>{row.category}</td>
                <td style={{ ...td, maxWidth: '300px' }}>{row.description}</td>
                <td style={td}>
                  {row.image_url ? (
                    <a href={row.image_url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
                      {row.image_url}
                    </a>
                  ) : (
                    <span style={{ color: '#999' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!error && data && (
        <p style={{ marginTop: '24px', color: '#666', fontSize: '13px' }}>
          {data.length} row{data.length !== 1 ? 's' : ''} returned.
        </p>
      )}
    </div>
  );
}

const th: React.CSSProperties = {
  padding: '10px 12px',
  fontWeight: 600,
  borderBottom: '2px solid #d4d4d4',
};

const td: React.CSSProperties = {
  padding: '10px 12px',
  verticalAlign: 'top',
};
