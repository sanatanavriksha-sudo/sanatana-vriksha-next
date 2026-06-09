'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Reveal, SectionHead, Wordmark } from '@/components/SharedComponents';

function AboutNav() {
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

function MissionVision() {
  return (
    <section className="section section--cream weave" id="mission">
      <div className="shell">
        <Reveal>
          <SectionHead center dev="उद्देश्य" kicker="Foundation"
            title="Our Mission & Vision"
            sub="Grounded in timeless wisdom, guided by clear purpose." />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", marginTop: "60px" }}>
          <Reveal className="card" as="article" delay={0}>
            <div style={{ fontSize: "48px", marginBottom: "16px", color: "var(--primary)" }}>ॐ</div>
            <h4>Our Mission</h4>
            <p>To preserve and share the profound teachings of Sanātana Dharma with families in a warm, inclusive community. We honor ancestral traditions while making spiritual practices accessible and meaningful for modern life.</p>
          </Reveal>
          <Reveal className="card" as="article" delay={80}>
            <div style={{ fontSize: "48px", marginBottom: "16px", color: "var(--primary)" }}>🌳</div>
            <h4>Our Vision</h4>
            <p>To become a sacred sanctuary where spiritual seekers of all ages grow in wisdom, experience authentic rituals, and strengthen their connection to eternal dharma. A tree that shelters, nourishes, and helps each family flourish.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PriestBios() {
  const priests = [
    { name: "Priest Name", title: "Chief Priest", desc: "Ordained priest with 20+ years of experience in Vedic rituals and temple ceremonies. Specializes in Homas and sacred abhiṣekas.", img: "🕉️" },
    { name: "Priest Name", title: "Associate Priest", desc: "Devoted to family celebrations and samskaras. Brings warmth and clarity to every ritual occasion.", img: "🔔" },
  ];

  return (
    <section className="section section--beige weave" id="priests">
      <div className="shell">
        <Reveal>
          <SectionHead center={false} dev="पुरोहित" kicker="Leadership"
            title="Our Priests & Teachers"
            sub="Devoted guides rooted in tradition and compassion." />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" }}>
          {priests.map((p, i) => (
            <Reveal key={p.name} className="card" as="article" delay={i * 80}>
              <div style={{ fontSize: "64px", marginBottom: "16px", textAlign: "center" }}>{p.img}</div>
              <h4 style={{ marginBottom: "4px" }}>{p.name}</h4>
              <p style={{ fontSize: "14px", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "12px" }}>{p.title}</p>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoardBios() {
  const board = [
    { name: "Board Member Name", role: "Founder & President", bio: "Dedicated to building a thriving spiritual community rooted in authentic dharma." },
    { name: "Board Member Name", role: "Treasurer", bio: "Ensures our mission is sustained with integrity and wise stewardship." },
    { name: "Board Member Name", role: "Education Director", bio: "Curates meaningful learning experiences for families at every stage." },
  ];

  return (
    <section className="section section--cream weave" id="board">
      <div className="shell">
        <Reveal>
          <SectionHead center dev="समिति" kicker="Governance"
            title="Board of Directors"
            sub="A committed team serving the spiritual growth of our community." />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", marginTop: "60px" }}>
          {board.map((m, i) => (
            <Reveal key={m.name} className="card" as="article" delay={i * 80}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--primary)", opacity: 0.2, marginBottom: "16px" }}></div>
              <h4 style={{ marginBottom: "4px" }}>{m.name}</h4>
              <p style={{ fontSize: "14px", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "12px" }}>{m.role}</p>
              <p>{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add("cards-bordered");
    return () => document.body.classList.remove("cards-bordered");
  }, []);

  return (
    <>
      <AboutNav />
      <main style={{ paddingTop: "74px" }}>
        <MissionVision />
        <PriestBios />
        <BoardBios />
      </main>
    </>
  );
}
