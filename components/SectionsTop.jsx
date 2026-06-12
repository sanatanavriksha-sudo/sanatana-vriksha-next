'use client';

import { useState, useEffect, useMemo } from 'react';
import { SVData } from '../lib/data';
import { Reveal, Rule, SectionHead, Wordmark, Icon } from './SharedComponents';

/* ---------------- NAV ---------------- */
export function Nav({ active, onJump, onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const externalPages = { Classes: "/classes", Grow: "/grow", About: "/about", "Our Offerings": "/offerings", Membership: "/membership" };
  const map = { Home: "home", Services: "services", Donate: "donate", Contact: "contact" };
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); onJump(id); };
  const goExternal = (page) => (e) => { e.preventDefault(); setOpen(false); window.location.href = page; };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Wordmark onClick={go("home")} />
          <nav className="nav-links">
            {SVData.nav.map((label) => {
              if (externalPages[label]) {
                return (
                  <a key={label} href={externalPages[label]} onClick={goExternal(externalPages[label])}
                    className="nav-link">{label}</a>
                );
              }
              return (
                <a key={label} href={`#${map[label]}`} onClick={go(map[label])}
                  className={`nav-link ${active === map[label] ? "active" : ""}`}>{label}</a>
              );
            })}
          </nav>
          <div className="nav-cta">
            <button className="btn btn--primary btn--sm btn--book" onClick={() => onBook(null)}>Request a Ritual</button>
            <button className={`nav-burger ${open ? "open" : ""}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "open" : ""}`}>
        {SVData.nav.map((label) => {
          if (externalPages[label]) {
            return <a key={label} href={externalPages[label]} onClick={goExternal(externalPages[label])}>{label}</a>;
          }
          return <a key={label} href={`#${map[label]}`} onClick={go(map[label])}>{label}</a>;
        })}
        <button className="btn btn--primary" onClick={() => { setOpen(false); onBook(null); }}>Request a Ritual</button>
      </div>
    </>
  );
}

/* ---------------- HERO ---------------- */
export function Hero({ onJump, onBook }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="shell">
        <Reveal className="hero-ornament" as="div">
          <span className="ring"></span><span className="ring2"></span>
          <span className="om dev">ॐ</span>
        </Reveal>
        <Reveal delay={60}><div className="hero-dev dev">सनातन वृक्ष</div></Reveal>
        <Reveal delay={120}><h1>Sanātana <em>Vṛikṣa</em></h1></Reveal>
        <Reveal delay={180}>
          <div className="hero-mantra"><span>Experience</span><b></b><span>Learn</span><b></b><span>Grow</span></div>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-sub">Your daily companion for Sanātana Dharma — learn, practice, participate in sacred traditions, and bring dharma into everyday life.</p>
        </Reveal>
        <Reveal delay={300}>
          <div className="hero-actions">
            <button className="btn btn--primary" onClick={() => onBook(null)}>Explore Sacred Rituals {Icon.arrow()}</button>
            <button className="btn btn--ghost" onClick={() => onJump("classes")}>Explore Classes</button>
          </div>
        </Reveal>
      </div>
      <Reveal delay={120} className="hero-photo" as="div">
        <img src="/assets/hero-sacred-tree.jpg" alt="Sacred tree with bells and temples"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius)" }} />
      </Reveal>
      <div className="shell">
        <Reveal delay={160} className="hero-stats" as="div">
          {[["40+", "Sacred Services"], ["8", "Scripture Classes"], ["1000+", "Families Served"], ["ॐ", "Rooted in Dharma"]].map(([b, s], i) =>
            <div className="hero-stat" key={i}>
              <b className={b === "ॐ" ? "dev" : ""}>{b}</b><span>{s}</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section className="section section--cream weave" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <SectionHead dev="विद्या" kicker="About Sanātana Vṛkṣa"
                title="Rooted in Dharma. Growing Through Knowledge." />
            </Reveal>
            <Reveal delay={80}>
              <p className="lead">Sanātana Vṛkṣa is a spiritual and educational platform dedicated to preserving and sharing the wisdom of Sanātana Dharma. Through poojas, homas, samskaras, scripture classes, cultural learning, and spiritual guidance, we help individuals and families stay connected to tradition in a meaningful and accessible way.</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="about-pillars">
                <div className="about-pillar"><b>Experience</b><span>Sacred Rituals</span></div>
                <div className="about-pillar"><b>Learn</b><span>Timeless Wisdom</span></div>
                <div className="about-pillar"><b>Grow</b><span>In Spirit</span></div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ marginTop: "28px" }}>
                <a href="/about" className="btn btn--primary">Learn More About Us {Icon.arrow()}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="about-collage" as="div">
            <img src="/assets/about-collage-1.jpg" alt="Sacred tree with temple"
              style={{ objectFit: "cover", borderRadius: "var(--radius)", width: "236px", height: "213px" }} />
            <img src="/assets/about-collage-2.jpg" alt="Tree with bells and sacred space"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "var(--radius)" }} />
            <img src="/assets/about-collage-3.jpg" alt="Ancient tree with spiritual altar"
              style={{ height: "100%", objectFit: "cover", borderRadius: "var(--radius)", width: "236px" }} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE CATEGORIES ---------------- */
