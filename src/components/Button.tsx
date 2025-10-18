"use client";
import React from "react";
// Simple class merge utility (avoid external dependency)
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: "text-xs px-3 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-6 py-4",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/60 disabled:opacity-55 disabled:cursor-not-allowed";

  const variantClasses =
    variant === "primary"
      ? "bg-[var(--btn-bg)] text-[var(--btn-fg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] shadow"
      : "border border-[var(--btn-outline-border)] bg-[var(--btn-outline-bg)] text-[var(--btn-outline-fg)] hover:bg-[var(--btn-outline-fg)] hover:text-[var(--btn-bg)]";

  return (
    <button
      className={cx(base, variantClasses, sizeClasses[size], className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
}
