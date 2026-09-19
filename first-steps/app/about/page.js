import Link from "next/link";

const learningAreas = [
    "Desarrollo de software",
    "Datos e inteligencia artificial",
    "Infraestructura y redes",
    "Experiencia digital",
];

function CircuitMark() {
    return (
        <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11" aria-hidden="true">
            <path d="M10 12h18a6 6 0 0 1 6 6v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M38 36H20a6 6 0 0 1-6-6V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="10" cy="12" r="4" fill="currentColor" />
            <circle cx="38" cy="36" r="4" fill="currentColor" />
        </svg>
    );
}

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f5f7f3] text-[#123044]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <header className="flex items-center justify-between border-b border-[#123044]/15 py-5">
                    <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
                        <span className="grid h-10 w-10 place-items-center rounded-md bg-[#123044] text-[#d9ef3c]">
                            <CircuitMark />
                        </span>
                        <span className="leading-tight">
                            <span className="block text-sm">UTVT</span>
                            <span className="block text-xs font-medium text-[#123044]/60">Tecnología que transforma</span>
                        </span>
                    </Link>
                    <a
                        href="https://utvt.edomex.gob.mx/"
                        className="inline-flex items-center gap-2 border-b-2 border-[#d9ef3c] pb-1 text-sm font-semibold transition-colors hover:text-[#177e89]"
                    >
                        Sitio institucional
                        <span aria-hidden="true">↗</span>
                    </a>
                </header>

                <section className="grid gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
                    <div className="max-w-3xl">
                        <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#177e89]">
                            Universidad Tecnológica del Valle de Toluca
                        </p>
                        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#123044] sm:text-6xl lg:text-7xl">
                            Ingeniería en Tecnologías de la Información e Innovación Digital
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#123044]/75">
                            Una formación para imaginar, diseñar y construir soluciones tecnológicas que respondan a los retos de las organizaciones y de la sociedad.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a
                                href="https://utvt.edomex.gob.mx/modelo-educativo"
                                className="inline-flex items-center rounded-md bg-[#123044] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#177e89]"
                            >
                                Conoce el modelo educativo
                            </a>
                            <a
                                href="https://utvt.edomex.gob.mx/servicios-educativos"
                                className="inline-flex items-center rounded-md border border-[#123044]/20 px-5 py-3 text-sm font-semibold transition-colors hover:border-[#177e89] hover:text-[#177e89]"
                            >
                                Servicios para estudiantes
                            </a>
                        </div>
                    </div>

                    <div className="relative min-h-80 overflow-hidden rounded-md bg-[#177e89] p-8 text-white sm:p-10">
                        <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[28px] border-[#d9ef3c]" />
                        <div className="absolute bottom-7 right-8 grid grid-cols-3 gap-2 opacity-90">
                            {[...Array(9)].map((_, index) => (
                                <span key={index} className="h-3 w-3 rounded-full bg-white" />
                            ))}
                        </div>
                        <div className="relative flex h-full flex-col justify-between">
                            <CircuitMark />
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9ef3c]">Perfil profesional</p>
                                <p className="mt-3 max-w-sm text-2xl font-medium leading-tight">
                                    Tecnología con visión estratégica, ética y creativa.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-[#123044]/15 py-12 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#177e89]">Lo que impulsa</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Talento para la economía digital</h2>
                        </div>
                        <p className="max-w-2xl text-lg leading-8 text-[#123044]/75">
                            La carrera integra conocimiento técnico y aprendizaje aplicado para participar en proyectos de transformación digital, desde la concepción de una idea hasta la entrega de productos y servicios tecnológicos.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-[#123044]/15 sm:grid-cols-2 lg:grid-cols-4">
                        {learningAreas.map((area, index) => (
                            <article key={area} className="bg-[#f5f7f3] p-6 transition-colors hover:bg-[#d9ef3c]">
                                <span className="text-sm font-bold text-[#177e89]">0{index + 1}</span>
                                <h3 className="mt-8 text-xl font-semibold tracking-tight">{area}</h3>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 py-16 lg:grid-cols-2 lg:py-24">
                    <div className="rounded-md bg-[#123044] p-8 text-white sm:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9ef3c]">Aprendizaje aplicado</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight">De la idea a la solución</h2>
                        <p className="mt-5 max-w-lg leading-7 text-white/70">
                            Colabora, experimenta y desarrolla propuestas digitales que aporten valor en contextos reales.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center border-l-4 border-[#d9ef3c] pl-7 sm:pl-9">
                        <p className="text-2xl font-semibold leading-tight tracking-tight">
                            Una comunidad universitaria para aprender, crear y llevar más lejos cada proyecto.
                        </p>
                        <a href="https://utvt.edomex.gob.mx/" className="mt-7 w-fit text-sm font-bold text-[#177e89] underline decoration-2 underline-offset-4 hover:text-[#123044]">
                            Visitar Universidad Tecnológica del Valle de Toluca
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
