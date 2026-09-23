import './Login.css'

function Login() {
    return (
        <section className="pagina-simples">
            <div className="pagina-simples-container">

                <h1>Entrar</h1>

                <form className="formulario">
                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                    </div>

                    <div className="campo">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
                    </div>

                    <div className="botoes">
                        <button type="submit" className="botao">Entrar</button>
                        <button type="button" className="botao">Criar nova conta</button>
                    </div>  
                </form>

                <a href="#">Esqueci minha senha</a>
            </div>
        </section>
    )
}

export default Login
