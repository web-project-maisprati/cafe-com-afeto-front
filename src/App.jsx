import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Doacao from './pages/Doacao/Doacao'
import Sobre from './pages/Sobre/Sobre'
import Voluntario from './pages/Voluntario/Voluntario'
import Campanhas from './pages/Campanhas/Campanhas'
import Historias from './pages/Historias/Historias'
import Erro from './pages/Erro/Erro'



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/voluntario' element={<Voluntario />} />
          <Route path='/campanhas' element={<Campanhas />} />
          <Route path='/historias' element={<Historias />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
