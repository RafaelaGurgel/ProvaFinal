import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dash-container">
      <div className="dash-box">
        <h1 className="dash-title">Painel Weyne Industries</h1>
        <p className="dash-subtitle">Bem-vindo ao sistema interno</p>

        <div className="dash-buttons">
          <Link className="dash-btn" to="/resources">Gerenciar Recursos</Link>
          <Link className="dash-btn" to="/login">Sair</Link>
        </div>
      </div>
    </div>
  );
}
