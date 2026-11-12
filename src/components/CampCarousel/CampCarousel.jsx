import { useEffect, useState } from "react"
import './CampCarousel.css'
import CampaignCard from "../CampaignCard/CampaignCard"
import { useCampaigns } from "../../hooks/useCampaigns"

function calcularCardsVisiveis(largura) {
    if (largura < 640) return 1
    if (largura < 1024) return 2
    return 3
}

function Carousel() {
    const { campanhas, carregando } = useCampaigns()

    const [atual, setAtual] = useState(0)
    const [cardsVisiveis, setCardsVisiveis] = useState(
        () => calcularCardsVisiveis(window.innerWidth)
    )

    function anterior() {
        setAtual(
            atual === 0
                ? campanhas.length - 1
                : atual - 1
        )
    }

    function proximo() {
        setAtual(
            (atual + 1) % campanhas.length
        )
    }

    useEffect(() => {
        if (campanhas.length === 0) return

        const intervalo = setInterval(() => {
            proximo()
        }, 10000)

        return () => clearInterval(intervalo)
    }, [atual, campanhas.length])

    useEffect(() => {
        function aoRedimensionar() {
            setCardsVisiveis(calcularCardsVisiveis(window.innerWidth))
        }

        window.addEventListener("resize", aoRedimensionar)
        return () => window.removeEventListener("resize", aoRedimensionar)
    }, [])

    if (carregando || campanhas.length === 0) {
        return null
    }

    const offsets = Array.from({ length: cardsVisiveis }, (_, i) => i)

    return (
        <section className="carousel">

            <div className="carousel-container">

                <div className="carousel-header">
                    <h2>NOSSAS AÇÕES</h2>
                    <p>Conheça as ações que estamos organizando para ajudar quem mais precisa.</p>
                </div>

                <div className="carousel-slider">
                    <button
                        className="anterior"
                        onClick={anterior}
                        aria-label="Campanha anterior"
                    >
                        <span aria-hidden="true">❮</span>
                    </button>

                    <div className="carousel-imagens">
                        {offsets.map((offset) => {
                            const index = (atual + offset) % campanhas.length
                            const campanha = campanhas[index]

                            return (
                                <CampaignCard key={campanha.id} campanha={campanha} />
                            )
                        })}
                    </div>

                    <button
                        className="proximo"
                        onClick={proximo}
                        aria-label="Próxima campanha"
                    >
                        <span aria-hidden="true">❯</span>
                    </button>
                </div>

            </div>

        </section>
    )
}

export default Carousel