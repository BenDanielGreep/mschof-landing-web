import Link from "next/link";
import Image from "next/image";

import portraitTwo from "@/public/3.jpg";
import forest from "@/public/4.jpg";
import stage from "@/public/5.jpg";

export const metadata = { title: "About | MSchoF Bass" };

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col px-4 items-center">
          <h1 className="text-6xl font-semibold my-8 whitespace-nowrap lg:whitespace-normal">
            About
          </h1>
          <hr className="w-full h-px bg-neutral-400/60 dark:bg-neutral-600/60 border-0" />
          <div className="prose prose-neutral dark:prose-invert max-w-none mt-8 text-md leading-relaxed space-y-6">
            <p>
              Marianne is a founder member of the ground-breaking quartet The
              Hermes Experiment, one of the UK’s leading young contemporary
              music ensembles and winners of the Royal Philharmonic Society
              Young Artist Award in 2021. Described by The Arts Desk as “the
              cool kids of the contemporary music school”, The Hermes Experiment
              reimagine the concert experience with their idiosyncratic line-up
              of harp, clarinet, voice and double bass. Their collaborative
              ethos drives a dynamic programme of over 60 new commissions to
              date, alongside bold arrangements and electrifying free
              improvisation. They have released two albums, HERE WE ARE and
              SONG, to critical acclaim and the group’s third album with
              Delphian Records, TREE, will be released in October 2025. The
              Hermes Experiment’s recent and upcoming collaborations include
              projects with Abel Selaocoe, Kit Downes, Sofia Jernberg and Misha
              Mullov-Abbado, and performances at venues including Wigmore Hall,
              The Barbican, Kings Place and De Doolen, Rotterdam.
            </p>
            <p>
              Marianne has been an artistic board member of the contemporary
              collective Riot Ensemble since 2019. Winners of the Ernst von
              Siemens Ensemble Prize, this internationally renowned ‘supergroup
              of top soloists playing new music’ (The Guardian) is dedicated to
              the creation, exploration and presentation of great contemporary
              works and new music yet to be discovered. As a passionate exponent
              of the double bass in contemporary settings, Marianne has given
              the premières of many new solo works for her instrument through
              her work with this ensemble, including at Wigmore Hall, Kings
              Place, and Folkestone New Music, as well as solo performances at
              European festivals including Festspillene i Nord-Norge (Arctic
              Arts Festival, Norway), and MaerzMusik, at the Berliner
              Festspiele.
            </p>
            <p>
              Marianne is a dedicated chamber musician and has performed with
              groups including the Solem Quartet, Haffner Wind Ensemble, the
              Gould Piano Trio, Her Ensemble, GBSR duo, 12 Ensemble, Manchester
              Collective, United Strings of Europe, as well as performances and
              recordings with musicians Ayanna Witter-Johnson, Abel Selaocoe,
              Max Baillie, Héloïse Werner, Katie Bray, Louise McMonagle and
              Clare O’Connell. An experienced orchestral player, Marianne works
              regularly with a number of UK chamber and symphony orchestras,
              including the Academy of St Martin in the Fields, Aurora
              Orchestra, BBC Symphony Orchestra, City of London Sinfonia,
              English Chamber Orchestra, London Mozart Players, London Symphony
              Orchestra, Royal Philharmonic Orchestra and Sinfonia of London.
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
              Marianne studied at the Royal Academy of Music and the University
              of Cambridge, and is a graduate of the Hallé/RNCM String
              Leadership Scheme. She is grateful to the Cambridge Bursary
              Scheme, the Headley Trust and the Greenbank Scholarship for
              supporting her studies.
            </p>
          </div>
          {/* fat rounded black button with white text */}
          <div className="flex flex-col justify-content-center items-center">
            <Link
              href="/listen"
              className="btn btn-dark mt-6 bg-black text-white rounded-xl px-6 py-3 inline-block w-fit hover:bg-gray-800"
            >
              Listen
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-16 items-start">
          <Image
            src={portraitTwo}
            alt="Double bassist Marianne Schofield"
            priority
            className="w-full h-auto rounded-4xl object-cover"
          />
          <Image
            src={forest}
            alt="Double bassist Marianne Schofield"
            priority
            className="w-full h-auto rounded-4xl object-cover hidden lg:block"
          />
          <Image
            src={stage}
            alt="Double bassist Marianne Schofield"
            priority
            className="w-full h-auto rounded-4xl object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
