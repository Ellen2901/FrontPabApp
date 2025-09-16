import React from "react";

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="flex-none w-64 bg-white rounded-xl shadow-md m-2 overflow-hidden">
      <img src={image} alt={title} className="w-full h-58 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        
      </div>
    </div>
  );
};

const Carrosel: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Carrosel;
