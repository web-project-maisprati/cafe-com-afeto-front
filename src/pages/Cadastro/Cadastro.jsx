import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cadastro.css'

function Cadastro() {
    const navigate = useNavigate()

    const [tipoParticipante, setTipoParticipante] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    
    const [mostrarSenha, setMostrarSenha] = useState(false)
    const [mensagem, setMensagem] = useState('')
    const [erro, setErro] = useState(false)

    function handleCadastroVoluntario(event) {
        event.preventDefault()

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const estadoValido = /^[a-zA-Z]{2}$/

        if (!estadoValido.test(estado)) {
            setMensagem('O campo Estado deve conter exatamente as 2 letras da sigla (ex: SP).')
            setErro(true)
            return
        }

        if (!emailValido.test(email)) {
            setMensagem('Digite um e-mail válido, com domínio.')
            setErro(true)
            return
        }

        if (senha.length < 8) {
            setMensagem('A senha deve ter pelo menos 8 caracteres.')
            setErro(true)
            return
        }

        setMensagem('Cadastro realizado com sucesso! Entraremos em contato em breve.')
        setErro(false)

        setTimeout(() => {
            navigate('/login')
        }, 3000)
    }

    return (
        <section className="pagina-simples">
            <div className="pagina-simples-container">

                <h1>Cadastro</h1>

                {tipoParticipante === '' && (
                    <div className="secao-participar-centralizada">
                        <p className="titulo-participar">Como você quer participar?</p>
                        <div className="opcoes-participar">
                            <button
                                type="button"
                                className="card-participar"
                                onClick={() => setTipoParticipante('voluntario')}
                            >
                                <span className="icon">👤</span>
                                <div className="texto-card">
                                    <strong>Voluntário</strong>
                                    <span>Doe seu tempo e talento</span>
                                </div>
                            </button>

                            <button
                                type="button"
                                className="card-participar"
                                onClick={() => navigate('/doacao')}
                            >
                                <span className="icon">🎁</span>
                                <div className="texto-card">
                                    <strong>Doador</strong>
                                    <span>Apoie com doações</span>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {tipoParticipante === 'voluntario' && (
                    <form className="formulario" onSubmit={handleCadastroVoluntario}>
                        <div className="campo">
                            <label htmlFor="nome">Nome completo</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite seu nome completo"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                type="text"
                                id="cidade"
                                placeholder="Digite sua cidade"
                                value={cidade}
                                onChange={(event) => setCidade(event.target.value)}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="estado">Estado (Sigla)</label>
                            <input
                                type="text"
                                id="estado"
                                placeholder="Ex: SP"
                                maxLength={2}
                                value={estado}
                                onChange={(event) => setEstado(event.target.value.toUpperCase())}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>
                            <div className="campo-senha">
                                <input
                                    type={mostrarSenha ? 'text' : 'password'}
                                    id="senha"
                                    placeholder="Crie sua senha"
                                    value={senha}
                                    onChange={(event) => setSenha(event.target.value)}
                                    minLength={8}
                                    required
                                />
                                <button
                                    type="button"
                                    className="botao-olho"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                                >
                                    {mostrarSenha ? (
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M3 3l18 18" />
                                            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                                            <path d="M9.9 5.2A11 11 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3.1 3.8" />
                                            <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4-.8" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="botoes">
                            <button type="submit" className="botao">
                                Cadastrar
                            </button>
                            <button type="button" className="botao-voltar" onClick={() => setTipoParticipante('')}>
                                Voltar
                            </button>
                        </div>
                    </form>
                )}

                {mensagem && (
                    <p className={erro ? 'mensagem-cadastro erro' : 'mensagem-cadastro sucesso'} role="status">
                        {mensagem}
                    </p>
                )}
            </div>
        </section>
    )
}

export default Cadastro
