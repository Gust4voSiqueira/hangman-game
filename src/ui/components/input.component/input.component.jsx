import './input.styles.css'

export function InputComponent({ letra, isExibir }) {

    return (
        <div className='inputComponent-container'>
            <p>{isExibir && letra}</p>
            <span className='letras'>_</span>
        </div>
    )
}