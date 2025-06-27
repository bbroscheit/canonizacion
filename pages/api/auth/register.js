import prisma from '@/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' })
  }

  try {
    const usuarioExistente = await prisma.usuario.findUnique({ where: { email } })

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({ mensaje: 'Usuario creado', usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email } })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al registrar el usuario' })
  }
}
