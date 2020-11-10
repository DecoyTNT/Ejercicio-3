import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h2>{counter}</h2>

      <button
        className="btn btn-primary"
        onClick={() => setCounter(counter + 1)}
      >
        Count+
      </button>

    </div>
  );
}

export default App;
