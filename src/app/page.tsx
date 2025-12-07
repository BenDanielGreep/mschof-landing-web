import Image from "next/image";

import mainImage from "@/public/1.jpg";
import portrait from "@/public/2.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-0 sm:py-8 flex flex-col gap-14">
      <div className="w-full items-start hidden md:block">
        <Image
          src={mainImage}
          alt="Double bassist Marianne Schofield"
          priority
          className="w-full h-auto rounded-sm object-cover"
        />
        <p className="text-sm text-gray-500 mt-1">Photo by Kohki Watanabe</p>
      </div>
      <hr className="hidden sm:block w-full h-px border-0 bg-[var(--surface-border)]/60" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left: Image (50%) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <Image
            src={portrait}
            alt="Double bassist Marianne Schofield"
            priority
            className="w-full h-auto rounded-4xl object-cover"
          />
          <p className="text-sm text-gray-500 mt-1">Photo by Raphael Neal</p>
        </div>
        {/* Right: Text (50%) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold mb-4 whitespace-nowrap lg:whitespace-normal">
            Marianne Schofield
          </h1>
          <p className="text-lg leading-relaxed">
            Known for her creativity and versatility, Marianne Schofield is a
            double bass player, improviser, composer and arranger based in
            London. Marianne’s dynamic musical life encompasses classical,
            contemporary and experimental music, and ranges from solo, chamber,
            and orchestral playing to writing and collaborative music creation.
            She is a founder member of the ground-breaking and critically
            acclaimed contemporary quartet The Hermes Experiment, and is an
            artistic board member of the award-winning contemporary collective,
            Riot Ensemble.
          </p>
          {/* fat rounded black button with white text */}
          <div className="flex flex-col justify-content-center items-center">
            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center rounded-xl font-medium px-6 py-3 bg-[var(--btn-bg)] text-[var(--btn-fg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] transition shadow"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
