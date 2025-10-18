"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderPanel, setRenderPanel] = useState(false);
  const [closing, setClosing] = useState(false);

  // Track latest open in a ref so we can use a stable dependency array for route changes
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Close menu on route change using stable dependency list (only pathname)
  useEffect(() => {
    if (openRef.current) {
      startClose();
    }
  }, [pathname]);

  function startOpen() {
    setRenderPanel(true);
    // slight next tick to allow initial translate class to apply
    requestAnimationFrame(() => setOpen(true));
    // add blur class to body
    document.body.classList.add("app-blurred");
  }

  function startClose() {
    setClosing(true);
    setOpen(false);
    setTimeout(() => {
      setClosing(false);
      setRenderPanel(false);
      document.body.classList.remove("app-blurred");
    }, 220); // duration must match transition
  }
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collaborations", label: "Collaborations" },
    { href: "/works", label: "Works" },
    { href: "/listen", label: "Listen" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav aria-label="Main navigation" className="relative">
      {/* Mobile toggle button */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => {
          if (renderPanel && open) {
            startClose();
          } else {
            startOpen();
          }
        }}
        className="flex h-10 w-10 items-center justify-center rounded lg:hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/60"
      >
        <span className="sr-only">Menu</span>
        <div className="relative w-8 h-6">
          <span
            className={`absolute left-0 top-[4px] h-0.5 w-8 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[12px] h-0.5 w-8 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[20px] h-0.5 w-8 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Desktop menu */}
      <ul className="hidden lg:flex h-14 items-center gap-6 text-sm font-medium">
        {links.map((l) => {
          const active = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-14 text-lg items-center px-3 cursor-pointer transition-colors hover:text-black dark:hover:text-white ${
                  active
                    ? "text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:h-0.25 after:w-full after:bg-black dark:after:bg-white"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* mobile menu panel */}
      {renderPanel && (
        <div
          id="mobile-nav-panel"
          className={`lg:hidden fixed left-0 right-0 top-24 bottom-0 h-full transition duration-300  will-change-transform will-change-opacity ${
            open && !closing
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <ul className="m-0 p-0 list-none h-auto w-full flex flex-col bg-[var(--background)]">
            {links.map((l) => (
              <li key={l.href} className="flex">
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="flex-1 px-6 py-4 text-4xl leading-tight"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
