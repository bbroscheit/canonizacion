import { useState } from 'react';
import styles from '@/styles/Contacto.module.css';


export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [contador, setContador] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'mensaje') {
      setContador(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contacto/enviar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setEnviado(true);
      setFormData({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' });
      setContador(0);
      setTimeout(() => {
      location.reload();
      }, 1000)
    }
  };

  return (
    <div className={styles.contactoContainer}>
      <h1 className={styles.title}>Contacto</h1>

      {enviado ? (
        <div className={styles.mensajeExito}>¡Mensaje enviado con éxito!</div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <textarea
            name="mensaje"
            placeholder="Escribí tu mensaje"
            maxLength={500}
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
          <div className={styles.contadorCaracteres}>{contador}/500 caracteres</div>
          <button type="submit">Enviar mensaje</button>
        </form>
      )}
    </div>
  );
}
