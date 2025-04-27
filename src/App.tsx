import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/StyledComponents';
import Navegacao from './components/navegacao';
import UsuarioStyled from './components/usuariostyled';
import UsuarioTailWind from './components/usuariotailwind';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navegacao />} />
        <Route path="/styled" element={<UsuarioStyled />} />
        <Route path="tailwind" element={<UsuarioTailWind />} />
      </Routes>
    </Router>
  );
}

export default App;
