
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center p-4 bg-white shadow-md">
      
      <button
        onClick={() => navigate(-1)}
        className="p-2 mr-4 rounded-full hover:bg-gray-100"
      >
        <ArrowLeft size={24} />
      </button>

    
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
