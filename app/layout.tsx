import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/portfolio/Header";
import { PixelCursor } from "@/components/ui/PixelCursor";
import { PixelNoise } from "@/components/ui/PixelNoise";

const bodoniModa = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "../assets/fonts/bodoni-moda/bodoni-moda-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/bodoni-moda/bodoni-moda-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/bodoni-moda/bodoni-moda-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

const inter = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../assets/fonts/inter/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/inter/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/inter/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Akshaya — Portfolio",
  description: "Personal portfolio of Akshaya.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-black)] text-[color:var(--color-ink-on-black)]">
        <PixelNoise />
        <PixelCursor />
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
