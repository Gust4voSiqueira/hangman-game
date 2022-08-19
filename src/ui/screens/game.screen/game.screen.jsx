import './game.styles.css'

import { Header, InputComponent, ResultComponent } from '../../components'

import palavras  from '../../../palavras'
import { useState } from 'react';

import forcaImage from  '../../../Assets/images/forca.gif'
import { useNavigate } from 'react-router-dom';

export function GameScreen() {
    const [ indice, ] = useState(Math.floor(Math.random() * palavras.length))
    const [ indicePalavra, ] = useState(Math.floor(Math.random() * palavras[indice].palavras.length))
    const [ letraInput, setLetraInput ] = useState("")
    const [ erros, setErros ] = useState("")
    const [ acertos, setAcerto ] = useState("")
    const palavra = palavras[indice].palavras[indicePalavra]
    const navigate = useNavigate()
    
    function verificaPalavra(letraParam) {
        if(letraInput.length < 1) {
            setLetraInput(letraParam)
           
            if(palavra.toLowerCase().indexOf(letraParam.toLowerCase()) < 0 && erros.toLowerCase().indexOf(letraParam.toLowerCase()) < 0) {
                setErros(erros + letraParam)
            } else {
                const repeticaoLetraNaPalavra = palavra.split("").filter(letra => letra.toLowerCase() === letraParam.toLowerCase())
                var letrasAdicionar = ""

                for(var contador = 0; contador < repeticaoLetraNaPalavra.length; contador++) {
                    letrasAdicionar = letrasAdicionar.concat(letraParam)
                }

                if(!acertos.split("").some(letra => letra.toLowerCase() === letraParam.toLowerCase())) {
                    setAcerto(acertos + letrasAdicionar);
                }
                
            }
        }
        
        else 
            setLetraInput("")
    }

    function jogarNovamente() {
        navigate(0)
    }

    return (
        <>
            <Header />
            {erros.split("").length === 6 && (<ResultComponent isWin={false} jogarNovamente={jogarNovamente} palavra={palavra} />)}
            {acertos.split("").length === palavra.split("").length && (<ResultComponent isWin={true} jogarNovamente={jogarNovamente} />)}

            <div className="game-container">
                <img src={forcaImage} alt="forca" className='forca-image' />
                <div className="forca">
                    <div className={`cabeca ${erros.length <= 0 && 'doNotShow'}`}></div>
                    <div className={`tronco ${erros.length <= 1 && 'doNotShow'}`}></div>
                    <div className={`braco-esquerdo ${erros.length <= 2 && 'doNotShow'}`}></div>
                    <div className={`braco-direito ${erros.length <= 3 && 'doNotShow'}`}></div>
                    <div className={`perna-esquerda ${erros.length <= 4 && 'doNotShow'}`}></div>
                    <div className={`perna-direita ${erros.length <= 5 && 'doNotShow'}`}></div>
                </div>


                <div className="palavra-container">
                    <h1 className='dica'>{palavras[indice].dica}</h1>

                    <label htmlFor="letra">
                        Letra: 
                        <input autoComplete='off' type="text" value={letraInput} name='letra' className='letra-input' onChange={(e) => verificaPalavra(e.target.value)} />
                    </label>

                    <div className='letras-erradas-container'>
                        <h1>Letras erradas</h1>
                        <div className="letras-erradas">
                            {erros.length > 0 && erros.split("").map((letra, index) => <li key={index}>&nbsp;{letra} -</li>)}
                        </div>
                    </div>

                    <span>{palavra.split("").map((letra, index) => <InputComponent key={index} letra={letra} isExibir={acertos.toLowerCase().includes(letra.toLowerCase())} />)}</span>
                </div>
            </div>
        </>
    )
}
