import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const usuario = await prisma.usuario.findUnique({ where: { email } })

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }

    const validPassword = await bcrypt.compare(password, usuario.password)

    if (!validPassword) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }

    // Aquí podrías agregar token JWT o sesión si quieres
    return res.status(200).json({ message: 'Login exitoso', usuario: { email: usuario.email, id: usuario.id } })
  }
  res.status(405).json({ error: 'Método no permitido' })
}
