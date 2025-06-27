import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm mt-12">
      <p>&copy; {new Date().getFullYear()} Parroquia del Líbano - Todos los derechos reservados</p>
      <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>
        <Link href="/admin/Login" style={{ color: '#999' }}>Acceso administrador</Link>
      </p>
    </footer>
  )
}
