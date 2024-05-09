import { useState } from "react";

export function Counter () {
    const [number, setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation();
        setNumber((number) => number+1);
        console.log(number);
    }
    return <>
    <div>{number}</div>
    <button className="counter" onClick={(e) => handleClick(e)}>Click Me</button>
    </>
}
