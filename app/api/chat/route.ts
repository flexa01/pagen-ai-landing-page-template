import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Hem senin yazdığın hem de sistemin istediği ismi kontrol eder
const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_GENERATED_AI_API_KEY;

const google = createGoogleGenerativeAI({
  apiKey: apiKey,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  if (!apiKey) {
    return new Response("API Anahtarı bulunamadı! Lütfen Vercel ayarlarını kontrol edin.", { status: 500 });
  }

  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    messages,
    maxTokens: 400, // Play Store kota koruması [cite: 2026-02-01]
  });

  return result.toDataStreamResponse();
}
