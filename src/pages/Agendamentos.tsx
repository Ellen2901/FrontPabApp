import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Headv from "../components/Headv";
import LinhaCinza from "../components/LinhaCinza";
import Botaoagendamento from "../components/Botaoagendamento";

interface Agendamento {
  nome: string;
  email: string;
  telefone: string;
  eventoId: number;
}

const eventosDisponiveis = [
  { id: 1, titulo: "Treino coletivo de futebol feminino", data: "2025-09-20" },
  { id: 2, titulo: "Workshop de liderança no esporte", data: "2025-09-25" },
  { id: 3, titulo: "Copa Passa a Bola", data: "2025-10-05" },
];

const Agendamentos: React.FC = () => {
  const [form, setForm] = useState<Agendamento>({
    nome: "",
    email: "",
    telefone: "",
    eventoId: eventosDisponiveis[0].id,
  });

  const [meusAgendamentos, setMeusAgendamentos] = useState<Agendamento[]>([]);

  // Carregar agendamentos salvos no localStorage
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("meusAgendamentos");
    if (dadosSalvos) {
      setMeusAgendamentos(JSON.parse(dadosSalvos));
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("meusAgendamentos", JSON.stringify(meusAgendamentos));
  }, [meusAgendamentos]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMeusAgendamentos((prev) => [...prev, form]);

    setForm({
      nome: "",
      email: "",
      telefone: "",
      eventoId: eventosDisponiveis[0].id,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Headv title="Agendamentos"/>

      <div className="flex-grow max-w-2xl w-full mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-purple-900 mb-2">
          Agende seu horário
        </h1>
        <p className="text-gray-600 mb-6">
          Escolha um evento e preencha seus dados para confirmar a inscrição.
        </p>

        <LinhaCinza />

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md mt-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Escolha o evento
            </label>
            <select
              name="eventoId"
              value={form.eventoId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {eventosDisponiveis.map((evento) => (
                <option key={evento.id} value={evento.id}>
                  {evento.titulo} — {evento.data}
                </option>
              ))}
            </select>
          </div>

          <Botaoagendamento texto="Cadastrar Agendamento" type="submit" />

        </form>

        {/* Box com os cadastros */}
        <div className="mt-10 mb-50">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Meus Agendamentos
          </h2>

          {meusAgendamentos.length === 0 ? (
            <p className="text-gray-500 mb-20">Você ainda não possui agendamentos.</p>
          ) : (
            <div className="space-y-4">
              {meusAgendamentos.map((ag, index) => {
                const evento = eventosDisponiveis.find(
                  (e) => e.id === Number(ag.eventoId)
                );
                return (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-md border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-800">
                      {evento?.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Data: {evento?.data}
                    </p>
                    <p className="text-sm text-gray-600">
                      Nome: {ag.nome}
                    </p>
                    <p className="text-sm text-gray-600">
                      E-mail: {ag.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      Telefone: {ag.telefone}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default Agendamentos;
