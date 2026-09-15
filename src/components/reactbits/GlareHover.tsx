"use client";

// Adaptado de GlareHover (reactbits.dev). La versión original es un
// contenedor con su propio ancho/alto/fondo/borde fijos, pensado para
// envolver bloques genéricos. Aquí es un envoltorio transparente (sin fondo
// ni borde propios) para poder colocarlo directamente alrededor de un
// <Button> ya existente sin alterar su forma — el brillo se recorta con
// `rounded-[inherit]` a la forma que le pase el propio botón (className).
import { useRef, type ReactNode } from "react";

type GlareHoverProps = {
  children: ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
};

export default function GlareHover({
  children,
  className = "",
  glareColor = "#F7F5F0",
  glareOpacity = 0.35,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 700,
}: GlareHoverProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const hex = glareColor.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%";
    void el.offsetHeight; // fuerza el reflow para que el "none" surta efecto antes de reactivar la transición
    el.style.transition = `background-position ${transitionDuration}ms ease`;
    el.style.backgroundPosition = "100% 100%";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `background-position ${transitionDuration}ms ease`;
    el.style.backgroundPosition = "-100% -100%";
  };

  return (
    <div className={`relative ${className}`} onMouseEnter={animateIn} onMouseLeave={animateOut}>
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{
          background: `linear-gradient(${glareAngle}deg, hsla(0,0%,0%,0) 60%, ${rgba} 70%, hsla(0,0%,0%,0) 100%)`,
          backgroundSize: `${glareSize}% ${glareSize}%`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100% -100%",
        }}
      />
      {children}
    </div>
  );
}
