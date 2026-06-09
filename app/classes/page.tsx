'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SVData } from '@/lib/data';
import { Reveal, SectionHead, Wordmark, Icon } from '@/components/SharedComponents';

function ClassesNav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Wordmark onClick={(e: any) => { e.preventDefault(); router.push('/'); }} />
          <nav className="nav-links">
            <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }} className="nav-link">Home</a>
          </nav>
          <div className="nav-cta">
            <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`}>
        <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>Back to Home</a>
      </div>
    </>
  );
}

function ClassesFullGrid({ onJoin }: { onJoin: (name: string) => void }) {
  return (
    <section className="section section--cream weave" id="classes">
      <div className="shell">
        <Reveal>
          <SectionHead center={false} dev="ज्ञान" kicker="Learn"
            title="Learn the Wisdom of Sanātana Dharma"
            sub="Live and recorded classes for every age and stage — taught by knowledgeable teachers in a warm, welcoming setting." />
        </Reveal>
        <div className="learn-grid">
          {SVData.classes.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 70} className="card learn-card" as="article">
              <div className="learn-thumb">
                <span className="lvl">{c.level}</span>
                <span className="glyph dev">{c.glyph}</span>
              </div>
              <div className="learn-body">
                <h4>
                  <span className="dev" style={{ display: "block", fontSize: "13px", color: "var(--gold-deep)", fontWeight: 400 }}>{c.dev}</span>
                  {c.name}
                </h4>
                <p>{c.desc}</p>
                <div className="learn-meta">
                  <span><Icon.clock /> {c.cadence}</span>
                  <span><Icon.layers /> {c.level}</span>
                </div>
                <button className="btn btn--ghost btn--sm" onClick={() => onJoin(c.name)}>
                  Join Class <Icon.arrow />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClassesPage() {
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.classList.add("cards-bordered");
    return () => document.body.classList.remove("cards-bordered");
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3800);
  }, []);

  return (
    <>
      <ClassesNav />
      <main style={{ paddingTop: "74px" }}>
        <ClassesFullGrid onJoin={(c) => showToast(`Class interest noted — ${c}. We'll send enrollment details.`)} />
      </main>
      <div className={`toast ${toast ? "show" : ""}`}>
        <span className="seal dev">ॐ</span>{toast}
      </div>
    </>
  );
}
