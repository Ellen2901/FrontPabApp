import React from "react";

export interface GridItem {
  title: string;
  imageUrl: string;
}

interface GridProps {
  items: GridItem[];
}

const Parceiros: React.FC<GridProps> = ({ items }) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 px-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="w-25 h-25 mb-25 rounded-xl shadow-md overflow-hidden relative cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          

          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-indigo-800/70 to-transparent flex items-center justify-center">
            <h3 className="text-purple-900 text-xs font-semibold uppercase text-center px-1">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parceiros;
