export default function PaymentCancelledPage() {
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
          background: "var(--beige-deep)", display: "flex",
          alignItems: "center", justifyContent: "center",
          margin: "0 auto 28px",
          border: "2px solid var(--line-gold)",
        }}>
          <span style={{ fontSize: "28px", lineHeight: 1 }}>ॐ</span>
        </div>

        <div className="dev" style={{ fontSize: "18px", color: "var(--gold-deep)", marginBottom: "12px" }}>
          कोई समस्या नहीं
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(26px, 4vw, 36px)",
          fontWeight: 500,
          color: "var(--ink)",
          marginBottom: "16px",
        }}>
          Payment Cancelled
        </h1>

        <p style={{
          color: "var(--ink-soft)",
          fontSize: "16px",
          lineHeight: "1.7",
          marginBottom: "36px",
        }}>
          No charge was made. You can return to our Services page whenever you are
          ready to book, or reach out to us directly with any questions.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/services" style={{
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
            Browse Services
          </a>

          <a href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            background: "transparent",
            color: "var(--primary)",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
            border: "1px solid var(--line-gold)",
          }}>
            Return to Home
          </a>
        </div>

        <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--ink-faint)" }}>
          Need help?{" "}
          <a href="mailto:info@sanatana-vriksha.com"
            style={{ color: "var(--primary)", textDecoration: "underline" }}>
            Contact us
          </a>
        </p>

      </div>
    </main>
  );
}
