"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const trap = (
      e.currentTarget.querySelector("input[name='website']") as HTMLInputElement
    ).value;
    if (trap) {
      setStatus("error");
      setError("Spam detected.");
      return;
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "01f83a3e-ede8-4c40-9601-11c60fbf4794",
          ...formData,
          subject: "New website contact",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setError(data.message || "Submission failed.");
      }
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String((err as { message?: unknown }).message)
          : "Network error.";
      setStatus("error");
      setError(message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-describedby={error ? "contact-error" : undefined}
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          placeholder="Your name"
          className="w-full rounded-md border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          minLength={10}
          placeholder="Write your message..."
          className="w-full rounded-md border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-2 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          loading={status === "submitting"}
          disabled={status === "submitting"}
          variant="primary"
          size="md"
          className="mt-6"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
        {status === "success" && (
          <span
            className="text-green-600 dark:text-green-400 text-sm"
            role="status"
          >
            Sent! Thank you.
          </span>
        )}
        {status === "error" && error && (
          <span
            id="contact-error"
            className="text-red-600 dark:text-red-400 text-sm"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    </form>
  );
}
