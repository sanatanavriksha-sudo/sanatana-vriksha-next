export default function PaymentSuccessPage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--cream)",
      fontFamily: "var(--font-body)",
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: "520px", width: "100%", textAlign: "center" }}>

        <div style={{
          width: "72px", height: "72px", borderRadius: "50%",
          background: "var(--green)", display: "flex",
          alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <div className="dev" style={{ fontSize: "18px", color: "var(--gold-deep)", marginBottom: "12px" }}>
          सर्वं मङ्गलम्
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(26px, 4vw, 36px)",
          fontWeight: 500,
          color: "var(--ink)",
          marginBottom: "16px",
        }}>
          Booking Confirmed
        </h1>

        <p style={{
          color: "var(--ink-soft)",
          fontSize: "16px",
          lineHeight: "1.7",
          marginBottom: "36px",
        }}>
          Your payment was received. A confirmation and preparation guide will be
          sent to your email. Our priest will reach out to finalise the details of
          your sacred service.
        </p>

        <a href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 28px",
          background: "var(--primary)",
          color: "var(--cream-hi)",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "15px",
        }}>
          Return to Home
        </a>

        <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--ink-faint)" }}>
          Questions? Reach us at{" "}
          <a href="mailto:info@sanatana-vriksha.com"
            style={{ color: "var(--primary)", textDecoration: "underline" }}>
            info@sanatana-vriksha.com
          </a>
        </p>

      </div>
    </main>
  );
}
