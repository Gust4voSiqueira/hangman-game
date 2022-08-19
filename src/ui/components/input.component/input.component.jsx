import './input.styles.css'

export function InputComponent({ letra, isExibir }) {

    return (
        <div className='inputComponent-container'>
            <p className={isExibir && "isExibir"}>{letra}</p>
            <span className='letras'>_</span>
        </div>
    )
}