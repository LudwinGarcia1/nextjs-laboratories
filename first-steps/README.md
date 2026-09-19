# first-steps

Primera práctica de Next.js con el **App Router**. El sitio representa a la carrera de
Ingeniería en Tecnologías de la Información e Innovación Digital (ITIID) de la
Universidad Tecnológica del Valle de Toluca.

## Requisitos

- Node.js 18.18 o superior (este proyecto se desarrolló con Node 24.13.1)
- npm 10 o superior

## Ejecución

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # compilación de producción
npm run lint     # análisis estático con ESLint
```

## Rutas

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `app/page.js` | Página de inicio con la presentación de la carrera |
| `/about` | `app/about/page.js` | Acerca de la carrera y áreas de formación |
| `/blog` | `app/blog/page.js` | Índice del blog con las secciones disponibles |
| `/blog/[slug]` | `app/blog/[slug]/page.js` | Detalle de una publicación |
| Cualquier otra | `app/not-found.js` | Página 404 personalizada |

## Estructura

```
app/
  layout.js            Layout raíz: fuentes, metadatos y Header global
  page.js              Página de inicio
  not-found.js         Página 404 personalizada
  about/page.js        Página "Acerca de"
  blog/
    layout.js          Layout anidado del blog (encabezado y pie propios)
    page.js            Índice del blog
    [slug]/page.js     Publicación individual (ruta dinámica)
components/
  Header.js            Encabezado global (Server Component)
  NavigationLink.js    Enlace de navegación con estado activo (Client Component)
```

## Conceptos aplicados

- **Enrutamiento basado en archivos**: cada carpeta dentro de `app/` define un segmento
  de la URL y el archivo `page.js` la hace públicamente accesible.
- **Layouts anidados**: `app/blog/layout.js` envuelve a todas las rutas bajo `/blog`
  sin volver a renderizar el layout raíz durante la navegación.
- **Rutas dinámicas**: el segmento `[slug]` captura el identificador de la publicación.
  En Next.js 16 la prop `params` es una promesa, por lo que se resuelve con `await`.
- **Prerenderizado**: `generateStaticParams` genera en tiempo de compilación las tres
  publicaciones conocidas como HTML estático.
- **Manejo de rutas inexistentes**: cuando el slug no existe se invoca `notFound()`,
  que renderiza `app/not-found.js`.
- **Server y Client Components**: el `Header` permanece como Server Component y solo
  `NavigationLink` se marca con `"use client"`, ya que necesita el hook `usePathname`
  para resaltar la sección activa.
