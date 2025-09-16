import { Link } from "react-router-dom";
import Paginabg from "../img/paginabg.jpg";

const PaginaInicial: React.FC = () => {
  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-between items-center bg-cover bg-center px-6 py-10"
      style={{ backgroundImage: `url(${Paginabg})` }}
    >


      
      <div className="relative z-10 w-full text-center mt-10">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          PabApp
        </h1>
        <h3 className="text-lg font-medium text-white/90 mt-2">
          Mulheres no futebol
        </h3>
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-4 mb-10">
        <Link
          to="/login"
          className="bg-white/20 backdrop-blur-md text-white font-semibold py-3 rounded-xl text-center hover:bg-white/30 transition"
        >
          Entrar
        </Link>

        <Link
          to="/cadastro"
          className="text-white/80 text-sm text-center hover:text-white transition"
        >
          Criar uma conta
        </Link>
      </div>
    </div>
  );
};

export default PaginaInicial;
