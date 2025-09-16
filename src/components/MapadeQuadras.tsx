import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface CardProps {
  id: number;
  title: string;
  image: string;
  location: string;
}

interface CarroselProps {
  cards: CardProps[];
}

const Card: React.FC<{
  card: CardProps;
  favoritos: number[];
  toggleFavorito: (id: number) => void;
}> = ({ card, favoritos, toggleFavorito }) => {
  return (
    <div className="relative flex-none w-64 bg-white rounded-xl shadow-md m-2 overflow-hidden">
      <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
      
      {/* Botão de coração */}
      <button
        onClick={() => toggleFavorito(card.id)}
        className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
      >
        <Heart
          size={20}
          className={favoritos.includes(card.id) ? "text-red-500 fill-red-500" : "text-gray-500"}
        />
      </button>

      <div className="p-4">
        <h3 className="font-semibold text-sm">{card.title}</h3>
        <p className="text-xs text-gray-500">{card.location}</p>
      </div>
    </div>
  );
};

const Carrosel: React.FC<CarroselProps> = ({ cards }) => {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  // Carrega favoritos do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favoritos");
    if (stored) setFavoritos(JSON.parse(stored));
  }, []);

  // Salva favoritos no localStorage
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex overflow-x-auto p-4 space-x-2 scrollbar-hide">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          favoritos={favoritos}
          toggleFavorito={toggleFavorito}
        />
      ))}
    </div>
  );
};

export default Carrosel;
