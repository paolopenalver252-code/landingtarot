import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de privacidad",
  description: "Cómo se tratan los datos personales facilitados a través de este sitio web.",
  path: "/privacidad",
  noIndex: true,
});

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="[completar fecha]">
      <p>
        Esta política de privacidad explica cómo se tratan los datos personales que facilitas a
        través del formulario de contacto de este sitio web, de acuerdo con el Reglamento (UE)
        2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>Responsable:</strong> [Nombre completo o razón social]
        <br />
        <strong>NIF/CIF:</strong> [Completar]
        <br />
        <strong>Domicilio:</strong> [Completar]
        <br />
        <strong>Email de contacto:</strong> [Completar]
      </p>

      <h2>2. ¿Qué datos se recogen?</h2>
      <p>
        A través del formulario de solicitud de lectura se recogen únicamente los datos que
        facilitas voluntariamente: nombre, dirección de correo electrónico y el contenido del
        mensaje que escribas.
      </p>

      <h2>3. ¿Con qué finalidad se tratan tus datos?</h2>
      <ul>
        <li>Responder a tu solicitud de lectura e información.</li>
        <li>Gestionar la comunicación necesaria para concretar la cita o resolver tus dudas.</li>
      </ul>
      <p>No se utilizan tus datos para ninguna finalidad distinta de la indicada.</p>

      <h2>4. ¿Cuál es la legitimación para el tratamiento?</h2>
      <p>
        La base legal para el tratamiento de tus datos es tu consentimiento, otorgado al rellenar y
        enviar voluntariamente el formulario de contacto.
      </p>

      <h2>5. ¿Durante cuánto tiempo se conservan los datos?</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para atender tu solicitud y, en su
        caso, durante los plazos legalmente exigibles para el cumplimiento de obligaciones.
        Transcurridos dichos plazos, se eliminarán o anonimizarán de forma segura.
      </p>

      <h2>6. ¿A qué destinatarios se comunicarán tus datos?</h2>
      <p>
        No se ceden datos a terceros, salvo obligación legal. Los datos pueden ser tratados por
        proveedores de servicios técnicos (por ejemplo, de alojamiento o envío de correo) que actúan
        como encargados del tratamiento, con las garantías exigidas por la normativa aplicable.
      </p>

      <h2>7. ¿Cuáles son tus derechos?</h2>
      <p>
        Tienes derecho a acceder, rectificar y suprimir tus datos, así como a solicitar la
        limitación u oposición a su tratamiento, y a la portabilidad de los mismos, dirigiéndote al
        email de contacto indicado en el punto 1, acompañando copia de un documento que acredite tu
        identidad. Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de
        Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la
        normativa vigente.
      </p>
    </LegalPage>
  );
}
