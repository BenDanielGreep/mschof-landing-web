import { Nav } from "./Nav";
import Link from "next/link";

// Simple site header: brand on left, nav on right.
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)] bg-[var(--surface)] border-b border-[var(--surface-border)]/80">
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center px-4 md:px-12">
        <Link
          href="/"
          className="font-semibold tracking-tight mr-auto flex flex-col"
        >
          <span className="text-2xl">Marianne Schofield</span>
          <span className="text-sm opacity-80">
            Double bassist and composer
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
