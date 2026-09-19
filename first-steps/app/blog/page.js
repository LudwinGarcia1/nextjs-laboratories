import Link from "next/link";

const blogSections = [
    {
        href: "/blog/actualidad-tecnologica",
        label: "Actualidad tecnológica",
        description: "Tendencias, herramientas y proyectos que están transformando el entorno digital.",
        number: "01",
    },
    {
        href: "/blog/areas-de-formacion",
        label: "Áreas de formación",
        description: "Desarrollo de software, redes, datos, ciberseguridad e innovación aplicada.",
        number: "02",
    },
    {
        href: "/blog/historias-que-inspiran",
        label: "Historias que inspiran",
        description: "Experiencias y publicaciones destacadas de nuestra comunidad académica.",
        number: "03",
    },
];

function BlogPage() {
    return (
        <main className="min-h-[calc(100vh-81px)] bg-zinc-50 px-6 py-12 text-zinc-900 sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 border-b border-emerald-900/15 pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:pb-16">
                    <div>
                        <p className="mb-5 text-sm font-bold tracking-[0.16em] text-emerald-700">BLOG ACADEMICO</p>
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
                            Ingeniería en Tecnologías de la Información e Innovación Digital
                        </h1>
                    </div>
                    <p className="max-w-md border-l-2 border-cyan-500 pl-5 text-base leading-7 text-zinc-600">
                        Conocimiento, creatividad y tecnología para diseñar soluciones que mejoran la forma en que vivimos, aprendemos y trabajamos.
                    </p>
                </div>

                <section className="pt-10 lg:pt-14" aria-labelledby="explora-el-blog">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 id="explora-el-blog" className="text-xl font-semibold text-emerald-950 sm:text-2xl">Explora el blog</h2>
                        <span className="hidden text-sm font-medium text-zinc-500 sm:block">Aprende. Crea. Innova.</span>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-3">
                        {blogSections.map((section) => (
                            <li key={section.href}>
                                <Link
                                    href={section.href}
                                    className="group flex h-full min-h-56 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                                >
                                    <span className="text-sm font-bold tracking-[0.14em] text-cyan-700">{section.number}</span>
                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-emerald-950 transition-colors group-hover:text-emerald-700">{section.label}</h3>
                                        <p className="text-sm leading-6 text-zinc-600">{section.description}</p>
                                    </div>
                                    <span className="mt-6 text-sm font-semibold text-emerald-700">Ver publicaciones <span aria-hidden="true">&rarr;</span></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default BlogPage;
