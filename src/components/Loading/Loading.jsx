import "./Loading.css";

function Loading({ texto = "Carregando...", global = false }) {
  return (
    <div className={`loading ${global ? "loading-global" : ""}`}>
      <span className="loading-spinner" aria-hidden="true"></span>
      <span>{texto}</span>
    </div>
  );
}

export default Loading;
