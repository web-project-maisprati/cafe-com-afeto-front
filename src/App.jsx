import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Doacao from './pages/Doacao/Doacao'



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doacao" element={<Doacao />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
