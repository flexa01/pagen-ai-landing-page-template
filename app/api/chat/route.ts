export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = await fetch(
      // Bu sefer hem v1 hem v1beta'da çalışan en stabil modeli çağırıyoruz
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_GENERATIVE_AI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: lastMessage }] }],
          generationConfig: { 
            maxOutputTokens: 400 // Play Store'da fatura şişmesini engelleyen sigortan [cite: 2026-02-01]
          }
        })
      }
    );

    const data = await response.json();
    
    if (data.error) {
       return new Response(`Hata: ${data.error.message}`, { status: 500 });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap yok.";
    return new Response(text);
  } catch (error) {
    return new Response("Sistem Hatası", { status: 500 });
  }
}
