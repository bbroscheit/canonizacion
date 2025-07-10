import { useState } from "react";
import Head from "next/head";
import prisma from '../lib/prisma'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 👈 IMPORTANTE
import "swiper/css";
import styles from "../styles/Gracias.module.css";

export async function getServerSideProps() {
  const graciasRecibidasRaw = await prisma.gracias.findMany({
    take: 10,
    orderBy: { fechaCreacion: "desc" },
  });

  const graciasRecibidas = graciasRecibidasRaw.map((gracia) => ({
    ...gracia,
    fechaCreacion: gracia.fechaCreacion.toISOString(), // <-- string
  }));

  return {
    props: { graciasRecibidas },
  };
}

export default function Gracias({ graciasRecibidas } ) {
  
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
    if (res.ok) {
    setEnviado(true);
    setTimeout(() => {
      location.reload();
    }, 1000); // espera 1 segundo
  }
  };

  return (
    <>
      <Head>
        <title>Gracias Recibidas</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Gracias recibidas
        </h1>
        <Swiper
          className={styles.swiperContainer}
          modules={[Autoplay]}
          spaceBetween={1}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 1000 }}
          style={{ paddingBottom: "1rem" }}
>
      {graciasRecibidas && graciasRecibidas.map(({ id, nombre, comentario, fechaCreacion }) => (
        <SwiperSlide key={id}>
          <div className={styles.graciasCard}>
          <h4 className={styles.nombreCard}>
            {nombre}
          </h4>
          <p className={styles.fechaCreacionCard}>{new Date(fechaCreacion).toLocaleDateString("es-AR")} </p>
          <p className={styles.comentarioCard}>{comentario}</p>
        </div>
      </SwiperSlide>
      ))}
      </Swiper>
        
        <h2 className="text-2xl font-semibold mb-4">Envía tu agradecimiento</h2>

        {enviado ? (
          <p className={styles.mensajeExito}>
            ¡Gracias por tu mensaje!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
              
            />
            <textarea
              name="comentario"
              placeholder="Escribí tu agradecimiento..."
              value={form.comentario}
              onChange={handleChange}
              required
              maxLength={500}
              
            />
            <p className={styles.contadorCaracteres}>
              {form.comentario.length}/500 caracteres
            </p>
            <button
              type="submit"
              
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </>
  );
}
