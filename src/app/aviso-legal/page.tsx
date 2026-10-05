import type { Metadata } from "next";
import LegalPage from "@/components/layout/LegalPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviso legal",
  description: "Información legal sobre el titular y las condiciones de uso de este sitio web.",
  path: "/aviso-legal",
  noIndex: true,
});

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="[completar fecha]">
      <p>
        El presente aviso legal regula el uso del sitio web de Psicotarot &amp; Astrología
        Cabalística (en adelante, &ldquo;el sitio web&rdquo;), del que es titular la persona o
        entidad identificada a continuación.
      </p>

      <h2>1. Datos del titular</h2>
      <p>
        <strong>Titular:</strong> [Nombre completo o razón social]
        <br />
        <strong>NIF/CIF:</strong> [Completar]
        <br />
        <strong>Domicilio:</strong> [Completar]
        <br />
        <strong>Email de contacto:</strong> [Completar]
      </p>

      <h2>2. Objeto</h2>
      <p>
        A través de este sitio web se ofrece información sobre los servicios de Psicotarot y
        Astrología Cabalística, así como un formulario de contacto para solicitar una consulta. El
        sitio web no tramita pagos ni reservas de forma automatizada.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación
        plena de las condiciones incluidas en este aviso legal. El usuario se compromete a hacer un
        uso adecuado de los contenidos y servicios que se ofrecen, y a no emplearlos para incurrir
        en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, imágenes, diseño gráfico y demás contenidos de este sitio web son propiedad del
        titular o de terceros que han autorizado su uso, y están protegidos por la normativa de
        propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o
        comunicación pública sin autorización expresa.
      </p>

      <h2>5. Naturaleza de los servicios ofrecidos</h2>
      <p>
        El Psicotarot y la Astrología Cabalística se ofrecen como herramientas de reflexión,
        autoconocimiento y acompañamiento personal, desde una perspectiva simbólica. No constituyen
        en ningún caso un diagnóstico, tratamiento o sustituto de asesoramiento médico, psicológico,
        legal o financiero profesional.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños y perjuicios que pudieran derivarse de
        interferencias, interrupciones, virus informáticos o cualquier otra causa ajena a su control
        que impida el normal funcionamiento del sitio web.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para cualquier controversia
        derivada del acceso o uso de este sitio web, las partes se someten a los juzgados y
        tribunales que correspondan conforme a la normativa vigente.
      </p>
    </LegalPage>
  );
}
