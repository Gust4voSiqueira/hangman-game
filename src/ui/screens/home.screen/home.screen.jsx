import { Button, Header } from '../../components'
import './home.styles.css'

import { useNavigate } from 'react-router-dom'

import capa from '../../../Assets/images/capa-home.png'

export function HomeScreen() {
    const navigate = useNavigate();

    function iniciarJogo() {
        navigate("/game")
    }

    return (
        <>
            <Header />

            <div className="home-container">
                <div className="como-jogar-container">
                    <h1>Como jogar</h1>

                    <p>O jogo da forca é um jogo em que o jogador tem que acertar qual é a palavra proposta, tendo como dica o número de letras e o tema ligado à palavra. A cada letra errada, é desenhado uma parte do corpo do enforcado.</p>
                
                    <Button funcao={iniciarJogo}>Iniciar</Button>
                </div>

                <img src={capa} alt="capa" />
            </div>
        </>
    )
}