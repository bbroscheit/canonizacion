import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Parroquia del Líbano</h1>
        <ul className="flex gap-6">
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
