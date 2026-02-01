export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;
    
    // Test için API anahtarını buraya tırnak içinde yapıştırabilirsin
    const apiKey = process.env.GROQ_API_KEY; 

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: lastMessage }],
        max_tokens: 400 // Play Store bütçe sigortan [cite: 2026-02-01]
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify({ text: data.choices[0].message.content }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
