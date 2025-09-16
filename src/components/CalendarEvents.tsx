import React from "react";
import Botao from "./Botao";

interface CardProps {
  title: string;
  date: string;
  time: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, date, time, image }) => {
  return (
    <div className="flex-none w-64 bg-white rounded-xl shadow-md m-2 overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{date} - {time}</p>
        <div className="p-4 ">
          <Botao texto="Se iscreva agora" caminho="/Agendamentos" />
        </div>
      </div>
    </div>
  );
};

const Carousel: React.FC<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          date={card.date}
          time={card.time}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Carousel;
