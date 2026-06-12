'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wordmark } from '@/components/SharedComponents';
import { Membership } from '@/components/SectionsBottom';

function MembershipNav() {
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
            <button
              className={`nav-burger ${open ? "open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu">
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

export default function MembershipPage() {
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
      <MembershipNav />
      <main style={{ paddingTop: "74px" }}>
        <Membership
          onJoin={(tier: string) =>
            showToast(`${tier} membership — coming soon. We'll let you know first.`)
          }
        />
      </main>
      <div className={`toast ${toast ? "show" : ""}`}>
        <span className="seal dev">ॐ</span>{toast}
      </div>
    </>
  );
}
