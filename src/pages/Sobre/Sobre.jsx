import './Sobre.css'
import sobre1 from '../../assets/images/sobre1.PNG'
import sobre2 from '../../assets/images/sobre2.PNG'
import { FaBullseye, FaClipboardList, FaHeart, FaHandsHelping } from 'react-icons/fa'

function Sobre() {
    return (
        <main>

            <section className="sobre-nos">
                <div className="sobre-nos-container">
                    <div className='sobre-nos-text'>
                        <strong>Sobre nós</strong>
                        <h1>Café com Afeto – Amor e Acolhimento</h1>
                        <p>
                            Um espaço de acolhimento, cuidado e solidariedade,
                            que surgiu da união de voluntários dispostos em fazer
                            o bem a pessoas em situação de vulnerabilidade.
                        </p>
                    </div>
                    <div className="sobre-nos-image">
                        <img
                            src={sobre1}
                            alt="Voluntários do projeto Café com Afeto"
                        />
                    </div>
                </div>
            </section>

            <section className="nossa-historia">
                <div className='nossa-historia-container'>
                    <div className="nossa-historia-image">
                    <img
                        src={sobre2}
                        alt="Voluntários"
                    />
                    </div>
                    <div className="nossa-historia-text">
                        <strong>Nossa História</strong>
                        <h1>Sobre o projeto</h1>

                        <p>
                            O Café com Afeto é um espaço de acolhimento, cuidado e solidariedade, que surgiu da união de voluntários dispostos em fazer o bem a pessoas em situação de vulnerabilidade.
                        </p>
                        <p>
                            Sabemos que, por trás de cada rosto nas ruas, há histórias de dor, luta e superação. São pessoas que, por diferentes razões, encontraram-se em situações de extrema vulnerabilidade, muitas vezes invisíveis aos olhos da sociedade.
                        </p>
                        <p>
                            Mas, para nós, cada pessoa importa. Cada vida tem valor.
                        </p>
                        <p>
                            E muito mais do que alimentar corpos, queremos alimentar esperanças. Mais do que doar alimentos, queremos doar dignidade, escuta e carinho.
                        </p>
                    </div>
                </div>
            </section>
            <section className='missao-objetivo'>
                <div className='missao-objetivo-container'>

                    <div className='missao-objetivo-text'>
                        <strong>Nosso propósito</strong>
                        <h2>O que nos move</h2>
                    </div>

                    <div className='missao-objetivo-cards'>
                        <div className='missao'>
                            <div className='missao-text'>
                                <FaBullseye/>
                                <strong>Nossa missão</strong>
                                <p>Promover acolhimento, cuidado e solidariedade às pessoas em situação de vulnerabilidade, oferecendo não apenas alimento, mas também dignidade, escuta e carinho.</p>
                            </div>
                        </div>

                        <div className='objetivo'>
                            <div className='objetivo-text'>
                                <FaClipboardList/>
                                <strong>Nosso objetivo</strong>
                                <p>Unir voluntários e a comunidade para realizar ações de solidariedade, contribuindo para melhorar a qualidade de vida de pessoas em situação de vulnerabilidade.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="nossos-valores">
                <div className="nossos-valores-container">

                    <div className="nossos-valores-text">
                        <strong>Nossos valores</strong>

                        <h2>
                            O que nos guia
                        </h2>

                        <p>
                            Nosso trabalho é guiado por valores que colocam
                            as pessoas em primeiro lugar. Acreditamos que o
                            amor, a empatia e a solidariedade podem transformar
                            vidas.
                        </p>
                    </div>

                    <div className="nossos-valores-cards">

                        <div className="valor-card">
                            <FaHeart className="valor-icon" />

                            <h3>Amor</h3>

                            <p>
                                Acreditamos que cada gesto de amor pode levar
                                esperança e transformar a vida de alguém.
                            </p>
                        </div>

                        <div className="valor-card">
                            <FaHandsHelping className="valor-icon" />

                            <h3>Solidariedade</h3>

                            <p>
                                Unimos pessoas dispostas a ajudar e contribuir
                                para uma sociedade mais acolhedora.
                            </p>
                        </div>

                        <div className="valor-card">
                            <FaHeart className="valor-icon" />

                            <h3>Empatia</h3>

                            <p>
                                Procuramos compreender a realidade de cada
                                pessoa, tratando todos com respeito e dignidade.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    )
}

export default Sobre