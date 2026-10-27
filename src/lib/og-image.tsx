import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/seo";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Plantilla de imagen Open Graph/Twitter Card — identidad obsidiana + oro
 * apagado de la landing, sin depender de fotografía real.
 */
export function renderOgImage(title: string, eyebrow: string = SITE_NAME) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #11100f 0%, #29231e 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#a99468",
            fontSize: 26,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            width: 90,
            height: 3,
            background: "#a99468",
          }}
        />
        <div
          style={{
            marginTop: 40,
            display: "flex",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
