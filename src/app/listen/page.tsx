export const metadata = { title: "Listen | MSchoF Bass" };

export default function ListenPage() {
  const items = [
    {
      type: "spotify",
      title: "The Linden Tree",
      subtitle: "Misha Mullov-Abbado, The Hermes Experiment",
      description: (
        <>
          From the album <em>Here we are</em> (2020)
        </>
      ),
      iframe: (
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/2aTu9VuFUb7vdF7yYBebRz?utm_source=generator"
          width="100%"
          height="352"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ),
    },
    {
      type: "youtube",
      title: "Discover Double Bass interview",
      description: (
        <>
          With Geoff Chalmers in 2023, featuring a performance of an excpert of
          &apos;Draw the Line&apos;, written by Ayanna Witter-Johnson for The
          Hermes Experiment in 2020.
        </>
      ),
      iframe: (
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-xl">
          {/* 16:9 */}
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/qlGf9m8MRDI?si=HUSEMrM2TWX2h4Tr"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold my-8 ">Listen and watch</h1>
      </div>
      <hr className="w-full h-px border-0 bg-[var(--surface-border)]/60 mb-12" />
      <ul className="space-y-16">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10"
          >
            <div className="lg:w-1/2 w-full">{item.iframe}</div>
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
              {item.subtitle && (
                <h3 className="text-xl font-semibold mb-3">
                  <i>{item.subtitle}</i>
                </h3>
              )}
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
