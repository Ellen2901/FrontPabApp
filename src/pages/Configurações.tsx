import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Key } from "lucide-react";
import NavBar from "../components/NavBar";
import Headv from "../components/Headv"
 
const Configuracoes: React.FC = () => {
    const [nome, setNome] = useState("Meu Perfil");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFoto = localStorage.getItem("fotoPerfil");
    if (savedFoto) setFoto(savedFoto);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleUserPage = () => {
    navigate("/usuario");
  };

  const handleSalvar = () => {
    alert("Configurações salvas!");
    // aqui você poderia salvar no backend ou no localStorage
  };


  return (
    <div>
         <div className=" z-20">
            <Headv title=" Configurações"/>
        </div>
    <div className="min-h-screen -mt-10 flex flex-col items-center justify-center p-6">
        
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">

        {/* Foto sincronizada */}
        <div className="flex flex-col items-center">
          <div
            onClick={handleUserPage}
            className="w-24 h-24 rounded-full overflow-hidden cursor-pointer hover:opacity-80"
          >
            {foto ? (
              <img
                src={foto}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">+</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">Clique para ver perfil</p>
        </div>

        {/* Nome de perfil */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome de Perfil
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring focus:ring-purple-300 outline-none"
          />
        </div>

        {/* Redefinir senha */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Redefinir Senha
          </label>
          <div className="relative">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua nova senha"
              className="mt-1 w-full border rounded-lg px-3 py-2 pr-10 focus:ring focus:ring-purple-300 outline-none"
            />
            <Key className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleSalvar}
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Salvar
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            <LogOut size={18} /> Sair
          </button>
        </div>
      </div>

      <NavBar />
    </div>
    </div>
  );
};



export default Configuracoes;
