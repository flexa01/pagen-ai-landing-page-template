import type { Metadata } from "next";
import "./globals.css";

// Başlık ve açıklama yeni marka kimliğine göre güncellendi [cite: 2026-02-01]
export const metadata: Metadata = {
  title: "TICK._ Protocol",
  description: "Ultra-lightweight task management protocol with gamified rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
