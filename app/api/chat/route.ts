import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  // Tırnak işaretleri arasına Google AI Studio'dan aldığın anahtarı direkt yapıştır
  apiKey: "BURAYA_GERCEK_API_KEYINI_YAPISTIR", 
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    messages,
    maxTokens: 400, // Play Store kotanı korur [cite: 2026-02-01]
  });

  return result.toDataStreamResponse();
}
