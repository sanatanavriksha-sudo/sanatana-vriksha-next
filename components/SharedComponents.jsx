'use client';

import { useState, useEffect, useRef } from 'react';

/* Reveal-on-scroll wrapper */
export function Reveal({ children, delay = 0, as = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.92) { setShown(true); return; }
    let done = false;
    const reveal = () => { if (!done) { done = true; setShown(true); io && io.disconnect(); } };
    const io = typeof IntersectionObserver !== "undefined" ?
      new IntersectionObserver(([e]) => { if (e.isIntersecting) reveal(); },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }) :
      null;
    if (io) io.observe(el); else reveal();
    const timer = setTimeout(reveal, 1600);
    return () => { clearTimeout(timer); io && io.disconnect(); };
  }, []);
  const Tag = as;
  useEffect(() => {
    if (!shown) return;
    const el = ref.current;
    const t = setTimeout(() => { if (el) el.style.transition = "none"; }, 950);
    return () => clearTimeout(t);
  }, [shown]);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }} {...rest}>
      {children}
    </Tag>
  );
}

/* Temple-rule divider */
export function Rule() {
  return <div className="rule"><i></i><b></b><i></i></div>;
}

/* Section eyebrow + heading */
export function SectionHead({ dev, kicker, title, sub, center }) {
  return (
    <div className={`sec-head ${center ? "center" : ""}`}>
      <span className="eyebrow">{dev ? <span className="dev">{dev}</span> : null}{kicker}</span>
      <h2>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

/* Labeled placeholder photo slot */
export function Slot({ label, caption, className = "", style }) {
  return (
    <div className={`slot ${className}`} data-label={label} style={style}>
      {caption ? <div className="slot-cap">{caption}</div> : null}
    </div>
  );
}

/* Brand wordmark */
export function Wordmark({ onClick }) {
  return (
    <a href="#home" className="brand" onClick={onClick} aria-label="Sanātana Vṛkṣa home">
      <span className="brand-mark">
        <img src="/assets/logo.png" alt="Sanātana Vṛkṣa" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </span>
      <span className="brand-text">
        <span className="brand-name">Sanātana Vṛikṣa</span>
        <span className="brand-tag">Experience · Learn · Grow</span>
      </span>
    </a>
  );
}

/* Inline icons */
export const Icon = {
  search: (p) => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  arrow:  (p) => <svg className="arw" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  clock:  (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  layers: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>,
  heart:  (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21C6 16.5 3 13 3 9a4.5 4.5 0 018-2.8A4.5 4.5 0 0121 9c0 4-3 7.5-9 12z" /></svg>,
  check:  (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6L9 17l-5-5" /></svg>,
};

/* Social icons */
export const Social = {
  ig: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
  yt: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" /></svg>,
  fb: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M15 8h-2a2 2 0 00-2 2v12M8 13h6" strokeLinecap="round" /></svg>,
  wa: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M3 21l1.8-5A8 8 0 1112 20a8 8 0 01-4-1L3 21z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
};
