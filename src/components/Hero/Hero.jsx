import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Sua doação transforma vidas.</h1>

          <p>
            Um gesto de solidariedade pode levar alimento, esperança e dignidade
            a quem mais precisa.
          </p>
          <div className="hero-escolha">
            <Link to="/doacao" className="doar">
              Fazer Doação
            </Link>
            <button className="volunt">Ser Voluntario</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Ação solidária" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
