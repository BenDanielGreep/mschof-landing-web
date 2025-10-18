import { Nav } from "./Nav";
import Link from "next/link";

// Simple site header: brand on left, nav on right.
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40 border-b border-neutral-200 dark:border-neutral-700">
      <div className="mx-auto flex h-24 w-full max-w-6xl items-center px-4 md:px-12">
        <Link
          href="/"
          className="font-semibold tracking-tight text-xl md:text-base mr-auto flex flex-col"
        >
          <span className="text-2xl">Marianne Schofield</span>
          <span className="hidden lg:block">Double bassist and composer</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
