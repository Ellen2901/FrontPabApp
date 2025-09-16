import React from "react";
import { Circle } from "lucide-react"; 

interface LiveBoxProps {
  imageUrl: string;
  liveText?: string;
}

const LiveBox: React.FC<LiveBoxProps> = ({ imageUrl, liveText = "Ao Vivo" }) => {
  return (

    <div className="flex justify-center items-center p-4">
    <div className="relative w-95 h-48 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
     
      <img src={imageUrl} alt="Live" className="w-full h-full object-cover" />

     
      <div className="absolute top-2 left-2 flex items-center gap-2 bg-black bg-opacity-50 px-3 py-1 rounded-md">
       
        <Circle className="text-red-500 animate-ping w-4 h-4" />
        <span className="text-white font-semibold text-sm">{liveText}</span>
      </div>
    </div>
    </div>
  );
};

export default LiveBox;
