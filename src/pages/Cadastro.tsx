import { useState } from "react";
import Fundo from "../img/Paginabg.jpg";
import LinhaCinza from "../components/LinhaCinza";
import { useNavigate } from "react-router-dom";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [sucesso, setSucesso] = useState(false);
   const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem!");
      return;
    }
    setErroSenha("");
    setSucesso(true);
  };

  if (sucesso) {
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Fundo})` }}
      >
        <div className="w-[28rem] box-border py-8 bg-white rounded-[20px] shadow-lg text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            Cadastro realizado com sucesso!
          </h1>
          <p className="text-gray-700">
            Agora você já pode fazer login.{" "}
            <a href="/login" className="text-purple-800 hover:underline">
              Clique aqui para entrar
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <div className="w-[22rem] p-8 bg-white/20 backdrop-blur-md rounded-[20px] shadow-lg flex flex-col gap-6 mt-10">
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Cadastre-se
          </h1>
          <h4 className="text-sm  text-white">
            Preencha os dados abaixo para se cadastrar.
          </h4>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label htmlFor="nome" className="text-sm font-medium text-white">
              Nome completo:
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full mt-1 border border-white rounded-[72.2px] shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="nascimento" className="text-sm font-medium text-white ">
              Data de nascimento:
            </label>
            <input
              type="date"
              id="nascimento"
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              required
              className="w-full mt-1 border border-white text-white rounded-[72.2px] shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 border border-white rounded-[72.2px] shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="senha" className="text-sm font-medium text-white">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full mt-1 border border-white rounded-[72.2px] shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="text-sm font-medium text-white">
              Confirmar Senha:
            </label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              className={`w-full mt-1 border rounded-[72.2px] shadow-sm p-2 ${erroSenha ? "border-red-500" : "border-white"
                }`}
            />
            {erroSenha && <p className="text-red-500 text-sm mt-1">{erroSenha}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white  py-2 px-4 rounded-[72.2px] hover:bg-purple-800"
          >
            Cadastrar
          </button>
        </form>



        <LinhaCinza />

        <div className="flex flex-col gap-3 mt-1">
          <button
            onClick={() => navigate("/cadastro-empresa")}
            className="w-full bg-purple-500 text-white py-2 rounded-[72.2px] hover:bg-purple-600"
          >
            Pessoa Jurídica
          </button>
        </div>



        <p className="mt-4 text-sm text-white text-center">
          Já tem um cadastro?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
