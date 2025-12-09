import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// IMPORTANDO A LOGO CERTA
import wayneLogo from "../assets/waynelogo.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* LOGO */}
      <header className="home-header">
        <img
          src={wayneLogo}
          alt="Wayne Enterprises"
          className="home-logo"
        />
      </header>

      {/* HERO */}
      <div className="home-hero">
        <div className="hero-box">
          <h1>Indústrias Wayne</h1>
          <p>Sistema interno de segurança e gerenciamento corporativo.</p>

          <div className="home-buttons">
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/recursos")}>Recursos</button>
            <button onClick={() => navigate("/cadastro")}>Cadastro</button>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        © 2025 Wayne Enterprises — Sistema Interno
      </footer>
    </div>
  );
}
