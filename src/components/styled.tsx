import styled from "styled-components";

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
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid purple;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
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
  background-color: #257A25;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
`;

export default function ProfileStyled() {
  return (
    <Container>
      <Card>
        <div>
          <ProfileImage>Foto de Perfil</ProfileImage>
          <ProfileButton href="#">Link do Perfil</ProfileButton>
        </div>
        <Info>
          <div>Nome do Perfil</div>
          <Divider />
          <div>Biografia do Perfil</div>
          <Divider />
          <div>Lista de Repositórios Públicos</div>
        </Info>
      </Card>
    </Container>
  );
}
