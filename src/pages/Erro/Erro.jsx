import { Link } from 'react-router-dom'
import './Erro.css'

function Erro() {
    return (
        <main className="erro">
            <section>
                <div className="erro-container">
                    <strong>Erro 404</strong>
                    <h1>Página não encontrada</h1>
                    <p>
                        O endereço que você tentou acessar não existe
                        ou foi movido.
                    </p>
                    <Link to="/" className="erro-link">
                        Voltar para o início
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Erro