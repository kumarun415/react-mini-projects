import { useState } from "react";
import Navbar from "../Section/Navbar";
function CounterCards(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1 className="bg-success">Counter</h1>
            <p className="bg-warning">{count}</p>
            <div>
                <button className="bg-primary" onClick={()=>setCount(count+1)} >Increment +</button>
                <button className="bg-danger" onClick={()=>setCount(count-1)}>Decrement -</button>
            </div>
        </div>
    );
}
export default CounterCards;

