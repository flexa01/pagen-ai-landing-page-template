import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// PLAY STORE KORUMASI: Sitenin aşırı yüklenmesini önlemek için 
// işlem süresini 30 saniye ile sınırlandırıyoruz.
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // LIMIT KONTROLÜ (İleride buraya IP bazlı hız sınırı ekleyeceğiz)
  // Şimdilik temel yapay zeka bağlantısını kuruyoruz.
  const result = await streamText({
    model: google('gemini-1.5-flash'), // Ücretsiz ve hızlı model
    messages,
    // PLAY STORE KORUMASI: Yapay zekanın çok uzun cevaplar verip 
    // kotanı bitirmesini engellemek için kelime sınırı koyuyoruz.
    maxTokens: 500, 
  });

  return result.toDataStreamResponse();
}
