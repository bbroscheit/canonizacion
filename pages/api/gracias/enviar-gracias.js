import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, comentario } = req.body;
  console.log("Datos recibidos:", nombre, email, comentario);
  if (!nombre || !email || !comentario) {
    return res.status(400).json({ error: "Faltan campos" });
  }

  try {
    // Guardar en la base de datos
    const nuevaGracias = await prisma.gracias.create({
      data: { nombre, email, comentario },
    });

    // Configurar y enviar mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
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

    return res.status(200).json({ ok: true, nuevaGracias });
  } catch (err) {
    console.error("Error al enviar correo o guardar datos:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
