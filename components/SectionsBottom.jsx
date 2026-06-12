'use client';

import { SVData } from '../lib/data';
import { Reveal, Rule, SectionHead, Icon, Social } from './SharedComponents';

/* ---------------- EXPERIENCE BANNER (Home) ---------------- */
export function ExperienceBanner() {
  return (
    <section className="section section--dark" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-deep) 100%)", color: "white", padding: "80px 0" }}>
      <div className="shell">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>ॐ</div>
            <h3 style={{ color: "white", marginBottom: "12px" }}>A Sanātana Experience</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Sacred rituals performed with devotion and precision. Homas, poojas, and ceremonies that honor your family's milestones and deepen your spiritual connection to dharma.</p>
            <a href="/services" style={{ display: "inline-block", marginTop: "24px", padding: "12px 32px", background: "white", color: "var(--primary)", textDecoration: "none", borderRadius: "var(--radius)", fontWeight: 500 }}>Explore Services {Icon.arrow()}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- LEARN BANNER (Home) ---------------- */
export function LearnBanner() {
  return (
    <section className="section section--light" style={{ background: "var(--bg-light)", padding: "80px 0" }}>
      <div className="shell">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>ज्ञान</div>
            <h3 style={{ marginBottom: "12px" }}>Sanātana Learning</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Live and recorded classes that bring ancient wisdom to life. Learn from knowledgeable teachers in a supportive community where questions are welcomed and understanding deepens.</p>
            <a href="/classes" style={{ display: "inline-block", marginTop: "24px", padding: "12px 32px", background: "var(--primary)", color: "white", textDecoration: "none", borderRadius: "var(--radius)", fontWeight: 500 }}>Explore Classes {Icon.arrow()}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- GROW BANNER (Home) ---------------- */
export function GrowBanner() {
  return (
    <section className="section section--dark" style={{ background: "linear-gradient(135deg, var(--feature-membership) 0%, #1a5f46 100%)", color: "white", padding: "80px 0" }}>
      <div className="shell">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>विकास</div>
            <h3 style={{ color: "white", marginBottom: "12px" }}>Sanātana Growth</h3>
            <p style={{ fontSize: "18px", lineHeight: "1.6" }}>Guidance for every stage of life — from childhood to elderhood. Personal spiritual direction, astrological insight, and counseling rooted in dharmic principles to help you flourish.</p>
            <a href="/grow" style={{ display: "inline-block", marginTop: "24px", padding: "12px 32px", background: "white", color: "var(--feature-membership)", textDecoration: "none", borderRadius: "var(--radius)", fontWeight: 500 }}>Explore Growth Services {Icon.arrow()}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- OFFERINGS BANNER (Home) ---------------- */
export function OfferingsBanner() {
  return (
    <section className="section section--light" style={{ background: "var(--bg-light)", padding: "60px 0" }}>
      <div className="shell">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "8px" }}>MEMBERS SAVE MORE</p>
            <h3 style={{ marginBottom: "16px" }}>Discover Your Member Benefits</h3>
            <p style={{ fontSize: "16px", marginBottom: "24px", maxWidth: "600px", margin: "0 auto 24px" }}>Get 20-30% off services, priority booking, exclusive classes, and personalized guidance.</p>
            <a href="/offerings" style={{ display: "inline-block", padding: "12px 32px", background: "var(--primary)", color: "white", textDecoration: "none", borderRadius: "var(--radius)", fontWeight: 500 }}>Learn More {Icon.arrow()}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CLASSES PREVIEW (Home) ---------------- */
export function ClassesPreview() {
  return (
    <section className="section section--cream weave" id="classes">
      <div className="shell">
        <Reveal>
          <SectionHead dev="ज्ञान" kicker="Learn"
            title="Learn the Wisdom of Sanātana Dharma"
            sub="Live and recorded classes for every age and stage — taught by knowledgeable teachers in a warm, welcoming setting." />
        </Reveal>
        <div className="learn-grid" style={{ marginBottom: "40px" }}>
          {SVData.classes.slice(0, 4).map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 70} className="card learn-card" as="article">
              <div className="learn-thumb">
                <span className="lvl">{c.level}</span>
                <span className="glyph dev">{c.glyph}</span>
              </div>
              <div className="learn-body">
                <h4><span className="dev" style={{ display: "block", fontSize: "13px", color: "var(--gold-deep)", fontWeight: 400 }}>{c.dev}</span>{c.name}</h4>
                <p>{c.desc}</p>
                <div className="learn-meta">
                  <span>{Icon.clock()} {c.cadence}</span>
                  <span>{Icon.layers()} {c.level}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="learn-cta" as="div" style={{ textAlign: "center" }}>
          <a href="/classes" className="btn btn--primary">Explore All Classes {Icon.arrow()}</a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- GROWTH PREVIEW (Home) ---------------- */
export function GrowthPreview() {
  return (
    <section className="section section--beige weave" id="grow">
      <div className="bloom" style={{ bottom: "-200px", left: "-180px" }}></div>
      <div className="shell">
        <Reveal>
          <SectionHead center dev="विकास" kicker="Grow"
            title="Spiritual Growth for Every Stage of Life"
            sub="Compassionate, personal guidance to help you and your family flourish in spirit and in community." />
        </Reveal>
        <div className="grow-grid" style={{ marginBottom: "40px" }}>
          {SVData.grow.slice(0, 3).map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 80} className="card grow-card" as="article">
              <div className="grow-icon dev">{g.glyph}</div>
              <h4>{g.name}</h4>
              <p>{g.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="grow-cta" as="div" style={{ textAlign: "center" }}>
          <a href="/grow" className="btn btn--primary">Explore Growth Services {Icon.arrow()}</a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- LEARN (Full Page) ---------------- */
export function Learn({ onJoin }) {
  return (
    <section className="section section--cream weave" id="classes">
      <div className="shell">
        <Reveal>
          <SectionHead dev="ज्ञान" kicker="Learn"
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
                <h4><span className="dev" style={{ display: "block", fontSize: "13px", color: "var(--gold-deep)", fontWeight: 400 }}>{c.dev}</span>{c.name}</h4>
                <p>{c.desc}</p>
                <div className="learn-meta">
                  <span>{Icon.clock()} {c.cadence}</span>
                  <span>{Icon.layers()} {c.level}</span>
                </div>
                <button className="btn btn--ghost btn--sm" onClick={() => onJoin(c.name)}>Join Class {Icon.arrow()}</button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GROW (Full Page) ---------------- */
export function Grow() {
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

/* ---------------- MEMBERSHIP ---------------- */
export function Membership({ onJoin }) {
  return (
    <section className="section feature weave" id="membership">
      <div className="bloom" style={{ top: "-160px", right: "-140px", opacity: "calc(var(--pattern-opacity) * 2.4)" }}></div>
      <div className="shell">
        <Reveal>
          <SectionHead center dev="संघ" kicker="Membership"
            title="Become Part of the Sanātana Vṛkṣa Community"
            sub="Members receive access to spiritual classes, community programs, event updates, sacred resources, and guided learning opportunities." />
        </Reveal>
        <div className="tiers">
          {SVData.tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className={`tier ${t.featured ? "featured" : ""}`} as="article">
              {t.featured ? <span className="ribbon">Most Loved</span> : null}
              <span className="tier-name dev">{t.dev}</span>
              <h3>{t.name}{t.name === "Vṛkṣa Patron" ? "" : " Member"}</h3>
              <div className="tier-price"><b>{t.price}</b><span>{t.per}</span></div>
              <ul>{t.benefits.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <button className={`btn ${t.featured ? "btn--gold" : "btn--light"}`} onClick={() => onJoin(t.name)}>
                Join {t.name}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING PREVIEW ---------------- */
export function BookingPreview({ onBook }) {
  return (
    <section className="section section--cream weave" id="booking">
      <div className="shell">
        <Reveal>
          <SectionHead center dev="संकल्प" kicker="How Booking Works"
            title="Five Simple Steps to a Sacred Booking"
            sub="From choosing your service to receiving confirmation — a calm, guided experience." />
        </Reveal>
        <div className="steps">
          {SVData.steps.map((s, i) => (
            <Reveal key={i} delay={i * 90} className="step" as="div">
              <div className="step-dot dev">{s.glyph}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="booking-cta" as="div">
          <button className="btn btn--primary" onClick={() => onBook(null)}>Begin Your Booking {Icon.arrow()}</button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- DONATION ---------------- */
export function Donation({ onDonate }) {
  return (
    <section className="section donate weave" id="donate">
      <div className="bloom" style={{ top: "-180px", left: "50%", transform: "translateX(-50%)", opacity: "calc(var(--pattern-opacity) * 2.2)" }}></div>
      <div className="shell">
        <Reveal><div style={{ display: "flex", justifyContent: "center" }}><Rule /></div></Reveal>
        <Reveal delay={60}>
          <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}><span className="dev">दान</span>Support Our Mission</span>
          <h2>Support Dharma, Education, and Community</h2>
          <p>Your support helps preserve sacred traditions, offer spiritual education, and serve families with devotion. Sanātana Vṛkṣa is a community-supported, nonprofit effort.</p>
        </Reveal>
        <Reveal delay={120} className="donate-actions" as="div">
          <button className="btn btn--gold" onClick={onDonate}>{Icon.heart()} Donate Now</button>
          <button className="btn btn--light" onClick={onDonate}>Other Ways to Give</button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer({ onJump, onBook }) {
  const go = (id) => (e) => { e.preventDefault(); onJump(id); };
  const goExternal = (page) => (e) => { e.preventDefault(); window.location.href = page; };
  const cols = [
    { h: "Services", links: [["Homas", "homas"], ["Poojas", "poojas"], ["Samskaras", "samskaras"], ["Specialized", "poojas"]] },
    { h: "Learn & Grow", links: [["Classes", "/classes", "ext"], ["Yoga & Meditation", "/classes", "ext"], ["Counseling", "/grow", "ext"], ["Astrology", "/grow", "ext"]] },
    { h: "Community", links: [["About Us", "/about", "ext"], ["Membership", "/membership", "ext"], ["Our Offerings", "/offerings", "ext"], ["Donate", "donate"]] },
  ];
  return (
    <footer className="footer weave" id="contact">
      <div className="bloom" style={{ bottom: "-260px", right: "-160px", opacity: "calc(var(--pattern-opacity) * 2)" }}></div>
      <div className="shell">
        <div className="footer-top">
          <div>
            <div className="brand" style={{ marginBottom: "4px" }}>
              <span className="brand-mark">
                <img src="/assets/logo.png" alt="Sanātana Vṛkṣa" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </span>
              <span className="brand-text"><span className="brand-name">Sanātana Vṛkṣa</span></span>
            </div>
            <p className="footer-blurb">The eternal tree of dharma — where families experience sacred rituals, learn timeless wisdom, and grow in spirit.</p>
            <div className="footer-mantra"><span>Experience</span><b></b><span>Learn</span><b></b><span>Grow</span></div>
            <div className="footer-social">
              <a href="#contact" aria-label="Instagram" onClick={(e) => e.preventDefault()}>{Social.ig()}</a>
              <a href="#contact" aria-label="YouTube" onClick={(e) => e.preventDefault()}>{Social.yt()}</a>
              <a href="#contact" aria-label="Facebook" onClick={(e) => e.preventDefault()}>{Social.fb()}</a>
              <a href="#contact" aria-label="WhatsApp" onClick={(e) => e.preventDefault()}>{Social.wa()}</a>
            </div>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.h}>
              <h5>{c.h}</h5>
              {c.links.map(([l, id, isExt]) => {
                if (isExt === "ext") {
                  return <a key={l} href={id} onClick={goExternal(id)}>{l}</a>;
                }
                return <a key={l} href={`#${id}`} onClick={go(id)}>{l}</a>;
              })}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sanātana Vṛkṣa. Preserving tradition with devotion.</span>
          <span style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onBook(null); }}>Book a Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
