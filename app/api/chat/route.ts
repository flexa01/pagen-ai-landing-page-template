import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // 'google' fonksiyonunu doğrudan çağırmak sürüm hatasını çözer
    model: google('gemini-1.5-flash'), 
    messages,
    maxTokens: 400, // Play Store kota korumanız için sınır [cite: 2026-02-01]
  });

  return result.toDataStreamResponse();
}
