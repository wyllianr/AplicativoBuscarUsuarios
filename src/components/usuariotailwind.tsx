import { useState, useEffect } from "react";

export default function ProfileTailwind() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<any>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    }

    fetchUser();
  }, [username]);

  function handleSearchKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && search.trim() !== "") {
      setUsername(search.trim());
      setSearch("");
    }
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] flex justify-center items-center">
      <div className="flex gap-8 bg-[#3d3d3d] p-8 rounded-2xl w-full max-w-4xl flex-wrap">
        <div className="text-center flex-shrink-0">
          {profile?.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt="Foto de Perfil"
              className="w-36 h-36 border-4 border-[#8b5cf6] rounded-full object-cover"
            />
          ) : (
            <div className="w-36 h-36 border-4 border-[#8b5cf6] rounded-full bg-gray-400"></div>
          )}

          {profile?.html_url && (
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] text-white py-2 px-6 rounded-lg mt-4 inline-block"
            >
              Link do Perfil
            </a>
          )}

          <input
            type="text"
            placeholder="Buscar usuário"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearchKeyPress}
            className="mt-4 p-3 rounded-lg w-full bg-[#2a2a2a] text-white placeholder:text-gray-400 border-none outline-none text-lg"
          />
        </div>

        <div className="bg-[#3d3d3d] p-6 rounded-lg w-80">
          <div className="text-white text-xl">{profile?.name || "Nome não encontrado"}</div>
          <hr className="my-4 border-[#8b5cf6]" />
          <div className="text-white">{profile?.bio || "Sem biografia"}</div>
          <hr className="my-4 border-[#8b5cf6]" />
          <div className="text-white">Repositórios públicos: {profile?.public_repos ?? "nenhum"}</div>
        </div>
      </div>
    </div>
  );
}
