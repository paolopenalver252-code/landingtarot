import { renderOgImage, OG_IMAGE_SIZE } from "@/lib/og-image";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Un espacio para escucharte, reconocer tus recursos y explorar nuevas perspectivas.", SITE_NAME);
}
