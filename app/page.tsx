'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Nav, Hero, About } from '@/components/SectionsTop';
import {
  ExperienceBanner,
  LearnBanner,
  GrowBanner,
  OfferingsBanner,
  Donation,
  Footer,
} from '@/components/SectionsBottom';
import { BookingModal, DonateModal } from '@/components/Modals';

const SCROLL_IDS = ["home", "about", "services", "classes", "donate", "contact"];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 90;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 4) cur = "contact";
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

export default function HomePage() {
  const [booking, setBooking] = useState<{ service: string } | null>(null);
  const [donate, setDonate] = useState(false);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<number | null>(null);

  const active = useScrollSpy(SCROLL_IDS);

  // Apply default card style so CSS card variants work correctly.
  useEffect(() => {
    document.body.classList.add('cards-bordered');
    return () => document.body.classList.remove('cards-bordered');
  }, []);

  const jump = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (id === "home" ? 0 : 64);
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current !== null) clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 3800);
  }, []);

  const openBook = useCallback((service: string | null) => {
    setBooking({ service: service ?? "" });
  }, []);

  return (
    <>
      <Nav active={active} onJump={jump} onBook={openBook} />
      <main>
        <Hero onJump={jump} onBook={openBook} />
        <About />
        <ExperienceBanner />
        <LearnBanner />
        <GrowBanner />
        <OfferingsBanner />
        <Donation onDonate={() => setDonate(true)} />
        <Footer onJump={jump} onBook={openBook} />
      </main>

      {booking && (
        <BookingModal
          initialService={booking.service}
          onClose={() => setBooking(null)}
          onToast={showToast}
        />
      )}
      {donate && (
        <DonateModal
          onClose={() => setDonate(false)}
          onToast={showToast}
        />
      )}

      <div className={`toast ${toast ? "show" : ""}`}>
        <span className="seal dev">ॐ</span>{toast}
      </div>
    </>
  );
}
