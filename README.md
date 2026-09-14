# Psicotarot & Astrología Cabalística — Landing

Landing independiente de **Psicotarot y Astrología Cabalística**, una
especialidad de **PSAI FLOW ACADEMY**. Separada del proyecto principal de la
web (`web mamaa`) para poder desplegarse por su cuenta en Vercel, sin
depender de ese repositorio.

No es un proyecto nuevo desde cero: reproduce con la máxima fidelidad
posible la landing tal y como existía dentro del proyecto principal —
mismos componentes, mismos estilos, mismas animaciones, mismo contenido.
No se ha rediseñado nada en esta separación.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Anime.js v4 para las animaciones (scroll-reveal, parallax, entrada del Hero)
- lucide-react para iconografía

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` (la landing vive en la raíz `/`, no en `/psicotarot...`).

## Build

```bash
npm run build
npm run start
```

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta si hace falta:

| Variable | Para qué sirve | Valor por defecto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio de **esta** landing (canonical, sitemap, robots, Open Graph, `metadataBase`). Actualízalo en cuanto exista el dominio definitivo. | Placeholder claramente marcado (`TU-DOMINIO-PENDIENTE.vercel.app`) |
| `NEXT_PUBLIC_MAIN_SITE_URL` | Dominio de la web principal de PSAI FLOW ACADEMY. Esta landing ya no tiene páginas como `/consultas` o `/contacto`, así que el Header, el Footer y los botones de CTA enlazan de vuelta ahí. | `https://www.psaiflowacademy.com` (mismo placeholder que ya usa el proyecto principal mientras se confirma el dominio real) |

No hace falta configurarlas para que `npm run build` funcione: sin ellas, la
app usa los valores por defecto de arriba.

## Despliegue en Vercel

1. Crea un nuevo proyecto en Vercel apuntando a este directorio (repo propio
   o subcarpeta, según cómo lo subas).
2. Framework preset: **Next.js** (autodetectado).
3. En "Environment Variables" del proyecto en Vercel, define:
   - `NEXT_PUBLIC_SITE_URL` → el dominio final que le asignes a esta landing.
   - `NEXT_PUBLIC_MAIN_SITE_URL` → el dominio real de la web principal, si
     cambia respecto al placeholder actual.
4. Deploy. No requiere ninguna otra configuración (no hay base de datos,
   backend propio ni integraciones externas).

## Qué contiene y qué no

Contiene únicamente lo que esta landing necesita: sus 7 secciones, el
Header/Footer de marca, los componentes de UI compartidos que usa
(`Button`, `Reveal`, `SectionHeading`, etc.) y el sistema de motion
(Anime.js). No incluye páginas, componentes ni datos (cursos, libros...) del
resto de PSAI FLOW ACADEMY — eso sigue viviendo en el proyecto principal.

## Enlaces hacia la web principal

Como esta landing es ahora un sitio independiente, todo lo que antes era una
ruta interna del sitio principal (navegación del Header/Footer, "Volver a
las especialidades", los CTA de "Solicitar consulta"/"Contactar") ahora
apunta con URL absoluta a `NEXT_PUBLIC_MAIN_SITE_URL` + esa misma ruta
(`@/lib/seo`, función `mainSiteUrl`). Son exactamente los mismos destinos
que ya existían — no se ha inventado ninguna URL nueva.

## Pendiente de contenido definitivo

- Fotografía real de Tarot y de carta astral (hay placeholders discretos
  marcados como "pendiente" en `Psicotarot.tsx` y `AstrologiaCabalistica.tsx`).
- Dominio definitivo de esta landing (`NEXT_PUBLIC_SITE_URL`).
- Redes sociales del Footer (ya eran un placeholder `#` en el proyecto
  original, sin cambios).
- Datos de contacto y descripción breve del Footer (ídem, ya pendientes en
  el proyecto original).
