import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Button = styled(Link)`
  background-color: #4f46e5;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;

  &:hover {
    background-color: #4338ca;
  }
`;

const TailwindButton = styled(Link)`
  background-color: #4f46e5;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.2rem;

  &:hover {
    background-color: #4338ca;
  }
`;

export default function Home() {
  return (
    
    <Container>
      <h1>Escolha um estilo</h1>
      <Button to="/styled">Styled-Component</Button>
      <TailwindButton to="/tailwind">Tailwind</TailwindButton>
    </Container>
  );
}
