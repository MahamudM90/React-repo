import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home(){

    const [count, setCount] = useState(0);

    const Increment = () => {
       return setCount(prevCount => prevCount+1);
    }

    const Decrement = () => {
        setCount(prevCount=> prevCount-1);
    }

    return(
        <div>
           
        <h5 className="text-2xl">Counter App</h5>
        <br></br>
        
        <h4 className="text-xl">{count}</h4>
        <button onClick={Increment} className="btn">Increment</button>
        <br></br>
        <br></br>
        <button onClick={Decrement} className="btn">Decrement</button>

        </div>
    )
}