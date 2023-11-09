import React, {useState} from "react";
import './App.css';


function App() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Increase</button>
            <button onClick={decrement} className="btn btn-danger">Decrease</button>
        </>
    );
}

export default App;
