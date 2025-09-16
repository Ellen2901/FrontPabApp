

interface CardProps {
  title: string;
  conteudo: string;
  image: string;
}

const CardComBorda: React.FC<CardProps> = ({ title, image, conteudo }) => {
  return (

    <div className="flex justify-center items-center">
      <div className="flex-none w-90 bg-white rounded-xl shadow-md m-2 overflow-hidden">
        <img src={image} alt={title} className="w-full h-58 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-sm mb-5 mt-5">{title}</h3>
          <p className="text-sm ">{conteudo}</p>

        </div>
      </div>
    </div>
  );
};



export default CardComBorda;
