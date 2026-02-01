"use client";

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #3b1cff33, transparent 60%), linear-gradient(180deg, #070b16, #0a0f24)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        paddingBottom: "100px" // Chat kutusu için boşluk
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

      {/* CHAT AREA (Yeni Eklenen Bölüm) */}
      <section style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ 
          background: "rgba(255,255,255,0.03)", 
          borderRadius: "20px", 
          padding: "20px",
          border: "1px border rgba(255,255,255,0.1)",
          minHeight: "200px"
        }}>
          {messages.length === 0 && (
            <p style={{ textAlign: "center", opacity: 0.5 }}>Henüz bir mesaj yok. Denemek için aşağıya yazın!</p>
          )}
          {messages.map(m => (
            <div key={m.id} style={{ marginBottom: "15px", textAlign: m.role === 'user' ? 'right' : 'left' }}>
              <div style={{ 
                display: "inline-block", 
                padding: "10px 16px", 
                borderRadius: "15px", 
                background: m.role === 'user' ? "#5b2cff" : "rgba(255,255,255,0.1)",
                maxWidth: "80%"
              }}>
                <strong>{m.role === 'user' ? 'Siz: ' : 'Zyloft: '}</strong>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && <p style={{ opacity: 0.5, fontSize: "14px" }}>Zyloft yanıt yazıyor...</p>}
        </div>
      </section>

      {/* ABOUT, FEATURES vb. Eski bölümlerin devamı */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>What is Zyloft AI?</h2>
        <p style={{ fontSize: "18px", opacity: 0.8, lineHeight: 1.6 }}>
          Zyloft AI is a fast, lightweight and privacy-focused artificial
          intelligence assistant...
        </p>
      </section>

      {/* SABİT CHAT GİRİŞİ (Play Store Koruma Limitli) */}
      <div style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "20px",
        background: "rgba(7, 11, 22, 0.9)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)"
      }}>
        <form 
          onSubmit={handleSubmit} 
          style={{ maxWidth: "800px", margin: "0 auto", display: "flex", gap: "10px" }}
        >
          <input
            style={{
              flex: 1,
              padding: "12px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              outline: "none"
            }}
            value={input}
            placeholder="Mesajınızı yazın... (Limit: 500 karakter)"
            onChange={handleInputChange}
            maxLength={500} // PLAY STORE KORUMASI: Giriş seviyesinde sınırlama [cite: 2026-02-01]
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: "12px 24px",
              borderRadius: "999px",
              border: "none",
              background: "linear-gradient(90deg, #5b2cff, #00b3ff)",
              color: "white",
              cursor: "pointer",
              opacity: isLoading ? 0.5 : 1
            }}
          >
            Gönder
          </button>
        </form>
      </div>
    </main>
  );
}
