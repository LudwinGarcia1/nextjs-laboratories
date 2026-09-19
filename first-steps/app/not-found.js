export default function NotFound() {
    return (
        <main className="flex flex-1 items-center bg-[#f5f7f3] px-6 py-12 text-[#123044] lg:px-10">
            <section className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#177e89]">Error de navegación</p>
                    <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                        Página no encontrada
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-[#123044]/75">
                        La dirección que buscas no está disponible o pudo haber cambiado. Regresa al inicio para continuar explorando.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-5">
                        <a
                            href="/"
                            className="inline-flex items-center rounded-md bg-[#123044] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#177e89] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177e89]"
                        >
                            Ir al inicio
                        </a>
                        <a href="/blog" className="text-sm font-bold text-[#177e89] underline decoration-2 underline-offset-4 transition-colors hover:text-[#123044]">
                            Ver el blog
                        </a>
                    </div>
                </div>

                <div className="relative min-h-72 overflow-hidden rounded-md bg-[#177e89] p-8 text-white sm:min-h-80 sm:p-10">
                    <span className="absolute -right-14 -top-14 h-52 w-52 rounded-full border-[28px] border-[#d9ef3c]" aria-hidden="true" />
                    <div className="absolute bottom-8 right-8 grid grid-cols-3 gap-2 opacity-90" aria-hidden="true">
                        {[...Array(9)].map((_, index) => (
                            <span key={index} className="h-3 w-3 rounded-full bg-white" />
                        ))}
                    </div>
                    <div className="relative flex h-full flex-col justify-between">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9ef3c]">UTVT</span>
                        <div>
                            <p className="text-7xl font-semibold leading-none tracking-tight sm:text-8xl">404</p>
                            <p className="mt-4 max-w-xs text-xl font-medium leading-tight">Sigamos creando soluciones desde el lugar correcto.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
