import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [addedBy, setAddedBy] = useState(1);

    function increment(){
        setCount(count + addedBy);
    }
    function decrement(){
        setCount(count - addedBy);
    }
    function addedValue(){
        setAddedBy(addedBy + 1);
    }
    function decreaseValue(){
        setAddedBy(addedBy - 1);
    }
    return(
        <div>
            <div>
                <h1>The click of counter value : {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div>
                <h1>The added value was : {addedBy}</h1>
                <button onClick={addedValue}>Increment</button>
                <button onClick={decreaseValue}>Decrement</button>
            </div>
        </div>
    );
}