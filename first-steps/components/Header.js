export default function Header() {
    return (
        <header className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 border-b border-zinc-200 px-6 pt-5 pb-5 sm:px-10 lg:px-16 dark:border-zinc-800">
            <a
                href="/"
                className="group flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
                aria-label="UTVT, inicio"
            >
                <svg
                    className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="UTVT"
                >
                    <path d="M8 13H18L23 39L28 13H37L30 50H17L8 13Z" fill="#00843D" />
                    <path d="M26 13H37L42 37L47 13H57L49 50H36L32 31L28 50H18L26 13Z" fill="#005A32" />
                    <path d="M18 8H47" stroke="#00843D" strokeWidth="5" strokeLinecap="square" />
                </svg>
                <span>UTVT</span>
            </a>

            <nav aria-label="Navegacion principal" className="order-3 w-full sm:order-0 sm:w-auto">
                <ul className="flex items-center gap-5 overflow-x-auto text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <li>
                        <a
                            href="/"
                            className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                            Mi carrera
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                            Acerca de
                        </a>
                    </li>
                    <li>
                        <a
                            href="/blog"
                            className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            className="whitespace-nowrap transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                            href="https://nextjs.org/docs/app/getting-started/project-structure"
                        >
                            Next.js
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-2">
                <a
                    href="https://github.com/vercel/next.js/"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                    aria-label="Repositorio de GitHub"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.578 2 12.23c0 4.522 2.865 8.352 6.839 9.707.5.094.682-.22.682-.49 0-.24-.009-.877-.014-1.722-2.782.617-3.369-1.373-3.369-1.373-.455-1.184-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.004.073 1.532 1.056 1.532 1.056.892 1.566 2.34 1.114 2.91.852.091-.665.349-1.114.635-1.37-2.22-.26-4.555-1.14-4.555-5.073 0-1.12.39-2.035 1.03-2.753-.104-.26-.446-1.308.098-2.726 0 0 .84-.276 2.75 1.051A9.284 9.284 0 0 1 12 6.13a9.27 9.27 0 0 1 2.504.35c1.91-1.327 2.748-1.051 2.748-1.051.546 1.418.203 2.466.1 2.726.64.718 1.028 1.633 1.028 2.753 0 3.943-2.34 4.81-4.568 5.066.359.32.679.95.679 1.915 0 1.383-.012 2.498-.012 2.837 0 .273.18.59.688.489C19.14 20.578 22 16.75 22 12.23 22 6.578 17.523 2 12 2Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
