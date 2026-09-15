"use client";

// Adaptado de TrueFocus (reactbits.dev). La versión original cicla
// automáticamente y para siempre por cada palabra de una frase, y dibuja un
// marco de "esquinas de cámara" alrededor de la palabra activa. Aquí, en
// cambio, el foco se dispara UNA sola vez al entrar en el viewport y se
// queda fijo en los segmentos marcados como `focused` — sin bucle infinito
// (el proyecto evita animaciones que se repitan sin motivo) y sin el marco
// decorativo, que no encajaba con la dirección editorial de la landing.
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion/environment";

type FocusSegment = {
  text: string;
  focused?: boolean;
  className?: string;
};

type TrueFocusProps = {
  segments: FocusSegment[];
  className?: string;
  blurAmount?: number;
  duration?: number;
};

export default function TrueFocus({ segments, className = "", blurAmount = 6, duration = 0.9 }: TrueFocusProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setActive(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          className={segment.className}
          initial={{ filter: `blur(${blurAmount}px)` }}
          animate={{ filter: active && !segment.focused ? `blur(${blurAmount}px)` : "blur(0px)" }}
          transition={{ duration, ease: "easeOut" }}
          style={{ display: "inline" }}
        >
          {segment.text}
        </motion.span>
      ))}
    </span>
  );
}
