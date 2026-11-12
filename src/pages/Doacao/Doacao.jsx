import React, { useState } from "react";
import "./Doacao.css";

function Doacao() {
  const [tipo, setTipo] = useState("Unica");
  const [valor, setValor] = useState("50");
  const [outroValor, setOutroValor] = useState("");
  const [pagamento, setPagamento] = useState("Pix");
  const [mensagem, setMensagem] = useState("");

  const valores = ["20", "50", "100"];
  const pagamentos = ["Pix", "Cartão", "Boleto"];

  const valorFinal = valor === "Outro" ? outroValor : valor;

  function handleDoacao(e) {
    e.preventDefault();

    const valorNumerico = Number(valorFinal);
    if (!valorFinal || !Number.isFinite(valorNumerico) || valorNumerico <= 0) {
      setMensagem("Digite um valor válido para sua doação.");
      return;
    }

    setMensagem(
      `Doação selecionada! R$ ${valorNumerico
        .toFixed(2)
        .replace(".", ",")} ${
        tipo === "Mensal" ? "mensais" : "em doação única"
      }, via ${pagamento}.`
    );
  }

  return (
    <section className="donation-section">
      <div className="donation-card">
        <div className="donation-header">
          <h2>Faça sua doação</h2>
          <p>Cada contribuição ajuda a manter nossas ações.</p>
        </div>

        <form onSubmit={handleDoacao}>
          {/* Tipo de doação */}
          <div className="donation-options donation-type">
            {["Unica", "Mensal"].map((item) => (
              <button
                type="button"
                key={item}
                className={tipo === item ? "selected" : ""}
                onClick={() => {
                  setTipo(item);
                  setMensagem("");
                }}
              >
                {item === "Unica" ? "Única" : "Mensal"}
              </button>
            ))}
          </div>

          {/* Valores */}
          <div className="donation-group">
            <label>Valor</label>

            <div className="donation-options donation-values">
              {valores.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={valor === item ? "selected" : ""}
                  onClick={() => {
                    setValor(item);
                    setMensagem("");
                  }}
                >
                  R$ {item}
                </button>
              ))}

              <button
                type="button"
                className={valor === "Outro" ? "selected" : ""}
                onClick={() => {
                  setValor("Outro");
                  setMensagem("");
                }}
              >
                Outro
              </button>
            </div>

            {valor === "Outro" && (
              <div className="custom-value">
                <label htmlFor="outroValor">Digite o valor da doação</label>

                <input
                  id="outroValor"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="Ex: 150,00"
                  value={outroValor}
                  onChange={(e) => setOutroValor(e.target.value)}
                />
              </div>
            )}
          </div>

          {/* Forma de pagamento */}
          <div className="donation-group">
            <label>Forma de pagamento</label>

            <div className="donation-options donation-payment">
              {pagamentos.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={pagamento === item ? "selected" : ""}
                  onClick={() => {
                    setPagamento(item);
                    setMensagem("");
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mensagem */}
          {mensagem && (
            <div
              className={`donation-message ${
                mensagem.startsWith("Doação") ? "success" : "error"
              }`}
              role="status"
            >
              {mensagem}
            </div>
          )}

          {/* Botão Doar agora */}
          <button type="submit" className="donation-submit">
            Doar agora
          </button>
        </form>
      </div>
    </section>
  );
}

export default Doacao
