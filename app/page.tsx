export const runtime = "edge";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0b0f1a, #1a0f3c, #001b33)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Zyloft AI
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.85, marginBottom: "32px" }}>
          Hafif, hızlı ve odaklı yapay zeka asistanı
        </p>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "16px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(90deg, #5b2cff, #00b3ff)",
            color: "white",
          }}
        >
          Yakında Google Play’de
        </button>
      </div>
    </main>
  );
}

