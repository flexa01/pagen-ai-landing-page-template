import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // 'google' fonksiyonunu boş çağırıp modeli içinde belirtmek v1beta hatasını çözer
    model: google('gemini-1.5-flash'), 
    messages,
    // Play Store'da çok izlenirsen faturanı koruyacak olan 400 token sınırı [cite: 2026-02-01]
    maxTokens: 400, 
  });

  return result.toDataStreamResponse();
}
