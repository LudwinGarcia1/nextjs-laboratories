export default function Home() {
  return (
    <div className="flex flex-1 bg-zinc-50 font-sans">
      <main className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
        <section>
          <p className="mb-5 text-sm font-bold tracking-[0.16em] text-emerald-700">UTVT</p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
            Ingeniería en Tecnologías de la Información e Innovación Digital
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">
            Fórmate para crear soluciones digitales, desarrollar software y liderar la innovación tecnológica que impulsa a las organizaciones y a la sociedad.
          </p>
        </section>
        <div className="overflow-hidden rounded-lg bg-emerald-950 shadow-xl shadow-emerald-950/15">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
            alt="Circuito electrónico que representa la innovación tecnológica"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
