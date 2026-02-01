import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Vercel işlem süresi sınırı
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // Sürüm hatasını aşmak için model ismini bu şekilde çağırıyoruz
    model: google('gemini-1.5-flash'), 
    messages,
    // Play Store kota korumanız için koyduğumuz 400 token sınırı [cite: 2026-02-01]
    maxTokens: 400, 
  });

  return result.toDataStreamResponse();
}
