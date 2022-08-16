import './button.styles.css'

export function Button({ children, funcao }) {
    return (
        <button className="button-container" onClick={() => funcao()}>
            {children}
        </button>
    )
}