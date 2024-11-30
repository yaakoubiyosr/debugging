import React, { useState } from 'react';
import Counter from './Counter';
import Display from './Display';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Debugging Example</h1>
      <Counter count={count} setCount={setCount} />
      <Display value={count} />
    </div>
  );
}

export default App;
