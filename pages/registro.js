import { useState } from 'react'

export default function Registro() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (res.ok) {
      setMensaje('Usuario creado correctamente')
      setForm({ email: '', password: '' })
    } else {
      setMensaje(data.error || 'Error al crear usuario')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  )
}
