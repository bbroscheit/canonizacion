import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
// import LexicalEditor from "../components/LexicalEditor";

// const LexicalEditor = dynamic(() => import('../components/LexicalEditor'), {
//   ssr: false,
//   loading: () => <div>Cargando editor...</div>
// });

export default function Dashboard() {
  const [noticias, setNoticias] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    contenido: "",
    imagen: "",
  });
  const [editId, setEditId] = useState(null);
  const router = useRouter();
  

  const fetchNoticias = async () => {
    const res = await fetch("/api/noticias");
    const data = await res.json();
    setNoticias(data);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      router.push("/admin/Login");
    }
  }, []);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('1form.imagen:', form.imagen)

    const formData = new FormData();
    formData.append("titulo", form.titulo);
    formData.append("contenido", form.contenido);
    formData.append("imagen", form.imagen);

    console.log('2form.imagen:', form.imagen)

    const method = editId ? "PUT" : "POST";
    const url = editId ? `/api/noticias/${editId}` : "/api/noticias";

    // await fetch(url, {
    //   method,
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })

    await fetch(url, {
      method,
      body: formData,
    });

    setForm({ titulo: "", contenido: "", imagen: null });
    setEditId(null);
    fetchNoticias();
  };

  const handleDelete = async (id) => {
    if (confirm("¿Eliminar esta noticia?")) {
      await fetch(`/api/noticias/${id}`, { method: "DELETE" });
      fetchNoticias();
    }
  };

  const handleEdit = (noticia) => {
    setEditId(noticia.id);
    setForm({
      titulo: noticia.titulo,
      contenido: noticia.contenido,
      imagen: noticia.imagen,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleLogout}>Cerrar sesión</button>
      <h2>{editId ? "Editar Noticia" : "Nueva Noticia"}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Título"
          value={form.titulo}
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <input
          type="file"
          name="imagen"
          accept="image/*"
          required
          onChange={(e) => setForm({ ...form, imagen: e.target.files[0] })}
        />
        {/* <LexicalEditor
          value={form.contenido}
          onChange={(newValue) => setForm({ ...form, contenido: newValue })}
        /> */}
        <textarea
          placeholder="Contenido"
          value={form.contenido}
          onChange={(e) => setForm({ ...form, contenido: e.target.value })}
          required
          rows="5"
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <button type="submit">{editId ? "Actualizar" : "Crear"}</button>
      </form>

      <h3>Noticias</h3>
      <ul>
        {noticias.map((n) => (
          <li key={n.id} style={{ marginBottom: "15px" }}>
            <strong>{n.titulo}</strong> (
            {new Date(n.fechaCreacion).toLocaleDateString()})<br />
            <img
              src={n.imagenUrl}
              alt={n.titulo}
              style={{ maxWidth: "200px", margin: "10px 0" }}
            />
            <button onClick={() => handleEdit(n)}>Editar</button>
            <button
              onClick={() => handleDelete(n.id)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
