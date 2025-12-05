import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />

        <Route
          path="/resources"
          element={<ProtectedRoute element={<Resources />} />}
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
