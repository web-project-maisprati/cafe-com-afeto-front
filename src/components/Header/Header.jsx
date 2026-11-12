import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6";
import { useAuth } from "../../contexts/AuthContext";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") || "light",
  );
  const { autenticado, logout } = useAuth();
  const [usuarioMenuAberto, setUsuarioMenuAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  function alternarTema() {
    setTema(tema === "light" ? "dark" : "light");
  }

  function alternarMenu() {
    setMenuAberto(!menuAberto);
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
          {menuAberto ? (
            <FaXmark aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>

        <div className={`menu ${menuAberto ? "menu-aberto" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuAberto(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/doacao" onClick={() => setMenuAberto(false)}>
                Doar
              </Link>
            </li>

            <li>
              <Link to="/sobre" onClick={() => setMenuAberto(false)}>
                Sobre Nós
              </Link>
            </li>
          </ul>
          <button
            className="tema-toggle"
            onClick={alternarTema}
            aria-label="Alternar tema claro/escuro"
          >
            {tema === "light" ? (
              <FaMoon aria-hidden="true" />
            ) : (
              <FaSun aria-hidden="true" />
            )}
          </button>
          {autenticado ? (
            <div className="usuario-menu">
              <button
                className="usuario-icone"
                onClick={() => setUsuarioMenuAberto(!usuarioMenuAberto)}
                aria-label="Menu do usuário"
                aria-expanded={usuarioMenuAberto}
              >
                <FaCircleUser aria-hidden="true" />
              </button>

              {usuarioMenuAberto && (
                <button
                  className="btn-sair"
                  onClick={() => {
                    logout();
                    setUsuarioMenuAberto(false);
                    setMenuAberto(false);
                  }}
                >
                  Sair
                </button>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn-entrar"
              onClick={() => setMenuAberto(false)}
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
