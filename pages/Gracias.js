import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Gracias.module.css";

export default function Gracias() {
  const [form, setForm] = useState({ nombre: "", email: "", comentario: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/gracias/enviar-gracias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Gracias Recibidas</title>
      </Head>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Gracias recibidas
        </h1>

        {/* Muro de gracias */}
        <div className="space-y-6 mb-12">
          {/* Acá deberías mapear mensajes si los vas a guardar en base de datos */}
          <div className="border p-4 rounded shadow">
            <p>
              <strong>Juan Pérez</strong> – 10/06/2025
            </p>
            <p>Gracias por el milagro recibido. ¡Estoy muy agradecido!</p>
          </div>
          <div className="border p-4 rounded shadow">
            <p>
              <strong>María López</strong> – 22/06/2025
            </p>
            <p>Fray Mamerto intercedió por la salud de mi mamá. ¡Gracias!</p>
          </div>
          {/* más agradecimientos... */}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Enviar agradecimiento</h2>

        {enviado ? (
          <p className="text-green-600 font-semibold">
            ¡Gracias por tu mensaje!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
            <textarea
              name="comentario"
              placeholder="Escribí tu agradecimiento..."
              value={form.comentario}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded h-40"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </>
  );
}
