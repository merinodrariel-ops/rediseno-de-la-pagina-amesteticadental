import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, nombre } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email requerido" }, { status: 400 });
  }

  // Notificación al doctor por email via Resend
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (RESEND_API_KEY) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "AM Estética Dental UY <noreply@amesteticadental.com.uy>",
        to: ["dr.arielmerinopersonal@gmail.com"],
        subject: `Nuevo lead Uruguay: ${nombre || email}`,
        html: `<p><strong>Nombre:</strong> ${nombre || "—"}</p><p><strong>Email:</strong> ${email}</p><p><em>Registrado desde amesteticadental.com.uy</em></p>`,
      }),
    });

    // Confirmación al lead
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "AM Estética Dental <noreply@amesteticadental.com.uy>",
        to: [email],
        subject: "Te avisamos cuando abramos en Montevideo",
        html: `<p>Hola ${nombre || ""}!</p><p>Quedaste en nuestra lista. Te escribimos en cuanto confirmemos la apertura en Carrasco, Montevideo.</p><p>Mientras tanto, podés ver nuestros casos en <a href="https://www.amesteticadental.com">amesteticadental.com</a>.</p><p>— Dr. Ariel Merino · AM Estética Dental</p>`,
      }),
    });
  }

  return NextResponse.json({ ok: true });
}
