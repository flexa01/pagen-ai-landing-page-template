import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TICK._ Protocol",
  description: "Ultra-lightweight task protocol with gamified rewards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
