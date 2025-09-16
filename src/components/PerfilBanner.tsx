import React, { useState, useEffect } from "react";
import { Pencil, Camera, Video, Trash2 } from "lucide-react";


const PerfilBanner: React.FC = () => {
  const [banner, setBanner] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);

  // 🔹 Carregar dados do localStorage
  useEffect(() => {
    const savedBanner = localStorage.getItem("bannerPerfil");
    const savedAvatar = localStorage.getItem("fotoPerfil");
    const savedVideo = localStorage.getItem("videoPerfil");

    if (savedBanner) setBanner(savedBanner);
    if (savedAvatar) setAvatar(savedAvatar);
    if (savedVideo) setVideo(savedVideo);
  }, []);

  // 🔹 Atualizar banner
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setBanner(base64);
      localStorage.setItem("bannerPerfil", base64);
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Atualizar avatar
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setAvatar(base64);
      localStorage.setItem("fotoPerfil", base64);
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Upload de vídeo
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setVideo(url);
    localStorage.setItem("videoPerfil", url);
  };

  // 🔹 Excluir vídeo
  const handleDeleteVideo = () => {
    setVideo(null);
    localStorage.removeItem("videoPerfil");
  };

  return (
    <div>
      {/* 🔹 Banner + Avatar */}
      <div className="relative w-full h-48 bg-gray-200">
        {banner ? (
          <img src={banner} alt="Banner" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-purple-500" />
        )}

        {/* Botão editar banner */}
        <label className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100">
          <Pencil size={18} className="text-purple-600" />
          <input type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
        </label>

        {/* Avatar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-lg">
                <Camera size={28} className="text-gray-600" />
              </div>
            )}

            {/* Botão editar avatar */}
            <label className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100">
              <Pencil size={16} className="text-purple-600" />
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </label>
          </div>
        </div>
      </div>

      





      {/* 🔹 Vídeo abaixo do banner/avatar */}
      <div className="mt-20 flex flex-col items-center">

        <div className="max-w-md p-2">
        <h1 className="text-2sm font-bold ">Vídeo</h1>
        </div>
        <div className="ml-6 text-gray-500">
               <p>Adicione aqui seu video jogando</p>
            </div>


        {video ? (
          <div className="relative w-full max-w-md p-4">
            <video controls src={video} className="w-full rounded-lg shadow" />
            <button
              onClick={handleDeleteVideo}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ) : (
          <label className="mt-4 flex items-center gap-2 cursor-pointer text-purple-600 hover:underline">
            <Video size={20} />
            Adicionar vídeo
            <input type="file" accept="video/*" className="hidden" onChange={handleVideoChange} />
          </label>
        )}
      </div>
    </div>
  );
};

export default PerfilBanner;
