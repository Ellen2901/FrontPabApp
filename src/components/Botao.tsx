import React from "react";
import { Link } from "react-router-dom";

interface BotaoProps {
  texto: string;
  caminho: string;
}

const Botao: React.FC<BotaoProps> = ({ texto, caminho }) => {
  return (
    <Link
      to={caminho}
      
      className="mt-0 py-2 bg-purple-900 text-white font-semibold rounded-[72.2px] shadow-md hover:bg-purple-900 transition flex  items-center justify-center"
    >
      {texto}
    </Link>
  );
};

export default Botao;
