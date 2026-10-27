# Oráculo Despertar — Landing

Landing independiente de **Oráculo Despertar**: lecturas personalizadas
(de 3 a 22 cartas u oráculos) orientadas a la reflexión personal, el
autoconocimiento y la toma de decisiones, con entrega de la lectura grabada.

El proyecto es independiente y anónimo: la web no muestra el nombre personal
de la clienta ni enlaza con ninguna otra marca.

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

Abre `http://localhost:3000` (la landing vive en la raíz `/`).

## Build

```bash
npm run build
npm run start
```

## Variables de entorno

Copia `.env.example` a `.env.local` y ajusta si hace falta:

| Variable | Para qué sirve | Valor por defecto |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio de esta landing (canonical, sitemap, robots, Open Graph, `metadataBase`). Actualízalo en cuanto exista el dominio definitivo. | Placeholder claramente marcado (`TU-DOMINIO-PENDIENTE.vercel.app`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp de contacto (formato internacional, solo dígitos). Sin él, los CTA de WhatsApp llevan a la sección `#consulta`. | Vacío |

No hace falta configurarlas para que `npm run build` funcione.

## Despliegue en Vercel

1. Crea un nuevo proyecto en Vercel apuntando a este repositorio.
2. Framework preset: **Next.js** (autodetectado).
3. En "Environment Variables" define `NEXT_PUBLIC_SITE_URL` (y, cuando exista,
   `NEXT_PUBLIC_WHATSAPP_NUMBER`).
4. Deploy. No hay base de datos, backend propio ni integraciones externas.

## Contenido

Todo el contenido del oráculo (objetivo, rango de cartas, preguntas y qué se
entrega) vive en `src/lib/oracle.ts`. Solo contiene lo confirmado por la
clienta: no se inventan nombres de cartas, duración, precios ni credenciales.

## Pendiente de contenido definitivo

- Dominio definitivo de esta landing (`NEXT_PUBLIC_SITE_URL`).
- Número de WhatsApp (`NEXT_PUBLIC_WHATSAPP_NUMBER`) y destino del formulario
  de `#consulta` (hoy no envía datos a ningún sitio).
- Redes sociales del Footer (ocultas hasta que haya perfiles propios).
- Datos del titular en las páginas legales (marcados como `[Completar]`).
