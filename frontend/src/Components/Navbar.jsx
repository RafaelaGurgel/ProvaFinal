import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <img src="/assets/W.jpg" className="nav-logo" />
        <h1 className="nav-title">Weyne Industries</h1>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </nav>
  );
}
