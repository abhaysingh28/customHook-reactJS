import React from 'react';
import useCounter from './Count.jsx';

const Counter1 = () => {
    const [Counter,increment, decrement] = useCounter(10);
  return (
    <div>
      {Counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter1;
