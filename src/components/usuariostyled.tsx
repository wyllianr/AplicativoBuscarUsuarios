import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #1f1f1f;
  padding: 2rem;
  border-radius: 12px;
  flex-wrap: wrap;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid purple;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #3d3d3d;
  padding: 1.5rem;
  border-radius: 8px;
  width: 300px;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ccc;
`;

const ProfileButton = styled.a`
  background-color: #22c55e;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  margin-top: 1rem;
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
`;

export default function PerfilStyled() {
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
        <Container>
            <Card>
                <div style={{ textAlign: "center" }}>
                    {profile?.avatar_url ? (
                        <ProfileImage src={profile.avatar_url} alt="Foto de Perfil" />
                    ) : (
                        <ProfileImage as="div"></ProfileImage>
                    )}

                    {profile?.html_url && (
                        <ProfileButton href={profile.html_url} target="_blank">
                            Link do Perfil
                        </ProfileButton>
                    )}

                    <SearchInput
                        type="text"
                        placeholder="Buscar usuário (enter)"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleSearchKeyPress}
                    />
                </div>

                <Info>
                    <div>{profile?.name || "Nome não encontrado"}</div>
                    <Divider />
                    <div>{profile?.bio || "Sem biografia"}</div>
                    <Divider />
                    <div>Repositórios públicos: {profile?.public_repos ?? "Nenhum"}</div>
                </Info>
            </Card>
        </Container>
    );
}
