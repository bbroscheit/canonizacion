import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Parroquia del Líbano</h1>
        <ul className={styles.ul}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/Parroquia">Parroquia del Líbano</Link></li>
          <li><Link href="/Gracias">Gracias Recibidas</Link></li>
          <li><Link href="/Actualidad">Actualidad</Link></li>
          <li><Link href="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}
