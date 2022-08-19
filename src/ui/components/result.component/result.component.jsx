import { Button } from '../button.component/button.component'
import './result.styles.css'

import narutoTriste from '../../../Assets/images/narutoTriste.png'
import casemiroFeliz from '../../../Assets/images/casemiroFeliz.webp'

import { useNavigate } from 'react-router-dom'

function HandleResult({ mensagem, imagem }) {
    return (
        <>
            <img src={imagem} alt={imagem} className='meme' />
            <p>{mensagem}<br/>
            Você pode jogar quantas vezes quiser. &#128540;</p>
        </>
    )
}

export function ResultComponent({ isWin, jogarNovamente }) {
    const navigate = useNavigate()

    function sairDoJogo() {
        navigate("/")
    }

    return (
        <div className="result-container">
            <div className="modal">
                {isWin 
                ? <h1>Parabéns, você venceu!</h1>
                : <h1>Poxa...<br/>Pena que você perdeu!</h1>}

                {isWin 
                ? <HandleResult mensagem={"Realmente você é muito bom."} imagem={casemiroFeliz} />
                : <HandleResult mensagem={"Mas não desista!"} imagem={narutoTriste} />}
                

                <div className="opcoes">
                    <Button funcao={jogarNovamente}>Jogar novamente</Button>
                    <Button funcao={sairDoJogo}>Sair do jogo</Button>
                </div>
            </div>
        </div>
    )
}