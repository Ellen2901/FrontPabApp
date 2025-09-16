import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fundo from "../img/Paginabg.jpg";
import BottonGoogle from "../components/BottonGoogle";
import BottonSSO from "../components/BottonSSO";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && senha) {
      const fakeToken = "123";
      localStorage.setItem("token", fakeToken);
      navigate("/home");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundImage: `url(${Fundo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-[22rem] p-8 bg-white/20 backdrop-blur-md rounded-[20px] shadow-lg flex flex-col gap-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Login</h2>
          <h3 className="text-sm text-white mt-2">Prazer em te ver novamente!</h3>
        </div>


        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-white">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-full p-2 placeholder-white "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="text-sm font-medium text-white">Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-full p-2 placeholder-white "
            />
          </div>

          <div>
            <p className="text-sm text-white ">
              Esqueceu a senha?{" "}
              <a href="/" className="text-gray-300 hover:underline">Clique aqui</a> {/*Adicionar aqui na segunda entrega o caminho apra o esqueceu a senha */}
            </p>
          </div>



          <button
            type="submit"
            className="w-full bg-purple-900 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-900"
          >
            Entrar
          </button>


          <BottonGoogle />
          
          <div className="">
            <BottonSSO texto="SSO" caminho="/sso" />

         </div>

        </form>


        <p className="text-sm text-white text-center">
          Não tem um cadastro?{" "}
          <a href="/cadastro" className="text-purple-300 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>

  );
};

export default Login;
