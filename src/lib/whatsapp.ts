/**
 * Número de WhatsApp de contacto — PENDIENTE de confirmar por el cliente.
 * Se define con NEXT_PUBLIC_WHATSAPP_NUMBER (ver .env.example), en formato
 * internacional y solo dígitos (p. ej. 34600000000). Mientras no exista, los
 * CTA de WhatsApp caen a la sección #consulta en vez de abrir un enlace roto.
 */
const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const WHATSAPP_NUMBER: string | null = rawNumber.length >= 8 ? rawNumber : null;

export function buildWhatsAppUrl(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
