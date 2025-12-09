import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      {/* Se Dashboard está dentro de Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Route>
      
      {/* Ou se cada página tem layout próprio */}
      {/* <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default AppRoutes;