import React, { useEffect, useState } from "react";

const Jacob = () => {

    const [count, setCount] = useState(JSON.parse(localStorage.getItem("jacob") || 1))

    useEffect(() => {
        localStorage.setItem('jacob', count)
    }, [count])

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return (
        <div className="jacob-parent">
            <div className="jacob-child">
                <h1>Jacob: {count}</h1>
                 <div>
                <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
                <button type="button" className="btn btn-success" onClick={increment}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Jacob;