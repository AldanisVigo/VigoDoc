import './NumericInput.css'

const NumericInput = ({min,max,value,setValue,placeholder}) => {
    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }

    return <div className="numeric-input">
        <button onClick={decrement}>-</button>
        <input type="number" value={value} placeholder={placeholder} onChange={e=>setValue(e.target.value)} min={min} max={max} disabled></input>
        <button onClick={increment}>+</button>
    </div>
}

export default NumericInput