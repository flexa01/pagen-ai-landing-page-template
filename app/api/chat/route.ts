export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_GENERATIVE_AI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: lastMessage }] }],
          generationConfig: { 
            maxOutputTokens: 400 // Play Store'da fatura şişmesini engelleyen sınırın [cite: 2026-02-01]
          }
        })
      }
    );

    const data = await response.json();
    
    // Eğer Google tarafında bir hata varsa bunu loglarda görelim
    if (data.error) {
      console.error("Google API Hatası:", data.error);
      return new Response(JSON.stringify({ error: data.error.message }), { status: 500 });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap üretilemedi.";
    return new Response(text);
  } catch (error) {
    console.error("Sunucu Hatası:", error);
    return new Response(JSON.stringify({ error: "İstek işlenemedi" }), { status: 500 });
  }
}
