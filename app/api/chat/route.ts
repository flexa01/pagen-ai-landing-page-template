import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'),
      messages,
      maxTokens: 400, // Play Store koruman burada [cite: 2026-02-01]
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    // Hata olursa tam mesajı döndürür, böylece kökten çözeriz
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
