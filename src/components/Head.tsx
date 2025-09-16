import { Link } from "react-router-dom"; // ou "next/link" se for Next.js
import Logo from "../img/logo.jpg";
import { Settings } from "lucide-react"; // exemplo de ícone de configurações

const Head = () => {
  return (
    <div className="flex items-center justify-between rounded-b-[30px] p-2 w-full mb-2">
      
      
      <div className="flex items-center ml-4">
        <p className="font-semibold text-lg text-black mb-2 ml-6">
          Página Inicial
        </p>
      </div>

      
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-16 ml-4" />

      
        <Link to="/configuracoes" className="ml-4 hover:text-purple-600">
          <Settings className="h-6 w-6 mr-3" />
        </Link>
      </div>
    </div>
  );
};

export default Head;
