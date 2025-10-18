"use client";
import { useEffect, useState } from "react";

// Possible themes (system removed, default to light)
const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function applyTheme(pref: string) {
  const root = document.documentElement;
  root.setAttribute("data-theme", pref);
  if (pref === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function ThemeToggle({
  inline = false,
  showTitle = true,
}: {
  inline?: boolean;
  showTitle?: boolean;
}) {
  const [value, setValue] = useState<string>("light");

  // Load saved theme
  useEffect(() => {
    const stored = localStorage.getItem("theme-pref") as string | null;
    if (stored === "dark" || stored === "light") {
      setValue(stored);
      applyTheme(stored);
    } else {
      applyTheme("light");
    }
  }, []);

  function onChange(next: string) {
    setValue(next);
    localStorage.setItem("theme-pref", next);
    applyTheme(next);
  }

  return (
    <div className={inline ? "flex items-center gap-2" : "mt-4 px-6 pb-6"}>
      {showTitle && (
        <label className="block text-xs uppercase tracking-wide mb-2 opacity-70">
          Theme
        </label>
      )}
      <div className="flex gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`rounded-lg border px-3 py-1 text-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60 border-[var(--surface-border)]/70 bg-[var(--surface)]/80 backdrop-blur-sm hover:brightness-105 dark:hover:brightness-125 ${
              value === o.value
                ? "font-semibold shadow-inner ring-1 ring-[var(--accent)]/50"
                : "opacity-80"
            }`}
            aria-pressed={value === o.value}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
