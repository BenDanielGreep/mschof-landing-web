import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";

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
  // Server-render with light theme attribute to match client default
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          // Inline script to prevent theme flash (defaults to light)
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var d=document.documentElement;var pref=localStorage.getItem('theme-pref');if(pref==='dark'){d.setAttribute('data-theme','dark');d.classList.add('dark');}else{d.setAttribute('data-theme','light');d.classList.remove('dark');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body
        className={`${sourceSerif.variable} antialiased min-h-screen flex flex-col font-serif`}
      >
        <Header />
        <main className="flex-1 w-full">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-8 py-8">
            {children}
          </div>
        </main>
        <footer className="mt-auto w-full border-t flex justify-content-between border-[var(--surface-border)]/60">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs ">
            <p>© 2025 Marianne Schofield. All rights reserved.</p>
            <p>Designed by Ben Daniel-Greep</p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <label className="block text-xs uppercase tracking-wide mb-2 opacity-70">
              Theme:
            </label>
            <ThemeToggle showTitle={false} />
          </div>
        </footer>
      </body>
    </html>
  );
}
