import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // İsmi 'models/gemini-1.5-flash' olarak tam yazıyoruz, v1beta hatasını böyle aşabiliriz
    model: google('models/gemini-1.5-flash'), 
    messages,
    // Play Store'da çok izlenirsen faturanı koruyacak olan o meşhur sınır [cite: 2026-02-01]
    maxTokens: 400, 
  });

  return result.toDataStreamResponse();
}
