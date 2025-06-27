// pages/api/enviar-gracias.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, comentario } = req.body;

  if (!nombre || !email || !comentario) {
    return res.status(400).json({ error: "Faltan campos" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // tu Gmail
        pass: process.env.MAIL_PASS, // app password de Gmail
      },
    });

    await transporter.sendMail({
      from: `"Gracias recibidas" <${process.env.MAIL_USER}>`,
      to: "bernardo.broscheit@gmail.com",
      subject: "Gracias recibidas",
      text: `
Nombre: ${nombre}
Email: ${email}

Comentario:
${comentario}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return res.status(500).json({ error: "Error al enviar correo" });
  }
}
