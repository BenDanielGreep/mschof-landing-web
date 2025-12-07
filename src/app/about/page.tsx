import Link from "next/link";
import Image from "next/image";

import portraitTwo from "@/public/3.jpg";
import forest from "@/public/4.jpg";
import stage from "@/public/5.jpg";

export const metadata = { title: "About | Marianne Schofield Bass" };

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col px-4 items-center">
          <h1 className="text-6xl font-semibold my-8 whitespace-nowrap lg:whitespace-normal">
            About
          </h1>
          <hr className="w-full h-px border-0 bg-[var(--surface-border)]/60" />
          <div className="prose prose-neutral dark:prose-invert max-w-none mt-8 text-md leading-relaxed space-y-6">
            <p>
              Marianne is a founder member of the ground-breaking quartet{" "}
              <a
                href="https://www.thehermesexperiment.com/"
                className="underline"
              >
                The Hermes Experiment
              </a>
              , one of the UK&#39;s leading young contemporary music ensembles
              and winners of the Royal Philharmonic Society Young Artist Award
              in 2021. Formed of harp, clarinet, voice and double bass, the
              group’s collaborative ethos drives a dynamic programme of over 60
              new commissions to date, alongside bold arrangements, electrifying
              free improvisation and music written by members of the group. The
              Hermes Experiment have released three albums on Delphian Records
              to critical acclaim; their most recent album, TREE, received a{" "}
              <a
                href="https://www.theguardian.com/music/2025/oct/09/the-hermes-experiment-tree-album-review"
                className="underline"
              >
                5 Star Review in The Guardian
              </a>{" "}
              (Oct. 2025). The group&apos;s recent and upcoming collaborations
              include projects with Abel Selaocoe, Kit Downes, Sofia Jernberg
              and Misha Mullov-Abbado, and performances at venues including
              Wigmore Hall, Kings Place, the Barbican, and De Doelen, Rotterdam.
            </p>
            <blockquote className="border-l-4 pl-4 italic border-[var(--surface-border)]/70">
              <p className="">
                &#39;Schofield is also behind a gorgeous version of Les
                Rossignols by Élisabeth Jacquet de la Guerre, initially halting
                and ethereal, then coalescing into something approaching its
                17th-century original.’{" "}
                <footer className="mt-1 text-sm not-italic font-medium  dark:text-neutral-400">
                  Erica Jeal, Review of TREE by The Hermes Experiment, The
                  Guardian, October 2025
                </footer>
              </p>
            </blockquote>
            <p>
              Marianne has been an artistic board member and double bass player
              of the contemporary collective{" "}
              <a href="https://www.riotensemble.com/" className="underline">
                Riot Ensemble
              </a>{" "}
              since 2019; this &lsquo;supergroup of top soloists playing new
              music&rsquo; (The Guardian) won the prestigious Ernst Von Siemens
              Ensemble Prize in 2020. Marianne has given the premières of many
              new solo works for double bass through her involvement with this
              ensemble, including solo performances at Wigmore Hall, Kings
              Place, and Folkestone New Music, as well as at European festivals
              including Festspillene i Nord-Norge (Arctic Arts Festival,
              Norway), and MaerzMusik at the Berliner Festspiele. She and fellow
              artistic board member, cellist Louise McMonagle, also have a new
              cello and double bass duo project, Living Floors, for which Riot
              Ensemble recently supported new commissions from composers Bára
              Gísladóttir and Trish Clowes.
            </p>
            <p>
              Marianne is a dedicated chamber musician and has performed with
              groups including the Solem Quartet, Haffner Wind Ensemble, the
              Gould Piano Trio, Her Ensemble, GBSR duo, 12 Ensemble, Manchester
              Collective, United Strings of Europe, as well as collaborations
              with musicians including Ayanna Witter-Johnson, Abel Selaocoe, Max
              Baillie, Héloïse Werner, David Le Page, Katie Bray, Clare
              O’Connell and Hayden Thorpe. An experienced orchestral player,
              Marianne works regularly with a number of UK chamber and symphony
              orchestras, including the Academy of St Martin in the Fields,
              Aurora Orchestra, BBC Symphony Orchestra, City of London Sinfonia,
              English Chamber Orchestra, English National Opera, London Mozart
              Players, London Symphony Orchestra, London Philharmonic Orchestra,
              Royal Philharmonic Orchestra, and Sinfonia of London.
            </p>
            <p>
              As an arranger and composer, Marianne recently wrote a piece for
              Scottish Ensemble and Héloïse Werner to perform in June 2025; a
              contemporary ‘reimagining’ for string orchestra and voice of a
              recitative and air from ‘Les Printemps Cantatille’ by the Baroque
              composer Julie Pinel. Marianne also made a bespoke arrangement for
              string trio and voice of another song from the same collection of
              works by Julie Pinel, ‘Sombres Lieux’, for Héloïse Werner’s second
              album, ‘close-ups’; this was described by Gramophone Magazine as
              ‘a hauntingly beautiful arrangement’ in which ‘time appears to
              stand still’. Marianne has arranged music extensively for The
              Hermes Experiment, including works by Lili Boulanger, Cécile
              Chaminade, Elizabeth Jacquet de la Guerre, Anna Meredith, and
              Olivia Chaney, and has also written an original song for the
              group, ‘Islands’, appearing on their third album, TREE. Upcoming
              composition projects for late 2025 include a spatial work for
              organ, voice and The Hermes Experiment, a cello and bass duo for a
              collaboration with cellist Louise McMonagle, as well as set of
              unaccompanied double bass miniatures.
            </p>
            <p>
              <blockquote className="border-l-4 pl-4 italic border-[var(--surface-border)]/70">
                <p className="">
                  &#39;Time appears to stand still during these points,
                  especially in Julie Pinel’s Sombres Lieux, in a hauntingly
                  beautiful arrangement made by Werner’s longtime musical
                  collaborator and fellow performer, virtuoso double bassist
                  Marianne Schofield’
                </p>
                <footer className="mt-1 text-sm not-italic font-medium  dark:text-neutral-400">
                  Pwyll ap Siôn, Gramophone Magazine August 2024
                </footer>
              </blockquote>
            </p>
            <p>
              Marianne is increasingly active as an arranger and composer.{" "}
              <Link href="/works" className="underline">
                Recent projects
              </Link>{" "}
              have included a new work for Scottish Ensemble and Héloïse Werner
              to tour in June 2025: a contemporary ‘reimagining’ for string
              orchestra and voice of a recitative and air from ‘Les Printemps
              Cantatille’ by the Baroque composer Julie Pinel. Marianne had also
              made another Pinel arrangement of a song from the same collection
              for Héloïse Werner’s second album, close-ups; this version of
              ‘Sombres Lieux’ for voice and string trio was described by
              Gramophone Magazine as ‘a hauntingly beautiful arrangement’ in
              which ‘time appears to stand still’. Marianne has arranged music
              extensively for The Hermes Experiment over the last ten years,
              including works by Lili Boulanger, Cécile Chaminade, Elizabeth
              Jacquet de la Guerre, Anna Meredith, and Olivia Chaney, and has
              also written an original song for the group, ‘Islands’, appearing
              on their third album, TREE. Recent composition projects for late
              2025 include two spatial works for organ, voice and The Hermes
              Experiment, a cello and bass duo for a collaboration with cellist
              Louise McMonagle, ‘Inter Ligna’, as well as a set of unaccompanied
              double bass miniatures.
            </p>
            <p>
              Marianne studied at the Royal Academy of Music and the University
              of Cambridge, and is a graduate of the Hallé/RNCM String
              Leadership Scheme. She is grateful to the Cambridge Bursary
              Scheme, the Headley Trust and the Greenbank Scholarship for
              supporting her studies.
            </p>
            <p className="italic">
              (Please do not reproduce without permission; use the contact form
              if you require a biography)
            </p>
          </div>
          <div className="flex flex-col justify-content-center items-center">
            <Link
              href="/listen"
              className="mt-6 inline-flex items-center justify-center rounded-xl font-medium px-6 py-3 bg-[var(--btn-bg)] text-[var(--btn-fg)] border border-[var(--btn-border)] hover:bg-[var(--btn-bg-hover)] transition shadow"
            >
              Listen
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-16 items-start">
          <div>
            <Image
              src={portraitTwo}
              alt="Double bassist Marianne Schofield"
              priority
              className="w-full h-auto rounded-4xl object-cover"
            />
            <p className="text-sm text-gray-500 mt-1">Photo by Raphael Neal</p>
          </div>
          <div>
            <Image
              src={forest}
              alt="Double bassist Marianne Schofield"
              priority
              className="w-full h-auto rounded-4xl object-cover hidden lg:block"
            />
            <p className="text-sm text-gray-500 mt-1 hidden lg:block">
              Photo by Raphael Neal
            </p>
          </div>
          <div>
            <Image
              src={stage}
              alt="Double bassist Marianne Schofield"
              priority
              className="w-full h-auto rounded-4xl object-cover hidden lg:block"
            />
            <p className="text-sm text-gray-500 mt-1 hidden lg:block">
              Photo by Matthew Johnson
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
