import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carillas de Porcelana y Diseño de Sonrisa para Uruguayos | AM Estética Dental",
  description: "Pacientes uruguayos que buscan carillas de porcelana, diseño de sonrisa o rehabilitación oral de alta calidad. Dr. Ariel Merino en Buenos Aires, Argentina. Resultados internacionales.",
  alternates: { canonical: "https://www.amesteticadental.com.uy" },
};

const TRATAMIENTOS = [
  { titulo: "Carillas de Porcelana", descripcion: "Carillas AM ultra delgadas tipo lente de contacto. Sin desgaste. Resultado inmediato.", href: "https://www.amesteticadental.com/carillas-dentales" },
  { titulo: "Diseño de Sonrisa", descripcion: "Planificación digital del resultado antes de tocar ningún diente.", href: "https://www.amesteticadental.com/diseno-de-sonrisa" },
  { titulo: "Alineadores Invisibles", descripcion: "Ortodoncia invisible AM. Tratamientos desde 6 meses.", href: "https://www.amesteticadental.com/alineadores-invisibles" },
  { titulo: "Implantes Dentales", descripcion: "Rehabilitación sobre implantes en zonas edéntulas.", href: "https://www.amesteticadental.com/estetica-dental" },
];

const WA = "https://api.whatsapp.com/send?phone=541170219298&text=Hola%2C%20los%20contacto%20desde%20Uruguay.%20Me%20gustar%C3%ADa%20una%20evaluaci%C3%B3n.";

export default function HomePage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "stretch" }}>
        <div style={{ position: "relative", minHeight: 400 }}>
          <Image
            src="https://res.cloudinary.com/drctvgyqd/image/upload/w_900,h_1200,c_fill,g_face,q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires"
            alt="Diseño de sonrisa antes y después — AM Estética Dental"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, var(--carbon, #141414))" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 60px 80px 40px", background: "var(--carbon, #141414)" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", marginBottom: 20, display: "block" }}>
            Para pacientes uruguayos
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 24 }}>
            AM Estética Dental<br />
            <em style={{ color: "var(--oro, #C9A96E)" }}>está en Buenos Aires.</em><br />
            <span style={{ fontSize: "0.7em", opacity: 0.7 }}>Y te esperamos.</span>
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--crema-dim, #A89F92)", marginBottom: 40, maxWidth: 420 }}>
            Muchos de nuestros pacientes vienen desde Uruguay. El cruce vale la pena: tecnología de punta, resultados internacionales y un equipo especializado en estética dental de alta complejidad.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "var(--oro, #C9A96E)", color: "#141414", padding: "14px 28px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
              Consulta por WhatsApp →
            </a>
            <Link href="https://www.amesteticadental.com/antes-y-despues" target="_blank" style={{ border: "1px solid rgba(201,169,110,0.3)", color: "var(--oro, #C9A96E)", padding: "14px 28px", borderRadius: 100, fontSize: 13, textDecoration: "none" }}>
              Ver galería de casos
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué viajar */}
      <section style={{ padding: "80px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", display: "block", marginBottom: 12 }}>¿Por qué venir?</span>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 300, marginBottom: 48 }}>
            Lo que encontrás del otro lado del río.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 32 }}>
            {[
              ["Tecnología de punta", "Escáner intraoral, diseño digital y carillas AM ultra delgadas de 0.2mm."],
              ["Casos internacionales", "Reconocidos en congresos y publicaciones de todo el mundo."],
              ["Equipo multidisciplinario", "Ortodoncia, implantes, cerámica y estética en un solo lugar."],
              ["Puerto Madero", "Clínica a 90 minutos del centro de Montevideo en buque o avión."],
            ].map(([t, d]) => (
              <div key={t} style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13, color: "var(--crema-dim, #A89F92)", lineHeight: 1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamientos */}
      <section style={{ padding: "80px 40px", background: "var(--carbon, #141414)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--oro, #C9A96E)", display: "block", marginBottom: 12 }}>Especialidades</span>
          <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 300, marginBottom: 48 }}>
            Tratamientos disponibles.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
            {TRATAMIENTOS.map((t) => (
              <Link key={t.titulo} href={t.href} target="_blank" style={{ textDecoration: "none", color: "inherit", border: "1px solid rgba(201,169,110,0.15)", borderRadius: 8, padding: "24px", display: "block", transition: "border-color 0.3s" }}>
                <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: 10, color: "var(--crema, #F5F0E8)" }}>{t.titulo}</h3>
                <p style={{ fontSize: 13, color: "var(--crema-dim, #A89F92)", lineHeight: 1.65, marginBottom: 12 }}>{t.descripcion}</p>
                <span style={{ fontSize: 11, color: "var(--oro, #C9A96E)", letterSpacing: "0.15em" }}>Ver más →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: "60px 40px", borderTop: "1px solid rgba(201,169,110,0.1)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center", gap: 20 }}>
        <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 300 }}>
          El primer paso es una consulta.
        </h2>
        <p style={{ color: "var(--crema-dim, #A89F92)", fontSize: 14, maxWidth: 400 }}>
          Escribinos por WhatsApp y te asesoramos sin compromiso. Coordinamos la visita para que aproveches al máximo el viaje.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "var(--oro, #C9A96E)", color: "#141414", padding: "16px 40px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          Escribinos por WhatsApp
        </a>
        <p style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", opacity: 0.6 }}>
          Camila O&apos;Gorman 412, Puerto Madero · Buenos Aires, Argentina
        </p>
      </section>

      <footer style={{ borderTop: "1px solid rgba(201,169,110,0.1)", padding: "20px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: 15 }}>AM Estética Dental Uruguay</span>
          <Link href="https://www.amesteticadental.com" target="_blank" style={{ fontSize: 11, color: "var(--crema-dim, #A89F92)", textDecoration: "none" }}>
            amesteticadental.com →
          </Link>
        </div>
      </footer>

    </main>
  );
}
