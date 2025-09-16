interface BotaoProps {
  texto: string;
  type?: "button" | "submit" | "reset";
}

const Botaoagendamento: React.FC<BotaoProps> = ({ texto, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full bg-purple-800 text-white p-3 rounded-[72.2px] hover:bg-purple-700 transition"
    >
      {texto}
    </button>
  );
};

export default Botaoagendamento;
