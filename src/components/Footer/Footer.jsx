import {Link} from 'react-router-dom'
import './Footer.css'
import { FaLocationDot, FaPhone, FaEnvelope, FaInstagram, FaRegCopyright } from "react-icons/fa6"

function Footer() {

  

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <strong>Café com Afeto</strong>
          <div className='footer-text'>
            <p>Conectamos doadores
              e voluntários a pessoas
              que mais precisam,
              com transparência
              em cada etapa.</p>
          </div>
        </div>
        <div className='footer-menu'>
          <strong>Institucional</strong>
          <ul>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/missão">Nossa Missão</Link></li>
            <li><Link to="/transparencia" onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'default' }}
            >Transparência</Link></li>
            <li><Link to="/Prestação de contas" onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'default' }}
            >Prestação de Contas</Link></li>
          </ul>
        </div>
        <div className='footer-menu-ajuda'>
          <strong>Como Ajudar</strong>
          <ul>
            <li><Link to="/doacao">Fazer uma Doação</Link></li>
            <li><Link to="/voluntario">Seja um voluntário</Link></li>
            <li><Link to="/campanhas" onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'default' }}
            >Nossas Campanhas</Link></li>
            <li><Link to="/histórias" onClick={(e) => e.preventDefault()}
              style={{ pointerEvents: 'none', opacity: 0.5, cursor: 'default' }}
            >Histórias</Link></li>
          </ul>
        </div>
        <div className='contato'>
          <strong>Contato</strong>
          <div className='local'>
            <FaLocationDot />
            <p>Presidente Dutra, MA</p>
          </div>
          <div className='tel'>
            <FaPhone />
            <p>(99) 99999-9999</p>
          </div>
          <div className='email'>
            <FaEnvelope />
            <p>contato@cafecomafeto.org</p>

          </div>
          <div className='instagram'>
            <FaInstagram />
            <p>@cafecomafeto</p>
          </div>

        </div>
      </div>
      <div className="footer-section">

      </div>

      <div className='copy'>
        <FaRegCopyright />
        <p>2026 Café com Afeto.Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
