"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #3b1cff33, transparent 60%), linear-gradient(180deg, #070b16, #0a0f24)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ padding: "120px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Zyloft AI
        </h1>
        <p style={{ fontSize: "20px", opacity: 0.85 }}>
          Lightweight intelligence for everyday tasks
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          What is Zyloft AI?
        </h2>
        <p style={{ fontSize: "18px", opacity: 0.8, lineHeight: 1.6 }}>
          Zyloft AI is a fast, lightweight and privacy-focused artificial
          intelligence assistant designed to work smoothly on both web and
          mobile devices without heavy system usage.
        </p>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px", textAlign: "center" }}>
          Core Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            ["⚡ Fast & Lightweight", "Runs smoothly even on low-end devices"],
            ["🔒 Privacy First", "No unnecessary data collection"],
            ["🤖 Smart Responses", "AI-powered helpful answers"],
            ["📱 Mobile Ready", "Designed for Android and web"],
          ].map(([title, desc]) => (
            <div
              key={title}
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 style={{ marginBottom: "8px" }}>{title}</h3>
              <p style={{ opacity: 0.8 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "32px" }}>
          How It Works
        </h2>
        <ol style={{ fontSize: "18px", opacity: 0.85, lineHeight: 2 }}>
          <li>Ask your question</li>
          <li>Zyloft AI processes it intelligently</li>
          <li>Get fast and accurate responses</li>
        </ol>
      </section>

      {/* PLATFORM */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Available Platforms
        </h2>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Web · Android (Google Play – Coming Soon)
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background:
            "linear-gradient(90deg, rgba(90,44,255,0.2), rgba(0,179,255,0.2))",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Be ready for Zyloft AI
        </h2>
        <button
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(90deg, #5b2cff, #00b3ff)",
            color: "white",
          }}
        >
          Coming Soon on Google Play
        </button>
      </section>
    </main>
  );
}
