import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
      <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Registrar</Link>
    </nav>
  );
}
