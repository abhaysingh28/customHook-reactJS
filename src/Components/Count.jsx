import React, { useState } from "react";


function Count(initialValue = 0) {
    const [Counter, setCounter] = useState(initialValue);
    function increment() {
        setCounter(Counter + 1);
    }
    function decrement() {
        setCounter(Counter - 1);
    }
    return [Counter, increment, decrement];
}


export default Count;
