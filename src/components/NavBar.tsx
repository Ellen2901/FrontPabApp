import { Link, useLocation } from "react-router-dom";
import { Home, User,  Book, Calendar, } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { to: "/home", icon: Home, label: "Início" },
  { to: "/noticias", icon: Book, label: "Notícias" },
  { to: "/eventos", icon: Calendar, label: "Eventos" },
  { to: "/usuario", icon: User, label: "Perfil" },
];


const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-8">
        {items.map((item) => {
          const isActive = location.pathname === item.to;
          const Icon = item.icon;

          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative z-10 flex items-center justify-center w-12 h-12"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-purple-400 rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={24} className="relative z-10" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
