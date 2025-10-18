export const metadata = { title: "Works | MSchoF Bass" };

export default function WorksPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold my-8 ">
          List of compositions and arrangements
        </h1>
      </div>
      <hr className="w-full h-px border-0 bg-[var(--surface-border)]/60 mb-8" />
      <ul className="space-y-8 text-md leading-relaxed list-none">
        <li>
          Air and Recitative from <i>Les Printemps Cantatille</i> by Julie Pinel
          (2025 arr. for string orchestra and soprano voice), 8’ <br />
          <i>
            Commissioned and performed by Scottish Ensemble and Héloïse Werner
            in June 2025.
          </i>
        </li>
        <li className="space-y-3">
          <div>
            ‘Sombres Lieux’ by Julie Pinel (2024 arr. for soprano, viola, cello,
            and double bass) <br />{" "}
            <i>
              Performed and recorded by Héloïse Werner, Max Baillie, Colin
              Alexander and Marianne Schofield; features on Werner’s album
              ‘close-ups’.
            </i>
          </div>
          <blockquote className="border-l-4 pl-4 italic border-[var(--surface-border)]/70 text-[color:oklch(32%_0.02_50)] dark:text-[color:oklch(80%_0.02_50)]">
            <p className="m-0">
              “Time appears to stand still during these points… in a hauntingly
              beautiful arrangement…”
            </p>
            <footer className="mt-1 text-sm not-italic font-medium text-neutral-600 dark:text-neutral-400">
              Pwyll ap Siôn, Gramophone Magazine (Aug 2024)
            </footer>
          </blockquote>
        </li>
        <h2 className="text-2xl mt-16 mb-12 underline">
          For The Hermes Experiment (soprano, clarinet, harp, double bass)
        </h2>
        <li>‘Islands’ (2024, original composition)</li>
        <li>
          ‘Les Rossignols’ (2022 arrangement of a song by Elizabeth Jacquet de
          la Guerre)
        </li>
        <li>
          Movement 1 from Water Music Suite 3 by G. F. Handel (arr. 2022 for
          harp, clarinet, double bass)
        </li>
        <li>
          ‘La Lune Paresseuse’ (2021 arrangement of a song by Cécile Chaminade)
        </li>
        <li>
          ‘Ma Première Lettre’ (2021 arrangement of a song by Cécile Chaminade)
        </li>
        <li>‘Roman Holiday’ (2021 arrangement of a song by Olivia Chaney)</li>
        <li>‘Attente’ (2020 arrangement of a song by Lili Boulanger)</li>
        <li>‘Reflets’ (2020 arrangement of a song by Lili Boulanger)</li>
        <li>
          ‘Fin like a Flower’ (2019 arrangement of a song by Anna Meredith)
        </li>
        <li>
          Visions Fugitives op. 22 nos. 1, 7, 8, 16 by Sergei Prokofiev (arr.
          2018 for harp, clarinet, double bass)
        </li>
        <li>‘Fantoches’ (2017 arrangement of a work by Claude Debussy)</li>
        <li>
          ‘Riguadon’ from <i>Le Tombeau de Couperin</i> by Maurice Ravel (arr.
          2018 for harp, clarinet, double bass)
        </li>
      </ul>
    </div>
  );
}
