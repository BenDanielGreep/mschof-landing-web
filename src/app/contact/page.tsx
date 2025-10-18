"use client";

import { useState } from "react";

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold my-8">Contact Form</h1>
      </div>
      <hr className="w-full h-px bg-neutral-400/60 dark:bg-neutral-600/60 border-0 mb-12" />{" "}
      <ContactForm />
    </div>
  );
}
