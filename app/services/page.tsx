'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { SVData } from '@/lib/data';
import { Reveal, SectionHead, Icon } from '@/components/SharedComponents';
import { BookingModal } from '@/components/Modals';

const CAT_MAP: Record<string, string> = {
  homas: "Homas",
  poojas: "Poojas",
  samskaras: "Samskaras",
  specialized: "Specialized",
};

type ServiceItem = {
  name: string;
  dev: string;
  glyph: string;
  img?: string;
  desc: string;
  price: string;
};

type CategoryInfo = {
  dev: string;
  kicker: string;
  title: string;
  sub: string;
  items: ServiceItem[];
  bg: string;
};

const CATEGORY_INFO: Record<string, CategoryInfo> = {
  homas: { dev: "अग्नि", kicker: "Homas", title: "Sacred Fire Rituals — Homas", sub: "Vedic fire ceremonies invoking divine energies for healing, protection, and prosperity.", items: SVData.homas, bg: "section--cream" },
  poojas: { dev: "अर्चना", kicker: "Poojas", title: "Devotional Worship — Poojas", sub: "Traditional deity worship and personalized services performed with mantras and devotion.", items: SVData.poojas, bg: "section--beige" },
  samskaras: { dev: "संस्कार", kicker: "Samskaras", title: "Life-Milestone Ceremonies — Samskaras", sub: "Family-centered Vedic rites that sanctify every sacred passage of life.", items: SVData.samskaras, bg: "section--cream" },
  specialized: { dev: "विशेष", kicker: "Specialized Services", title: "Specialized Poojas & Homas", sub: "Personalized spiritual services for specific needs, family occasions, guidance, and blessings.", items: SVData.specialized, bg: "section--beige" },
};

function ServicesNav({ activeCategory, onNavigate, onBook }: {
  activeCategory: string;
  onNavigate: (id: string) => void;
  onBook: (service: string | null) => void;
}) {
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
          <div className="brand" style={{ cursor: "pointer" }} onClick={() => router.push('/')}>
            <span className="brand-mark"><span className="dev">ॐ</span></span>
            <span className="brand-text"><span className="brand-name">Sanātana Vṛkṣa</span></span>
          </div>
          <nav className="nav-links">
            {Object.entries(CAT_MAP).map(([id, label]) => (
              <a key={id} href={`#${id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(id); }}
                className={`nav-link ${activeCategory === id ? "active" : ""}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <button className="btn btn--primary btn--sm btn--book" onClick={() => onBook(null)}>Book Now</button>
            <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`}>
        {Object.entries(CAT_MAP).map(([id, label]) => (
          <a key={id} href={`#${id}`}
            onClick={(e) => { e.preventDefault(); onNavigate(id); setOpen(false); }}>
            {label}
          </a>
        ))}
        <a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>Back to Home</a>
        <button className="btn btn--primary" onClick={() => { setOpen(false); onBook(null); }}>Book a Service</button>
      </div>
    </>
  );
}

function ServicesCategoryChooser({ activeCategory, onNavigate }: {
  activeCategory: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <section className="section section--beige weave" style={{ padding: "40px 0 32px" }}>
      <div className="shell">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px" }}>
          {SVData.categories.map((c) => (
            <div key={c.id} className="card" style={{ display: "flex", flexDirection: "column", padding: "24px 20px", textAlign: "center" }}>
              <div className="dev" style={{ fontSize: "28px", marginBottom: "10px", color: "var(--primary)" }}>{c.glyph}</div>
              <h4 style={{ marginBottom: "8px", fontSize: "16px" }}>{c.title}</h4>
              <p style={{ fontSize: "13px", marginBottom: "16px", lineHeight: "1.5", color: "var(--text-muted)", flex: 1 }}>{c.desc}</p>
              <button
                className={`btn btn--sm ${activeCategory === c.target ? "btn--primary" : "btn--ghost"}`}
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => onNavigate(c.target)}>
                View {c.title} <Icon.arrow />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceGrid({ id, dev, kicker, title, sub, items, bg, onBook }: {
  id: string;
  dev: string;
  kicker: string;
  title: string;
  sub: string;
  items: ServiceItem[];
  bg: string;
  onBook: (name: string) => void;
}) {
  const [q, setQ] = useState("");
  const [mode, setMode] = useState("all");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter((it) => (it.name + " " + (it.desc || "")).toLowerCase().includes(t));
  }, [q, items]);

  return (
    <section className={`section ${bg} weave`} id={id}>
      <div className="shell">
        <Reveal>
          <SectionHead dev={dev} kicker={kicker} title={title} sub={sub} center={false} />
        </Reveal>
        <Reveal delay={60} className="svc-toolbar" as="div">
          <div className="svc-search">
            <Icon.search />
            <input placeholder={`Search ${kicker.toLowerCase()}…`} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="svc-modes">
            {[["all", "All"], ["online", "Online"], ["inperson", "In-Person"]].map(([m, l]) => (
              <button key={m} className={mode === m ? "on" : ""} onClick={() => setMode(m)}>{l}</button>
            ))}
          </div>
        </Reveal>
        <div className="svc-grid">
          {filtered.length === 0 && <div className="svc-empty">No services match &ldquo;{q}&rdquo;. Try another word.</div>}
          {filtered.map((it, i) => (
            <Reveal key={it.name} delay={i % 3 * 70} className="card svc-card" as="article">
              <div className={`svc-thumb ${it.img ? "has-img" : ""}`}>
                {it.img ? <img src={it.img} alt={it.name} loading="lazy" /> : null}
                <span className="tag">
                  {id.slice(0, -1)} · {mode === "inperson" ? "in-person" : mode === "online" ? "online" : "online / in-person"}
                </span>
                {it.img ? null : <span className="glyph dev">{it.glyph}</span>}
              </div>
              <div className="svc-body">
                <h4><span className="dev">{it.dev}</span>{it.name}</h4>
                <p>{it.desc}</p>
                <div className="svc-foot">
                  <span className="svc-price">
                    {it.price.startsWith("from")
                      ? <>from <b>{it.price.replace("from ", "")}</b></>
                      : <b>{it.price}</b>}
                  </span>
                  <button className="btn btn--gold btn--sm" onClick={() => onBook(it.name)}>Book Now</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [booking, setBooking] = useState<{ service: string } | null>(null);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      return hash || "homas";
    }
    return "homas";
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveCategory(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.classList.add("cards-bordered");
    return () => document.body.classList.remove("cards-bordered");
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3800);
  }, []);

  const openBook = useCallback((service: string | null) => {
    setBooking({ service: service || "" });
  }, []);

  const current = CATEGORY_INFO[activeCategory] ?? CATEGORY_INFO.homas;

  return (
    <>
      <ServicesNav activeCategory={activeCategory} onNavigate={setActiveCategory} onBook={openBook} />
      <main style={{ paddingTop: "74px" }}>
        <ServicesCategoryChooser activeCategory={activeCategory} onNavigate={setActiveCategory} />
        <ServiceGrid
          id={activeCategory}
          bg={current.bg}
          dev={current.dev}
          kicker={current.kicker}
          title={current.title}
          sub={current.sub}
          items={current.items}
          onBook={openBook}
        />
      </main>
      {booking && (
        <BookingModal
          initialService={booking.service}
          onClose={() => setBooking(null)}
          onToast={showToast}
        />
      )}
      <div className={`toast ${toast ? "show" : ""}`}>
        <span className="seal dev">ॐ</span>{toast}
      </div>
    </>
  );
}
