import React from 'react';
import useCounter from './Count.jsx';


const Counter2 = () => {
    const [Counter, increment, decrement] = useCounter(0);
  return (
    <div>
        {Counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      
    </div>
  );
}

export default Counter2;
