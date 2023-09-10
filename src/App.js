import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>inCrease</button>
        <button onClick={handleDecrease}>deCrease</button>
      </div>
    </div>
  );
}

export default App;
