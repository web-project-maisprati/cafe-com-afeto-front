import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Header.css'
import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6"

function Header() {

    const [tema, setTema] = useState(
        () => localStorage.getItem("tema") || "light"
    )
    const [menuAberto, setMenuAberto] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", tema)
        localStorage.setItem("tema", tema)
    }, [tema])

    function alternarTema() {
        setTema(tema === "light" ? "dark" : "light")
    }

    function alternarMenu() {
        setMenuAberto(!menuAberto)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <strong>Café com Afeto</strong>
                </div>

                <button
                    className="menu-hamburguer"
                    onClick={alternarMenu}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                >
                    {menuAberto ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
                </button>

                <div className={`menu ${menuAberto ? "menu-aberto" : ""}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuAberto(false)}>Home</Link></li>
                        <li><Link to="/doacao" onClick={() => setMenuAberto(false)}>Doar</Link></li>
                        <li><Link to="/voluntario" onClick={() => setMenuAberto(false)}>Seja Voluntário</Link></li>
                         <li><Link to="/campanhas" onClick={() => setMenuAberto(false)}>Nossas Campanhas</Link></li>
                          <li><Link to="/historias" onClick={() => setMenuAberto(false)}>Histórias</Link></li>

                        
                        
                        
                        
                    </ul>
                    <button
                        className="tema-toggle"
                        onClick={alternarTema}
                        aria-label="Alternar tema claro/escuro"
                    >
                        {tema === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                    </button>
                    <Link to="/login" className="btn-entrar" onClick={() => setMenuAberto(false)}>Entrar</Link>
                </div>
            </div>
        </header>
    )
}

export default Header