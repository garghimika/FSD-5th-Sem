import React, { useState, useEffect } from 'react';
import Imageslider from './Imageslider.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("component rendered.");
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <hr />

      <Imageslider />
    </div>
  );
};

export default App;