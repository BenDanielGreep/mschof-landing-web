"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

import bass from "@/public/bass.png";

export default function ContactPage() {
  return (
    <div className="mx-auto flex flex-col items-center md:flex-row gap-12">
      <div className="w-full sm:w-3/4 md:w-1/2">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-semibold my-8">Contact Form</h1>
        </div>
        <hr className="w-full h-px border-0 bg-[var(--surface-border)]/60 mb-12" />
        <ContactForm />
      </div>
      <div className="md:w-1/2">
        <Image
          src={bass}
          alt="picture of double bass"
          priority
          className="w-full h-auto rounded-4xl object-cover"
        />
        <p className="text-sm text-gray-500 mt-1">Photo by Emma Werner</p>
      </div>
    </div>
  );
}
