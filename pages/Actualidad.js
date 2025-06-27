import React from 'react'
import prisma from '../lib/prisma'

export async function getServerSideProps() {
  const noticias = await prisma.noticia.findMany({
    orderBy: {
      fechaCreacion: 'desc',
    },
  })

  return {
    props: {
      noticias: noticias.map(noticia => ({
        ...noticia,
        fechaCreacion: noticia.fechaCreacion.toISOString().split('T')[0], // YYYY-MM-DD
      })),
    },
  }
}

export default function Actualidad({ noticias }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Actualidad</h1>
      
      {noticias.length === 0 ? (
        <p>No hay noticias aún.</p>
      ) : (
        noticias.map(noticia => (
          <article key={noticia.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <h2>{noticia.titulo}</h2>
            <p><em>{noticia.fechaCreacion}</em></p>
            <img
              src={noticia.imagenUrl}
              alt={noticia.titulo}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>{noticia.contenido}</p>
          </article>
        ))
      )}
    </main>
  )
}
