import React from "react";
import { Link } from "react-router-dom";

interface BotaoProps {
  texto: string;
  caminho: string;
}



    const BottonSSO: React.FC<BotaoProps> = ({ texto, caminho }) => {
      return (
        <Link
          to={caminho}
          
          className="w-full bg-gray-200 text-black py-3 px-27 rounded-[72.2px] hover:bg-gray-400"
        >

            <i className="fa-regular fa-cloud m-2"></i>

          {texto}
        </Link>
      );
    };



export default BottonSSO;

