import React from "react";
import prisma from "../lib/prisma";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Actualidad.module.css";

const NOTICIAS_POR_PAGINA = 4;

export async function getServerSideProps(context) {
  const page = parseInt(context.query.page) || 1;
  const totalNoticias = await prisma.noticia.count();

  const noticias = await prisma.noticia.findMany({
    orderBy: {
      fechaCreacion: "desc",
    },
    skip: (page - 1) * NOTICIAS_POR_PAGINA,
    take: NOTICIAS_POR_PAGINA,
  });

  return {
    props: {
      noticias: noticias.map((noticia) => ({
        ...noticia,
        fechaCreacion: noticia.fechaCreacion.toISOString().split("T")[0], // YYYY-MM-DD
      })),
      totalNoticias,
      page,
    },
  };
}

export default function Actualidad({ noticias, totalNoticias, page }) {
  const router = useRouter();
  const totalPaginas = Math.ceil(totalNoticias / 4);

  const cambiarPagina = (nuevaPagina) => {
    router.push(`/actualidad?page=${nuevaPagina}`);
  };

  return (
    <main className={styles.actualidadContainer}>
      <h1
        className={styles.title}
      >
        Actualidad
      </h1>

      {noticias.length === 0 ? (
        <p>No hay noticias aún.</p>
      ) : (
        noticias.map((noticia) => (
          <article
            key={noticia.id}
            className={styles.articleContainer}
          >
            <Link href={`/noticias/${noticia.id}`}>
              <h2 className={styles.articleTitle}>
                {noticia.titulo}
              </h2>
            </Link>
            <p className={styles.articleDate}>
              {noticia.fechaCreacion}
            </p>
            <img
              src={noticia.imagenUrl}
              alt={noticia.titulo}
              className={styles.articleImage}
            />
            <p className={styles.articleDescription}>
              {noticia.contenido.replace(/<[^>]+>/g, "").slice(0, 150)}...
            </p>
          </article>
        ))
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => cambiarPagina(page - 1)}
          disabled={page === 1}
          style={{
            padding: "0.4rem 0.8rem",
            cursor: page === 1 ? "not-allowed" : "pointer",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          ←
        </button>

        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(
          (numeroPagina) => (
            <button
              key={numeroPagina}
              onClick={() => cambiarPagina(numeroPagina)}
              style={{
                padding: "0.4rem 0.8rem",
                fontWeight: numeroPagina === page ? "bold" : "normal",
                backgroundColor: numeroPagina === page ? "#0070f3" : "#f0f0f0",
                color: numeroPagina === page ? "#fff" : "#000",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {numeroPagina}
            </button>
          )
        )}

        <button
          onClick={() => cambiarPagina(page + 1)}
          disabled={page === totalPaginas}
          style={{
            padding: "0.4rem 0.8rem",
            cursor: page === totalPaginas ? "not-allowed" : "pointer",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          →
        </button>
      </div>
    </main>
  );
}
