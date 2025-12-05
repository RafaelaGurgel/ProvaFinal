import { useEffect, useState } from "react";
import api from "../services/api";
import "../index.css";

export default function Resources() {
  const [items, setItems] = useState([]);

  async function load() {
    const res = await api.get("/resources");
    setItems(res.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Recursos</h1>

      {items.length === 0 ? (
        <p>Nenhum recurso cadastrado.</p>
      ) : (
        items.map((r) => (
          <div key={r.id} style={{
            background: "#f9f9f9",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
          }}>
            <h3>{r.nome}</h3>
            <p>{r.descricao}</p>
          </div>
        ))
      )}
    </div>
  );
}
