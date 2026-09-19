import Link from "next/link";

export default function BlogLayout({ children }) {
    return (
        <div className="flex min-h-full flex-1 flex-col bg-zinc-50 text-zinc-900">
            <header className="border-b border-emerald-950/15 bg-white px-6 sm:px-10 lg:px-16">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <Link href="/blog" className="w-fit text-sm font-bold tracking-[0.14em] text-emerald-800 transition-colors hover:text-cyan-700">
                        UTVT / BLOG ITIID
                    </Link>
                    <nav aria-label="Secciones del blog">
                        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-zinc-600">
                            <li><Link href="/blog/articulos-recientes" className="transition-colors hover:text-emerald-700">Actualidad</Link></li>
                            <li><Link href="/blog/categorias" className="transition-colors hover:text-emerald-700">Áreas</Link></li>
                            <li><Link href="/blog/populares" className="transition-colors hover:text-emerald-700">Historias</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {children}

            <footer className="mt-auto border-t border-emerald-950/15 bg-white px-6 py-6 sm:px-10 lg:px-16">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>Ingeniería en Tecnologías de la Información e Innovación Digital</p>
                    <Link href="/" className="w-fit font-semibold text-emerald-700 transition-colors hover:text-cyan-700">Volver al inicio</Link>
                </div>
            </footer>
        </div>
    );
}
