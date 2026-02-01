import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  // Buradaki tırnak içine gerçek API Key'ini yapıştır (AIza... ile başlayan)
  apiKey: "AIzaSyCOH6FhiqJ5CTHtfl5VGhbDG1EqECQe9cU", 
});

export const maxDuration = 30; // Vercel süre sınırı

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    messages,
    maxTokens: 400, // Play Store kota koruması [cite: 2026-02-01]
  });

  return result.toDataStreamResponse();
}
