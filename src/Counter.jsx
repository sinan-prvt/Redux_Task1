import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch({ type: 'Increment' })} >+</button>
            <button onClick={() => dispatch({ type: 'Decrement' })} >-</button>
            <button onClick={() => dispatch({ type: 'Reset' })} >Reset</button>
        </div>
    )
}

export default Counter