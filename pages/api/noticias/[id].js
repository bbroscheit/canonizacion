// pages/api/noticias/[id].js
import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'PUT') {
    const { titulo, contenido, imagenUrl } = req.body
    const noticia = await prisma.noticia.update({
      where: { id: parseInt(id) },
      data: { titulo, contenido, imagenUrl },
    })
    res.json(noticia)
  } else if (req.method === 'DELETE') {
    await prisma.noticia.delete({ where: { id: parseInt(id) } })
    res.json({ message: 'Noticia eliminada' })
  } else {
    res.status(405).end()
  }
}
