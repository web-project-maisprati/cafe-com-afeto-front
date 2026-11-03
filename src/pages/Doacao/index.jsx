
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tipoFormulario, setTipoFormulario] = useState(null);

  if (tipoFormulario) {
    const ehDoacao = tipoFormulario === "doacao";

    return (
      <main className="container">
        <section className={`card form-card ${ehDoacao ? "card-doacao" : "card-voluntario"}`}>
          <h1>{ehDoacao ? "Cadastrar doação" : "Inscrição para voluntário"}</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Nome completo
              <input type="text" name="nome" autoComplete="name" required />
            </label>
            <label>
              E-mail
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              WhatsApp
              <input type="tel" name="whatsapp" autoComplete="tel" required />
            </label>
            {ehDoacao && (
              <label>
                Valor da doação
                <input type="number" name="valor" min="0" step="0.01" required />
              </label>
            )}
            <button className={`btn ${ehDoacao ? "btn-doacao" : "btn-voluntario"}`} type="submit">
              Enviar
            </button>
          </form>
          <button className="back-button" type="button" onClick={() => setTipoFormulario(null)}>
            Voltar
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      {/* Cartão de doação */}
      <section className="card card-doacao">
        <div className="emoji">🎁</div>

        <h1>Quero fazer uma doação</h1>

        <p>
          Informe o que deseja doar e combine a
          coleta ou escolha um ponto de entrega.
        </p>

        <button
          className="btn btn-doacao"
          onClick={() => setTipoFormulario("doacao")}
        >
          Cadastrar doação
        </button>
      </section>

      {/* Cartão de voluntariado */}
      <section className="card card-voluntario">
        <div className="emoji">🙌</div>

        <h1>Quero ser voluntário</h1>

        <p>
          Veja ações abertas, escolha uma atividade e
          confirme sua participação.
        </p>

        <button
          className="btn btn-voluntario"
          onClick={() => setTipoFormulario("voluntario")}
        >
          Ver ações
        </button>
      </section>
    </main>
  );
}

export default App;
