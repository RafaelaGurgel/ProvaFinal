import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.post("/auth/register", { email, password, role });
      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch (err) {
      setError("Erro ao registrar usuário");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-box">
        <h2>Criar Conta</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="EMPLOYEE">EMPLOYEE</option>
          <option value="MANAGER">MANAGER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button type="submit">Registrar</button>

        <p className="register-link" onClick={() => navigate("/login")}>
          Já tenho conta
        </p>
      </form>
    </div>
  );
}
