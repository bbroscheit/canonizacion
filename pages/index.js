import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Biografía del Padre Ashkar</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Biografía del Padre Francisco Julián Ashkar</h1>
        <article className={styles.article}>
          <p>
            Francisco Julián Ashkar nace el año de 1880 en Beit-Shabeb, a los quince años ingresó a la Orden Alepina Maronita (actualmente conocida como Orden Maronita Marianita). Ahí tomará el nombre religioso de “Manuel”...
            {/* CONTINÚA EL TEXTO COMPLETO ACÁ */}
          </p>
        </article>
      </main>
    </>
  )
}

