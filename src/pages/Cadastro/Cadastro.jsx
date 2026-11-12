import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../services/api";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const [tipoParticipante, setTipoParticipante] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const formularioValido =
    tipoParticipante !== "" &&
    nome.trim() !== "" &&
    cidade.trim() !== "" &&
    /^[A-Z]{2}$/.test(estado) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    senha.length >= 8;

  async function handleCadastro(event) {
    event.preventDefault();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const estadoValido = /^[A-Z]{2}$/;

    if (!tipoParticipante) {
      setMensagem("Selecione como deseja participar.");
      setErro(true);
      return;
    }

    if (!estadoValido.test(estado)) {
      setMensagem("O Estado deve conter exatamente 2 letras (ex: RJ).");
      setErro(true);
      return;
    }

    if (!emailValido.test(email)) {
      setMensagem("Digite um e-mail válido.");
      setErro(true);
      return;
    }

    if (senha.length < 8) {
      setMensagem("A senha deve ter pelo menos 8 caracteres.");
      setErro(true);
      return;
    }

    const dadosUsuario = {
      nomeCompleto: nome,
      email,
      senha,
      cidade,
      estado,
      tipoUsuario: "USUARIO",
      voluntario: tipoParticipante === "voluntario",
    };

    try {
      await apiRequest("/usuarios", {
        method: "POST",
        body: JSON.stringify(dadosUsuario),
      });

      setMensagem("Cadastro realizado com sucesso!");
      setErro(false);

      setTimeout(() => {
        if (tipoParticipante === "doador") {
          navigate("/doacao");
        } else {
          navigate("/login");
        }
      }, 2000);
    } catch (error) {
      setMensagem(error.message);
      setErro(true);
    }
  }

  return (
    <section className="cadastro-pagina">
      <div className="cadastro-container">
        <header className="cadastro-header">
          <h1>Crie sua conta</h1>
          <p>Faça parte do Café Com Afeto e ajude a transformar vidas.</p>
        </header>

        <form className="cadastro-formulario" onSubmit={handleCadastro}>
          <fieldset className="cadastro-selecao-participante">
            <legend>Como você deseja participar?</legend>

            <div className="cadastro-opcoes-participar">
              <button
                type="button"
                className={`cadastro-card-participar ${tipoParticipante === "doador" ? "selecionado" : ""}`}
                onClick={() => setTipoParticipante("doador")}
                aria-pressed={tipoParticipante === "doador"}
              >
                <span className="cadastro-icon" aria-hidden="true">
                  🎁
                </span>

                <span className="cadastro-texto-card">
                  <strong>Doador</strong>
                  <span>Quero contribuir com doações.</span>
                </span>
              </button>

              <button
                type="button"
                className={`cadastro-card-participar ${tipoParticipante === "voluntario" ? "selecionado" : ""}`}
                onClick={() => setTipoParticipante("voluntario")}
                aria-pressed={tipoParticipante === "voluntario"}
              >
                <span className="cadastro-icon" aria-hidden="true">
                  🤝
                </span>

                <span className="cadastro-texto-card">
                  <strong>Voluntário</strong>
                  <span>Quero ajudar com meu tempo.</span>
                </span>
              </button>
            </div>
          </fieldset>

          <div className="cadastro-campos">
            <div className="cadastro-campo">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                autoComplete="name"
                required
              />
            </div>

            <div className="cadastro-localizacao">
              <div className="cadastro-campo">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  placeholder="Sua cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                  autoComplete="address-level2"
                  required
                />
              </div>

              <div className="cadastro-campo">
                <label htmlFor="estado">Estado (UF)</label>
                <input
                  type="text"
                  id="estado"
                  placeholder="Ex: RJ"
                  maxLength={2}
                  value={estado}
                  onChange={(event) =>
                    setEstado(
                      event.target.value.toUpperCase().replace(/[^A-Z]/g, ""),
                    )
                  }
                  autoComplete="address-level1"
                  required
                />
              </div>
            </div>

            <div className="cadastro-campo">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="cadastro-campo">
              <label htmlFor="senha">Senha</label>

              <div className="cadastro-campo-senha">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="senha"
                  placeholder="Crie uma senha com pelo menos 8 caracteres"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  minLength={8}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="cadastro-botao-olho"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
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
          </div>

          <div className="cadastro-botoes">
            <button
              type="submit"
              className="cadastro-botao"
              disabled={!formularioValido}
            >
              Criar minha conta
            </button>
          </div>

          {mensagem && (
            <p
              className={`mensagem-cadastro ${erro ? "erro" : "sucesso"}`}
              role="status"
            >
              {mensagem}
            </p>
          )}

          <p className="cadastro-login">
            Já possui uma conta?{" "}
            <button type="button" onClick={() => navigate("/login")}>
              Faça login
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
