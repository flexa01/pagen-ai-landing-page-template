export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) return new Response("Hata: API Key Yok", { status: 500 });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: lastMessage }] }],
          generationConfig: { maxOutputTokens: 400 } // Play Store bütçe sigortan [cite: 2026-02-01]
        })
      }
    );

    const data = await response.json();
    if (data.error) return new Response(`Google: ${data.error.message}`, { status: 500 });

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap gelmedi.";
    return new Response(text);
  } catch (err) {
    return new Response("Kod Hatası", { status: 500 });
  }
}
