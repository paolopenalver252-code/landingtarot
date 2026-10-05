import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de cookies",
  description: "Qué cookies utiliza este sitio web y para qué finalidad.",
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="[completar fecha]">
      <p>
        Una cookie es un pequeño archivo que se almacena en tu dispositivo al visitar un sitio web.
        Esta política explica qué cookies utiliza este sitio y con qué finalidad.
      </p>

      <h2>1. ¿Qué cookies utiliza este sitio?</h2>
      <p>
        Actualmente este sitio web no utiliza cookies de analítica, publicidad ni de seguimiento de
        ningún tipo. Únicamente podría utilizar, si el navegador lo requiere, cookies técnicas
        estrictamente necesarias para su funcionamiento básico (por ejemplo, para recordar
        preferencias de visualización). Este tipo de cookies no requiere consentimiento, al ser
        imprescindibles para la prestación del servicio solicitado.
      </p>

      <h2>2. Cookies de terceros</h2>
      <p>
        Este sitio no integra en la actualidad herramientas de terceros (como analítica o vídeos
        incrustados) que instalen cookies propias. Si en el futuro se incorporase alguna, esta
        política se actualizará y se solicitará el consentimiento correspondiente antes de su
        instalación.
      </p>

      <h2>3. ¿Cómo puedes gestionar las cookies?</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
        configuración de las opciones del navegador que utilices. A continuación encontrarás enlaces
        a la configuración de cookies de los navegadores más habituales:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>4. Actualizaciones de esta política</h2>
      <p>
        Esta política de cookies podrá actualizarse para adaptarse a cambios normativos o a nuevas
        funcionalidades del sitio web. Se recomienda revisarla periódicamente.
      </p>
    </LegalPage>
  );
}
