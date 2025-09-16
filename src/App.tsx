import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import PaginaInicial from "./pages/PaginaInicial";
import Noticias from "./pages/Noticias";
import Eventos from "./pages/Eventos"
import Usuario from "./pages/Usuário";
import Agendamentos from "./pages/Agendamentos";
import Configuracoes from "./pages/Configurações";
import SSO from "./pages/SSO"
import Quadra from "./pages/Quadras"


const App: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PaginaInicial />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} /> 
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} /> 
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/Agendamentos" element={<Agendamentos />} />
        <Route path="/configuracoes" element={<Configuracoes/>} />
        <Route path="/sso" element={<SSO />} />
        <Route path="/quadras" element={<Quadra />} />

       
        <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
