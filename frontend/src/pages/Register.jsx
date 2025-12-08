import { useState } from "react";
import api from "../services/api";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Usuário registrado com sucesso!");
    } catch (err) {
      alert("Erro ao registrar usuário!");
    }
  }

  return (
    <div className="register-container">
      <h1>Registrar</h1>

      <form onSubmit={handleRegister}>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
