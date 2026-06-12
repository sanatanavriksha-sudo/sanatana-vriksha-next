'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wordmark } from '@/components/SharedComponents';
import { CURATED_DAILY_ISSUES } from '@/lib/vriksha-vani-data';

/* ── Minimal nav, same pattern as /about and /classes ───────────────────── */
function VaniNav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Wordmark onClick={(e: any) => { e.preventDefault(); router.push('/'); }} />
          <nav className="nav-links">
            <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }} className="nav-link">Home</a>
          </nav>
          <div className="nav-cta">
            <button
              className={`nav-burger ${open ? 'open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`}>
        <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>Back to Home</a>
      </div>
    </>
  );
}

/* ── Label used above each content block ───────────────────────────────── */
function BlockLabel({ children, color = 'var(--ink-faint)' }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{
      fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
      fontFamily: 'var(--font-body)', fontWeight: 700, color,
      borderBottom: '1px solid var(--line)', paddingBottom: '8px', marginBottom: '14px',
    }}>
      {children}
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────────────── */
export default function VrikshaVaniPage() {
  const [activeDayIdx, setActiveDayIdx]   = useState(0);
  const [copiedVerse,  setCopiedVerse]    = useState(false);
  const [copiedPrompt, setCopiedPrompt]   = useState(false);
  const [scratchpad,   setScratchpad]     = useState('');

  const issue  = CURATED_DAILY_ISSUES[activeDayIdx];
  const isFirst = activeDayIdx === 0;
  const isLast  = activeDayIdx === CURATED_DAILY_ISSUES.length - 1;

  useEffect(() => {
    document.body.classList.add('cards-bordered');
    return () => document.body.classList.remove('cards-bordered');
  }, []);

  function selectDay(idx: number) {
    setActiveDayIdx(idx);
    setScratchpad('');
    setCopiedVerse(false);
    setCopiedPrompt(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function copyVerse() {
    navigator.clipboard.writeText(
      `${issue.scriptureRef.verseSanskrit}\n\n"${issue.scriptureRef.translation}"\n— ${issue.scriptureRef.source}`
    );
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  }

  function copyPrompt() {
    navigator.clipboard.writeText(issue.journalPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  }

  function downloadIssue() {
    const lines = [
      '═══════════════════════════════════════════════════',
      `  VṚKṢA VĀṆĪ  —  ${issue.concept.toUpperCase()}`,
      '═══════════════════════════════════════════════════',
      '',
      `Date          : ${issue.date}`,
      `Lunar Tithi   : ${issue.tithiName} (${issue.tithiPhase} Pakṣa)`,
      `Tithi meaning : ${issue.tithiDesc}`,
      '',
      '— SCRIPTURAL WISDOM ————————————————————————————',
      issue.scriptureRef.verseSanskrit,
      `"${issue.scriptureRef.translation}"`,
      `Source: ${issue.scriptureRef.source}`,
      '',
      '— REFLECTION ———————————————————————————————————',
      issue.explanation,
      '',
      '— DHARMIC PRACTICE ——————————————————————————————',
      issue.dharmicPractice.title,
      issue.dharmicPractice.howTo,
      `Benefit: ${issue.dharmicPractice.benefit}`,
      '',
      '— YOGIC PRACTICE ————————————————————————————————',
      issue.yogicPractice.title,
      issue.yogicPractice.howTo,
      `Benefit: ${issue.yogicPractice.benefit}`,
      '',
      '— CONTEMPLATIVE PROMPT ——————————————————————————',
      issue.journalPrompt,
      ...(scratchpad.trim() ? [
        '',
        '— MY REFLECTION —————————————————————————————————',
        scratchpad.trim(),
      ] : []),
      '',
      '═══════════════════════════════════════════════════',
      'Lokāḥ Samastāḥ Sukhino Bhavantu',
      'May all beings dwell in happiness and peace.',
      '═══════════════════════════════════════════════════',
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `Vrksa_Vani_${issue.concept.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /* shared inline-style helpers */
  const smallCopy: React.CSSProperties = {
    fontSize: '11px', background: 'transparent',
    border: '1px solid var(--line)', borderRadius: '6px',
    padding: '3px 10px', cursor: 'pointer',
    fontFamily: 'var(--font-body)', transition: 'color 0.2s',
  };

  return (
    <>
      <VaniNav />
      <main style={{ paddingTop: '74px' }}>

        {/* ── Page header ──────────────────────────────────────── */}
        <section className="section section--cream weave" style={{ paddingBlock: '52px 36px' }}>
          <div className="shell" style={{ textAlign: 'center' }}>
            <div className="dev" style={{ fontSize: '26px', color: 'var(--gold-deep)', marginBottom: '12px' }}>
              वृक्ष वाणी
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 600, color: 'var(--maroon)',
              letterSpacing: '0.04em', lineHeight: 1.08, marginBottom: '16px',
            }}>
              Vṛkṣa Vāṇī
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--ink-soft)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
              A dharmic thought for your day
            </p>
          </div>
        </section>

        {/* ── Day selector ─────────────────────────────────────── */}
        <div style={{
          background: 'var(--beige)',
          borderTop: '1px solid var(--line-gold)',
          borderBottom: '1px solid var(--line-gold)',
          padding: '18px 0',
        }}>
          <div className="shell">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <span style={{
                fontSize: '11px', color: 'var(--ink-faint)', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 500,
                marginRight: '4px',
              }}>
                Daily Chronicle
              </span>
              {CURATED_DAILY_ISSUES.map((iss, idx) => (
                <button
                  key={iss.id}
                  className={`btn btn--sm ${activeDayIdx === idx ? 'btn--primary' : 'btn--ghost'}`}
                  onClick={() => selectDay(idx)}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────── */}
        <section className="section section--cream weave">
          <div className="shell">
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>

              {/* Concept title + date + tithi badge */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{
                  fontSize: '11px', color: 'var(--gold-deep)', letterSpacing: '0.22em',
                  textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 600,
                  marginBottom: '14px',
                }}>
                  ◇ &nbsp;Vṛkṣa Vāṇī Daily&nbsp; ◇
                </div>
                <h2 style={{
                  fontSize: 'clamp(34px, 5vw, 54px)', color: 'var(--maroon)',
                  letterSpacing: '0.04em', marginBottom: '16px',
                }}>
                  {issue.concept}
                </h2>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                  justifyContent: 'center', gap: '10px',
                  fontSize: '13px', color: 'var(--ink-soft)',
                }}>
                  <span>{issue.date}</span>
                  <span style={{ color: 'var(--line-gold)' }}>•</span>
                  <span style={{
                    background: 'rgba(201,162,74,0.12)',
                    border: '1px solid var(--line-gold)',
                    padding: '3px 13px', borderRadius: '999px',
                    fontSize: '11px', fontFamily: 'var(--font-body)',
                    fontWeight: 600, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--gold-deep)',
                  }}>
                    {issue.tithiName} · {issue.tithiPhase} Pakṣa
                  </span>
                </div>
              </div>

              {/* Tithi significance */}
              <div style={{
                borderLeft: '3px solid var(--green)',
                background: 'rgba(35,77,60,0.05)',
                padding: '14px 18px', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '32px',
              }}>
                <div style={{
                  fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  color: 'var(--green)', marginBottom: '6px',
                }}>
                  Lunar Significance — {issue.tithiName}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  {issue.tithiDesc}
                </p>
              </div>

              {/* Scripture block */}
              <div className="card" style={{ marginBottom: '28px', padding: '36px 32px', textAlign: 'center', position: 'relative' }}>
                <button
                  onClick={copyVerse}
                  style={{ ...smallCopy, position: 'absolute', top: '14px', right: '16px', color: copiedVerse ? 'var(--green)' : 'var(--ink-faint)' }}
                >
                  {copiedVerse ? '✓ Copied' : 'Copy'}
                </button>

                <BlockLabel color="var(--gold-deep)">Scriptural Wisdom</BlockLabel>

                <p className="dev" style={{
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  color: 'var(--maroon)', lineHeight: 1.65,
                  marginBottom: '22px', padding: '0 8px',
                }}>
                  {issue.scriptureRef.verseSanskrit}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  color: 'var(--ink-soft)', fontSize: '16px',
                  lineHeight: 1.75, maxWidth: '500px',
                  margin: '0 auto 18px',
                }}>
                  &ldquo;{issue.scriptureRef.translation}&rdquo;
                </p>

                <span style={{
                  display: 'inline-block', fontSize: '11px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  color: 'var(--gold-deep)', background: 'rgba(201,162,74,0.1)',
                  padding: '4px 16px', borderRadius: '999px',
                  border: '1px solid var(--line-gold)',
                }}>
                  — {issue.scriptureRef.source}
                </span>
              </div>

              {/* Reflection */}
              <div style={{ marginBottom: '28px' }}>
                <BlockLabel>Reflection</BlockLabel>
                <p style={{
                  fontSize: '16px', color: 'var(--ink)',
                  lineHeight: 1.85, fontFamily: 'var(--font-display)',
                }}>
                  {issue.explanation}
                </p>
              </div>

              {/* Practice cards */}
              <div style={{ marginBottom: '28px' }}>
                <BlockLabel color="var(--green)">Active Daily Sādhana</BlockLabel>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>

                  {/* Dharmic */}
                  <div style={{
                    background: 'rgba(35,77,60,0.07)',
                    border: '1px solid rgba(35,77,60,0.2)',
                    borderRadius: 'var(--radius-sm)', padding: '20px',
                  }}>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase',
                      fontFamily: 'var(--font-body)', fontWeight: 700,
                      color: 'var(--green)', marginBottom: '10px',
                    }}>
                      Dharmic Conduct
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--ink)', marginBottom: '10px', fontWeight: 600 }}>
                      {issue.dharmicPractice.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '14px' }}>
                      {issue.dharmicPractice.howTo}
                    </p>
                    <div style={{ fontSize: '10px', color: 'var(--green)', fontWeight: 700, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Benefit
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--ink-soft)', fontStyle: 'italic', lineHeight: 1.55 }}>
                      {issue.dharmicPractice.benefit}
                    </p>
                  </div>

                  {/* Yogic */}
                  <div style={{
                    background: 'rgba(201,162,74,0.08)',
                    border: '1px solid rgba(201,162,74,0.3)',
                    borderRadius: 'var(--radius-sm)', padding: '20px',
                  }}>
                    <div style={{
                      fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase',
                      fontFamily: 'var(--font-body)', fontWeight: 700,
                      color: 'var(--gold-deep)', marginBottom: '10px',
                    }}>
                      Yogic Practice
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: 'var(--ink)', marginBottom: '10px', fontWeight: 600 }}>
                      {issue.yogicPractice.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: '14px' }}>
                      {issue.yogicPractice.howTo}
                    </p>
                    <div style={{ fontSize: '10px', color: 'var(--gold-deep)', fontWeight: 700, fontFamily: 'var(--font-body)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                      Benefit
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--ink-soft)', fontStyle: 'italic', lineHeight: 1.55 }}>
                      {issue.yogicPractice.benefit}
                    </p>
                  </div>

                </div>
              </div>

              {/* Journal prompt */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{
                  fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--ink-faint)',
                  borderBottom: '1px solid var(--line)', paddingBottom: '8px', marginBottom: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span>Contemplative Prompt</span>
                  <button
                    onClick={copyPrompt}
                    style={{ ...smallCopy, color: copiedPrompt ? 'var(--green)' : 'var(--ink-faint)', textTransform: 'none', letterSpacing: 'normal' }}
                  >
                    {copiedPrompt ? '✓ Copied' : 'Copy prompt'}
                  </button>
                </div>
                <blockquote style={{
                  borderLeft: '3px solid var(--gold)',
                  paddingLeft: '20px',
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: '17px', color: 'var(--ink)', lineHeight: 1.8,
                }}>
                  &ldquo;{issue.journalPrompt}&rdquo;
                </blockquote>
              </div>

              {/* Scratchpad */}
              <div style={{
                background: 'rgba(201,162,74,0.04)',
                border: '1px solid var(--line-gold)',
                borderRadius: 'var(--radius-sm)', padding: '20px',
                marginBottom: '36px',
              }}>
                <div style={{
                  fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--ink-faint)',
                  marginBottom: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span>Temporary Notepad</span>
                  {scratchpad.trim() && (
                    <button
                      onClick={() => setScratchpad('')}
                      style={{ ...smallCopy, color: 'var(--ink-faint)', border: 'none', padding: '0', textTransform: 'none', letterSpacing: 'normal' }}
                    >
                      ✕ Clear
                    </button>
                  )}
                </div>
                <textarea
                  value={scratchpad}
                  onChange={e => setScratchpad(e.target.value)}
                  placeholder="Reflect on the prompt above. Jot your thoughts here — nothing is saved or sent anywhere."
                  rows={4}
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.75)',
                    border: '1px solid var(--line)', borderRadius: '8px',
                    padding: '12px 14px', fontSize: '15px',
                    fontFamily: 'var(--font-display)', color: 'var(--ink)',
                    lineHeight: 1.7, resize: 'vertical', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e  => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e   => (e.target.style.borderColor = 'var(--line)')}
                />
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    className={scratchpad.trim() ? 'btn btn--gold btn--sm' : 'btn btn--ghost btn--sm'}
                    onClick={downloadIssue}
                  >
                    ↓ {scratchpad.trim() ? 'Download Issue & My Notes' : 'Download Issue'}
                  </button>
                </div>
              </div>

              {/* Prev / Next */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: '20px', borderTop: '1px solid var(--line)',
              }}>
                <button
                  className="btn btn--ghost btn--sm"
                  onClick={() => selectDay(activeDayIdx - 1)}
                  disabled={isFirst}
                  style={{ opacity: isFirst ? 0.3 : 1 }}
                >
                  ← Prev Day
                </button>
                <span style={{
                  fontSize: '12px', color: 'var(--ink-faint)',
                  fontFamily: 'var(--font-body)', letterSpacing: '0.08em',
                }}>
                  Day {activeDayIdx + 1} of {CURATED_DAILY_ISSUES.length}
                </span>
                <button
                  className="btn btn--ghost btn--sm"
                  onClick={() => selectDay(activeDayIdx + 1)}
                  disabled={isLast}
                  style={{ opacity: isLast ? 0.3 : 1 }}
                >
                  Next Day →
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ── Closing mantra ───────────────────────────────────── */}
        <div style={{
          background: 'var(--beige)',
          borderTop: '1px solid var(--line-gold)',
          padding: '36px 0', textAlign: 'center',
        }}>
          <div className="shell">
            <p className="dev" style={{ fontSize: '20px', color: 'var(--maroon)', marginBottom: '8px' }}>
              लोकाः समस्ताः सुखिनो भवन्तु
            </p>
            <p style={{ fontSize: '13px', color: 'var(--ink-faint)', fontStyle: 'italic' }}>
              May all beings dwell in happiness and peace.
            </p>
          </div>
        </div>

      </main>
    </>
  );
}
