import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home/Home';
import History from '../components/History/History';
import Settings from '../components/Settings/Settings';
import About from '../components/About/About';
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='Historico' element={<History />} />
          <Route path='Configuracoes' element={<Settings />} />
          <Route path='Sobre' element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
