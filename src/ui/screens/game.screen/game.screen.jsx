import './game.styles.css'

import { Header, InputComponent } from '../../components'

import palavras  from '../../../palavras'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function GameScreen() {
    const [ indice, ] = useState(Math.floor(Math.random() * palavras.length))
    const [ indicePalavra, ] = useState(Math.floor(Math.random() * palavras[indice].palavras.length))
    const [ erros, setErros ] = useState("")
    const [ letraInput, setLetraInput ] = useState("")
    const palavra = palavras[indice].palavras[indicePalavra].split("")
    
    function verificaLetra(letraParam) {
        if(letraInput.length < 1)
            setLetraInput(letraParam)
        else {
            setLetraInput("")
        }
        
        console.log(!erros.split("").find(letra => letra.toLowerCase() !== letraInput.toLowerCase()));
        if(!erros.split("").find(letra => letra.toLowerCase() !== letraInput.toLowerCase()) && !palavra.find(letra => letra.toLowerCase() === letraInput.toLowerCase())) {
            
            setErros(erros + letraInput)
        }
    }

    return (
        <>
            <Header />

            <div className="game-container">
                <h1>imagem</h1>
                <div className="palavra-container">
                    <h1 className='dica'>{palavras[indice].dica}</h1>

                    {erros.length > 0 && <span>{erros.split("").map(letra => <li>&nbsp;{letra} -</li>)}</span>}

                    <label htmlFor="letra">
                        Letra: 
                        <input type="text" value={letraInput} name='letra' className='letra-input' onChange={(e) => verificaLetra(e.target.value)} />
                    </label>

                    <span>{palavra.map(letra => <InputComponent />)}</span>
                </div>
            </div>
        </>
    )
}