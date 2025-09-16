import React, { useState } from "react";
import { Pencil } from "lucide-react";
import Headv from "../components/Headv";
import PerfilBanner from "../components/PerfilBanner";
import NavBar from "../components/NavBar";

interface UserFieldProps {
  label: string;
  value: string;
  editable?: boolean;
}

const UserField: React.FC<UserFieldProps> = ({ label, value, editable = true }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <div>


      <div className="flex items-center justify-between border rounded-full px-4 py-2 mb-2 bg-white shadow-sm">

        {isEditing ? (
          <input
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="flex-1 bg-transparent outline-none text-gray-700"
            autoFocus
          />
        ) : (
          <span className="flex-1 text-gray-700">{fieldValue || label}</span>
        )}

        {editable && (
          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 text-gray-500 hover:text-purple-600 transition-colors"
          >
            <Pencil size={18} />
          </button>
        )}
      </div>

    </div>
  );
};

const UserProfile: React.FC = () => {
  return (
    <div>

      <div>
        <Headv title="Perfil" />
      </div>

      <div>
        <PerfilBanner />

      </div>

      <div className="max-w-md p-6">
        <h1 className="text-2sm font-bold ">Bio</h1>
        <UserField label="Adicione a sua Bio" value="" />


      </div>

      
      <div className="max-w-md  p-6 mb-20 ">
        <h1 className="text-xl font-bold ">Editar Perfil</h1>

        <UserField label="Nome Completo" value="" />
        <UserField label="Data de nascimento" value="" />
        <UserField label="Email" value="" />
        <UserField label="Telefone para contato" value="" />
        <UserField label="Cidade" value="" />
        <UserField label="Altura" value="" />
        <UserField label="Peso" value="" />
        <UserField label="Pé Dominante" value="" />
        <UserField label="Posição Principal" value="" />
        <UserField label="Posições Secundárias" value="" />
        <UserField label="Tempo Médio em Campo" value="" />
        <UserField label="Disponibilidade para Viagens/Seletivas" value="" />
        <UserField label="Nome do time que joga" value="" />
      </div>
      <NavBar />
    </div>
  );
};

export default UserProfile;
