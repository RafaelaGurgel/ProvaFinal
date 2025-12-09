import React, { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Usuário cadastrado com sucesso!");

        // limpa campos
        setEmail("");
        setPassword("");
        setRole("EMPLOYEE");

        // opcional – redirecionar para login:
        // window.location.href = "/";
      } else {
        alert("❌ Erro ao cadastrar usuário: " + (data.error || data.message));
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("❌ Erro no servidor. Tente novamente.");
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1>Cadastro de Usuários</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@wayne.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="•••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Função</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="ADMIN">Administrador</option>
              <option value="MANAGER">Gerente</option>
              <option value="EMPLOYEE">Funcionário</option>
            </select>
          </div>

          <button type="submit" className="btn-cadastro">
            Cadastrar Usuário
          </button>
        </form>
      </div>
    </div>
  );
}

