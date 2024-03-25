import { useState } from "react";
import './Counter.scss';

export const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h3>{count}</h3>
            <div onClick={increment}>
                Click!
            </div>
        </>
    );
};