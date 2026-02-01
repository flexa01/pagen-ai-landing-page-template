export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;
    
    // Vercel'deki Environment Variables'dan anahtarı çekiyoruz
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // API Key kontrolü - Eğer boşsa hatayı net bir şekilde verir
    if (!apiKey) {
      return new Response("Hata: Vercel'de API Key tanımlı değil!", { status: 500 });
    }

    // Google'ın en güncel ve uyumlu beta kapısını çalıyoruz
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: lastMessage }] }],
          generationConfig: { 
            // Play Store'da yüksek gösterim (impression) alırsan bütçeni koruyacak limit [cite: 2026-02-01]
            maxOutputTokens: 400 
          }
        })
      }
    );

    const data = await response.json();
    
    // Google tarafında bir sorun (404, 401 vb.) olursa detayını döndürür
    if (data.error) {
       return new Response(`Google Mesajı: ${data.error.message}`, { status: 500 });
    }

    // Cevabı başarılı şekilde alırsak ekrana yazdırır
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap üretilemedi.";
    return new Response(text);

  } catch (error) {
    // Kodun içinde bir yazım yanlışı veya teknik hata olursa burası çalışır
    return new Response(`Kod Patladı: ${error.message}`, { status: 500 });
  }
}
