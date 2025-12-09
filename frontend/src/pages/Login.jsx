import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch("http://localhost:4000/api/login", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("token", data.token);
        window.location.href = "/home";
      } else {
        alert(data.error || "Credenciais inválidas!");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro no servidor!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Indústrias Wayne</h1>
        <h2>Acesso Restrito</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="seuemail@empresa.com"
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

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <p className="footer-text">© 2025 Indústrias Wayne</p>
      </div>
    </div>
  );
}
