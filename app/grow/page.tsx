'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SVData } from '@/lib/data';
import { Reveal, SectionHead, Wordmark } from '@/components/SharedComponents';

function GrowthNav() {
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

function GrowthFullGrid() {
  return (
    <section className="section section--beige weave" id="grow">
      <div className="bloom" style={{ bottom: "-200px", left: "-180px" }}></div>
      <div className="shell">
        <Reveal>
          <SectionHead center dev="विकास" kicker="Grow"
            title="Spiritual Growth for Every Stage of Life"
            sub="Compassionate, personal guidance to help you and your family flourish in spirit and in community." />
        </Reveal>
        <div className="grow-grid">
          {SVData.grow.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 80} className="card grow-card" as="article">
              <div className="grow-icon dev">{g.glyph}</div>
              <h4>{g.name}</h4>
              <p>{g.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GrowPage() {
  useEffect(() => {
    document.body.classList.add("cards-bordered");
    return () => document.body.classList.remove("cards-bordered");
  }, []);

  return (
    <>
      <GrowthNav />
      <main style={{ paddingTop: "74px" }}>
        <GrowthFullGrid />
      </main>
    </>
  );
}
