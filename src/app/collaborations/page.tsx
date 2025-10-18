import Image from "next/image";

export const metadata = { title: "Collaborations | MSchoF Bass" };

import hermes from "@/public/hermes.jpg";
import riot from "@/public/riot.png";

export default function CollaborationsPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold my-8">Collaborations</h1>
      </div>
      <hr className="w-full h-px border-0 bg-[var(--surface-border)]/60 mb-12" />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex md:w-1/2 flex-col items-start">
          <a href="https://www.riotensemble.com/" className="w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={riot}
                alt="Riot Ensemble"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </a>
          <a href="https://www.riotensemble.com/">
            <h2 className="text-xl font-semibold mt-2">Riot Ensemble</h2>
          </a>
        </div>
        <div className="flex md:w-1/2 flex-col items-start">
          <a href="https://www.thehermesexperiment.com/" className="w-full">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={hermes}
                alt="The Hermes Experiment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </a>
          <a href="https://www.thehermesexperiment.com/">
            <h2 className="text-xl font-semibold mt-2">Hermes Experiment</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
