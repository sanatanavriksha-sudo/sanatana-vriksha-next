'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Reveal, SectionHead, Wordmark } from '@/components/SharedComponents';

function OfferingsNav() {
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

function OfferingsHero() {
  return (
    <section className="section section--cream weave" id="hero">
      <div className="shell">
        <Reveal>
          <SectionHead center dev="मूल्य" kicker="Value"
            title="Exceptional Benefits of Membership"
            sub="Join our community and access exclusive opportunities, discounts, and spiritual support year-round." />
        </Reveal>
      </div>
    </section>
  );
}

function OfferingsGrid() {
  const benefits = [
    { title: "Discounted Services", icon: "💳", desc: "20-30% off all homas, poojas, and rituals. Significant savings on family celebrations." },
    { title: "Priority Booking", icon: "📅", desc: "Reserve your preferred dates first. Never miss out on important ceremony dates." },
    { title: "Exclusive Classes", icon: "📚", desc: "Access members-only advanced scripture classes and workshops." },
    { title: "Community Support", icon: "🤝", desc: "Connect with families on the same spiritual journey. Monthly member gatherings and events." },
    { title: "Personal Guidance", icon: "🙏", desc: "Private consultations with priests and teachers. Personalized spiritual direction for your family." },
    { title: "Early Event Access", icon: "⏰", desc: "First to know about new programs, special ceremonies, and celebrations before public announcement." },
  ];

  return (
    <section className="section section--beige weave" id="benefits">
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
          {benefits.map((b, i) => (
            <Reveal key={b.title} className="card" as="article" delay={i * 60}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OfferingsPage() {
  useEffect(() => {
    document.body.classList.add("cards-bordered");
    return () => document.body.classList.remove("cards-bordered");
  }, []);

  return (
    <>
      <OfferingsNav />
      <main style={{ paddingTop: "74px" }}>
        <OfferingsHero />
        <OfferingsGrid />
      </main>
    </>
  );
}
