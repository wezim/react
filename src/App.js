import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/home';
import Contato from './components/pages/contato';
import Fotos from './components/pages/fotos';
import Comentarios from './components/pages/comentarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Fotos' element={<Fotos />} />
        <Route path='/Comentarios' element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
