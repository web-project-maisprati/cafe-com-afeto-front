
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Doacao from './pages/Doacao/Doacao'
import Sobre from './pages/Sobre/Sobre'
import Erro from './pages/Erro/Erro'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/doacao" element={<Doacao />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="*" element={<Erro />} />
                </Route>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />
        </BrowserRouter>
    )
}

export default App
