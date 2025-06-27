import prisma from '@/lib/prisma'
import { IncomingForm } from 'formidable'
import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const config = {
  api: {
    bodyParser: false, // Importante para uploads
  },
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const noticias = await prisma.noticia.findMany({ orderBy: { fechaCreacion: 'desc' } })
    res.json(noticias)
  } else if (req.method === 'POST') {
    try {
      const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
        form.keepExtensions = true

        form.parse(req, (err, fields, files) => {
          if (err) {
            reject(err)
          } else {
            resolve({ fields, files })
          }
        })
      })

      const { titulo, contenido } = data.fields

      const tituloStr = Array.isArray(titulo) ? titulo[0] : titulo;
      const contenidoStr = Array.isArray(contenido) ? contenido[0] : contenido;
      
      let imagen = data.files.imagen;

      if (!imagen) {
        return res.status(400).json({ error: 'Falta la imagen' });
      }

      // Si es un array, tomar el primero, sino usar directamente
      if (Array.isArray(imagen)) {
        imagen = imagen[0];
      }

      console.log('FILES:', data.files)
      console.log('FIELDS:', data.fields)

      if (!imagen || !imagen.filepath) {
        return res.status(400).json({ error: 'Falta la imagen' })
      }

      const result = await cloudinary.v2.uploader.upload(imagen.filepath, {
        folder: 'noticias',
      })

      const nueva = await prisma.noticia.create({
        data: {
          titulo: tituloStr,
          contenido: contenidoStr,
          imagenUrl: result.secure_url,
        },
      })

      return res.status(200).json(nueva)
    } catch (error) {
      console.error('Error en POST /api/noticias:', error)
      return res.status(500).json({ error: 'Error interno del servidor' })
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' })
  }
}