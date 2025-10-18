import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marianne Schofield",
  description:
    "Official website of Marianne Schofield, a professional bass player, composer, arranger, and improviser based in London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} antialiased min-h-screen flex flex-col font-serif`}
      >
        <Header />
        <main className="flex-1 w-full">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8 py-8">
            {children}
          </div>
        </main>
        <footer className="mt-auto w-full border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-neutral-500">
            <p>© 2025 Marianne Schofield. All rights reserved.</p>
            <p>Designed by Ben Daniel-Greep</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
