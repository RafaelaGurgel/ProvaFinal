import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* Seu cabeçalho/menu aqui */}
      <header>
        <h1>Meu Sistema</h1>
      </header>
      
      <main>
        <Outlet /> {/* Isso renderiza as páginas filhas */}
      </main>
      
      {/* Seu rodapé aqui */}
    </div>
  );
}

export default Layout;