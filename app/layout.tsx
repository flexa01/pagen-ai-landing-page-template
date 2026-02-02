import type { Metadata } from "next";
import "./globals.css";

// Yeni marka ismimizi ve vizyonumuzu buraya işledik [cite: 2026-02-01]
export const metadata: Metadata = {
  title: "TICK._ Protocol",
  description: "Ultra-lightweight task management protocol with gamified rewards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
