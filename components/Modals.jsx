'use client';

import { useState } from 'react';
import { SVData } from '../lib/data';
import { Icon } from './SharedComponents';

const ALL_SERVICES = () => [
  { group: "Homas", items: SVData.homas.map((x) => x.name) },
  { group: "Poojas & Specialized", items: SVData.poojas.map((x) => x.name) },
  { group: "Samskaras", items: SVData.samskaras.map((x) => x.name) },
];

const TIME_SLOTS = ["7:00 AM", "8:30 AM", "10:00 AM", "11:30 AM", "4:00 PM", "5:30 PM", "7:00 PM"];
const BUSY = new Set([2, 5]);

function Scrim({ children, onClose }) {
  return (
    <div className="modal-scrim" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      {children}
    </div>
  );
}

export function BookingModal({ initialService, onClose, onToast }) {
  const STEPS = ["Service", "Format", "Date & Time", "Details", "Confirm"];
  const [step, setStep] = useState(0);
  const [service, setService] = useState(initialService || "");
  const [mode, setMode] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const today = new Date().toISOString().split("T")[0];

  const valid = [
    !!service,
    !!mode,
    !!date && !!time,
    form.name.trim() && /\S+@\S+/.test(form.email),
    true,
  ];
  const next = () => { if (valid[step]) setStep((s) => Math.min(s + 1, STEPS.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const prettyDate = date ? new Date(date + "T00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) : "—";

  return (
    <Scrim onClose={onClose}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-hd">
          <div>
            <div className="dev">संकल्प · Book a Service</div>
            <h3>{step < 4 ? "Reserve Your Sacred Service" : "Booking Confirmed"}</h3>
          </div>
          <button className="modal-x" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {step < 4 && (
          <div className="prog">
            {STEPS.slice(0, 4).map((lbl, i) => (
              <div key={lbl} className={`prog-item ${i === step ? "active" : ""} ${i < step ? "done" : ""}`}>
                <span className="prog-num">{i < step ? "✓" : i + 1}</span>
                <span className="prog-lbl">{lbl}</span>
                {i < 3 && <span className="prog-line"></span>}
              </div>
            ))}
          </div>
        )}

        <div className="modal-body">
          {step === 0 && (
            <div className="field">
              <label>Which service would you like to book?</label>
              <select value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">Select a service…</option>
                {ALL_SERVICES().map((g) => (
                  <optgroup key={g.group} label={g.group}>
                    {g.items.map((n) => <option key={n} value={n}>{n}</option>)}
                  </optgroup>
                ))}
              </select>
              <p style={{ marginTop: "14px", fontSize: "14px", color: "var(--ink-soft)" }}>Our priests will reach out to confirm materials (samagri) and the saṅkalpa details after booking.</p>
            </div>
          )}

          {step === 1 && (
            <div className="opt-row">
              {[["online", "Online", "Join live via video — we guide your family through every step."],
                ["inperson", "In-Person", "Our priest performs the ritual at your home, venue, or temple."]].map(([v, t, d]) => (
                <button key={v} className={`opt ${mode === v ? "sel" : ""}`} onClick={() => setMode(v)}>
                  <span className="opt-glyph dev">{v === "online" ? "ॐ" : "गृ"}</span>
                  <b>{t}</b><span>{d}</span>
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="field">
                <label>Preferred date (muhūrta)</label>
                <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="field">
                <label>Available time slots</label>
                <div className="slot-grid">
                  {TIME_SLOTS.map((t, i) => (
                    <button key={t} className={`slot-pick ${time === t ? "sel" : ""}`} disabled={BUSY.has(i)} onClick={() => setTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="field"><label>Full name *</label><input value={form.name} onChange={set("name")} placeholder="Your name" /></div>
              <div className="field"><label>Email *</label><input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" /></div>
              <div className="field"><label>Phone</label><input value={form.phone} onChange={set("phone")} placeholder="(optional)" /></div>
              <div className="field"><label>Saṅkalpa & special intentions</label><textarea rows="3" value={form.notes} onChange={set("notes")} placeholder="Names, gotra, occasion, or any special requests…"></textarea></div>
            </div>
          )}

          {step === 4 && (
            <div className="confirm">
              <div className="confirm-seal dev">✓</div>
              <h3>Sarvaṁ Maṅgalam</h3>
              <p>Thank you, {form.name.split(" ")[0] || "friend"}. Your booking request has been received. A confirmation and preparation guide are on the way to your email.</p>
              <div className="confirm-recap">
                <div className="r"><span>Service</span><b>{service}</b></div>
                <div className="r"><span>Format</span><b>{mode === "online" ? "Online" : "In-Person"}</b></div>
                <div className="r"><span>Date & Time</span><b>{prettyDate} · {time}</b></div>
                <div className="r"><span>Confirmation</span><b>#SV-{Math.floor(1000 + Math.random() * 9000)}</b></div>
              </div>
            </div>
          )}
        </div>

        {step < 4 ? (
          <div className="modal-ft">
            <span className="summary">{service ? <>Booking: <b>{service}</b></> : "Step " + (step + 1) + " of 4"}</span>
            <div style={{ display: "flex", gap: "10px" }}>
              {step > 0 && <button className="btn btn--ghost btn--sm" onClick={back}>Back</button>}
              <button className="btn btn--primary btn--sm" disabled={!valid[step]}
                style={{ opacity: valid[step] ? 1 : .45 }}
                onClick={step === 3 ? () => { if (valid[3]) setStep(4); } : next}>
                {step === 3 ? "Confirm Booking" : "Continue"} {Icon.arrow()}
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-ft" style={{ justifyContent: "center" }}>
            <button className="btn btn--gold btn--sm" onClick={() => { onClose(); onToast("Booking confirmed — we'll be in touch soon."); }}>Done</button>
          </div>
        )}
      </div>
    </Scrim>
  );
}

export function DonateModal({ onClose, onToast }) {
  const [amt, setAmt] = useState(108);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState("once");
  const presets = [51, 108, 251, 501, 1008];
  const value = custom ? `$${custom}` : `$${amt}`;
  return (
    <Scrim onClose={onClose}>
      <div className="modal" role="dialog" aria-modal="true" style={{ maxWidth: "480px" }}>
        <div className="modal-hd">
          <div><div className="dev">दान · Seva</div><h3>Support Our Mission</h3></div>
          <button className="modal-x" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">
          <div className="freq">
            <button className={freq === "once" ? "on" : ""} onClick={() => setFreq("once")}>One-time</button>
            <button className={freq === "monthly" ? "on" : ""} onClick={() => setFreq("monthly")}>Monthly</button>
          </div>
          <div className="amt-grid">
            {presets.map((p) => (
              <button key={p} className={`amt ${!custom && amt === p ? "sel" : ""}`} onClick={() => { setAmt(p); setCustom(""); }}>${p}</button>
            ))}
            <button className={`amt ${custom ? "sel" : ""}`} onClick={() => setCustom(custom || "75")}>Other</button>
          </div>
          {custom !== "" && (
            <div className="field"><label>Custom amount (USD)</label><input type="number" min="1" value={custom} onChange={(e) => setCustom(e.target.value)} /></div>
          )}
          <p style={{ fontSize: "14px", color: "var(--ink-soft)" }}>Your {freq === "monthly" ? "monthly " : ""}gift of <b style={{ color: "var(--maroon)" }}>{value}</b> sustains free classes, community events, and seva for families in need.</p>
        </div>
        <div className="modal-ft" style={{ justifyContent: "flex-end" }}>
          <button className="btn btn--gold btn--sm" onClick={() => { onClose(); onToast(`Thank you for your seva — ${value}${freq === "monthly" ? "/mo" : ""}`); }}>{Icon.heart()} Donate {value}</button>
        </div>
      </div>
    </Scrim>
  );
}