export function Categories({ onNavigate }) {
  return (
    <section className="section section--beige weave" id="services">
      <div className="bloom" style={{ top: "-180px", right: "-160px" }}></div>
      <div className="shell">
        <Reveal><div style={{ textAlign: "center", marginBottom: "6px" }}><Rule /></div></Reveal>
        <Reveal delay={60}>
          <SectionHead center dev="सेवा" kicker="Our Sacred Services"
            title="Four Pillars of Devotional Service"
            sub="Every ritual is performed by experienced priests with authentic procedure, mantras, and devotion — online or at your home." />
        </Reveal>
        <div className="cat-grid">
          {SVData.categories.map((c, i) =>
            <Reveal key={c.id} delay={i * 80} className="card cat-card" as="article">
              <span className="corner"></span>
              <div className="cat-icon dev">{c.glyph}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a className="cat-link" href={`/services#${c.target}`}
                onClick={(e) => { e.preventDefault(); onNavigate(c.target); }}>
                View Services {Icon.arrow()}
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE SERVICE GRID ---------------- */
export function ServiceGrid({ id, dev, kicker, title, sub, items, bg, onBook }) {
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
          <SectionHead dev={dev} kicker={kicker} title={title} sub={sub} />
        </Reveal>
        <Reveal delay={60} className="svc-toolbar" as="div">
          <div className="svc-search">
            {Icon.search()}
            <input placeholder={`Search ${kicker.toLowerCase()}…`} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div className="svc-modes">
            {[["all", "All"], ["online", "Online"], ["inperson", "In-Person"]].map(([m, l]) =>
              <button key={m} className={mode === m ? "on" : ""} onClick={() => setMode(m)}>{l}</button>
            )}
          </div>
        </Reveal>
        <div className="svc-grid">
          {filtered.length === 0 && <div className="svc-empty">No services match "{q}". Try another word.</div>}
          {filtered.map((it, i) =>
            <Reveal key={it.name} delay={i % 3 * 70} className="card svc-card" as="article">
              <div className={`svc-thumb ${it.img ? "has-img" : ""}`}>
                {it.img ? <img src={it.img} alt={it.name} loading="lazy" /> : null}
                <span className="tag">{id.slice(0, -1)} · {mode === "inperson" ? "in-person" : mode === "online" ? "online" : "online / in-person"}</span>
                {it.img ? null : <span className="glyph dev">{it.glyph}</span>}
              </div>
              <div className="svc-body">
                <h4><span className="dev">{it.dev}</span>{it.name}</h4>
                <p>{it.desc}</p>
                <div className="svc-foot">
                  <span className="svc-price">
                    {it.price.startsWith("from") ? <>from <b>{it.price.replace("from ", "")}</b></> : <b>{it.price}</b>}
                  </span>
                  <button className="btn btn--gold btn--sm" onClick={() => onBook(it.name)}>Book Now</button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
