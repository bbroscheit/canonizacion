import prisma from '../../lib/prisma';
import styles from "@/styles/ArticlesID.module.css"

export async function getServerSideProps({ params }) {
  const noticia = await prisma.noticia.findUnique({
    where: { id: Number(params.id) },
  });

  if (!noticia) {
    return { notFound: true };
  }

  return {
    props: {
      noticia: {
        ...noticia,
        fechaCreacion: noticia.fechaCreacion.toISOString().split('T')[0],
      },
    },
  };
}

export default function Noticia({ noticia }) {
  return (
    <main className={styles.noticiaContainer}>
      <h1 className={styles.title}>{noticia.titulo}</h1>
      <p style={{ textAlign: 'center' }}><em>{noticia.fechaCreacion}</em></p>
      <img
        src={noticia.imagenUrl}
        alt={noticia.titulo}
        style={{ maxWidth: '100%', height: 'auto', margin: '1rem auto' }}
      />
      <div dangerouslySetInnerHTML={{ __html: noticia.contenido }} className={styles.contenido}/>
    </main>
  );
}
