import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import Recursos from "./pages/Recursos.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial é LOGIN */}
        <Route path="/" element={<Login />} />

        {/* HOME depois do login */}
        <Route path="/home" element={<Home />} />

        {/* Outras páginas */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recursos" element={<Recursos />} />


        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
