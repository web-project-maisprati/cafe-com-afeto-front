
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const navigate = useNavigate()
    const [mostrarSenha, setMostrarSenha] = useState(false)

    function handleEsqueciSenha(event) {
        event.preventDefault()
        toast.info('Página em desenvolvimento!')
    }

    return (
        <section className="pagina-simples">
            <div className="pagina-simples-container">
                <h1>Entrar</h1>

                <form className="formulario">
                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="senha">Senha</label>

                        <div className="campo-senha">
                            <input
                                type={mostrarSenha ? 'text' : 'password'}
                                name="senha"
                                id="senha"
                                placeholder="Digite sua senha"
                                required
                            />

                            <button
                                type="button"
                                className="botao-olho"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                aria-label={
                                    mostrarSenha
                                        ? 'Ocultar senha'
                                        : 'Mostrar senha'
                                }
                            >
                                {mostrarSenha ? (
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                ) : (
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
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
                            Entrar
                        </button>

                        <button
                            type="button"
                            className="botao"
                            onClick={() => navigate('/cadastro')}
                        >
                            Criar nova conta
                        </button>
                    </div>

                    <div className="esqueci-senha">
                        <a href="#" onClick={handleEsqueciSenha}>
                            Esqueci minha senha
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
