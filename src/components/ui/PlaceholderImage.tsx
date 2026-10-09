import Image from "next/image";
import { ImageIcon } from "lucide-react";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  tone?: "light" | "dark";
  /**
   * Cuando se aporte una imagen real, se sustituye automáticamente el
   * marcador por un <Image> de next/image (optimizada, con lazy loading
   * por defecto) sin tocar ningún sitio donde se use este componente.
   */
  src?: string;
  alt?: string;
  /** Marcar true solo en la imagen más grande visible al cargar la página (normalmente el Hero). */
  priority?: boolean;
  sizes?: string;
  /** "corner": el icono+etiqueta se ancla abajo a la derecha en vez de centrarse —
   * para huecos de imagen de fondo a pantalla completa, donde el centro puede
   * coincidir con contenido de texto superpuesto. */
  labelPosition?: "center" | "corner";
  /** Por defecto true. Desactivar para composiciones editoriales a sangre
   * (sin esquinas redondeadas ni marco), como los bloques de imagen de
   * Psicotarot/Astrología Cabalística. */
  rounded?: boolean;
};

/**
 * Marcador visual para fotografías aún no entregadas por el cliente.
 * Se apoya en gradientes de marca (nunca gris genérico) para no romper
 * la sensación premium mientras se espera el material definitivo.
 */
export default function PlaceholderImage({
  label = "Fotografía pendiente",
  className = "",
  tone = "light",
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw",
  labelPosition = "center",
  rounded = true,
}: PlaceholderImageProps) {
  const roundedClass = rounded ? "rounded-2xl" : "";

  if (src) {
    return (
      <div className={`relative overflow-hidden ${roundedClass} ${className}`}>
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  const gradient =
    tone === "dark"
      ? "bg-[radial-gradient(circle_at_30%_20%,rgba(169,148,104,0.22),transparent_60%),linear-gradient(135deg,#29231E,#11100F)]"
      : "bg-[radial-gradient(circle_at_30%_20%,rgba(169,148,104,0.16),transparent_60%),linear-gradient(135deg,#E9E2D6,#DCD0BC)]";
  const iconColor = tone === "dark" ? "text-white/30" : "text-primary/20";
  const labelColor = tone === "dark" ? "text-white/40" : "text-primary/35";

  return (
    <div
      className={`relative overflow-hidden border border-dashed ${roundedClass} ${
        labelPosition === "corner" ? "flex items-end justify-end p-6" : "flex items-center justify-center"
      } ${tone === "dark" ? "border-white/15" : "border-primary/10"} ${gradient} ${className}`}
    >
      <div className={`flex ${labelPosition === "corner" ? "flex-row items-center" : "flex-col items-center"} gap-2`}>
        <ImageIcon className={iconColor} size={labelPosition === "corner" ? 18 : 28} strokeWidth={1.25} />
        <span className={`text-[11px] tracking-wide ${labelColor}`}>{label}</span>
      </div>
    </div>
  );
}
