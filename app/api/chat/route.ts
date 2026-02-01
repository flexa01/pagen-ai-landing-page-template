import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Anahtarı doğrudan kontrol ederek tanımlıyoruz
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATED_AI_API_KEY,
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
