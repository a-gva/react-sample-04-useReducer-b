import { useState, useReducer } from 'react'
import './App.css'

// Avoid hardcoded strings
// All CAPS = global non change variable
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

// Uses object
function reducer(state, action) {
    // ACTION: passed to dispatch function
    // STATE: current state
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}

function App() {
    // STATE = count: 0 ;  
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function incrementCount() {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    function decrementCount() {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <div className='App'>
            <div>
                <h1>useReducer</h1>
                <button onClick={decrementCount}>-</button>
                <span>{state.count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
        </div>
    )
}

export default App
