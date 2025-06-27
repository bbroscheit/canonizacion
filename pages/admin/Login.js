import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      localStorage.setItem('loggedIn', 'true')
      router.push('/admin/Dashboard')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div>
      <h2>Ingreso de Administrador</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>Usuario</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Ingresar</button>
      </form>
    </div>
  )
}