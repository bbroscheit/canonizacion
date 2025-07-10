// pages/api/contacto/enviar.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, apellido, email, telefono, mensaje } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario de Contacto" <${process.env.MAIL_USER}>`,
      to: 'bernardo.broscheit@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `
Nombre: ${nombre} ${apellido}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al enviar el mail:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
